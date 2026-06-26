#!/usr/bin/env python3
"""
Sarvam 30B vs Qwen3-30B-A3B Test Runner
========================================
Runs test prompts against:
  - Sarvam 30B (local llama-server at localhost:8080)
  - Qwen3-30B-A3B (OpenRouter API)

Saves results to timestamped JSON + readable markdown report.

Usage:
  pip install aiohttp --break-system-packages
  export OPENROUTER_API_KEY="sk-or-..."
  python sarvam_vs_qwen_runner.py

Optional flags:
  --sarvam-only      Skip Qwen, only run Sarvam
  --qwen-only        Skip Sarvam, only run Qwen
  --test N           Run only test N (1-20)
  --dry-run          Print prompts without calling APIs
"""

import asyncio
import aiohttp
import json
import os
import sys
import time
import argparse
from datetime import datetime
from pathlib import Path


# ---------------------------------------------------------------------------
# Configuration
# ---------------------------------------------------------------------------

SARVAM_BASE = "http://localhost:8080/v1/chat/completions"
OPENROUTER_BASE = "https://openrouter.ai/api/v1/chat/completions"
OPENROUTER_MODEL = "qwen/qwen3-30b-a3b-instruct-2507"

PRESETS = {
    "deterministic": {
        "temperature": 0,
        "repeat_penalty": 1.0,
    },
    "creative": {
        "temperature": 0.7,
        "top_p": 0.9,
        "repeat_penalty": 1.1,
    },
    "synthesis": {
        "temperature": 0.3,
        "top_p": 0.9,
        "repeat_penalty": 1.05,
    },
}

# OpenRouter uses OpenAI-style params (frequency_penalty, not repeat_penalty)
PRESETS_OPENROUTER = {
    "deterministic": {
        "temperature": 0,
    },
    "creative": {
        "temperature": 0.7,
        "top_p": 0.9,
        "frequency_penalty": 0.1,
    },
    "synthesis": {
        "temperature": 0.3,
        "top_p": 0.9,
        "frequency_penalty": 0.05,
    },
}


# ---------------------------------------------------------------------------
# Test Definitions
# ---------------------------------------------------------------------------

LANGUAGES = ["Hindi", "Bengali", "Gujarati", "Kannada", "Malayalam", "Marathi", "Odia", "Punjabi", "Tamil", "Telugu"]

TECH_PARAGRAPH = (
    "The API gateway routes incoming requests through a rate limiter "
    "before forwarding them to the appropriate microservice. If the circuit "
    "breaker is open, it returns a 503 Service Unavailable response. All request "
    "metadata is logged to a distributed tracing backend for observability."
)

TESTS = [
    # ---- A. Multilingual / Indic Language ----
    {
        "id": 1,
        "category": "A. Multilingual",
        "name": "Technical translation",
        "preset": "creative",
        "subtests": [
            {
                "sub_id": lang.lower()[:3],
                "sub_name": lang,
                "prompt": (
                    f"Translate the following paragraph into {lang}, using the native "
                    f"{lang} script. Preserve technical terminology in English where no "
                    f"standard native equivalent exists. Output only the {lang} translation, "
                    f"nothing else.\n\n"
                    f"Text: \"{TECH_PARAGRAPH}\""
                ),
            }
            for lang in LANGUAGES
        ],
    },
    {
        "id": 2,
        "category": "A. Multilingual",
        "name": "Product copy generation",
        "preset": "creative",
        "subtests": [
            {
                "sub_id": lang.lower()[:3],
                "sub_name": lang,
                "prompt": (
                    f"Write a short product description (under 100 words) for a solar-powered "
                    f"water pump targeting rural Indian farmers. Write it in {lang} using native "
                    f"script. The description should feel locally natural for {lang}-speaking "
                    f"regions — not a translation of an English draft. Use culturally appropriate "
                    f"framing (local crops, seasons, pricing context). Output only the {lang} text."
                ),
            }
            for lang in LANGUAGES
        ],
    },
    {
        "id": 3,
        "category": "A. Multilingual",
        "name": "Code-mixed generation (Hinglish/Tanglish/Kanglish)",
        "preset": "creative",
        "prompt": (
            "Write three separate Slack messages explaining to a colleague that the "
            "deployment pipeline is broken because of a misconfigured environment variable:\n"
            "1. In Hinglish (Hindi-English mix, Roman script)\n"
            "2. In Tanglish (Tamil-English mix, Roman script)\n"
            "3. In Kanglish (Kannada-English mix, Roman script)\n\n"
            "Each message should sound like how an Indian developer actually texts at work — "
            "natural code-switching, not forced."
        ),
    },
    {
        "id": 4,
        "category": "A. Multilingual",
        "name": "Cross-script comprehension (Malayalam → English/Tamil/Kannada)",
        "preset": "creative",
        "prompt": (
            "Here is a paragraph in Malayalam: \"കേരളത്തിലെ ഏറ്റവും വലിയ സോഫ്റ്റ്‌വെയർ "
            "പാർക്ക് ടെക്നോപാർക്ക് ആണ്. ഇത് തിരുവനന്തപുരത്ത് സ്ഥിതി ചെയ്യുന്നു. "
            "ഇവിടെ 400-ലധികം കമ്പനികൾ പ്രവർത്തിക്കുന്നു. ഇൻഫോസിസ്, ടി.സി.എസ്, "
            "യു.എസ്.ടി ഗ്ലോബൽ തുടങ്ങിയ പ്രമുഖ കമ്പനികൾ ഇവിടെ ഓഫീസുകൾ നടത്തുന്നു.\"\n\n"
            "1. Summarize this in English.\n"
            "2. Translate it to Tamil.\n"
            "3. Answer in Kannada: ಈ ಪಾರ್ಕ್ ಎಲ್ಲಿದೆ? (Where is this park?)"
        ),
    },

    # ---- B. Reasoning & Logic ----
    {
        "id": 5,
        "category": "B. Reasoning",
        "name": "Math word problem (trains)",
        "preset": "deterministic",
        "prompt": (
            "A train leaves Bangalore at 6:00 AM traveling at 80 km/h toward Chennai "
            "(350 km away). Another train leaves Chennai at 7:00 AM traveling at 100 km/h "
            "toward Bangalore. At what time do they meet, and how far from Bangalore?"
        ),
    },
    {
        "id": 6,
        "category": "B. Reasoning",
        "name": "Logic puzzle (mislabeled boxes)",
        "preset": "deterministic",
        "prompt": (
            "I have three boxes. Box A is labeled \"Apples\", Box B is labeled \"Oranges\", "
            "Box C is labeled \"Both\". All labels are wrong. You can pick one fruit from "
            "one box. Which box do you pick from, and how do you deduce the correct labels?"
        ),
    },
    {
        "id": 7,
        "category": "B. Reasoning",
        "name": "Graph theory (topological sort)",
        "preset": "deterministic",
        "prompt": (
            "Given a DAG with edges: A→B, A→C, B→D, C→D, C→E, D→F, E→F — "
            "list at least three valid topological orderings."
        ),
    },

    # ---- C. Code Generation ----
    {
        "id": 8,
        "category": "C. Code",
        "name": "Log parser (Python + Rust)",
        "preset": "deterministic",
        "prompt": (
            "Part A (Python): Write a Python function that takes a list of log line strings "
            "in the format '[TIMESTAMP] [LEVEL] message' and returns a dictionary grouping "
            "messages by level. Handle malformed lines by collecting them under a 'MALFORMED' key. "
            "Include a if __name__ == '__main__' block with test data that prints the result.\n\n"
            "Part B (Rust): Write the equivalent in Rust: a function that takes Vec<String> "
            "and returns HashMap<String, Vec<String>>. Include a main() function with test data."
        ),
    },
    {
        "id": 9,
        "category": "C. Code",
        "name": "Async HTTP fetcher (Python)",
        "preset": "deterministic",
        "prompt": (
            "Write a Python async function that fetches 10 URLs concurrently using aiohttp, "
            "with a semaphore limiting concurrency to 3, and returns a dict mapping URL to "
            "HTTP status code. Include proper error handling for timeouts and connection errors. "
            "Include a runnable __main__ block that tests against these URLs:\n"
            "- https://httpbin.org/status/200\n"
            "- https://httpbin.org/status/404\n"
            "- https://httpbin.org/delay/5\n"
            "- https://httpbin.org/get\n"
            "- https://httpbin.org/headers\n"
            "- https://httpbin.org/ip\n"
            "- https://httpbin.org/user-agent\n"
            "- https://httpbin.org/status/500\n"
            "- https://httpbin.org/status/301\n"
            "- https://httpbin.org/robots.txt"
        ),
    },
    {
        "id": 10,
        "category": "C. Code",
        "name": "Cross-language struct conversion",
        "preset": "deterministic",
        "prompt": (
            "Convert this Python dataclass to a Rust struct with serde Serialize/Deserialize "
            "derives, and write the equivalent constructor with validation:\n\n"
            "```python\n"
            "@dataclass\n"
            "class MemoryNode:\n"
            "    id: str\n"
            "    label: str\n"
            "    weight: float  # must be 0.0-1.0\n"
            "    edges: list[str]\n"
            "    created_at: datetime\n"
            "```\n\n"
            "The Rust version should return a Result type if weight is out of range."
        ),
    },

    # ---- D. Instruction Following ----
    {
        "id": 11,
        "category": "D. Instruction Following",
        "name": "Strict table format",
        "preset": "deterministic",
        "prompt": (
            "List exactly 5 differences between gRPC and REST. Format as a markdown table "
            "with columns: Aspect, gRPC, REST. Do not add any preamble or conclusion — just the table."
        ),
    },
    {
        "id": 12,
        "category": "D. Instruction Following",
        "name": "JSON-only output",
        "preset": "deterministic",
        "prompt": (
            "Respond with valid JSON only. No markdown fencing, no explanation, no preamble. "
            "Generate a JSON Schema for a blog post with fields: title (string, required), "
            "slug (string, derived from title, required), tags (array of strings, max 5 items), "
            "published (boolean, default false), word_count (integer, minimum 0)."
        ),
    },
    {
        "id": 13,
        "category": "D. Instruction Following",
        "name": "Conventional Commits format",
        "preset": "deterministic",
        "prompt": (
            "Write a commit message for this change: refactored the authentication middleware "
            "to use JWT validation instead of session cookies, updated all route handlers to "
            "pass the JWT token, added unit tests for token expiration and refresh flows. "
            "Follow Conventional Commits format strictly."
        ),
    },

    # ---- E. Hallucination Stress Tests ----
    {
        "id": 14,
        "category": "E. Hallucination",
        "name": "Self-knowledge probe",
        "preset": "deterministic",
        "prompt": (
            "What is the Sarvam 30B model's exact layer configuration? How many transformer "
            "layers, how many experts per layer, what is the expert routing mechanism, and "
            "what is the training data composition by language?"
        ),
    },
    {
        "id": 15,
        "category": "E. Hallucination",
        "name": "Temporal knowledge boundary",
        "preset": "deterministic",
        "prompt": "Who won the 2025 Kerala State Film Award for Best Actor?",
    },
    {
        "id": 16,
        "category": "E. Hallucination",
        "name": "Fabricated reference",
        "preset": "deterministic",
        "prompt": "Explain the --tensor-split flag in llama.cpp version 4.2.0.",
    },

    # ---- F. Long Context / Synthesis ----
    {
        "id": 17,
        "category": "F. Long Context",
        "name": "Spec analysis (HTTP/2 stream states)",
        "preset": "synthesis",
        "prompt": (
            "The following is from RFC 7540 Section 5 (HTTP/2 Streams and Multiplexing).\n\n"
            "A stream is an independent, bidirectional sequence of frames exchanged between "
            "the client and server within an HTTP/2 connection. Streams have several important "
            "characteristics: A single HTTP/2 connection can contain multiple concurrently open "
            "streams, with either endpoint interleaving frames from multiple streams. Streams "
            "can be established and used unilaterally or shared by either the client or server. "
            "Streams can be closed by either endpoint. The order in which frames are sent on a "
            "stream is significant. Recipients process frames in the order they are received.\n\n"
            "Stream States:\n"
            "idle: All streams start in the idle state. Sending or receiving a HEADERS frame "
            "causes the stream to become open. Receiving a PUSH_PROMISE frame on another stream "
            "reserves the idle stream for later use, transitioning it to reserved (remote).\n\n"
            "reserved (local): A stream in this state has been promised by sending a PUSH_PROMISE. "
            "A HEADERS frame transitions it to half-closed (remote). Either endpoint can send a "
            "RST_STREAM to transition to closed.\n\n"
            "reserved (remote): The remote peer has reserved this stream. Receiving a HEADERS "
            "transitions to half-closed (local). Either endpoint can send RST_STREAM to close.\n\n"
            "open: Both peers can send frames. Either peer can send a frame with END_STREAM flag, "
            "transitioning to half-closed. Either peer can send RST_STREAM to transition to closed.\n\n"
            "half-closed (local): Cannot send frames other than WINDOW_UPDATE, PRIORITY, and "
            "RST_STREAM. Receiving END_STREAM or RST_STREAM transitions to closed.\n\n"
            "half-closed (remote): The remote peer cannot send frames other than WINDOW_UPDATE, "
            "PRIORITY, and RST_STREAM. If an endpoint receives additional frames (other than those "
            "allowed) it MUST respond with a STREAM_CLOSED connection error. Sending END_STREAM "
            "or RST_STREAM transitions to closed.\n\n"
            "closed: Terminal state. An endpoint MUST NOT send frames other than PRIORITY on a "
            "closed stream. An endpoint that receives any frame other than PRIORITY after receiving "
            "RST_STREAM MUST treat that as a stream error of type STREAM_CLOSED. An endpoint that "
            "receives any frames after receiving a frame with END_STREAM set MUST treat that as a "
            "connection error of type STREAM_CLOSED unless the frame is permitted.\n\n"
            "Based on this specification text:\n"
            "1. List all stream state transitions described.\n"
            "2. Identify any transition that lacks an explicit error or failure path.\n"
            "3. Are there any ambiguities in the state machine that could lead to implementation divergence?"
        ),
    },
    {
        "id": 18,
        "category": "F. Long Context",
        "name": "Contradictory source synthesis",
        "preset": "synthesis",
        "prompt": (
            "Source A: \"India's software exports grew 15% year-over-year in FY2025, driven "
            "by strong demand in AI and cloud services. NASSCOM reported that the IT sector "
            "added 250,000 new jobs.\"\n\n"
            "Source B: \"The Indian IT sector faced headwinds in FY2025 with export growth "
            "slowing to 3.2%. Major firms including TCS and Infosys announced hiring freezes, "
            "and the sector saw a net reduction of 50,000 positions according to industry analysts.\"\n\n"
            "Where do these accounts disagree? Which claims are verifiable, and what would "
            "you need to resolve the contradictions?"
        ),
    },

    # ---- G. Cultural & Domain Knowledge ----
    {
        "id": 19,
        "category": "G. Cultural",
        "name": "Kerala land records terminology",
        "preset": "creative",
        "prompt": (
            "Explain the difference between kanakkiṇakku and paṭṭayam in Kerala land revenue "
            "records, in English. Also explain what a thandaper number is and how it relates "
            "to property identification in Kerala."
        ),
    },
    {
        "id": 20,
        "category": "G. Cultural",
        "name": "RTI application (BBMP)",
        "preset": "creative",
        "prompt": (
            "Draft a formal RTI (Right to Information Act, 2005) application to the BBMP "
            "(Bruhat Bengaluru Mahanagara Palike) requesting:\n"
            "1. Status of road repair work on 80 Feet Road, Koramangala, Bangalore\n"
            "2. Total budget allocated and amount spent\n"
            "3. Name of the contractor and contract duration\n\n"
            "Use the proper RTI format including the required fee mention (₹10), relevant "
            "section references, and appropriate salutation."
        ),
    },
]


# ---------------------------------------------------------------------------
# API Callers
# ---------------------------------------------------------------------------

def strip_thinking(text: str) -> tuple[str, str]:
    """Strip <think>...</think> from response. Returns (visible_content, thinking_content)."""
    import re
    think_match = re.search(r"<think>(.*?)</think>", text, re.DOTALL)
    thinking = think_match.group(1).strip() if think_match else ""
    visible = re.sub(r"<think>.*?</think>", "", text, flags=re.DOTALL).strip()
    # Also handle unclosed <think> (model hit token limit mid-thought)
    if "<think>" in visible and "</think>" not in visible:
        thinking = visible.split("<think>", 1)[1]
        visible = visible.split("<think>", 1)[0].strip()
    return visible, thinking


async def call_sarvam(session: aiohttp.ClientSession, prompt: str, preset: str) -> dict:
    """Call local Sarvam llama-server.
    
    Expects server started with --chat-template chatml to disable thinking.
    If thinking leaks through, strip_thinking() catches it as a safety net.
    """
    params = PRESETS[preset].copy()
    body = {
        "model": "sarvam-30b",
        "messages": [{"role": "user", "content": prompt}],
        "max_tokens": 4096,
        "stream": False,
        **params,
    }
    t0 = time.perf_counter()
    try:
        async with session.post(SARVAM_BASE, json=body,
                                timeout=aiohttp.ClientTimeout(total=None)) as resp:
            data = await resp.json()
            elapsed = time.perf_counter() - t0
            raw_content = data.get("choices", [{}])[0].get("message", {}).get("content", "")
            visible, thinking = strip_thinking(raw_content)
            usage = data.get("usage", {})
            finish_reason = data.get("choices", [{}])[0].get("finish_reason", "")
            return {
                "model": "sarvam-30b-q4km",
                "content": visible,
                "thinking": thinking,
                "raw_content": raw_content,
                "finish_reason": finish_reason,
                "elapsed_s": round(elapsed, 2),
                "prompt_tokens": usage.get("prompt_tokens", 0),
                "completion_tokens": usage.get("completion_tokens", 0),
                "tokens_per_sec": round(
                    usage.get("completion_tokens", 0) / elapsed, 1
                ) if elapsed > 0 else 0,
                "error": None,
            }
    except Exception as e:
        return {
            "model": "sarvam-30b-q4km",
            "content": "",
            "thinking": "",
            "raw_content": "",
            "finish_reason": "",
            "elapsed_s": round(time.perf_counter() - t0, 2),
            "prompt_tokens": 0,
            "completion_tokens": 0,
            "tokens_per_sec": 0,
            "error": str(e),
        }


async def call_qwen(session: aiohttp.ClientSession, prompt: str, preset: str,
                    api_key: str) -> dict:
    """Call Qwen3-30B-A3B via OpenRouter."""
    params = PRESETS_OPENROUTER[preset].copy()
    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json",
        "HTTP-Referer": "https://nryn.dev",
        "X-Title": "Sarvam vs Qwen Benchmark",
    }
    body = {
        "model": OPENROUTER_MODEL,
        "messages": [{"role": "user", "content": prompt}],
        "max_tokens": 4096,
        "stream": False,
        **params,
    }
    t0 = time.perf_counter()
    try:
        async with session.post(OPENROUTER_BASE, json=body, headers=headers,
                                timeout=aiohttp.ClientTimeout(total=None)) as resp:
            data = await resp.json()
            elapsed = time.perf_counter() - t0

            if "error" in data:
                return {
                    "model": OPENROUTER_MODEL,
                    "content": "",
                    "thinking": "",
                    "finish_reason": "",
                    "elapsed_s": round(elapsed, 2),
                    "prompt_tokens": 0,
                    "completion_tokens": 0,
                    "tokens_per_sec": 0,
                    "error": data["error"].get("message", str(data["error"])),
                }

            raw_content = data.get("choices", [{}])[0].get("message", {}).get("content", "")
            visible, thinking = strip_thinking(raw_content)
            usage = data.get("usage", {})
            finish_reason = data.get("choices", [{}])[0].get("finish_reason", "")
            return {
                "model": OPENROUTER_MODEL,
                "content": visible,
                "thinking": thinking,
                "finish_reason": finish_reason,
                "elapsed_s": round(elapsed, 2),
                "prompt_tokens": usage.get("prompt_tokens", 0),
                "completion_tokens": usage.get("completion_tokens", 0),
                "tokens_per_sec": round(
                    usage.get("completion_tokens", 0) / elapsed, 1
                ) if elapsed > 0 else 0,
                "error": None,
            }
    except Exception as e:
        return {
            "model": OPENROUTER_MODEL,
            "content": "",
            "thinking": "",
            "finish_reason": "",
            "elapsed_s": round(time.perf_counter() - t0, 2),
            "prompt_tokens": 0,
            "completion_tokens": 0,
            "tokens_per_sec": 0,
            "error": str(e),
        }


# ---------------------------------------------------------------------------
# Incremental File Writers
# ---------------------------------------------------------------------------

def preview(content: str, max_lines: int = 4, max_width: int = 90) -> str:
    """Return a short preview of response content for console output."""
    if not content:
        return "(empty)"
    lines = content.strip().splitlines()
    preview_lines = []
    for line in lines[:max_lines]:
        truncated = line[:max_width] + ("..." if len(line) > max_width else "")
        preview_lines.append(f"          │ {truncated}")
    if len(lines) > max_lines:
        preview_lines.append(f"          │ ... ({len(lines) - max_lines} more lines)")
    return "\n".join(preview_lines)


def save_json_incremental(results: list, json_path: str):
    """Overwrite JSON file with current results after each test."""
    with open(json_path, "w", encoding="utf-8") as f:
        json.dump(results, f, indent=2, ensure_ascii=False)


def save_markdown_incremental(results: list, md_path: str):
    """Rewrite full markdown report after each test."""

    def _write_model_section(f, model_name: str, data):
        """Write results for one model — handles both single dict and list of sub-results."""
        f.write(f"### {model_name}\n\n")
        if isinstance(data, list):
            # Subtests
            for sub in data:
                label = sub.get("label", "?")
                if sub.get("error"):
                    f.write(f"**[{label}] ERROR:** {sub['error']}\n\n")
                else:
                    f.write(f"**[{label}]** *{sub['completion_tokens']} tok | {sub['elapsed_s']}s | {sub['tokens_per_sec']} t/s*\n\n")
                    f.write(f"````\n{sub['content']}\n````\n\n")
        else:
            # Single result
            if data.get("error"):
                f.write(f"**ERROR:** {data['error']}\n\n")
            else:
                f.write(f"*{data.get('completion_tokens',0)} tokens | {data.get('elapsed_s',0)}s | {data.get('tokens_per_sec',0)} t/s*\n\n")
                f.write(f"````\n{data.get('content','')}\n````\n\n")

    def _summary_stats(data):
        """Get aggregate token/speed stats from single or subtest results."""
        if isinstance(data, list):
            tok = sum(s.get("completion_tokens", 0) for s in data if not s.get("error"))
            times = [s["elapsed_s"] for s in data if not s.get("error")]
            spd = round(tok / sum(times), 1) if times and sum(times) > 0 else "-"
            return str(tok), str(spd)
        else:
            if data.get("error"):
                return "ERR", "ERR"
            return str(data.get("completion_tokens", "-")), str(data.get("tokens_per_sec", "-"))

    with open(md_path, "w", encoding="utf-8") as f:
        f.write(f"# Sarvam 30B (Q4_K_M) vs Qwen3-30B-A3B Benchmark Report\n\n")
        f.write(f"**Date:** {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}  \n")
        f.write(f"**Tests completed:** {len(results)} / 20\n\n")

        # Summary table
        f.write(f"| # | Test | Sarvam tokens | Sarvam t/s | Qwen tokens | Qwen t/s |\n")
        f.write(f"|---|------|---------------|------------|-------------|----------|\n")
        for r in results:
            s_tok, s_spd = _summary_stats(r["sarvam"]) if "sarvam" in r else ("-", "-")
            q_tok, q_spd = _summary_stats(r["qwen"]) if "qwen" in r else ("-", "-")
            f.write(f"| {r['test_id']} | {r['name'][:40]} | {s_tok} | {s_spd} | {q_tok} | {q_spd} |\n")

        f.write(f"\n---\n\n")

        # Full responses
        for r in results:
            f.write(f"## Test {r['test_id']}: {r['name']}\n\n")
            f.write(f"**Category:** {r['category']}\n\n")

            if "sarvam" in r:
                _write_model_section(f, "Sarvam 30B (Q4_K_M)", r["sarvam"])
            if "qwen" in r:
                _write_model_section(f, "Qwen3-30B-A3B", r["qwen"])

            f.write(f"---\n\n")


# ---------------------------------------------------------------------------
# Runner
# ---------------------------------------------------------------------------

async def run_tests(args):
    api_key = os.environ.get("OPENROUTER_API_KEY", "")
    run_sarvam = not args.qwen_only
    run_qwen = not args.sarvam_only

    if run_qwen and not api_key:
        print("ERROR: Set OPENROUTER_API_KEY environment variable.")
        print('  PowerShell: $env:OPENROUTER_API_KEY = "sk-or-..."')
        print('  cmd.exe:    set OPENROUTER_API_KEY=sk-or-...')
        print('  bash:       export OPENROUTER_API_KEY="sk-or-..."')
        sys.exit(1)

    # Filter tests
    tests = TESTS
    if args.test:
        tests = [t for t in TESTS if t["id"] == args.test]
        if not tests:
            print(f"ERROR: No test with id={args.test}")
            sys.exit(1)
    elif args.tests:
        try:
            ids = [int(x.strip()) for x in args.tests.split(",")]
        except ValueError:
            print("ERROR: --tests must be comma-separated integers (e.g. 1,2,3,11)")
            sys.exit(1)
        tests = [t for t in TESTS if t["id"] in ids]
        if not tests:
            print(f"ERROR: No tests found for ids={ids}")
            sys.exit(1)
        missing = set(ids) - {t["id"] for t in tests}
        if missing:
            print(f"WARNING: Test ids not found: {missing}")

    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    json_path = f"benchmark_results_{timestamp}.json"
    md_path = f"benchmark_report_{timestamp}.md"
    results = []

    print(f"\n{'='*70}")
    print(f"  Sarvam 30B (Q4_K_M) vs Qwen3-30B-A3B Benchmark")
    print(f"  {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print(f"  Tests: {len(tests)} | Sarvam: {'ON' if run_sarvam else 'OFF'} | Qwen: {'ON' if run_qwen else 'OFF'}")
    print(f"  Output: {json_path}")
    print(f"          {md_path}")
    print(f"{'='*70}\n")

    async with aiohttp.ClientSession() as session:
        for i, test in enumerate(tests):
            test_id = test["id"]
            has_subtests = "subtests" in test

            # Build list of (label, prompt) pairs to run
            if has_subtests:
                prompts = [
                    (f"{test_id}.{st['sub_id']} {st['sub_name']}", st["prompt"])
                    for st in test["subtests"]
                ]
            else:
                prompts = [(str(test_id), test["prompt"])]

            print(f"[Test {test_id:2d}/{tests[-1]['id']}] {test['category']} — {test['name']}"
                  f" ({len(prompts)} prompt{'s' if len(prompts)>1 else ''})")
            print(f"          Preset: {test['preset']}")

            result = {
                "test_id": test_id,
                "category": test["category"],
                "name": test["name"],
            }

            if args.dry_run:
                for label, prompt in prompts:
                    print(f"          [{label}] {prompt[:80]}...")
                print()
                continue

            # Run each sub-prompt (or the single prompt)
            sub_results_sarvam = []
            sub_results_qwen = []

            for j, (label, prompt) in enumerate(prompts):
                if len(prompts) > 1:
                    print(f"      [{label}]")

                # --- Sarvam ---
                if run_sarvam:
                    print(f"          Sarvam: calling...", end="", flush=True)
                    sr = await call_sarvam(session, prompt, test["preset"])
                    if sr["error"]:
                        print(f" ERROR: {sr['error']}")
                    else:
                        think_len = len(sr.get("thinking", ""))
                        fr = sr.get("finish_reason", "?")
                        print(f" {sr['completion_tokens']} tok, "
                              f"{sr['elapsed_s']}s, "
                              f"{sr['tokens_per_sec']} t/s "
                              f"[finish={fr}]")
                        if think_len:
                            print(f"          (thinking: ~{think_len} chars)")
                        vis = sr["content"]
                        if vis:
                            print(preview(vis))
                        else:
                            print(f"          ⚠ No visible output (all tokens on <think>)")
                    sub_results_sarvam.append({"label": label, **sr})

                # --- Qwen ---
                if run_qwen:
                    print(f"          Qwen:   calling...", end="", flush=True)
                    qr = await call_qwen(session, prompt, test["preset"], api_key)
                    if qr["error"]:
                        print(f" ERROR: {qr['error']}")
                    else:
                        think_len = len(qr.get("thinking", ""))
                        fr = qr.get("finish_reason", "?")
                        print(f" {qr['completion_tokens']} tok, "
                              f"{qr['elapsed_s']}s, "
                              f"{qr['tokens_per_sec']} t/s "
                              f"[finish={fr}]")
                        if think_len:
                            print(f"          (thinking: ~{think_len} chars)")
                        vis = qr["content"]
                        if vis:
                            print(preview(vis))
                        else:
                            print(f"          ⚠ No visible output (all tokens on <think>)")
                    sub_results_qwen.append({"label": label, **qr})

            # Store results — flat for single prompt, array for subtests
            if has_subtests:
                if run_sarvam:
                    result["sarvam"] = sub_results_sarvam
                if run_qwen:
                    result["qwen"] = sub_results_qwen
            else:
                if run_sarvam:
                    result["sarvam"] = sub_results_sarvam[0] if sub_results_sarvam else {}
                if run_qwen:
                    result["qwen"] = sub_results_qwen[0] if sub_results_qwen else {}

            results.append(result)

            # --- Incremental save after each test ---
            save_json_incremental(results, json_path)
            save_markdown_incremental(results, md_path)
            print(f"          [saved → {json_path}]")
            print()

    if args.dry_run:
        return

    # --- Final Summary ---
    print(f"\n{'='*70}")
    print(f"  COMPLETE — {len(results)} tests finished")
    print(f"{'='*70}")

    def _collect_stats(results, key):
        """Collect elapsed_s and tokens_per_sec from all results (flat + subtests)."""
        times, speeds = [], []
        for r in results:
            data = r.get(key)
            if data is None:
                continue
            items = data if isinstance(data, list) else [data]
            for item in items:
                if not item.get("error") and item.get("elapsed_s"):
                    times.append(item["elapsed_s"])
                    speeds.append(item.get("tokens_per_sec", 0))
        return times, speeds

    if run_sarvam:
        s_times, s_speeds = _collect_stats(results, "sarvam")
        if s_times:
            print(f"  Sarvam — avg {sum(s_speeds)/len(s_speeds):.1f} t/s, "
                  f"avg {sum(s_times)/len(s_times):.1f}s/prompt, "
                  f"total {sum(s_times):.0f}s ({len(s_times)} prompts)")
    if run_qwen:
        q_times, q_speeds = _collect_stats(results, "qwen")
        if q_times:
            print(f"  Qwen   — avg {sum(q_speeds)/len(q_speeds):.1f} t/s, "
                  f"avg {sum(q_times)/len(q_times):.1f}s/prompt, "
                  f"total {sum(q_times):.0f}s ({len(q_times)} prompts)")
    print(f"\n  JSON:     {json_path}")
    print(f"  Markdown: {md_path}")
    print()


# ---------------------------------------------------------------------------
# Entry point
# ---------------------------------------------------------------------------

def main():
    parser = argparse.ArgumentParser(description="Sarvam 30B vs Qwen3-30B-A3B Benchmark Runner")
    parser.add_argument("--sarvam-only", action="store_true", help="Only run Sarvam (skip Qwen)")
    parser.add_argument("--qwen-only", action="store_true", help="Only run Qwen (skip Sarvam)")
    parser.add_argument("--test", type=int, help="Run only a specific test by ID (1-20)")
    parser.add_argument("--tests", type=str, help="Run specific tests by comma-separated IDs (e.g. 1,2,3,11,12)")
    parser.add_argument("--dry-run", action="store_true", help="Print prompts without calling APIs")
    args = parser.parse_args()

    if args.sarvam_only and args.qwen_only:
        print("ERROR: Can't use both --sarvam-only and --qwen-only")
        sys.exit(1)

    asyncio.run(run_tests(args))


if __name__ == "__main__":
    main()
