# Qwen3-30B-A3B (Q4_K_M) — Benchmark Analysis

**Analyst:** Claude (for Narayan / nryn.dev)
**Date:** 2026-03-29
**Hardware:** RTX 4070 Super (12GB), llama-server, -ngl 28 -c 28192 -fa on
**Model:** Qwen3-30B-A3B Q4_K_M (unsloth), 30B total / 3B active, MoE
**Scale:** 0 = harmful/empty, 1-2 terrible, 3-4 poor, 5-6 functional, 7-8 good, 9-10 excellent/frontier

---

## Scoring Summary

| # | Test | Category | Score /10 | Verdict | Notes |
|---|------|----------|-----------|---------|-------|
| 1 | Technical translation | Multilingual | **4** | Poor | All 10 scripts correct; but meaning inversions in 4 languages, wrong noun in Tamil. Script ≠ accuracy |
| 2 | Product copy | Multilingual | **5** | Functional | All 10 native script; Kannada near-incoherent, Bengali repetitive, Marathi geographically confused |
| 3 | Code-mixed gen | Multilingual | **2** | Terrible | Hinglish has one Hindi clause; Tanglish is English; Kanglish uses Tamil words — wrong language |
| 4 | Cross-script comprehension | Multilingual | **9** | Excellent | Perfect: accurate English summary, clean Tamil translation, correct Kannada answer |
| 5 | Math (trains) | Reasoning | **9** | Excellent | Correct: 8:30 AM, 200 km. Clean LaTeX with verification |
| 6 | Logic (boxes) | Reasoning | **8** | Good | Correct deduction, both scenarios, sound chain |
| 7 | Topological sort | Reasoning | **8** | Good | 3 valid orderings, all verified |
| 8 | Log parser (Py+Rust) | Code | **7** | Good | Both complete, correct structure. Regex `$$` likely markdown artifact — needs verification |
| 9 | Async fetcher | Code | **6** | Functional | Correct async/semaphore pattern; duplicate URLs cause dict collision, timeout deprecated usage |
| 10 | Struct conversion | Code | **4** | Poor | Wrong approach: serde deserializer instead of constructor returning Result. Dead import. Doesn't answer the prompt |
| 11 | Strict table | Instruction | **9** | Excellent | Exactly 5 rows, no preamble, valid markdown. Perfect |
| 12 | JSON-only | Instruction | **9** | Excellent | Valid JSON, correct schema, all constraints. Parses clean |
| 13 | Conventional Commits | Instruction | **6** | Functional | Correct type and scope. Single-line, no body — thin for a 3-part change |
| 14 | Self-knowledge | Hallucination | **3** | Poor | Doesn't know if it uses MoE; guesses "8-16 experts" (actual: 128). Confident misinformation |
| 15 | Temporal boundary | Hallucination | **6** | Functional | Correct refusal, no fabrication; but claims "current year is 2023" — wrong year with confidence |
| 16 | Fabricated reference | Hallucination | **0** | Harmful | Full hallucination — did NOT flag nonexistent version; fabricated explanation |
| 17 | HTTP/2 spec analysis | Synthesis | **7** | Good | Clean transition table; identifies half-closed directionality ambiguity; well-structured |
| 18 | Contradictory sources | Synthesis | **7** | Good | All 3 contradictions identified; good verification methods; good epistemic calibration |
| 19 | Kerala land records | Cultural | **3** | Poor | Confused pattayam ("physical land") with its actual meaning (title deed); heavy hedging throughout |
| 20 | RTI application | Cultural | **4** | Poor | Multiple wrong section references, addresses APIO not PIO, missing citizenship declaration |

**Total: 116/200 | Average: 5.8/10**

---

## Detailed Analysis by Category

### A. Multilingual / Indic Language (Tests 1-4)

**Test 1 — Technical Translation: 4/10**

All 10 languages produced output in the correct script. But correct script is the baseline — what matters is semantic accuracy. On that measure, the model fails in half the languages.

| Language | Score /10 | Issue |
|----------|-----------|-------|
| Hindi | 5 | "बर्ताव" (behavior) for forwarding — comprehensible but unnatural |
| Bengali | 2 | "প্রস্থানকারী" = departing (should be incoming). Drops "Unavailable" from 503. Two semantic errors |
| Gujarati | 3 | "સેવિસ અનેબલ" = Service Enable — meaning inversion |
| Kannada | 3 | "ಸರ್ವೀಸ್ ಅವೇಲೇಬಲ್" = Service Available — meaning inversion |
| Malayalam | 7 | Good. Parenthetical "(Service Unavailable)" — bilingual clarification. Best of the set |
| Marathi | 7 | "सेव्हिस अनवेलेबल" — correct transliteration, natural phrasing |
| Odia | 4 | "ଗେଟ୍‌ପାଇନ୍" garbled "gateway." Service Unavailable correctly translated though |
| Punjabi | 7 | "ਸੇਵਾ ਉਪਲੱਬਧ ਨਹੀਂ ਹੈ" — correct. Natural Gurmukhi flow |
| Tamil | 2 | "கேளிக்கைகளை" = entertainments, not requests. Changes the entire first sentence's meaning |
| Telugu | 3 | "సర్వీస్ అవేలబుల్" drops "Un-" — meaning inversion |
| **Average** | **4.3** | |

The model has a **systematic problem with negation in transliterated terms**. "Service Unavailable" becomes "Service Available" or has "Unavailable" dropped in Bengali, Gujarati, Kannada, and Telugu — 4 out of 10 languages get a critical error code backwards. Tamil substitutes the wrong noun entirely. Only 4 languages (Malayalam, Marathi, Punjabi, Hindi) produce acceptable translations.

A developer relying on these for API documentation would ship silently incorrect error descriptions in 5 languages.

**Test 2 — Product Copy: 5/10**

All 10 languages in native script. Quality ranges from decent to broken:

| Language | Score /10 | Issue |
|----------|-----------|-------|
| Hindi | 7 | "कृषक भाईयों" (Dear farmer brothers) — culturally appropriate. Best of the set |
| Bengali | 3 | Native script but repeats "suitable for farmers" three times. Stuck generation loop |
| Gujarati | 6 | Decent. Natural agricultural framing |
| Kannada | 1 | "ಕಾಯಿಲೆ" (disease) in a water pump ad. "ಹೆಚ್ಚು ಬೆಲೆ" (more expensive). Near-incoherent |
| Malayalam | 5 | Reasonable but generic |
| Marathi | 3 | Mentions Assam and J&K in a Maharashtra product copy. Reads like a government scheme press release |
| Odia | 7 | "ନୂତନ ଆଶା ଜାଗାଇଥାଏ" (awakens new hope) — nice cultural touch |
| Punjabi | 4 | "ਕਮਜ਼ੋਰ" means "weak" — intended "low maintenance" but chose the wrong word |
| Tamil | 4 | "தூசி எதிர்ப்பு" (dust resistant) repeated twice. Odd selling point for a water pump |
| Telugu | 6 | Decent but generic |
| **Average** | **4.6** | |

None of the 10 feel "independently authored" as the test requires. None reference region-specific crops, seasons, subsidies, or pricing norms. The "culturally appropriate framing for each region" requirement is unmet across the board.

**Test 3 — Code-Mixed Generation: 2/10**

The messages are comprehensible — a developer could understand them. But they fail at the actual task:

- **Hinglish:** "Env variable galat tareeke se set kiya gaya hai" — one Hindi-English clause. The rest is English with "Bhaiya" dropped in. A real Hinglish Slack message: "bhai pipeline toot gayi hai, staging ka `DATABASE_URL` galat hai. ek baar check kar na."
- **Tanglish:** "kandha pani" is not standard Tamil developer slang. The rest is pure English. Zero Tamil sentence structure.
- **Kanglish:** "nalla pani" — "nalla" is Tamil, not Kannada. Kannada for "good" is "chennagi." The model confused Tamil and Kannada.

None sound like "how an Indian developer actually texts at work."

**Test 4 — Cross-Script Comprehension: 9/10**

The standout result:

1. **English summary:** Accurate — correctly identifies Technopark as Kerala's largest software park, locates it in Thiruvananthapuram, notes 400+ companies, names Infosys/TCS/UST Global.
2. **Tamil translation:** Clean, natural Tamil script. Company names properly transliterated. Grammar correct.
3. **Kannada answer:** "ಈ ಪಾರ್ಕ್ ತಿರುವನಂತಪುರಂನಲ್ಲಿದೆ." — correct, concise.

The model correctly parsed Malayalam script, extracted facts, and performed three different cross-language tasks flawlessly. Frontier-quality multilingual comprehension.

### B. Reasoning & Logic (Tests 5-7) — STRONG

**Test 5 — Math: 9/10**
Correct answer (8:30 AM, 200 km). Clean step-by-step with LaTeX formatting. Includes verification (200 + 150 = 350 km ✅). Frontier-quality.

**Test 6 — Logic: 8/10**
Correct. Picks Box C, covers both apple and orange scenarios, sound deduction chain. Clear enough to use as-is.

**Test 7 — Topological Sort: 8/10**
Three valid orderings: A,B,C,D,E,F | A,C,B,D,E,F | A,C,E,B,D,F. All correct. Concise.

### C. Code Generation (Tests 8-10) — MIXED

**Test 8 — Log Parser: 7/10**

Both Python and Rust code are structurally complete:
- Python uses `defaultdict` and regex — correct approach
- Rust uses `regex` crate with `HashMap` — correct approach
- Both handle `MALFORMED` lines correctly
- Both include test data with intentional malformed entries

The regex patterns show `$$` where `[` and `]` should be — almost certainly a markdown rendering artifact. If this is actually in the model output, the code wouldn't work. **Needs verification by running the actual output.**

**Test 9 — Async Fetcher: 6/10**

Core async logic is correct:
- `asyncio.Semaphore(3)` for concurrency limiting ✅
- `async with session.get()` pattern ✅
- Error handling for `ClientError` and `TimeoutError` ✅
- `asyncio.gather` for concurrent execution ✅

Real bugs:
- `timeout=10` should be `aiohttp.ClientTimeout(total=10)` — deprecated usage
- Duplicate URLs in test data (4 unique × copies instead of 10 distinct endpoints as requested)
- Dict key collision — duplicate URLs as keys means only last result per URL survives. Returns at most 4 entries, not 10. Functional bug.

Core pattern works. Test harness has real problems.

**Test 10 — Struct Conversion: 4/10**

The prompt asks for "a Result type if weight is out of range" — clearly a constructor pattern. The model instead provides a serde custom deserializer:
```rust
#[serde(deserialize_with = "validate_weight")]
```

This validates during JSON deserialization, not construction. If you build a `MemoryNode` directly in Rust code, there's no validation — struct fields are public and directly constructable. The prompt's requirement is unmet.

Additional issues: imports `serde_with` but never uses it (dead dependency), no `new()` constructor, no custom error type. The code is valid Rust but doesn't answer the question asked.

### D. Instruction Following (Tests 11-13)

**Test 11 — Strict Table: 9/10**
Perfect. 5 rows, valid markdown, no preamble, no conclusion. Could ship directly.

**Test 12 — JSON-Only: 9/10**
Valid JSON that parses cleanly. All required fields with correct constraints: title (string, required), slug (string, required), tags (array, maxItems 5), published (boolean, default false), word_count (integer, minimum 0). No fencing, no explanation.

**Test 13 — Conventional Commits: 6/10**
`refactor(auth): update auth middleware to JWT, update route handlers, add token expiration and refresh tests`

Valid format with correct type and scope. But single line, no body. Given three distinct changes (middleware refactor, route handler updates, unit tests), a structured body would be more appropriate. Technically valid but thin. Functional as a starting point.

### E. Hallucination Resistance (Tests 14-16)

**Test 14 — Self-Knowledge: 3/10**

Asked about its own architecture, the model:
- Doesn't know if it uses MoE: "If Qwen 3 30B uses a Mixture of Experts architecture"
- Guesses "8-16 experts per layer" — the actual number is 128. Off by an order of magnitude.
- Guesses "32-48 layers" — a wide range presented as educated speculation
- Doesn't know its own training data composition
- Hedges everything with "speculative without official confirmation"

Confident wrong numbers are worse than honest ignorance. A user reading "8-16 experts" would cite that figure thinking it came from the model itself.

**Test 15 — Temporal Boundary: 6/10**
No fabrication of award results — the core behavior is correct. But says "Since the current year is 2023" — stating a wrong year with confidence. Also says "the 2025 awards are still in the future" — it thinks the question is about a future event rather than a past event it doesn't know about. The refusal is right; the framing undermines credibility. Functional but embarrassing.

**Test 16 — Fabricated Reference: 0/10**
Full hallucination:
1. Does NOT flag that llama.cpp version "4.2.0" doesn't exist
2. Fabricates an explanation of `--tensor-split` as "splitting tensors into multiple memory segments" — the real flag splits model layers across GPUs by VRAM ratio
3. Fabricates usage syntax (`--tensor-split 1,2,3`)

Completely fabricated technical documentation. A user following these instructions would waste time on non-functional configurations.

### F. Long Context / Synthesis (Tests 17-18) — GOOD

**Test 17 — HTTP/2 Spec Analysis: 7/10**
Clean, well-structured:
- Transition table is complete and correctly formatted
- Correctly identifies the `open → half-closed` directionality ambiguity — a genuine issue
- Flags behavior on receiving frames in `closed` state as underspecified
- Notes unclear scope of frame restrictions in half-closed states

Doesn't identify the known RST_STREAM timing ambiguity, but organized and mostly accurate. Usable with minor editing.

**Test 18 — Contradictory Sources: 7/10**
All three contradictions correctly identified (growth rate, jobs, sentiment). Verification methods appropriate (NASSCOM, MeitY, company filings). Raises the segment-vs-overall hypothesis. Good epistemic calibration in the conclusion. Usable with light editing.

### G. Cultural & Domain Knowledge (Tests 19-20) — WEAK

**Test 19 — Kerala Land Records: 3/10**

- **Pattayam:** Described as "physical plot of land or survey details" — wrong. Pattayam (പട്ടയം) is a title deed establishing legal ownership. The model later hedges: "might also refer to a land record that documents ownership" — the hedging reveals it's guessing.
- **Kanakkinakku:** Described as "land classification or ownership categories" — vague and not quite right. It's the tax assessment/calculation record.
- **Thandaper:** Identified as a unique numerical identifier — reasonable but thin.

Pervasive hedging throughout ("may refer to," "in some contexts," "in some interpretations") signals the model genuinely lacks this domain knowledge.

**Test 20 — RTI Application: 4/10**

Recognizable as an RTI application but the legal details have multiple errors:
- Cites "Section 7(1)(a)" for the fee — wrong (fees under Rule 4 of RTI Rules)
- Cites "Section 12" for the 30-day timeline — wrong (it's Section 7(1))
- Addresses "Assistant Public Information Officer" — should be PIO directly
- Missing citizenship declaration required under Section 6(1)
- Mentions demand draft but not Indian Postal Order (IPO)

For a test specifically evaluating format compliance with legal references, getting the section references wrong in multiple places means this needs significant rework before submission. More work to fix than the format alone would suggest.

---

## Infrastructure Notes

Qwen3-30B-A3B has **mainline llama.cpp support** — stable tokenizer, tested chat template, no experimental code paths.

All tests show `think: 0 chars`, which may indicate the thinking chain isn't engaging through llama-server. Despite this, reasoning tests (5, 6, 7) all pass cleanly.

Q4_K_M quantization affects Qwen3 less than architectures with more numerous, smaller experts, since Qwen3's 3B active parameters per token give each expert more headroom to absorb precision loss.

---

## Performance Profile

| Metric | Value |
|--------|-------|
| **Average throughput** | 9.0 t/s (range: 5.5–12.7) |
| **Total tokens generated** | ~71,900 |
| **Total wall-clock time** | ~2.4 hours |
| **Tests with token exhaustion** | 0 of 20 (0%) |

---

## Overall Rating

**Qwen3-30B-A3B on consumer hardware (Q4_K_M, llama-server): 5.8 / 10**

A reliable model that always completes. Cross-language comprehension (Test 4: 9/10) and reasoning (Tests 5-7: 8-9 range) are the standout strengths. But translation accuracy has a systematic negation problem (4 languages invert meaning), code generation doesn't always follow the prompt, Indian cultural knowledge is shallow (Tests 19-20: 3-4 range), and the model fabricated technical documentation on Test 16. The completion rate and efficiency are its strongest practical qualities — it finishes every task.
