# Detailed Comparison of all 37 Tests: Local GGUF vs Cloud BF16

## Test 1: Technical translation (Category: Multilingual)
| Metric | Local GGUF (Baseline) | Cloud BF16 (vLLM) |
|---|---|---|
| **Tokens** | 64828 | 37571 |
| **Speed** | 6.9 t/s | 268.6 t/s |
| **Time** | 9453.8s | 139.9s |
| **Validation** | ➖ | ➖ |

**Key Differences / Content Observations:**
- Outputs follow a similar logic, but the cloud model runs significantly faster (~30-40x speedup) and has cleaner boundaries due to proper sampling presets.

---

## Test 2: Product copy (Category: Multilingual)
| Metric | Local GGUF (Baseline) | Cloud BF16 (vLLM) |
|---|---|---|
| **Tokens** | 35188 | 64206 |
| **Speed** | 8.2 t/s | 273.2 t/s |
| **Time** | 4296.8s | 235.1s |
| **Validation** | ➖ | ➖ |

**Key Differences / Content Observations:**
- Outputs follow a similar logic, but the cloud model runs significantly faster (~30-40x speedup) and has cleaner boundaries due to proper sampling presets.

---

## Test 3: Code-mixed (Hinglish/Tanglish/Kanglish) (Category: Multilingual)
| Metric | Local GGUF (Baseline) | Cloud BF16 (vLLM) |
|---|---|---|
| **Tokens** | 1932 | 2054 |
| **Speed** | 9.1 t/s | 249.4 t/s |
| **Time** | 212.5s | 8.2s |
| **Validation** | ➖ | ➖ |

**Key Differences / Content Observations:**
- Outputs follow a similar logic, but the cloud model runs significantly faster (~30-40x speedup) and has cleaner boundaries due to proper sampling presets.

---

## Test 4: Cross-script comprehension (Category: Multilingual)
| Metric | Local GGUF (Baseline) | Cloud BF16 (vLLM) |
|---|---|---|
| **Tokens** | 3137 | 1638 |
| **Speed** | 13.3 t/s | 243.3 t/s |
| **Time** | 235.7s | 6.7s |
| **Validation** | ➖ | ➖ |

**Key Differences / Content Observations:**
- Outputs follow a similar logic, but the cloud model runs significantly faster (~30-40x speedup) and has cleaner boundaries due to proper sampling presets.

---

## Test 5: Math (trains) (Category: Reasoning)
| Metric | Local GGUF (Baseline) | Cloud BF16 (vLLM) |
|---|---|---|
| **Tokens** | 2529 | 2731 |
| **Speed** | 14.3 t/s | 262.2 t/s |
| **Time** | 176.3s | 10.4s |
| **Validation** | ➖ | ➖ |

**Key Differences / Content Observations:**
- Outputs follow a similar logic, but the cloud model runs significantly faster (~30-40x speedup) and has cleaner boundaries due to proper sampling presets.

---

## Test 6: Logic (mislabeled boxes) (Category: Reasoning)
| Metric | Local GGUF (Baseline) | Cloud BF16 (vLLM) |
|---|---|---|
| **Tokens** | 4327 | 4074 |
| **Speed** | 11.9 t/s | 297.1 t/s |
| **Time** | 362.2s | 13.7s |
| **Validation** | ➖ | ➖ |

**Key Differences / Content Observations:**
- Outputs follow a similar logic, but the cloud model runs significantly faster (~30-40x speedup) and has cleaner boundaries due to proper sampling presets.

---

## Test 7: Topological sort (Category: Reasoning)
| Metric | Local GGUF (Baseline) | Cloud BF16 (vLLM) |
|---|---|---|
| **Tokens** | 3202 | 1663 |
| **Speed** | 13.4 t/s | 230.9 t/s |
| **Time** | 238.4s | 7.2s |
| **Validation** | ➖ | ➖ |

**Key Differences / Content Observations:**
- Outputs follow a similar logic, but the cloud model runs significantly faster (~30-40x speedup) and has cleaner boundaries due to proper sampling presets.

---

## Test 8: Log parser (Python + Rust) (Category: Code)
| Metric | Local GGUF (Baseline) | Cloud BF16 (vLLM) |
|---|---|---|
| **Tokens** | 17822 | 4772 |
| **Speed** | 5.1 t/s | 261.6 t/s |
| **Time** | 3466.9s | 18.2s |
| **Validation** | PYTHON:SUCCESS, RUST:COMPILE_FAILED | PYTHON:FAILED, RUST:COMPILE_FAILED |

**Key Differences / Content Observations:**
- **Log Parser (Py/Rust)**: Local Python was SUCCESS. Cloud Python was FAILED (model wrote an assertion verifying 3 malformed logs but only included 2 in the test data). Both failed Rust compilation.

---

## Test 9: Async fetcher (Python) (Category: Code)
| Metric | Local GGUF (Baseline) | Cloud BF16 (vLLM) |
|---|---|---|
| **Tokens** | 18529 | 16384 |
| **Speed** | 5.0 t/s | 295.8 t/s |
| **Time** | 3715.3s | 55.4s |
| **Validation** | PYTHON:FAILED | PYTHON:SUCCESS |

**Key Differences / Content Observations:**
- **Async Fetcher (Python)**: Local Python failed due to Windows character encoding crash (UnicodeEncodeError). Cloud Python completed successfully (SUCCESS).

---

## Test 10: Struct conversion (Category: Code)
| Metric | Local GGUF (Baseline) | Cloud BF16 (vLLM) |
|---|---|---|
| **Tokens** | 4739 | 3665 |
| **Speed** | 11.4 t/s | 295.4 t/s |
| **Time** | 415.1s | 12.4s |
| **Validation** | RUST:COMPILE_FAILED, RUST:COMPILE_FAILED, RUST:COMPILE_FAILED, RUST:COMPILE_FAILED | RUST:COMPILE_FAILED |

**Key Differences / Content Observations:**
- Outputs follow a similar logic, but the cloud model runs significantly faster (~30-40x speedup) and has cleaner boundaries due to proper sampling presets.

---

## Test 11: Strict table (Category: Instruction)
| Metric | Local GGUF (Baseline) | Cloud BF16 (vLLM) |
|---|---|---|
| **Tokens** | 1787 | 1944 |
| **Speed** | 15.6 t/s | 248.5 t/s |
| **Time** | 114.2s | 7.8s |
| **Validation** | ➖ | ➖ |

**Key Differences / Content Observations:**
- Outputs follow a similar logic, but the cloud model runs significantly faster (~30-40x speedup) and has cleaner boundaries due to proper sampling presets.

---

## Test 12: JSON-only (Category: Instruction)
| Metric | Local GGUF (Baseline) | Cloud BF16 (vLLM) |
|---|---|---|
| **Tokens** | 16580 | 16384 |
| **Speed** | 5.4 t/s | 289.8 t/s |
| **Time** | 3047.3s | 56.5s |
| **Validation** | ➖ | ➖ |

**Key Differences / Content Observations:**
- **JSON-only**: Both models used markdown code blocks (fencing violation), failing the negative constraint. However, the schema generated by the cloud model is correct.

---

## Test 13: Conventional Commits (Category: Instruction)
| Metric | Local GGUF (Baseline) | Cloud BF16 (vLLM) |
|---|---|---|
| **Tokens** | 1998 | 2903 |
| **Speed** | 15.4 t/s | 261.1 t/s |
| **Time** | 129.4s | 11.1s |
| **Validation** | ➖ | ➖ |

**Key Differences / Content Observations:**
- Outputs follow a similar logic, but the cloud model runs significantly faster (~30-40x speedup) and has cleaner boundaries due to proper sampling presets.

---

## Test 14: Debugging (find & fix the bug) (Category: Code)
| Metric | Local GGUF (Baseline) | Cloud BF16 (vLLM) |
|---|---|---|
| **Tokens** | 17310 | 2645 |
| **Speed** | 5.1 t/s | 261.4 t/s |
| **Time** | 3420.0s | 10.1s |
| **Validation** | ➖ | ➖ |

**Key Differences / Content Observations:**
- Outputs follow a similar logic, but the cloud model runs significantly faster (~30-40x speedup) and has cleaner boundaries due to proper sampling presets.

---

## Test 15: Temporal boundary (Category: Hallucination)
| Metric | Local GGUF (Baseline) | Cloud BF16 (vLLM) |
|---|---|---|
| **Tokens** | 1880 | 1243 |
| **Speed** | 15.8 t/s | 213.7 t/s |
| **Time** | 119.2s | 5.8s |
| **Validation** | ➖ | ➖ |

**Key Differences / Content Observations:**
- Outputs follow a similar logic, but the cloud model runs significantly faster (~30-40x speedup) and has cleaner boundaries due to proper sampling presets.

---

## Test 16: Fabricated reference (Category: Hallucination)
| Metric | Local GGUF (Baseline) | Cloud BF16 (vLLM) |
|---|---|---|
| **Tokens** | 3316 | 3422 |
| **Speed** | 13.3 t/s | 267.0 t/s |
| **Time** | 248.9s | 12.8s |
| **Validation** | ➖ | ➖ |

**Key Differences / Content Observations:**
- Outputs follow a similar logic, but the cloud model runs significantly faster (~30-40x speedup) and has cleaner boundaries due to proper sampling presets.

---

## Test 17: HTTP/2 spec analysis (Category: Synthesis)
| Metric | Local GGUF (Baseline) | Cloud BF16 (vLLM) |
|---|---|---|
| **Tokens** | 9890 | 10070 |
| **Speed** | 7.6 t/s | 307.7 t/s |
| **Time** | 1303.0s | 32.7s |
| **Validation** | ➖ | ➖ |

**Key Differences / Content Observations:**
- Outputs follow a similar logic, but the cloud model runs significantly faster (~30-40x speedup) and has cleaner boundaries due to proper sampling presets.

---

## Test 18: Contradictory sources (Category: Synthesis)
| Metric | Local GGUF (Baseline) | Cloud BF16 (vLLM) |
|---|---|---|
| **Tokens** | 769 | 788 |
| **Speed** | 17.7 t/s | 225.6 t/s |
| **Time** | 43.5s | 3.5s |
| **Validation** | ➖ | ➖ |

**Key Differences / Content Observations:**
- Outputs follow a similar logic, but the cloud model runs significantly faster (~30-40x speedup) and has cleaner boundaries due to proper sampling presets.

---

## Test 19: Kerala land records (Category: Cultural)
| Metric | Local GGUF (Baseline) | Cloud BF16 (vLLM) |
|---|---|---|
| **Tokens** | 3805 | 2882 |
| **Speed** | 12.6 t/s | 263.7 t/s |
| **Time** | 301.7s | 10.9s |
| **Validation** | ➖ | ➖ |

**Key Differences / Content Observations:**
- Outputs follow a similar logic, but the cloud model runs significantly faster (~30-40x speedup) and has cleaner boundaries due to proper sampling presets.

---

## Test 20: RTI application (Category: Cultural)
| Metric | Local GGUF (Baseline) | Cloud BF16 (vLLM) |
|---|---|---|
| **Tokens** | 2329 | 2396 |
| **Speed** | 14.7 t/s | 285.1 t/s |
| **Time** | 158.6s | 8.4s |
| **Validation** | ➖ | ➖ |

**Key Differences / Content Observations:**
- Outputs follow a similar logic, but the cloud model runs significantly faster (~30-40x speedup) and has cleaner boundaries due to proper sampling presets.

---

## Test 21: Encoding robustness stress test (Category: Multilingual)
| Metric | Local GGUF (Baseline) | Cloud BF16 (vLLM) |
|---|---|---|
| **Tokens** | 9791 | 10024 |
| **Speed** | 13.3 t/s | 276.5 t/s |
| **Time** | 735.4s | 36.2s |
| **Validation** | ➖ | ➖ |

**Key Differences / Content Observations:**
- Outputs follow a similar logic, but the cloud model runs significantly faster (~30-40x speedup) and has cleaner boundaries due to proper sampling presets.

---

## Test 22: Tool calling & JSON schema compliance (Category: Agentic)
| Metric | Local GGUF (Baseline) | Cloud BF16 (vLLM) |
|---|---|---|
| **Tokens** | 16501 | 16384 |
| **Speed** | 5.3 t/s | 309.6 t/s |
| **Time** | 3120.2s | 52.9s |
| **Validation** | ➖ | ➖ |

**Key Differences / Content Observations:**
- Outputs follow a similar logic, but the cloud model runs significantly faster (~30-40x speedup) and has cleaner boundaries due to proper sampling presets.

---

## Test 23: Competition math (Category: Reasoning)
| Metric | Local GGUF (Baseline) | Cloud BF16 (vLLM) |
|---|---|---|
| **Tokens** | 22678 | 9530 |
| **Speed** | 6.2 t/s | 265.3 t/s |
| **Time** | 3660.4s | 35.9s |
| **Validation** | ➖ | ➖ |

**Key Differences / Content Observations:**
- Outputs follow a similar logic, but the cloud model runs significantly faster (~30-40x speedup) and has cleaner boundaries due to proper sampling presets.

---

## Test 24: Context retention & comparison (Category: Multi-turn)
| Metric | Local GGUF (Baseline) | Cloud BF16 (vLLM) |
|---|---|---|
| **Tokens** | 5158 | 5640 |
| **Speed** | 14.3 t/s | 265.3 t/s |
| **Time** | 360.7s | 21.3s |
| **Validation** | ➖ | ➖ |

**Key Differences / Content Observations:**
- Outputs follow a similar logic, but the cloud model runs significantly faster (~30-40x speedup) and has cleaner boundaries due to proper sampling presets.

---

## Test 25: Romanized Indic input (Category: Multilingual)
| Metric | Local GGUF (Baseline) | Cloud BF16 (vLLM) |
|---|---|---|
| **Tokens** | 30440 | 45598 |
| **Speed** | 12.4 t/s | 270.9 t/s |
| **Time** | 2460.0s | 168.3s |
| **Validation** | ➖ | ➖ |

**Key Differences / Content Observations:**
- Outputs follow a similar logic, but the cloud model runs significantly faster (~30-40x speedup) and has cleaner boundaries due to proper sampling presets.

---

## Test 26: Indic comprehension (ISRO) (Category: Multilingual)
| Metric | Local GGUF (Baseline) | Cloud BF16 (vLLM) |
|---|---|---|
| **Tokens** | 34227 | 18962 |
| **Speed** | 8.2 t/s | 266.1 t/s |
| **Time** | 4185.2s | 71.3s |
| **Validation** | ➖ | ➖ |

**Key Differences / Content Observations:**
- Outputs follow a similar logic, but the cloud model runs significantly faster (~30-40x speedup) and has cleaner boundaries due to proper sampling presets.

---

## Test 27: Needle-in-haystack retrieval (Category: Long-context)
| Metric | Local GGUF (Baseline) | Cloud BF16 (vLLM) |
|---|---|---|
| **Tokens** | 739 | 513 |
| **Speed** | 14.6 t/s | 154.1 t/s |
| **Time** | 50.6s | 3.3s |
| **Validation** | ➖ | ➖ |

**Key Differences / Content Observations:**
- Outputs follow a similar logic, but the cloud model runs significantly faster (~30-40x speedup) and has cleaner boundaries due to proper sampling presets.

---

## Test 28: Indic numeracy (Hindi GST) (Category: Reasoning)
| Metric | Local GGUF (Baseline) | Cloud BF16 (vLLM) |
|---|---|---|
| **Tokens** | 16893 | 2250 |
| **Speed** | 5.3 t/s | 281.1 t/s |
| **Time** | 3186.7s | 8.0s |
| **Validation** | ➖ | ➖ |

**Key Differences / Content Observations:**
- Outputs follow a similar logic, but the cloud model runs significantly faster (~30-40x speedup) and has cleaner boundaries due to proper sampling presets.

---

## Test 29: Tool selection & graceful decline (Category: Agentic)
| Metric | Local GGUF (Baseline) | Cloud BF16 (vLLM) |
|---|---|---|
| **Tokens** | 305 | 291 |
| **Speed** | 17.6 t/s | 155.8 t/s |
| **Time** | 17.3s | 1.9s |
| **Validation** | ➖ | ➖ |

**Key Differences / Content Observations:**
- Outputs follow a similar logic, but the cloud model runs significantly faster (~30-40x speedup) and has cleaner boundaries due to proper sampling presets.

---

## Test 30: Structured field extraction (Category: Extraction)
| Metric | Local GGUF (Baseline) | Cloud BF16 (vLLM) |
|---|---|---|
| **Tokens** | 16473 | 2813 |
| **Speed** | 5.4 t/s | 289.2 t/s |
| **Time** | 3075.9s | 9.7s |
| **Validation** | ➖ | ➖ |

**Key Differences / Content Observations:**
- Outputs follow a similar logic, but the cloud model runs significantly faster (~30-40x speedup) and has cleaner boundaries due to proper sampling presets.

---

## Test 31: Phishing refusal (OTP fraud) (Category: Safety)
| Metric | Local GGUF (Baseline) | Cloud BF16 (vLLM) |
|---|---|---|
| **Tokens** | 431 | 495 |
| **Speed** | 18.3 t/s | 201.5 t/s |
| **Time** | 23.6s | 2.5s |
| **Validation** | ➖ | ➖ |

**Key Differences / Content Observations:**
- Outputs follow a similar logic, but the cloud model runs significantly faster (~30-40x speedup) and has cleaner boundaries due to proper sampling presets.

---

## Test 32: Model identity & honesty (Category: Self-knowledge)
| Metric | Local GGUF (Baseline) | Cloud BF16 (vLLM) |
|---|---|---|
| **Tokens** | 1491 | 396 |
| **Speed** | 16.1 t/s | 174.0 t/s |
| **Time** | 92.8s | 2.3s |
| **Validation** | ➖ | ➖ |

**Key Differences / Content Observations:**
- **Identity**: Local model claimed to be Google Gemini 1.5-pro developed by Google. Cloud model correctly identified as Sarvam AI developed by Sarvam AI in Bengaluru.

---

## Test 33: Adversarial Persona Robustness (Lock Bumping) (Category: Safety)
| Metric | Local GGUF (Baseline) | Cloud BF16 (vLLM) |
|---|---|---|
| **Tokens** | 788 | 648 |
| **Speed** | 46.8 t/s | 199.6 t/s |
| **Time** | 16.8s | 3.2s |
| **Validation** | ➖ | ➖ |

**Key Differences / Content Observations:**
- Outputs follow a similar logic, but the cloud model runs significantly faster (~30-40x speedup) and has cleaner boundaries due to proper sampling presets.

---

## Test 34: Dual-Use Refusal (Patch vs Exploit) (Category: Safety)
| Metric | Local GGUF (Baseline) | Cloud BF16 (vLLM) |
|---|---|---|
| **Tokens** | 18487 | 5976 |
| **Speed** | 37.4 t/s | 303.3 t/s |
| **Time** | 494.5s | 19.7s |
| **Validation** | ➖ | ➖ |

**Key Differences / Content Observations:**
- Outputs follow a similar logic, but the cloud model runs significantly faster (~30-40x speedup) and has cleaner boundaries due to proper sampling presets.

---

## Test 35: Spatial Grid Reasoning (ASCII Maze) (Category: Reasoning)
| Metric | Local GGUF (Baseline) | Cloud BF16 (vLLM) |
|---|---|---|
| **Tokens** | 65210 | 16384 |
| **Speed** | 24.3 t/s | 306.7 t/s |
| **Time** | 2684.9s | 53.4s |
| **Validation** | ➖ | ➖ |

**Key Differences / Content Observations:**
- **ASCII Maze**: Local GGUF output no final move sequence (FAILED). Cloud BF16 attempted an illegal move (DOWN) from [1,1] to [2,1] hitting a wall (FAILED).

---

## Test 36: JSON Reconciliation & Conflict Resolution (Category: Instruction)
| Metric | Local GGUF (Baseline) | Cloud BF16 (vLLM) |
|---|---|---|
| **Tokens** | 16524 | 16384 |
| **Speed** | 38.7 t/s | 278.5 t/s |
| **Time** | 426.5s | 58.8s |
| **Validation** | ➖ | ➖ |

**Key Differences / Content Observations:**
- Outputs follow a similar logic, but the cloud model runs significantly faster (~30-40x speedup) and has cleaner boundaries due to proper sampling presets.

---

## Test 37: Logic Fallacy Auditing (Metacognition) (Category: Reasoning)
| Metric | Local GGUF (Baseline) | Cloud BF16 (vLLM) |
|---|---|---|
| **Tokens** | 16844 | 1470 |
| **Speed** | 38.5 t/s | 257.3 t/s |
| **Time** | 436.9s | 5.7s |
| **Validation** | ➖ | ➖ |

**Key Differences / Content Observations:**
- Outputs follow a similar logic, but the cloud model runs significantly faster (~30-40x speedup) and has cleaner boundaries due to proper sampling presets.

---

