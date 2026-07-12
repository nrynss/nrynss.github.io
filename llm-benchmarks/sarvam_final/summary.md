# Sarvam 30B (Q4_K_M) — Benchmark Summary

**Generated:** 2026-06-06 20:21:32  
**Tests:** 37

| # | Test | Category | Tokens | Speed (t/s) | Time | Finish | Validation |
|---|------|----------|--------|-------------|------|--------|------------|
| 1 | Technical translation | Multilingual | 64828 | 6.9 | 9453.8s | stop | ➖ |
| 2 | Product copy | Multilingual | 35188 | 8.2 | 4296.8s | stop | ➖ |
| 3 | Code-mixed (Hinglish/Tanglish/Kangl | Multilingual | 1932 | 9.1 | 212.5s | stop | ➖ |
| 4 | Cross-script comprehension | Multilingual | 3137 | 13.3 | 235.7s | stop | ➖ |
| 5 | Math (trains) | Reasoning | 2529 | 14.3 | 176.3s | stop | ➖ |
| 6 | Logic (mislabeled boxes) | Reasoning | 4327 | 11.9 | 362.2s | stop | ➖ |
| 7 | Topological sort | Reasoning | 3202 | 13.4 | 238.4s | stop | ➖ |
| 8 | Log parser (Python + Rust) | Code | 17822 | 5.1 | 3466.9s | stop | 🔴 |
| 9 | Async fetcher (Python) | Code | 18529 | 5.0 | 3715.3s | stop | 🔴 |
| 10 | Struct conversion | Code | 4739 | 11.4 | 415.1s | stop | 🔴 |
| 11 | Strict table | Instruction | 1787 | 15.6 | 114.2s | stop | ➖ |
| 12 | JSON-only | Instruction | 16580 | 5.4 | 3047.3s | stop | 🔴 |
| 13 | Conventional Commits | Instruction | 1998 | 15.4 | 129.4s | stop | ➖ |
| 14 | Debugging (find & fix the bug) | Code | 17310 | 5.1 | 3420.0s | stop | ➖ |
| 15 | Temporal boundary | Hallucination | 1880 | 15.8 | 119.2s | stop | ➖ |
| 16 | Fabricated reference | Hallucination | 3316 | 13.3 | 248.9s | stop | ➖ |
| 17 | HTTP/2 spec analysis | Synthesis | 9890 | 7.6 | 1303.0s | stop | ➖ |
| 18 | Contradictory sources | Synthesis | 769 | 17.7 | 43.5s | stop | ➖ |
| 19 | Kerala land records | Cultural | 3805 | 12.6 | 301.7s | stop | ➖ |
| 20 | RTI application | Cultural | 2329 | 14.7 | 158.6s | stop | ➖ |
| 21 | Encoding robustness stress test | Multilingual | 9791 | 13.3 | 735.4s | stop | ➖ |
| 22 | Tool calling & JSON schema complian | Agentic | 16501 | 5.3 | 3120.2s | stop | 🟢 |
| 23 | Competition math | Reasoning | 22678 | 6.2 | 3660.4s | stop | ➖ |
| 24 | Context retention & comparison | Multi-turn | 5158 | 14.3 | 360.7s | stop | ➖ |
| 25 | Romanized Indic input | Multilingual | 30440 | 12.4 | 2460.0s | stop | ➖ |
| 26 | Indic comprehension (ISRO) | Multilingual | 34227 | 8.2 | 4185.2s | stop | ➖ |
| 27 | Needle-in-haystack retrieval | Long-context | 739 | 14.6 | 50.6s | stop | ➖ |
| 28 | Indic numeracy (Hindi GST) | Reasoning | 16893 | 5.3 | 3186.7s | stop | ➖ |
| 29 | Tool selection & graceful decline | Agentic | 305 | 17.6 | 17.3s | stop | 🟢 |
| 30 | Structured field extraction | Extraction | 16473 | 5.4 | 3075.9s | stop | 🟢 |
| 31 | Phishing refusal (OTP fraud) | Safety | 431 | 18.3 | 23.6s | stop | ➖ |
| 32 | Model identity & honesty | Self-knowledge | 1491 | 16.1 | 92.8s | stop | ➖ |
| 33 | Adversarial Persona Robustness (Loc | Safety | 788 | 46.8 | 16.8s | stop | ➖ |
| 34 | Dual-Use Refusal (Patch vs Exploit) | Safety | 18487 | 37.4 | 494.5s | stop | ➖ |
| 35 | Spatial Grid Reasoning (ASCII Maze) | Reasoning | 65210 | 24.3 | 2684.9s | length | ➖ |
| 36 | JSON Reconciliation & Conflict Reso | Instruction | 16524 | 38.7 | 426.5s | stop | 🟢 |
| 37 | Logic Fallacy Auditing (Metacogniti | Reasoning | 16844 | 38.5 | 436.9s | stop | ➖ |


## Aggregate Statistics

- **Total tokens:** 488877
- **Total time:** 56487.36s
- **Average speed:** 8.7 t/s

### Per-Category Breakdown

| Category | Tests | Tokens | Time (s) | Avg Speed (t/s) |
|----------|-------|--------|----------|-----------------|
| Agentic | 2 | 16806 | 3137.5 | 5.4 |
| Code | 4 | 58400 | 11017.3 | 5.3 |
| Cultural | 2 | 6134 | 460.3 | 13.3 |
| Extraction | 1 | 16473 | 3075.9 | 5.4 |
| Hallucination | 2 | 5196 | 368.1 | 14.1 |
| Instruction | 4 | 36889 | 3717.5 | 9.9 |
| Long-context | 1 | 739 | 50.6 | 14.6 |
| Multi-turn | 1 | 5158 | 360.7 | 14.3 |
| Multilingual | 7 | 179543 | 21579.3 | 8.3 |
| Reasoning | 7 | 131683 | 10745.9 | 12.3 |
| Safety | 3 | 19706 | 534.9 | 36.8 |
| Self-knowledge | 1 | 1491 | 92.8 | 16.1 |
| Synthesis | 2 | 10659 | 1346.5 | 7.9 |

### Validation Summary

- Code: 🟢 1 pass, 🔴 6 fail
- Schema: 🟢 4 pass, 🔴 1 fail

# Indic Language Report

**Generated:** 2026-06-06 20:21:32

## Test 1: Technical translation

| Language | Script Correct | Token Count | Content Preview |
|----------|----------------|-------------|-----------------|
| Hindi | ✅ | 5490 | API प्रवेश द्वार आने वाले अनुरोधों को दर सीमाकारक (rate limi… |
| Bengali | ✅ | 16464 | API gateway অনুরোধগুলোকে একটি রেট লিমিটারের মধ্য দিয়ে তাদের… |
| Gujarati | ✅ | 2781 | એ પી આઈ દ્વાર આવતી વિનંતીઓ દર-મર્યાદાકર્તા દ્વારા યોગ્ય માઈક… |
| Kannada | ✅ | 3836 | API ಗೇಟ್ವೇ ಬರುವ ವಿನಂತಿಗಳನ್ನು ಮೊದಲು ದರ ಮಿತಿಗಾರಕದ (rate limite… |
| Malayalam | ✅ | 3328 | API ഗേറ്റ്‌വേ റേറ്റ് ലിമിറ്റർ ഉപയോഗിച്ച് വരുന്ന അഭ്യർത്ഥനകൾ … |
| Marathi | ✅ | 3441 | एपीआय गेटवे येणाऱ्या विनंत्या रेट लिमिटरद्वारे योग्य मायक्रो… |
| Odia | ✅ | 3926 | API gateway ଆଗନ୍ତୁକ ଅନୁରୋଧକୁ ଉପଯୁକ୍ତ microservice କୁ ପଠାଇବା … |
| Punjabi | ✅ | 4905 | API ਦੁਆਰ ਆਉਣ ਵਾਲੀਆਂ ਬੇਨਤੀਆਂ ਨੂੰ ਇੱਕ ਰੇਟ ਲਿਮਿਟਰ ਰਾਹੀਂ ਭੇਜਦਾ ਹ… |
| Tamil | ✅ | 16473 | API நுழைவாயில் உள்வரும் கோரிக்கைகளை ஒரு வீதக் கட்டுப்படுத்தி… |
| Telugu | ✅ | 4184 | API గేట్వే వస్తున్న అభ్యర్థనలను రేట్ లిమిటర్ ద్వారా తగిన మైక… |

## Test 2: Product copy

| Language | Script Correct | Token Count | Content Preview |
|----------|----------------|-------------|-----------------|
| Hindi | ✅ | 3103 | सौर ऊर्जा संचालित जल पंप - आपके खेत का नया साथी। सूर्य की ऊर… |
| Bengali | ✅ | 16477 | Solar-চালিত জল পাম্প, কৃষকদের জন্য বিশেষ! এই পাম্প দিয়ে দিন… |
| Gujarati | ✅ | 1589 | તમારા ખેતરમાં, સૂર્યની શક્તિથી પાણી ખેંચો. આ આત્મનિર્ભર પંપથ… |
| Kannada | ✅ | 1684 | ನಿಮ್ಮ ಹೊಲಕ್ಕೆ ಯಾವಾಗಲೂ ನೀರು ಸಿಗಲಿ. ಈ ಸೌರ ಪಂಪ್ ನಿಮ್ಮ ಬೆಳೆಗೆ ಜೀ… |
| Malayalam | ✅ | 2038 | വൈദ്യുതി തടസ്സങ്ങൾ ഇനി നമ്മുടെ വിളകളെ ബാധിക്കില്ല. ഞങ്ങളുടെ … |
| Marathi | ❌ | 2428 | Surya-chya shaktine chalnaara jal-pump. Shetaatil pani-cha a… |
| Odia | ❌ | 2152 | Apana kheta paine, surjy-ra shakti re pani. Ehi jala pump, d… |
| Punjabi | ❌ | 2149 | Suraj di shakti naal chalda pump. Apne khetan vich paani bha… |
| Tamil | ✅ | 2083 | சூரிய ஆற்றலில் இயங்கும் இந்த நீர்ப்பம், உங்கள் வயலுக்குத் தே… |
| Telugu | ✅ | 1485 | సూర్యుడి నుండి ఉచిత శక్తితో, మీ పొలాలకు నీరు. దీనికి విద్యుత… |

## Test 3: Code-mixed (Hinglish/Tanglish/Kanglish)

*Single-prompt test — no per-language breakdown.*

## Test 4: Cross-script comprehension

*Single-prompt test — no per-language breakdown.*

## Test 21: Encoding robustness stress test

| Language | Script Correct | Token Count | Content Preview |
|----------|----------------|-------------|-----------------|
| Plain ASCII | — | 3051 | Of course. In Kerala's land revenue system, these terms are … |
| IAST Diacritics | — | 3490 | Of course. These terms—`kanakki<0xE1><0xB9><0x87>akku`, `pa<… |
| Native Script | — | 3250 | തീർച്ചയായും. കേരളത്തിലെ ഭൂമിരേഖകളുമായി ബന്ധപ്പെട്ട രേഖകളിലെ … |

## Test 25: Romanized Indic input

| Language | Script Correct | Token Count | Content Preview |
|----------|----------------|-------------|-----------------|
| Hindi | ❌ | 2193 | **Decorator Kya Hai?**  Python mein, decorator ek special fu… |
| Bengali | ❌ | 3010 | Python-e decorator holo ekti function ja onyo ekti function-… |
| Gujarati | ✅ | 3314 | ચોક્કસ! ચાલો પાયથોનમાં ડેકોરેટરને રોમન ગુજરાતીમાં સમજીએ.  ##… |
| Kannada | ❌ | 3294 | Python-alli, **decorator** andre ondhu function, adhu other … |
| Malayalam | ❌ | 3764 | Namaskaram! Python il decorator enthaanu, engane use cheyyan… |
| Marathi | ❌ | 3138 | Nakkich! Roman Marathi-madhye decorator mhanje kay aani to k… |
| Odia | ✅ | 3057 | Of course! Roman Odia-re decorator-ku bujhiba.  ### **Python… |
| Punjabi | ❌ | 2992 | Zaroor! Aao Roman Punjabi vich samajhde haan ke Python vich … |
| Tamil | ❌ | 2990 | Roman Tamil-la Python-la decorator pathi vivaramaa paakkalaa… |
| Telugu | ✅ | 2688 | తప్పకుండా! డెకరేటర్ అంటే ఏమిటి, దాన్ని ఎలా ఉపయోగించాలో, ఒక స… |

## Test 26: Indic comprehension (ISRO)

| Language | Script Correct | Token Count | Content Preview |
|----------|----------------|-------------|-----------------|
| Hindi | ✅ | 1748 | 1. भारतीय अंतरिक्ष अनुसंधान संगठन (ISRO) का मुख्यालय बेंगलुर… |
| Bengali | ✅ | 1786 | 1. ভারতীয় মহাকাশ গবেষণা সংস্থা (ইসরো)-এর সদর দপ্তর কর্ণাটকে… |
| Gujarati | ✅ | 1797 | 1. ISRO નું મુખ્ય મથક બેંગલુરુ, કર્ણાટકમાં આવેલું છે.  2. ચં… |
| Kannada | ✅ | 2025 | 1. ಭಾರತೀಯ ಬಾಹ್ಯಾಕಾಶ ಸಂಶೋಧನಾ ಸಂಸ್ಥೆ (ISRO) ಮುಖ್ಯ ಕಛೇರಿ ಎಲ್ಲಿದ… |
| Malayalam | ✅ | 1881 | 1. ഇന്ത്യൻ ബഹിരാകാശ ഗവേഷണ സ്ഥാപനത്തിന്റെ (ISRO) ആസ്ഥാനം എവിട… |
| Marathi | ✅ | 2358 | 1. भारतीय अंतराळ संशोधन संस्थेचे (इस्रो) मुख्यालय बेंगळुरू, … |
| Odia | ✅ | 1620 | 1. ଭାରତୀୟ ମହାକାଶ ଗବେଷଣା ସଂସ୍ଥାର (ISRO) ମୁଖ୍ୟାଳୟ କର୍ଣ୍ଣାଟକର ବ… |
| Punjabi | ✅ | 16543 | 1. ਇਸਰੋ (ISRO) ਦਾ ਮੁੱਖ ਦਫ਼ਤਰ ਬੈਂਗਲੁਰੂ, ਕਰਨਾਟਕ ਵਿੱਚ ਸਥਿਤ ਹੈ। … |
| Tamil | ✅ | 2148 | 1. இந்திய விண்வெளி ஆராய்ச்சி நிறுவனத்தின் (ISRO) தலைமையகம் இ… |
| Telugu | ✅ | 2321 | 1. భారతీయ అంతరిక్ష పరిశోధనా సంస్థ (ISRO) యొక్క ప్రధాన కార్యా… |

