#!/usr/bin/env python3
"""
LLM Benchmark Runner
====================
Runs test prompts against local llama-server or OpenRouter.
Results saved per-model in separate files.

Usage:
  pip install aiohttp
  
  # Sarvam local (default)
  python bench.py --model sarvam

  # Qwen local (same llama-server, swap the model)
  python bench.py --model qwen-local

  # Qwen via OpenRouter (BF16, datacenter)
  python bench.py --model qwen

  # Specific tests
  python bench.py --model qwen-local --tests 1,2,3,5
"""

import asyncio
import aiohttp
import json
import os
import sys
import re
import time
import argparse
from datetime import datetime
from pathlib import Path


# ---------------------------------------------------------------------------
# Config
# ---------------------------------------------------------------------------

LOCAL_URL = "http://localhost:8080/v1/chat/completions"
OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions"
QWEN_OR_MODEL = "qwen/qwen3-30b-a3b-instruct-2507"

# -1 = infinity in llama-server (maps to n_predict=-1)
# Model will generate until it hits EOS, same as the web UI.
LOCAL_MAX_TOKENS = -1
OPENROUTER_MAX_TOKENS = 8192


# ---------------------------------------------------------------------------
# Test Definitions
# ---------------------------------------------------------------------------

LANGUAGES = [
    "Hindi", "Bengali", "Gujarati", "Kannada", "Malayalam",
    "Marathi", "Odia", "Punjabi", "Tamil", "Telugu",
]

TECH_PARA = (
    "The API gateway routes incoming requests through a rate limiter "
    "before forwarding them to the appropriate microservice. If the circuit "
    "breaker is open, it returns a 503 Service Unavailable response. All request "
    "metadata is logged to a distributed tracing backend for observability."
)

TESTS = [
    # --- A. Multilingual ---
    {
        "id": 1, "cat": "Multilingual", "name": "Technical translation",
        "preset": "creative",
        "subs": [
            {"label": lang, "prompt": (
                f"Translate the following paragraph into {lang}, using native {lang} script. "
                f"Preserve technical terms in English where no standard native equivalent exists. "
                f"Output only the {lang} translation, nothing else.\n\n"
                f"Text: \"{TECH_PARA}\""
            )} for lang in LANGUAGES
        ],
    },
    {
        "id": 2, "cat": "Multilingual", "name": "Product copy",
        "preset": "creative",
        "subs": [
            {"label": lang, "prompt": (
                f"Write a short product description (under 100 words) for a solar-powered water pump "
                f"targeting rural Indian farmers. Write in {lang} using native script. "
                f"Make it feel locally natural, not translated from English. "
                f"Use culturally appropriate framing. Output only the {lang} text."
            )} for lang in LANGUAGES
        ],
    },
    {
        "id": 3, "cat": "Multilingual", "name": "Code-mixed (Hinglish/Tanglish/Kanglish)",
        "preset": "creative",
        "prompt": (
            "Write three separate Slack messages explaining to a colleague that the "
            "deployment pipeline is broken because of a misconfigured environment variable:\n"
            "1. In Hinglish (Hindi-English mix, Roman script)\n"
            "2. In Tanglish (Tamil-English mix, Roman script)\n"
            "3. In Kanglish (Kannada-English mix, Roman script)\n\n"
            "Each should sound like how an Indian developer actually texts at work."
        ),
    },
    {
        "id": 4, "cat": "Multilingual", "name": "Cross-script comprehension",
        "preset": "creative",
        "prompt": (
            "Here is a paragraph in Malayalam: \"കേരളത്തിലെ ഏറ്റവും വലിയ സോഫ്റ്റ്‌വെയർ "
            "പാർക്ക് ടെക്നോപാർക്ക് ആണ്. ഇത് തിരുവനന്തപുരത്ത് സ്ഥിതി ചെയ്യുന്നു. "
            "ഇവിടെ 400-ലധികം കമ്പനികൾ പ്രവർത്തിക്കുന്നു. ഇൻഫോസിസ്, ടി.സി.എസ്, "
            "യു.എസ്.ടി ഗ്ലോബൽ തുടങ്ങിയ പ്രമുഖ കമ്പനികൾ ഇവിടെ ഓഫീസുകൾ നടത്തുന്നു.\"\n\n"
            "1. Summarize this in English.\n"
            "2. Translate it to Tamil.\n"
            "3. Answer in Kannada: ಈ ಪಾರ್ಕ್ ಎಲ್ಲಿದೆ?"
        ),
    },

    # --- B. Reasoning ---
    {
        "id": 5, "cat": "Reasoning", "name": "Math (trains)",
        "preset": "deterministic",
        "prompt": (
            "A train leaves Bangalore at 6:00 AM traveling at 80 km/h toward Chennai "
            "(350 km away). Another train leaves Chennai at 7:00 AM traveling at 100 km/h "
            "toward Bangalore. At what time do they meet, and how far from Bangalore?"
        ),
    },
    {
        "id": 6, "cat": "Reasoning", "name": "Logic (mislabeled boxes)",
        "preset": "deterministic",
        "prompt": (
            "I have three boxes. Box A is labeled \"Apples\", Box B is labeled \"Oranges\", "
            "Box C is labeled \"Both\". All labels are wrong. You can pick one fruit from "
            "one box. Which box do you pick from, and how do you deduce the correct labels?"
        ),
    },
    {
        "id": 7, "cat": "Reasoning", "name": "Topological sort",
        "preset": "deterministic",
        "prompt": (
            "Given a DAG with edges: A→B, A→C, B→D, C→D, C→E, D→F, E→F — "
            "list at least three valid topological orderings."
        ),
    },

    # --- C. Code ---
    {
        "id": 8, "cat": "Code", "name": "Log parser (Python + Rust)",
        "preset": "deterministic",
        "prompt": (
            "Part A (Python): Write a Python function that takes a list of log line strings "
            "in the format '[TIMESTAMP] [LEVEL] message' and returns a dict grouping messages "
            "by level. Handle malformed lines under a 'MALFORMED' key. Include a runnable "
            "if __name__ == '__main__' block with test data.\n\n"
            "Part B (Rust): Write the equivalent in Rust with a main() function and test data."
        ),
    },
    {
        "id": 9, "cat": "Code", "name": "Async fetcher (Python)",
        "preset": "deterministic",
        "prompt": (
            "Write a Python async function using aiohttp that fetches 10 URLs concurrently "
            "with a semaphore limiting concurrency to 3. Return a dict of URL -> status code. "
            "Handle timeouts and connection errors. Include a runnable __main__ block testing "
            "against httpbin.org endpoints (mix of /status/200, /status/404, /delay/5, /get, etc)."
        ),
    },
    {
        "id": 10, "cat": "Code", "name": "Struct conversion",
        "preset": "deterministic",
        "prompt": (
            "Convert this Python dataclass to Rust with serde Serialize/Deserialize:\n\n"
            "```python\n@dataclass\nclass MemoryNode:\n    id: str\n    label: str\n"
            "    weight: float  # must be 0.0-1.0\n    edges: list[str]\n"
            "    created_at: datetime\n```\n\n"
            "The Rust version should return a Result type if weight is out of range."
        ),
    },

    # --- D. Instruction Following ---
    {
        "id": 11, "cat": "Instruction", "name": "Strict table",
        "preset": "deterministic",
        "prompt": (
            "List exactly 5 differences between gRPC and REST. Format as a markdown table "
            "with columns: Aspect, gRPC, REST. No preamble or conclusion — just the table."
        ),
    },
    {
        "id": 12, "cat": "Instruction", "name": "JSON-only",
        "preset": "deterministic",
        "prompt": (
            "Respond with valid JSON only. No markdown fencing, no explanation. "
            "Generate a JSON Schema for a blog post with: title (string, required), "
            "slug (string, required), tags (array, max 5), published (boolean, default false), "
            "word_count (integer, min 0)."
        ),
    },
    {
        "id": 13, "cat": "Instruction", "name": "Conventional Commits",
        "preset": "deterministic",
        "prompt": (
            "Write a commit message for: refactored auth middleware to use JWT instead of "
            "session cookies, updated all route handlers, added unit tests for token expiration "
            "and refresh. Follow Conventional Commits format strictly."
        ),
    },

    # --- E. Hallucination ---
    {
        "id": 14, "cat": "Hallucination", "name": "Self-knowledge",
        "preset": "deterministic",
        "prompt": (
            "What is the Qwen 3 30B model's exact layer configuration? How many transformer "
            "layers, how many experts, what routing mechanism, and training data split by language?"
        ),
    },
    {
        "id": 15, "cat": "Hallucination", "name": "Temporal boundary",
        "preset": "deterministic",
        "prompt": "Who won the 2025 Kerala State Film Award for Best Actor?",
    },
    {
        "id": 16, "cat": "Hallucination", "name": "Fabricated reference",
        "preset": "deterministic",
        "prompt": "Explain the --tensor-split flag in llama.cpp version 4.2.0.",
    },

    # --- F. Long Context ---
    {
        "id": 17, "cat": "Synthesis", "name": "HTTP/2 spec analysis",
        "preset": "synthesis",
        "prompt": (
            "The following is from RFC 7540 Section 5 (HTTP/2 Streams and Multiplexing).\n\n"
            "Stream States:\n"
            "idle: All streams start idle. HEADERS -> open. PUSH_PROMISE -> reserved (remote).\n"
            "reserved (local): Promised via PUSH_PROMISE. HEADERS -> half-closed (remote). RST_STREAM -> closed.\n"
            "reserved (remote): Remote reserved. HEADERS -> half-closed (local). RST_STREAM -> closed.\n"
            "open: Both peers send frames. END_STREAM -> half-closed. RST_STREAM -> closed.\n"
            "half-closed (local): Can't send except WINDOW_UPDATE/PRIORITY/RST_STREAM. END_STREAM/RST_STREAM -> closed.\n"
            "half-closed (remote): Remote can't send except allowed frames. END_STREAM/RST_STREAM -> closed.\n"
            "closed: Terminal. MUST NOT send frames other than PRIORITY.\n\n"
            "Based on this:\n"
            "1. List all stream state transitions.\n"
            "2. Identify transitions lacking explicit error paths.\n"
            "3. Any ambiguities that could cause implementation divergence?"
        ),
    },
    {
        "id": 18, "cat": "Synthesis", "name": "Contradictory sources",
        "preset": "synthesis",
        "prompt": (
            "Source A: \"India's software exports grew 15% YoY in FY2025, driven by AI and cloud. "
            "NASSCOM reported 250,000 new IT jobs.\"\n\n"
            "Source B: \"Indian IT faced headwinds in FY2025 with export growth at 3.2%. "
            "TCS and Infosys announced hiring freezes; net reduction of 50,000 positions.\"\n\n"
            "Where do these disagree? Which claims are verifiable? What would resolve the contradictions?"
        ),
    },

    # --- G. Cultural ---
    {
        "id": 19, "cat": "Cultural", "name": "Kerala land records",
        "preset": "creative",
        "prompt": (
            "Explain the difference between kanakkiṇakku and paṭṭayam in Kerala land revenue "
            "records, in English. Also explain what a thandaper number is and how it relates "
            "to property identification in Kerala."
        ),
    },
    {
        "id": 20, "cat": "Cultural", "name": "RTI application",
        "preset": "creative",
        "prompt": (
            "Draft a formal RTI (Right to Information Act, 2005) application to the BBMP "
            "requesting:\n1. Status of road repair on 80 Feet Road, Koramangala, Bangalore\n"
            "2. Total budget allocated and amount spent\n"
            "3. Contractor name and contract duration\n\n"
            "Use proper RTI format with ₹10 fee mention, section references, salutation."
        ),
    },
]


# ---------------------------------------------------------------------------
# Presets
# ---------------------------------------------------------------------------

# Sarvam official: temp=0.8, top_p=0.95, repetition_penalty=1.0
PRESETS_SARVAM = {
    "deterministic": {"temperature": 0, "top_p": 0.95, "repeat_penalty": 1.0},
    "creative":      {"temperature": 0.8, "top_p": 0.95, "repeat_penalty": 1.0},
    "synthesis":     {"temperature": 0.8, "top_p": 0.95, "repeat_penalty": 1.0},
}

# Qwen3-30B-A3B (original, thinking model)
# Official thinking mode: temp=0.6, top_p=0.95, top_k=20, min_p=0
# Official non-thinking mode: temp=0.7, top_p=0.8, top_k=20, min_p=0, presence_penalty=1.0
# Since Sarvam also thinks, we use thinking-mode settings for fair comparison.
PRESETS_QWEN_LOCAL = {
    "deterministic": {"temperature": 0, "top_p": 0.95, "top_k": 20, "repeat_penalty": 1.0, "min_p": 0},
    "creative":      {"temperature": 0.6, "top_p": 0.95, "top_k": 20, "repeat_penalty": 1.0, "min_p": 0},
    "synthesis":     {"temperature": 0.6, "top_p": 0.95, "top_k": 20, "repeat_penalty": 1.0, "min_p": 0},
}

# Qwen via OpenRouter (same model, OpenAI-compatible param names)
PRESETS_QWEN_OR = {
    "deterministic": {"temperature": 0},
    "creative":      {"temperature": 0.6, "top_p": 0.95},
    "synthesis":     {"temperature": 0.6, "top_p": 0.95},
}


# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------

def strip_think(text: str) -> tuple[str, str]:
    """Separate <think>...</think> from visible output."""
    m = re.search(r"<think>(.*?)</think>", text, re.DOTALL)
    thinking = m.group(1).strip() if m else ""
    visible = re.sub(r"<think>.*?</think>", "", text, flags=re.DOTALL).strip()
    if "<think>" in visible and "</think>" not in visible:
        thinking = visible.split("<think>", 1)[1]
        visible = visible.split("<think>", 1)[0].strip()
    return visible, thinking


def preview(text: str, lines: int = 3, width: int = 90) -> str:
    if not text:
        return "    (empty)"
    out = []
    for line in text.strip().splitlines()[:lines]:
        t = line[:width] + ("..." if len(line) > width else "")
        out.append(f"    │ {t}")
    remaining = len(text.strip().splitlines()) - lines
    if remaining > 0:
        out.append(f"    │ ... ({remaining} more lines)")
    return "\n".join(out)


# ---------------------------------------------------------------------------
# API Callers
# ---------------------------------------------------------------------------

async def call_local(session, prompt, preset, presets, model_name="local"):
    """Call a local llama-server instance."""
    body = {
        "model": model_name,
        "messages": [{"role": "user", "content": prompt}],
        "max_tokens": LOCAL_MAX_TOKENS,
        "stream": False,
        **presets[preset],
    }
    t0 = time.perf_counter()
    try:
        async with session.post(LOCAL_URL, json=body,
                                timeout=aiohttp.ClientTimeout(total=None)) as r:
            data = await r.json()
            elapsed = time.perf_counter() - t0
            raw = data.get("choices", [{}])[0].get("message", {}).get("content", "")
            visible, thinking = strip_think(raw)
            usage = data.get("usage", {})
            return {
                "content": visible,
                "thinking": thinking,
                "thinking_chars": len(thinking),
                "finish": data.get("choices", [{}])[0].get("finish_reason", ""),
                "elapsed_s": round(elapsed, 2),
                "tokens": usage.get("completion_tokens", 0),
                "prompt_tokens": usage.get("prompt_tokens", 0),
                "t_per_s": round(usage.get("completion_tokens", 0) / elapsed, 1) if elapsed else 0,
                "error": None,
            }
    except Exception as e:
        return {"content": "", "thinking": "", "thinking_chars": 0, "finish": "",
                "tokens": 0, "prompt_tokens": 0, "t_per_s": 0,
                "elapsed_s": round(time.perf_counter() - t0, 2), "error": str(e)}


async def call_openrouter(session, prompt, preset, api_key):
    """Call Qwen3-30B-A3B via OpenRouter."""
    body = {
        "model": QWEN_OR_MODEL,
        "messages": [{"role": "user", "content": prompt}],
        "max_tokens": OPENROUTER_MAX_TOKENS,
        "stream": False,
        **PRESETS_QWEN_OR[preset],
    }
    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json",
        "HTTP-Referer": "https://nryn.dev",
        "X-Title": "Sarvam vs Qwen Bench",
    }
    t0 = time.perf_counter()
    try:
        async with session.post(OPENROUTER_URL, json=body, headers=headers,
                                timeout=aiohttp.ClientTimeout(total=None)) as r:
            data = await r.json()
            elapsed = time.perf_counter() - t0
            if "error" in data:
                return {"content": "", "thinking": "", "thinking_chars": 0, "finish": "",
                        "tokens": 0, "prompt_tokens": 0, "t_per_s": 0,
                        "elapsed_s": round(elapsed, 2),
                        "error": data["error"].get("message", str(data["error"]))}
            raw = data.get("choices", [{}])[0].get("message", {}).get("content", "")
            visible, thinking = strip_think(raw)
            usage = data.get("usage", {})
            return {
                "content": visible,
                "thinking": thinking,
                "thinking_chars": len(thinking),
                "finish": data.get("choices", [{}])[0].get("finish_reason", ""),
                "elapsed_s": round(elapsed, 2),
                "tokens": usage.get("completion_tokens", 0),
                "prompt_tokens": usage.get("prompt_tokens", 0),
                "t_per_s": round(usage.get("completion_tokens", 0) / elapsed, 1) if elapsed else 0,
                "error": None,
            }
    except Exception as e:
        return {"content": "", "thinking": "", "thinking_chars": 0, "finish": "",
                "tokens": 0, "prompt_tokens": 0, "t_per_s": 0,
                "elapsed_s": round(time.perf_counter() - t0, 2), "error": str(e)}


# ---------------------------------------------------------------------------
# File writers (incremental)
# ---------------------------------------------------------------------------

def save(results, model_name, json_path, md_path):
    with open(json_path, "w", encoding="utf-8") as f:
        json.dump(results, f, indent=2, ensure_ascii=False)

    with open(md_path, "w", encoding="utf-8") as f:
        f.write(f"# {model_name} Benchmark Results\n\n")
        f.write(f"**Date:** {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}  \n")
        f.write(f"**Tests completed:** {len(results)}\n\n")

        f.write("| # | Test | Tokens | t/s | Time | Finish |\n")
        f.write("|---|------|--------|-----|------|--------|\n")
        for r in results:
            if "subs" in r:
                tok = sum(s.get("tokens", 0) for s in r["subs"])
                sec = sum(s.get("elapsed_s", 0) for s in r["subs"])
                spd = round(tok / sec, 1) if sec else 0
                f.write(f"| {r['id']} | {r['name'][:35]} | {tok} | {spd} | {sec:.0f}s | mixed |\n")
            else:
                d = r.get("result", {})
                f.write(f"| {r['id']} | {r['name'][:35]} | {d.get('tokens',0)} | "
                        f"{d.get('t_per_s',0)} | {d.get('elapsed_s',0)}s | {d.get('finish','')} |\n")

        f.write("\n---\n\n")

        for r in results:
            f.write(f"## Test {r['id']}: {r['name']}\n\n")
            if "subs" in r:
                for s in r["subs"]:
                    f.write(f"### {s['label']}\n\n")
                    f.write(f"**Prompt:** {s.get('prompt', 'N/A')}\n\n")
                    if s.get("error"):
                        f.write(f"**ERROR:** {s['error']}\n\n")
                    else:
                        f.write(f"*{s['tokens']} tok | {s['elapsed_s']}s | {s['t_per_s']} t/s | "
                                f"think: {s['thinking_chars']} chars | finish: {s['finish']}*\n\n")
                        if s.get('thinking'):
                            f.write(f"<details><summary>Thinking ({s['thinking_chars']} chars)</summary>\n\n")
                            f.write(f"````\n{s['thinking']}\n````\n\n</details>\n\n")
                        f.write(f"**Output:**\n\n````\n{s['content']}\n````\n\n")
            else:
                f.write(f"**Prompt:** {r.get('prompt', 'N/A')}\n\n")
                d = r.get("result", {})
                if d.get("error"):
                    f.write(f"**ERROR:** {d['error']}\n\n")
                else:
                    f.write(f"*{d['tokens']} tok | {d['elapsed_s']}s | {d['t_per_s']} t/s | "
                            f"think: {d['thinking_chars']} chars | finish: {d['finish']}*\n\n")
                    if d.get('thinking'):
                        f.write(f"<details><summary>Thinking ({d['thinking_chars']} chars)</summary>\n\n")
                        f.write(f"````\n{d['thinking']}\n````\n\n</details>\n\n")
                    f.write(f"**Output:**\n\n````\n{d['content']}\n````\n\n")
            f.write("---\n\n")


# ---------------------------------------------------------------------------
# Runner
# ---------------------------------------------------------------------------

async def run(model_name, caller, tests, json_path, md_path):
    results = []

    async with aiohttp.ClientSession() as session:
        for test in tests:
            has_subs = "subs" in test
            prompts = [(s["label"], s["prompt"]) for s in test["subs"]] if has_subs else [("", test["prompt"])]

            print(f"\n[Test {test['id']}] {test['cat']} — {test['name']} ({len(prompts)} prompt{'s' if len(prompts)>1 else ''})")

            entry = {"id": test["id"], "cat": test["cat"], "name": test["name"]}

            if has_subs:
                entry["subs"] = []
                for label, prompt in prompts:
                    print(f"  [{label}] ", end="", flush=True)
                    result = await caller(session, prompt, test["preset"])
                    result["label"] = label
                    result["prompt"] = prompt
                    entry["subs"].append(result)
                    if result["error"]:
                        print(f"ERROR: {result['error']}")
                    else:
                        print(f"{result['tokens']} tok, {result['elapsed_s']}s, "
                              f"{result['t_per_s']} t/s [think:{result['thinking_chars']}c] "
                              f"[{result['finish']}]")
                        if result["content"]:
                            print(preview(result["content"]))
                        else:
                            print("    ⚠ No visible output")
                    # Save after EACH sub-prompt
                    save(results + [entry], model_name, json_path, md_path)
                    print(f"    [saved]")
            else:
                print(f"  ", end="", flush=True)
                result = await caller(session, test["prompt"], test["preset"])
                entry["result"] = result
                entry["prompt"] = test["prompt"]
                if result["error"]:
                    print(f"ERROR: {result['error']}")
                else:
                    print(f"{result['tokens']} tok, {result['elapsed_s']}s, "
                          f"{result['t_per_s']} t/s [think:{result['thinking_chars']}c] "
                          f"[{result['finish']}]")
                    if result["content"]:
                        print(preview(result["content"]))
                    else:
                        print("    ⚠ No visible output")

            results.append(entry)
            save(results, model_name, json_path, md_path)
            print(f"  [test {test['id']} complete]")

    print(f"\nDone. {json_path} / {md_path}")
    return results


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

async def main_async(args):
    tests = TESTS
    if args.test:
        tests = [t for t in TESTS if t["id"] == args.test]
    elif args.tests:
        ids = [int(x.strip()) for x in args.tests.split(",")]
        tests = [t for t in TESTS if t["id"] in ids]
    if not tests:
        print("No matching tests found.")
        sys.exit(1)

    ts = datetime.now().strftime("%Y%m%d_%H%M%S")
    models = [m.strip() for m in args.model.split(",")]

    for model in models:
        if model == "sarvam":
            print(f"\n{'='*60}")
            print(f"  SARVAM 30B (Q4_K_M, local) — {len(tests)} tests")
            print(f"  Endpoint: {LOCAL_URL}")
            print(f"  max_tokens: {LOCAL_MAX_TOKENS}")
            print(f"  Presets: temp=0.8, top_p=0.95, rep=1.0 (official)")
            print(f"{'='*60}")
            caller = lambda s, p, pr: call_local(s, p, pr, PRESETS_SARVAM, "sarvam-30b")
            await run("Sarvam 30B (Q4_K_M)", caller, tests,
                      f"sarvam_{ts}.json", f"sarvam_{ts}.md")

        elif model == "qwen-local":
            print(f"\n{'='*60}")
            print(f"  QWEN3-30B-A3B (Q4_K_M, local) — {len(tests)} tests")
            print(f"  Endpoint: {LOCAL_URL}")
            print(f"  max_tokens: {LOCAL_MAX_TOKENS}")
            print(f"  Presets: temp=0.6, top_p=0.95, top_k=20 (official thinking mode)")
            print(f"{'='*60}")
            caller = lambda s, p, pr: call_local(s, p, pr, PRESETS_QWEN_LOCAL, "qwen3-30b")
            await run("Qwen3-30B-A3B (Q4_K_M)", caller, tests,
                      f"qwen_local_{ts}.json", f"qwen_local_{ts}.md")

        elif model == "qwen":
            api_key = os.environ.get("OPENROUTER_API_KEY", "")
            if not api_key:
                print("ERROR: Set OPENROUTER_API_KEY")
                print('  PowerShell: $env:OPENROUTER_API_KEY = "sk-or-..."')
                continue
            print(f"\n{'='*60}")
            print(f"  QWEN3-30B-A3B (OpenRouter) — {len(tests)} tests")
            print(f"  max_tokens: {OPENROUTER_MAX_TOKENS}")
            print(f"{'='*60}")
            caller = lambda s, p, pr, k=api_key: call_openrouter(s, p, pr, k)
            await run("Qwen3-30B-A3B (OpenRouter)", caller, tests,
                      f"qwen_or_{ts}.json", f"qwen_or_{ts}.md")

        else:
            print(f"Unknown model: {model}")
            print("  Options: sarvam, qwen-local, qwen")


def main():
    p = argparse.ArgumentParser(description="LLM Benchmark Runner")
    p.add_argument("--model", type=str, default="sarvam",
                   help="Model(s): sarvam, qwen-local, qwen (OpenRouter). Comma-separate for multiple.")
    p.add_argument("--test", type=int, help="Single test ID")
    p.add_argument("--tests", type=str, help="Comma-separated test IDs (e.g. 1,2,3)")
    p.add_argument("--dry-run", action="store_true", help="Print prompts only")
    args = p.parse_args()

    if args.dry_run:
        tests = TESTS
        if args.test:
            tests = [t for t in TESTS if t["id"] == args.test]
        elif args.tests:
            ids = [int(x.strip()) for x in args.tests.split(",")]
            tests = [t for t in TESTS if t["id"] in ids]
        for t in tests:
            n = len(t.get("subs", [])) or 1
            print(f"[{t['id']}] {t['cat']} — {t['name']} ({n} prompts)")
        print(f"\nTotal: {sum(len(t.get('subs', [])) or 1 for t in tests)} prompts")
        return

    asyncio.run(main_async(args))


if __name__ == "__main__":
    main()
