# Sarvam 30B Test Suite

**Server:** `.\llama-server -m sarvam-30B-Q4_K_M.gguf -ngl 28 -c 28192 -fa on --host 0.0.0.0 --port 8080`
**Endpoint:** `http://localhost:8080/v1/chat/completions`

**Target languages (10):** Hindi, Bengali, Gujarati, Kannada, Malayalam, Marathi, Odia, Punjabi, Tamil, Telugu
**Training split:** Hindi 28%, others 8% each. Supports native script, romanized, and code-mixed inputs.

---

## Sampling Presets

| Preset            | temperature | min_p | top_p | repeat_penalty | Use for                                       |
| ----------------- | ----------- | ----- | ----- | -------------- | --------------------------------------------- |
| **Deterministic** | 0           | —     | —     | 1.0            | Reasoning, code, factual, hallucination tests |
| **Creative**      | 0.7         | 0.05  | 0.9   | 1.1            | Multilingual generation, creative output      |
| **Synthesis**     | 0.3         | 0.05  | 0.9   | 1.05           | Long-form analysis, document synthesis        |

---

## A. Multilingual / Indic Language

**Preset: Creative**

### Test 1 — Technical translation (all 10 languages)

> Translate the following paragraph into each of these 10 languages, preserving technical terminology in English where no standard native equivalent exists. Output each translation with the language name as a header.
>
> Languages: Hindi, Bengali, Gujarati, Kannada, Malayalam, Marathi, Odia, Punjabi, Tamil, Telugu
>
> Text: "The API gateway routes incoming requests through a rate limiter before forwarding them to the appropriate microservice. If the circuit breaker is open, it returns a 503 Service Unavailable response. All request metadata is logged to a distributed tracing backend for observability."

**What to evaluate:**
- Correct script for each language (Devanagari for Hindi/Marathi, Bengali script, Gujarati script, Kannada script, Malayalam script, Odia script, Gurmukhi for Punjabi, Tamil script, Telugu script)
- Technical terms like "API gateway", "rate limiter", "circuit breaker", "503" should remain in English
- Grammar should be natural, not word-for-word translation
- No script mixing (e.g., Tamil text shouldn't have Devanagari characters)

### Test 2 — Product copy generation (all 10 languages)

> Write a short product description (under 100 words) for a solar-powered water pump targeting rural Indian farmers. Write it in all 10 languages: Hindi, Bengali, Gujarati, Kannada, Malayalam, Marathi, Odia, Punjabi, Tamil, Telugu. Each description should feel locally natural — not a translation of an English draft. Use culturally appropriate framing for each region.

**What to evaluate:**
- Does each language version feel independently authored vs. translated?
- Cultural adaptation (e.g., crop references, pricing framing, seasonal references that vary by region)
- Under 100-word constraint respected per language

### Test 3 — Code-mixed generation (Hinglish + Tanglish + Kanglish)

> Write three separate Slack messages explaining to a colleague that the deployment pipeline is broken because of a misconfigured environment variable:
> 1. In Hinglish (Hindi-English mix, Roman script)
> 2. In Tanglish (Tamil-English mix, Roman script)
> 3. In Kanglish (Kannada-English mix, Roman script)
>
> Each message should sound like how an Indian developer actually texts at work — natural code-switching, not forced.

**What to evaluate:**
- Natural code-switching patterns (technical terms in English, connective tissue in the regional language)
- Roman script transliteration quality
- Does it sound like an actual developer or like a textbook example?

### Test 4 — Comprehension across scripts

> Here is a paragraph in Malayalam: "കേരളത്തിലെ ഏറ്റവും വലിയ സോഫ്റ്റ്‌വെയർ പാർക്ക് ടെക്നോപാർക്ക് ആണ്. ഇത് തിരുവനന്തപുരത്ത് സ്ഥിതി ചെയ്യുന്നു. ഇവിടെ 400-ലധികം കമ്പനികൾ പ്രവർത്തിക്കുന്നു. ഇൻഫോസിസ്, ടി.സി.എസ്, യു.എസ്.ടി ഗ്ലോബൽ തുടങ്ങിയ പ്രമുഖ കമ്പനികൾ ഇവിടെ ഓഫീസുകൾ നടത്തുന്നു."
>
> 1. Summarize this in English.
> 2. Translate it to Tamil.
> 3. Answer in Kannada: ಈ ಪಾರ್ಕ್ ಎಲ್ಲಿದೆ? (Where is this park?)

**What to evaluate:**
- Accurate comprehension of native Malayalam script
- Clean cross-language transfer (Malayalam → English, Malayalam → Tamil, response in Kannada)
- Factual accuracy preserved across transformations

---

## B. Reasoning & Logic

**Preset: Deterministic**

### Test 5 — Math word problem

> A train leaves Bangalore at 6:00 AM traveling at 80 km/h toward Chennai (350 km away). Another train leaves Chennai at 7:00 AM traveling at 100 km/h toward Bangalore. At what time do they meet, and how far from Bangalore?

**Expected answer:** By 7:00 AM, Train A has covered 80 km. Remaining distance: 270 km. Closing speed: 180 km/h. Time to meet: 1.5 hours after 7:00 AM = 8:30 AM. Distance from Bangalore: 80 + (80 × 1.5) = 200 km.

### Test 6 — Logic puzzle

> I have three boxes. Box A is labeled "Apples", Box B is labeled "Oranges", Box C is labeled "Both". All labels are wrong. You can pick one fruit from one box. Which box do you pick from, and how do you deduce the correct labels?

**Expected answer:** Pick from Box C (labeled "Both"). Since the label is wrong, it contains only apples or only oranges. If you draw an apple, Box C = Apples. Then Box A (labeled "Apples", must be wrong) can only be Oranges or Both. Since Box C is Apples, Box A must be Oranges or Both. Box B (labeled "Oranges", wrong) can't be Oranges. If Box C = Apples, Box B = Both, Box A = Oranges.

### Test 7 — Graph theory

> Given a DAG with edges: A→B, A→C, B→D, C→D, C→E, D→F, E→F — list at least three valid topological orderings.

**Expected answer (examples):** A,B,C,D,E,F | A,C,B,D,E,F | A,C,E,B,D,F | A,B,C,E,D,F

---

## C. Code Generation

**Preset: Deterministic**

### Test 8 — Log parser (Python + Rust, verifiable)

> **Part A (Python):** Write a Python function that takes a list of log line strings in the format `[TIMESTAMP] [LEVEL] message` and returns a dictionary grouping messages by level. Handle malformed lines by collecting them under a "MALFORMED" key. Include a `if __name__ == "__main__"` block with test data that prints the result.
>
> **Part B (Rust):** Write the equivalent in Rust: a function that takes `Vec<String>` and returns `HashMap<String, Vec<String>>`. Include a `main()` function with test data.

**Verification:** Run the Python output directly (`python log_parser.py`). Compile and run the Rust output (`rustc log_parser.rs && ./log_parser`). Both should produce matching grouped output.

### Test 9 — Async HTTP fetcher (Python, verifiable)

> Write a Python async function that fetches 10 URLs concurrently using `aiohttp`, with a semaphore limiting concurrency to 3, and returns a dict mapping URL to HTTP status code. Include proper error handling for timeouts and connection errors. Include a runnable `__main__` block that tests against these URLs:
> - https://httpbin.org/status/200
> - https://httpbin.org/status/404
> - https://httpbin.org/delay/5
> - https://httpbin.org/get
> - (and 6 more valid httpbin endpoints of your choice)

**Verification:** `pip install aiohttp && python async_fetcher.py` — should complete without errors and print a status dict.

### Test 10 — Cross-language struct conversion

> Convert this Python dataclass to a Rust struct with serde Serialize/Deserialize derives, and write the equivalent constructor with validation:
> ```python
> @dataclass
> class MemoryNode:
>     id: str
>     label: str
>     weight: float  # must be 0.0-1.0
>     edges: list[str]
>     created_at: datetime
> ```
> The Rust version should return a `Result` type if weight is out of range.

**What to evaluate:** Correct serde derives, proper `Result<Self, String>` or custom error, `chrono::DateTime` usage, idiomatic Rust naming conventions.

---

## D. Instruction Following & Format Compliance

**Preset: Deterministic**

### Test 11 — Strict table format

> List exactly 5 differences between gRPC and REST. Format as a markdown table with columns: Aspect, gRPC, REST. Do not add any preamble or conclusion — just the table.

**What to evaluate:** Exactly 5 rows (not 4, not 6). No text before or after the table. Valid markdown table syntax.

### Test 12 — JSON-only output

> Respond with valid JSON only. No markdown fencing, no explanation, no preamble. Generate a JSON Schema for a blog post with fields: title (string, required), slug (string, derived from title, required), tags (array of strings, max 5 items), published (boolean, default false), word_count (integer, minimum 0).

**Verification:** Pipe the raw output through `python -m json.tool` or `jq .` — it should parse without errors.

### Test 13 — Conventional Commits

> Write a commit message for this change: refactored the authentication middleware to use JWT validation instead of session cookies, updated all route handlers to pass the JWT token, added unit tests for token expiration and refresh flows. Follow Conventional Commits format strictly.

**Expected format:** `refactor(auth): migrate from session cookies to JWT validation` + structured body.

---

## E. Hallucination Stress Tests

**Preset: Deterministic**

### Test 14 — Self-knowledge probe

> What is the Sarvam 30B model's exact layer configuration? How many transformer layers, how many experts per layer, what is the expert routing mechanism, and what is the training data composition by language?

**What to evaluate:** The model should know some of this (19 layers, 128 experts, top-6 routing, sigmoid gating). Check for fabricated details vs. honest "I'm not sure about X" responses. The training split is Hindi 28%, 9 others at 8% each.

### Test 15 — Temporal knowledge boundary

> Who won the 2025 Kerala State Film Award for Best Actor?

**What to evaluate:** Does it admit uncertainty, fabricate a plausible answer, or give a wrong-but-confident answer? The correct response is to acknowledge it may not have this information.

### Test 16 — Fabricated reference

> Explain the `--tensor-split` flag in llama.cpp version 4.2.0.

**What to evaluate:** There is no llama.cpp version 4.2.0 (llama.cpp uses build numbers, not semver). The `--tensor-split` flag does exist but the version is fabricated. A good response acknowledges the version doesn't exist while optionally explaining the actual flag.

---

## F. Long Context / Synthesis

**Preset: Synthesis**

### Test 17 — Spec analysis (use HTTP/2 RFC 7540 Section 5)

> [Paste the text of RFC 7540 Section 5: "Streams and Multiplexing" — approximately 3000 words, freely available at https://www.rfc-editor.org/rfc/rfc7540#section-5]
>
> Based on this specification text:
> 1. List all stream state transitions described.
> 2. Identify any transition that lacks an explicit error or failure path.
> 3. Are there any ambiguities in the state machine that could lead to implementation divergence?

**What to evaluate:** Completeness of state transition extraction, ability to identify gaps (RFC 7540's stream state machine does have known ambiguities around RST_STREAM timing and half-closed states), analytical depth.

### Test 18 — Contradictory source synthesis

> **Source A:** "India's software exports grew 15% year-over-year in FY2025, driven by strong demand in AI and cloud services. NASSCOM reported that the IT sector added 250,000 new jobs."
>
> **Source B:** "The Indian IT sector faced headwinds in FY2025 with export growth slowing to 3.2%. Major firms including TCS and Infosys announced hiring freezes, and the sector saw a net reduction of 50,000 positions according to industry analysts."
>
> Where do these accounts disagree? Which claims are verifiable, and what would you need to resolve the contradictions?

**What to evaluate:** Does it identify all three contradiction points (growth rate, job creation vs. reduction, sector health narrative)? Does it suggest specific verification methods (NASSCOM annual report, company quarterly filings, MeitY data)?

---

## G. Cultural & Domain Knowledge

**Preset: Creative**

### Test 19 — Kerala land records terminology

> Explain the difference between `kanakkinakku` and `pattayam` in Kerala land revenue records, in English. Also explain what a `thandaper` number is and how it relates to property identification in Kerala.

**What to evaluate:** Accuracy of land revenue terminology, depth of explanation, whether it fabricates plausible-sounding but wrong definitions.

### Test 20 — Indian bureaucratic format

> Draft a formal RTI (Right to Information Act, 2005) application to the BBMP (Bruhat Bengaluru Mahanagara Palike) requesting:
> 1. Status of road repair work on 80 Feet Road, Koramangala, Bangalore
> 2. Total budget allocated and amount spent
> 3. Name of the contractor and contract duration
>
> Use the proper RTI format including the required fee mention (₹10), relevant section references, and appropriate salutation.

**What to evaluate:** Correct RTI format (addressed to PIO, Section 6(1) reference, fee mention, 30-day response timeline awareness), BBMP-specific addressing, professional tone.

---

## Scoring Notes

For each test, record:
- **Tokens/sec** (from llama-server metrics)
- **Pass/Fail** (binary for verifiable tests: 5, 6, 7, 8, 9, 12, 13)
- **Quality score 1-5** (for subjective tests: 1-4, 10, 11, 14-20)
- **Notes** (specific failures, hallucinations, script errors)

Run deterministic tests (B, C, D, E) first to establish baseline capability, then creative/multilingual tests (A, G) to assess language quality, then synthesis tests (F) last since they're the most context-heavy.
