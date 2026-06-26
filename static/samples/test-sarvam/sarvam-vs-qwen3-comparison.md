# HEAD-TO-HEAD: Sarvam 30B vs. Qwen3-30B-A3B

**Setup:** Both models Q4_K_M GGUF, identical llama-server config, same RTX 4070 Super (12GB)
**Config:** `llama-server -m <model>.gguf -ngl 28 -c 28192 -fa on --host 0.0.0.0 --port 8080`
**Scale:** 0 = harmful/empty, 1-2 terrible, 3-4 poor, 5-6 functional, 7-8 good, 9-10 excellent/frontier
**Note:** Sarvam runs on an unmerged llama.cpp PR; Qwen3 runs on mainline support

---

## Score Comparison (All 20 Tests)

| # | Test | Sarvam | Qwen3 | Winner | Notes |
|---|------|--------|-------|--------|-------|
| 1 | Technical translation | **6** | **4** | **Sarvam** | Sarvam: 9/10 high quality (avg 6.9). Qwen3: 10/10 but meaning inversions in 4 languages |
| 2 | Product copy | **5** | **5** | **TIE** | Different failures: Sarvam 3 wrong scripts, Qwen3 Kannada incoherent. Both avg 4.6 per-language |
| 3 | Code-mixed gen | **2** | **2** | **TIE** | Both fail. Neither produces authentic code-switching. Both confuse Tamil and Kannada |
| 4 | Cross-script comprehension | **0** | **9** | **Qwen3** | Largest gap. Sarvam: actively wrong. Qwen3: frontier-quality |
| 5 | Math (trains) | **9** | **9** | **TIE** | Both correct: 8:30 AM, 200 km |
| 6 | Logic (boxes) | **8** | **8** | **TIE** | Both correct |
| 7 | Topological sort | **8** | **8** | **TIE** | Both correct |
| 8 | Log parser | **0** | **7** | **Qwen3** | Sarvam: token exhaustion. Qwen3: complete, correct structure |
| 9 | Async fetcher | **0** | **6** | **Qwen3** | Sarvam: token exhaustion. Qwen3: core pattern works, test harness buggy |
| 10 | Struct conversion | **7** | **4** | **Sarvam** | Sarvam: idiomatic constructor+Result. Qwen3: wrong approach |
| 11 | Strict table | **9** | **9** | **TIE** | Both perfect |
| 12 | JSON-only | **0** | **9** | **Qwen3** | Sarvam: token exhaustion. Qwen3: valid, parses clean |
| 13 | Conventional Commits | **8** | **6** | **Sarvam** | Both valid format; Sarvam includes structured body |
| 14 | Self-knowledge | **5** | **3** | **Sarvam** | Sarvam: honest about not knowing. Qwen3: guesses wrong numbers (8-16 experts vs actual 128) |
| 15 | Temporal boundary | **9** | **6** | **Sarvam** | Sarvam: textbook refusal. Qwen3: right refusal but "current year is 2023" |
| 16 | Fabricated reference | **0** | **0** | **TIE** | Both hallucinate. Sarvam's more elaborate/dangerous |
| 17 | HTTP/2 spec analysis | **6** | **7** | **Qwen3** | Qwen3: cleaner structure, better ambiguity analysis |
| 18 | Contradictory sources | **7** | **7** | **TIE** | Both strong |
| 19 | Kerala land records | **3** | **3** | **TIE** | Both: core terms wrong. Sarvam retest (ASCII) scored 7 — confirmed tokenizer issue |
| 20 | RTI application | **7** | **4** | **Sarvam** | Sarvam: usable template. Qwen3: multiple wrong section references |

---

## Win Count

| | Wins | Ties |
|---|------|------|
| **Sarvam** | 5 (1, 10, 13, 14, 15, 20) | — |
| **Qwen3** | 5 (4, 8, 9, 12, 17) | — |
| **Tie** | — | 10 (2, 3, 5, 6, 7, 11, 16, 18, 19) |

Wait — that's 6 Sarvam, 5 Qwen3, 9 ties = 20. Let me recount.

Sarvam wins: 1, 10, 13, 14, 15, 20 = **6**
Qwen3 wins: 4, 8, 9, 12, 17 = **5**
Ties: 2, 3, 5, 6, 7, 11, 16, 18, 19 = **9**

**Sarvam 6 — Qwen3 5 — Tie 9**

---

## Aggregate Scores

| Metric | Sarvam 30B | Qwen3-30B-A3B |
|--------|-----------|---------------|
| **Total** | 99/200 | 116/200 |
| **Average (all 20)** | **5.0** | **5.8** |
| **Average (completed tests only)** | **6.2** (16 tests) | **5.8** (20 tests) |
| **Token exhaustion zeros** | 4 | 0 |
| **Average throughput** | 9.4 t/s | 9.0 t/s |
| **Total wall-clock time** | ~7.2 hours | ~2.4 hours |
| **Total tokens generated** | ~222K | ~72K |

---

## Test 1 Deep Dive: Translation Quality vs. Completion

| Language | Sarvam | Qwen3 | Better |
|----------|--------|-------|--------|
| Hindi | 7 | 5 | Sarvam |
| Bengali | 7 | 2 | Sarvam |
| Gujarati | 7 | 3 | Sarvam |
| Kannada | 0 | 3 | Qwen3 |
| Malayalam | 8 | 7 | Sarvam |
| Marathi | 7 | 7 | Tie |
| Odia | 6 | 4 | Sarvam |
| Punjabi | 7 | 7 | Tie |
| Tamil | 7 | 2 | Sarvam |
| Telugu | 6 | 3 | Sarvam |
| **Average** | **6.2** | **4.3** | **Sarvam** |

Sarvam wins 7 languages, Qwen3 wins 1 (Kannada, by default — Sarvam's is empty), 2 ties. Where Sarvam completes, it's materially more accurate. Qwen3 completes all 10 but gets the meaning of "Service Unavailable" wrong in 4 of them.

## Test 2 Deep Dive: Product Copy Quality

| Language | Sarvam | Qwen3 | Better |
|----------|--------|-------|--------|
| Hindi | 7 | 7 | Tie |
| Bengali | 0 | 3 | Qwen3 |
| Gujarati | 0 | 6 | Qwen3 |
| Kannada | 7 | 1 | Sarvam |
| Malayalam | 7 | 5 | Sarvam |
| Marathi | 6 | 3 | Sarvam |
| Odia | 6 | 7 | Qwen3 |
| Punjabi | 0 | 4 | Qwen3 |
| Tamil | 6 | 4 | Sarvam |
| Telugu | 7 | 6 | Sarvam |
| **Average** | **4.6** | **4.6** | **Tie** |

Exactly tied at 4.6 — but completely different failure patterns. Sarvam: 3 zeros from wrong script (Bengali, Gujarati, Punjabi), 7 languages averaging 6.6. Qwen3: no zeros but Kannada is near-incoherent (1/10), and several others have quality issues. Different failure modes, same result.

---

## Category Breakdown

### Multilingual (Tests 1-4)
- **Sarvam:** (6+5+2+0)/4 = 3.3
- **Qwen3:** (4+5+2+9)/4 = 5.0
- **Winner: Qwen3** — Test 4's 9-vs-0 gap drives this

### Reasoning (Tests 5-7)
- **Sarvam:** (9+8+8)/3 = 8.3
- **Qwen3:** (9+8+8)/3 = 8.3
- **Winner: TIE** — identical

### Code (Tests 8-10)
- **Sarvam:** (0+0+7)/3 = 2.3
- **Qwen3:** (7+6+4)/3 = 5.7
- **Winner: Qwen3** — by completion. On the one test both completed (10), Sarvam wins 7 vs 4.

### Instruction Following (Tests 11-13)
- **Sarvam:** (9+0+8)/3 = 5.7
- **Qwen3:** (9+9+6)/3 = 8.0
- **Winner: Qwen3** — by completion. Both equal where Sarvam finishes.

### Hallucination Resistance (Tests 14-16)
- **Sarvam:** (5+9+0)/3 = 4.7
- **Qwen3:** (3+6+0)/3 = 3.0
- **Winner: Sarvam** — Sarvam's textbook Test 15 and honest Test 14 vs Qwen3's wrong-year and wrong-number responses

### Synthesis (Tests 17-18)
- **Sarvam:** (6+7)/2 = 6.5
- **Qwen3:** (7+7)/2 = 7.0
- **Winner: Qwen3** — slightly stronger spec analysis

### Cultural/Domain (Tests 19-20)
- **Sarvam:** (3+7)/2 = 5.0
- **Qwen3:** (3+4)/2 = 3.5
- **Winner: Sarvam** — deeper Indian cultural knowledge

---

## The Five Key Differences

### 1. Completion Rate (Qwen3 wins decisively)
Qwen3 completed every test. Sarvam had 4 empty outputs from token exhaustion, each scoring 0. This is the single biggest factor in the overall score gap (5.0 vs 5.8). On completed tests, Sarvam actually scores higher (6.2 vs 5.8).

### 2. Cross-Script Comprehension (Qwen3 wins decisively)
Test 4: 9/10 vs 0/10. Qwen3 handled Malayalam→English→Tamil→Kannada flawlessly. Sarvam claimed the Malayalam paragraph wasn't valid text. Even accounting for possible infrastructure issues, this is a 9-point gap on the model's core claimed capability.

### 3. Indian Cultural Depth (Sarvam wins clearly)
Kerala land records (retest: 7 vs 3) and RTI formatting (7 vs 4). Sarvam knows Indian administrative systems and bureaucratic formats at a level Qwen3 doesn't approach. When tested with clean input encoding, Sarvam's Indian cultural knowledge is strong.

### 4. Translation Quality (Sarvam wins where it completes)
Per-language Test 1: Sarvam averages 6.9 across its 9 completed languages vs Qwen3's 4.3 across 10. Sarvam's translations are semantically accurate — no meaning inversions. Qwen3's systematic negation problem inverts "Service Unavailable" in 4 languages. Higher completion doesn't mean higher quality.

### 5. Efficiency (Qwen3 wins decisively)
Qwen3: 2.4 hours, 72K tokens, 20/20 completed. Sarvam: 7.2 hours, 222K tokens, 16/20 completed. On this hardware setup, Sarvam's thinking model architecture without proper token separation is catastrophically inefficient.

---

## The Shared Weaknesses

**Both hallucinate on Test 16.** Neither flags that llama.cpp version "4.2.0" doesn't exist. Sarvam's fabrication is more elaborate (invents specific mechanisms and companion flags); Qwen3's is more generic. Neither is acceptable. Both score 0/10.

**Both fail code-mixed generation (Test 3).** Neither can produce authentic Hinglish, Tanglish, or Kanglish. Both confuse Tamil and Kannada in the Kanglish attempt. Both score 2/10.

**Neither knows its own architecture (Test 14).** Sarvam knows it's an MoE model but can't cite its own specs. Qwen3 isn't sure if it uses MoE and guesses wrong expert counts. Both score in the 3-5 range.

---

## Infrastructure Context

| Factor | Impact on Sarvam | Impact on Qwen3 |
|--------|-----------------|-----------------|
| llama.cpp support | Unmerged PR (experimental) | Mainline (stable) |
| Thinking token handling | Thinking tokens eat output budget → 4 zeros | `think: 0` everywhere (may not be thinking) |
| Quantization sensitivity | 128 experts × top-6 = small experts hit harder | Larger active params, less sensitive |
| IAST diacritics | Confirmed tokenizer mangling (Test 19 retest) | Unknown impact |

### What Token Exhaustion Hides

4 of Sarvam's scores are 0 — not because the model can't do the task, but because the infrastructure consumed all tokens before producing output. On the one code test both completed (Test 10), Sarvam scored 7 vs Qwen3's 4. Three of Qwen3's five "wins" (Tests 8, 9, 12) are against empty output.

### The Diacritics Finding

Test 19's retest: same model, same quant, same server — only change was removing IAST underdots (ṭ→t, ṇ→n). Score jumped from 3 to 7. The model has correct knowledge that the tokenizer hides.

**Practical implication:** Users of quantized Indic models should avoid academic transliteration diacritics and prefer plain ASCII or native script.

---

## The Verdict

**Overall scores: Sarvam 5.0, Qwen3 5.8.** Both in the 5-6 "functional, usable with editing" range. Neither replaces a frontier model.

**The gap is reliability, not quality.** On completed tests, Sarvam averages 6.2 vs Qwen3's 5.8. Sarvam wins or ties 15 out of 20 head-to-head matchups. But four token-exhaustion zeros and a 3× longer runtime make Qwen3 the practical choice.

**For running locally today:** Qwen3. It finishes every task, does it 3× faster, and runs on stable mainline infrastructure.

**Where Sarvam wins, it wins clearly:** translation accuracy, Indian cultural knowledge, code quality, hallucination resistance. When the infrastructure works, Sarvam produces higher quality on the tasks that matter most for an Indian-language-focused model.

**The honest summary for the blog:** Sarvam wins 6 head-to-head tests, Qwen3 wins 5, with 9 ties. On completed tests, Sarvam's quality is higher. But Qwen3 completes everything and does it 3× faster. The four zeros from token exhaustion are what swing the overall score — and those are infrastructure failures, not model failures. What we can say: Qwen3 is the practical choice today. What we can't say: which model is actually better.
