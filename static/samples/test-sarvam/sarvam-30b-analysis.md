# Sarvam 30B (Q4_K_M) — Benchmark Analysis

**Analyst:** Claude (for Narayan / nryn.dev)
**Date:** 2026-03-29
**Hardware:** RTX 4070 Super (12GB), llama-server, -ngl 28 -c 28192 -fa on
**Model:** sarvam-30B-Q4_K_M (lmstudio-community), 30B total / 2.4B active, MoE 128 experts, top-6
**Scale:** 0 = harmful/empty, 1-2 terrible, 3-4 poor, 5-6 functional, 7-8 good, 9-10 excellent/frontier

---

## Scoring Summary

| # | Test | Category | Score /10 | Verdict | Notes |
|---|------|----------|-----------|---------|-------|
| 1 | Technical translation | Multilingual | **6** | Functional | 9/10 high quality; Kannada empty (token exhaustion). Avg 6.9 where completed, 6.2 including empty |
| 2 | Product copy | Multilingual | **5** | Functional | 3/10 Roman script (unusable); 7/10 decent. Avg 6.6 where correct script, 4.6 overall |
| 3 | Code-mixed gen | Multilingual | **2** | Terrible | Essentially English. Zero authentic code-switching |
| 4 | Cross-script comprehension | Multilingual | **0** | Empty/Harmful | Claimed valid Malayalam wasn't valid text. Actively wrong |
| 5 | Math (trains) | Reasoning | **9** | Excellent | Correct: 8:30 AM, 200 km. Step-by-step with verification |
| 6 | Logic (boxes) | Reasoning | **8** | Good | Correct deduction, both scenarios covered |
| 7 | Topological sort | Reasoning | **8** | Good | 3 valid orderings + 1 bonus, all verified |
| 8 | Log parser (Py+Rust) | Code | **0** | Empty | Token exhaustion (28257 tok, finish: length) |
| 9 | Async fetcher | Code | **0** | Empty | Token exhaustion (28277 tok, finish: length) |
| 10 | Struct conversion | Code | **7** | Good | Correct approach, custom error enum, idiomatic Rust. Minor: missing serde_json in Cargo.toml |
| 11 | Strict table | Instruction | **9** | Excellent | Exactly 5 rows, valid markdown, no preamble. Perfect |
| 12 | JSON-only | Instruction | **0** | Empty | Token exhaustion (28311 tok, finish: length) |
| 13 | Conventional Commits | Instruction | **8** | Good | Correct format, imperative mood, structured body with rationale |
| 14 | Self-knowledge | Hallucination | **5** | Functional | Honest about not knowing; correctly self-identifies as Sarvam MoE. But knows none of its own public specs. 100b claim unverified |
| 15 | Temporal boundary | Hallucination | **9** | Excellent | Clean refusal, no fabrication, appropriate suggestions. Textbook behavior |
| 16 | Fabricated reference | Hallucination | **0** | Harmful | Fabricated detailed explanation for nonexistent version; invented fictional flags and mechanisms |
| 17 | HTTP/2 spec analysis | Synthesis | **6** | Functional | Complete transition listing, valid insights on reserved state timeouts. Some confused ambiguity points |
| 18 | Contradictory sources | Synthesis | **7** | Good | All 3 contradictions identified, good verification methods, creative reconciliation |
| 19 | Kerala land records | Cultural | **3** | Poor | Core terms wrong on original prompt (IAST diacritics mangled). Retest with ASCII scored 7 — see analysis |
| 20 | RTI application | Cultural | **7** | Good | Correct PIO addressing, Section 6(1), fee, 30-day timeline. Minor section reference error |

**Total: 99/200 | Average: 5.0/10**

*On 16 completed tests (excluding 4 token-exhaustion zeros): 99/160 = 6.2/10*

---

## Detailed Analysis by Category

### A. Multilingual / Indic Language (Tests 1-4)

**Test 1 — Technical Translation: 6/10**

| Language | Score /10 | Issue |
|----------|-----------|-------|
| Hindi | 7 | Natural, clean, tech terms retained in English |
| Bengali | 7 | Correct script, good transliteration of tech terms |
| Gujarati | 7 | Kept "Service Unavailable" in English appropriately |
| Kannada | 0 | **Empty** — token exhaustion (28,244 tok, finish: length) |
| Malayalam | 8 | Excellent. Natural flow, tech terms in English. Best of any translation in the benchmark |
| Marathi | 7 | Clean Devanagari, natural grammar |
| Odia | 6 | Correct script, more English terms retained than ideal but reasonable |
| Punjabi | 7 | Good Gurmukhi flow, natural phrasing |
| Tamil | 7 | Correct script, natural sentence structure |
| Telugu | 6 | Partially translated "Service Unavailable" to Telugu — minor inconsistency |
| **Average** | **6.2** | 6.9 on 9 completed languages |

Where Sarvam completes a translation, it's accurate — no meaning inversions, correct technical term handling. The Kannada empty output (token exhaustion) is the sole failure, costing a full point on the average.

**Test 2 — Product Copy: 5/10**

| Language | Score /10 | Issue |
|----------|-----------|-------|
| Hindi | 7 | Punchy, natural, farmer-centric voice |
| Bengali | 0 | **Roman transliteration** — not Bengali script. Instruction violation |
| Gujarati | 0 | **Roman transliteration** — not Gujarati script. Instruction violation |
| Kannada | 7 | Nice farmer-centric voice, natural Kannada |
| Malayalam | 7 | Clean, natural |
| Marathi | 6 | Decent but follows same template as others |
| Odia | 6 | Sparse but effective |
| Punjabi | 0 | **Roman transliteration** — not Gurmukhi. Instruction violation |
| Tamil | 6 | Decent |
| Telugu | 7 | Good imagery — "with the sun itself, water for your field" |
| **Average** | **4.6** | 6.6 on 7 languages with correct script |

Three languages output Roman transliteration instead of the requested native script — completely unusable for those languages. The 7 that use correct scripts are decent, with Telugu and Hindi being the strongest. None feel "independently authored" or culturally differentiated by region.

**Test 3 — Code-Mixed Generation: 2/10**

All three outputs are comprehensible messages about a broken deployment pipeline — a developer could understand them. But they fail at the actual task:
- **Hinglish:** Only "yaar" is Hindi. The rest is standard English.
- **Tanglish:** Only "bro" marks it. Zero Tamil words.
- **Kanglish:** "Check panni" is Tamil (panni = do), not Kannada. Wrong language.

A real Hinglish Slack message: "bhai pipeline toot gayi hai, ek env variable galat set hua hai staging mein. `DATABASE_URL` check kar na ek baar?"

**Test 4 — Cross-Script Comprehension: 0/10**

Actively wrong output:
1. Claimed the Malayalam paragraph "is not a proper Malayalam sentence" — it is a grammatically correct, factually straightforward paragraph about Technopark.
2. Treated the numbered instructions as the "content" instead of as tasks about the Malayalam paragraph.
3. Produced Kannada output restating the instructions, answering nothing.

Zero thinking tokens reported (think: 0 chars). The model may not have engaged its reasoning chain, leading to a superficial parse of the prompt. This failure may be infrastructure-related (unmerged PR chat template), but the output is actively misleading.

### B. Reasoning & Logic (Tests 5-7) — STRONG

**Test 5 — Math: 9/10**
Correct answer (8:30 AM, 200 km). Step-by-step table format with intermediate calculations, includes verification (200 + 150 = 350 ✅). Frontier-quality reasoning. The hex artifacts (`<0xE2><0x80><0xAF>`) are narrow no-break spaces from the GGUF tokenizer — cosmetic only.

**Test 6 — Logic: 8/10**
Textbook-correct. Picks Box C (labeled "Both"), covers both the apple and orange scenarios, deduction chain is clean. Explains the reasoning clearly enough to use as-is.

**Test 7 — Topological Sort: 8/10**
Three valid orderings (A,B,C,D,E,F | A,C,B,E,D,F | A,B,C,E,D,F) with explicit constraint verification for each. Also offers A,C,E,B,D,F as a bonus fourth. All valid.

### C. Code Generation (Tests 8-10) — MOSTLY UNTESTABLE

**Test 8 — Log Parser: 0/10**
Empty output. 28,257 tokens consumed, finish: length. The thinking model spent its entire token budget on internal reasoning without producing visible code.

**Test 9 — Async Fetcher: 0/10**
Empty output. 28,277 tokens consumed, finish: length. Same pattern.

Both failures are the single most impactful infrastructure issue in the benchmark. Sarvam's coding ability cannot be assessed on these tests.

**Test 10 — Struct Conversion: 7/10**
Strong Rust output, usable with one fix:
- Correct `#[derive(Serialize, Deserialize, Debug, PartialEq)]`
- Custom `WeightError` enum implementing `Display` and `Error` traits — idiomatic
- `Result<Self, WeightError>` return type on `new()` — directly answers the prompt
- `chrono::NaiveDateTime` for the datetime field
- Working `main()` with both success and failure examples

Minor: uses `serde_json::to_string_pretty()` in `main()` but `serde_json` isn't in `Cargo.toml`. One dependency line fix from compiling.

### D. Instruction Following (Tests 11-13)

**Test 11 — Strict Table: 9/10**
Exactly 5 rows, valid markdown, no preamble or conclusion. Meets every requirement. Could ship directly.

**Test 12 — JSON-Only: 0/10**
Empty output. 28,311 tokens, finish: length. The simplest format compliance test — a JSON Schema is maybe 20 lines — and the thinking model burned through 28K tokens producing nothing.

**Test 13 — Conventional Commits: 8/10**
`refactor(auth): switch from session cookies to JWT` — correct type, correct scope, imperative mood. Well-structured body with rationale and change description. Minor: wrapped in markdown code fencing rather than raw text.

### E. Hallucination Resistance (Tests 14-16)

**Test 14 — Self-Knowledge: 5/10**
Correctly identifies itself as "Sarvam's AI Assistant" with MoE architecture. Honestly admits it doesn't know specific details. But it should know: 19 layers, 128 experts, top-6 routing, sigmoid gating, Hindi 28% training split — all publicly documented. It knows none of these. The mention of "multiple sizes including 3b, 30b, 100b" — the 100b claim is unverified and may itself be fabricated. Functional as a response but a missed opportunity.

**Test 15 — Temporal Boundary: 9/10**
Clean, honest refusal. Admits it doesn't have access to 2025 Kerala State Film Award results. Suggests checking official sources, Kerala media, the Film Development Corporation. No fabrication. Textbook behavior for temporal uncertainty.

**Test 16 — Fabricated Reference: 0/10**
Actively harmful hallucination:
1. Does NOT flag that llama.cpp version "4.2.0" doesn't exist (llama.cpp uses build numbers like b4596, not semver)
2. Fabricates a fictional "activation-based tensor splitting with chunk-based dynamic weight loading" mechanism. The real `--tensor-split` flag splits model layers across multiple GPUs by VRAM ratio.
3. Fabricates companion flags (`--cpu-memory`, `--tensor-parallel`) that don't exist in llama.cpp
4. Provides extensive, confident, completely wrong usage examples

A user following these instructions would implement non-functional configurations and waste hours debugging. The most dangerous type of hallucination: authoritative, detailed, plausible-sounding, and fundamentally wrong.

### F. Long Context / Synthesis (Tests 17-18)

**Test 17 — HTTP/2 Spec Analysis: 6/10**
The transition listing is complete and accurate. The error path analysis raises valid points (what happens on invalid frames in various states). The ambiguity section has genuine insights — reserved state timeout gaps, PUSH_PROMISE local state uncertainty — mixed with confused points (the HEADERS-on-half-closed section conflates things). Doesn't identify the known RST_STREAM timing ambiguity. Usable as a starting point with editing.

**Test 18 — Contradictory Sources: 7/10**
Strong analysis:
- All three contradiction points identified (growth rate, jobs, sentiment)
- Claims categorized by verifiability
- Specific verification methods (NASSCOM reports, company filings, MeitY data)
- Creative reconciliation hypothesis (segment-level vs. industry-level numbers)

Minor: the reconciliation is presented as likely truth rather than one possible explanation. Usable with light editing.

### G. Cultural & Domain Knowledge (Tests 19-20)

**Test 19 — Kerala Land Records: 3/10 (original prompt) | 7/10 (retest)**

**Original run (with IAST diacritics `paṭṭayam`, `kanakkiṇakku`):** Core terms wrong. Output "paayam" (physical land) and "kanakkiakku" instead of the correct terms. Confused explanation. Scored 3/10.

**Retest (plain ASCII `pattayam`, `kanakkinakku`):** Confirmed as a tokenizer encoding issue. With clean input:
- Pattayam correctly identified as the title deed / proof of ownership
- Kanakkinakku correctly identified as the tax calculation record
- Clear comparison table, good analogies
- Thandaper explained as a unique plot identifier alongside survey numbers

The IAST underdots (ṭ = U+1E6D, ṇ = U+1E47) were mangled by the GGUF tokenizer in the unmerged PR. The model has the correct knowledge — the infrastructure hides it. **Scoring the original prompt at 3/10 for fairness** (both models received the same prompt).

Practical implication: **users of quantized Indic models should avoid academic transliteration diacritics and prefer plain ASCII or native script.**

**Test 20 — RTI Application: 7/10**
Well-formatted, usable template:
- Correct Section 6(1) reference for the right to information
- ₹10 fee mention with payment method (IPO/DD)
- Proper PIO addressing for BBMP at K.R. Market
- 30-day response timeline
- Clear, numbered information requests

Minor issues: references Section 7(1) for fee payment (should be Rule 4 of RTI Rules), includes an unnecessary "Key Sections" appendix. One fix from submission-ready.

---

## Infrastructure Context

### Token Exhaustion (4 tests)
Tests 1 (Kannada), 8, 9, and 12 produced empty output because thinking tokens consumed the output budget. This is a llama-server limitation — it doesn't separate thinking tokens from output tokens. 20% of the benchmark is untestable on this setup.

### Unmerged PR
Sarvam 30B's llama.cpp support comes from an unmerged pull request, not mainline. Chat template handling may be incomplete, tokenizer mappings have confirmed edge cases (IAST diacritics), and stop token detection for thinking block boundaries may not work correctly. This is not how Sarvam AI ships the model — the official recommendation is sglang with BF16 weights.

### Quantization Impact on MoE
128 experts with top-6 routing means each active expert is ~19M parameters. Q4_K_M precision loss hits proportionally harder on smaller experts. Routing decisions depend on quantized weight values — slightly-off gating scores can cascade through wrong expert selection.

---

## Performance Profile

| Metric | Value |
|--------|-------|
| **Average throughput** | 9.4 t/s (range: 7.6–14.2) |
| **Total tokens generated** | ~222,000 |
| **Total wall-clock time** | ~7.2 hours |
| **Tests with token exhaustion** | 4 of 20 (20%) |

---

## Overall Rating

**Sarvam 30B on consumer hardware (Q4_K_M, llama-server, unmerged PR): 5.0 / 10**

On 16 completed tests the average is 6.2 — solidly in the "functional, usable with editing" range. Four token-exhaustion zeros drag the overall to 5.0. Reasoning is strong (8-9 range). Indian cultural knowledge is good when input encoding is clean (Test 19 retest: 7, Test 20: 7). The hallucination on Test 16 is the one unambiguous model-level failure.

This benchmark measures the practical local inference experience, not the model in isolation. Sarvam 30B likely performs better on its recommended infrastructure (sglang + BF16).
