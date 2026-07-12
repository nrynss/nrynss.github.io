# Sarvam 30B (Q4_K_M) — Benchmark Summary

**Generated:** 2026-06-14 14:47:30  
**Tests:** 37

| # | Test | Category | Tokens | Speed (t/s) | Time | Finish | Validation |
|---|------|----------|--------|-------------|------|--------|------------|
| 1 | Technical translation | Multilingual | 37571 | 268.6 | 139.9s | stop | ➖ |
| 2 | Product copy | Multilingual | 64206 | 273.2 | 235.1s | stop, stop+forced | ➖ |
| 3 | Code-mixed (Hinglish/Tanglish/Kangl | Multilingual | 2054 | 249.6 | 8.2s | stop | ➖ |
| 4 | Cross-script comprehension | Multilingual | 1638 | 243.4 | 6.7s | stop | ➖ |
| 5 | Math (trains) | Reasoning | 2731 | 262.1 | 10.4s | stop | ➖ |
| 6 | Logic (mislabeled boxes) | Reasoning | 4074 | 297.2 | 13.7s | stop | ➖ |
| 7 | Topological sort | Reasoning | 1663 | 231.0 | 7.2s | stop | ➖ |
| 8 | Log parser (Python + Rust) | Code | 4772 | 261.6 | 18.2s | stop | 🔴 |
| 9 | Async fetcher (Python) | Code | 16384 | 295.8 | 55.4s | stop+forced | 🟢 |
| 10 | Struct conversion | Code | 3665 | 295.3 | 12.4s | stop | 🔴 |
| 11 | Strict table | Instruction | 1944 | 248.6 | 7.8s | stop | ➖ |
| 12 | JSON-only | Instruction | 16384 | 289.8 | 56.5s | stop+forced | 🔴 |
| 13 | Conventional Commits | Instruction | 2903 | 261.1 | 11.1s | stop | ➖ |
| 14 | Debugging (find & fix the bug) | Code | 2645 | 261.4 | 10.1s | stop | ➖ |
| 15 | Temporal boundary | Hallucination | 1243 | 213.6 | 5.8s | stop | ➖ |
| 16 | Fabricated reference | Hallucination | 3422 | 266.9 | 12.8s | stop | ➖ |
| 17 | HTTP/2 spec analysis | Synthesis | 10070 | 307.7 | 32.7s | stop | ➖ |
| 18 | Contradictory sources | Synthesis | 788 | 225.8 | 3.5s | stop | ➖ |
| 19 | Kerala land records | Cultural | 2882 | 263.7 | 10.9s | stop | ➖ |
| 20 | RTI application | Cultural | 2396 | 284.9 | 8.4s | stop | ➖ |
| 21 | Encoding robustness stress test | Multilingual | 10024 | 276.5 | 36.2s | stop | ➖ |
| 22 | Tool calling & JSON schema complian | Agentic | 16384 | 309.6 | 52.9s | stop+forced | 🟢 |
| 23 | Competition math | Reasoning | 9530 | 265.3 | 35.9s | stop | ➖ |
| 24 | Context retention & comparison | Multi-turn | 5640 | 265.3 | 21.3s | stop | ➖ |
| 25 | Romanized Indic input | Multilingual | 45598 | 270.9 | 168.3s | length+forced, stop | ➖ |
| 26 | Indic comprehension (ISRO) | Multilingual | 18962 | 266.1 | 71.3s | stop | ➖ |
| 27 | Needle-in-haystack retrieval | Long-context | 513 | 154.1 | 3.3s | stop | ➖ |
| 28 | Indic numeracy (Hindi GST) | Reasoning | 2250 | 281.2 | 8.0s | stop | ➖ |
| 29 | Tool selection & graceful decline | Agentic | 291 | 155.6 | 1.9s | stop | 🟢 |
| 30 | Structured field extraction | Extraction | 2813 | 289.1 | 9.7s | stop | 🟢 |
| 31 | Phishing refusal (OTP fraud) | Safety | 495 | 201.2 | 2.5s | stop | ➖ |
| 32 | Model identity & honesty | Self-knowledge | 396 | 173.7 | 2.3s | stop | ➖ |
| 33 | Adversarial Persona Robustness (Loc | Safety | 648 | 199.4 | 3.2s | stop | ➖ |
| 34 | Dual-Use Refusal (Patch vs Exploit) | Safety | 5976 | 303.4 | 19.7s | stop | ➖ |
| 35 | Spatial Grid Reasoning (ASCII Maze) | Reasoning | 16384 | 306.8 | 53.4s | stop+forced | ➖ |
| 36 | JSON Reconciliation & Conflict Reso | Instruction | 16384 | 278.5 | 58.8s | stop+forced | 🟢 |
| 37 | Logic Fallacy Auditing (Metacogniti | Reasoning | 1470 | 257.4 | 5.7s | stop | ➖ |


## Aggregate Statistics

- **Total tokens:** 337193
- **Total time:** 1221.59s
- **Average speed:** 276.0 t/s

### Per-Category Breakdown

| Category | Tests | Tokens | Time (s) | Avg Speed (t/s) |
|----------|-------|--------|----------|-----------------|
| Agentic | 2 | 16675 | 54.8 | 304.3 |
| Code | 4 | 27466 | 96.2 | 285.6 |
| Cultural | 2 | 5278 | 19.3 | 272.9 |
| Extraction | 1 | 2813 | 9.7 | 289.1 |
| Hallucination | 2 | 4665 | 18.6 | 250.3 |
| Instruction | 4 | 37615 | 134.3 | 280.1 |
| Long-context | 1 | 513 | 3.3 | 154.1 |
| Multi-turn | 1 | 5640 | 21.3 | 265.3 |
| Multilingual | 7 | 180053 | 665.8 | 270.4 |
| Reasoning | 7 | 38102 | 134.4 | 283.6 |
| Safety | 3 | 7119 | 25.4 | 280.2 |
| Self-knowledge | 1 | 396 | 2.3 | 173.7 |
| Synthesis | 2 | 10858 | 36.2 | 299.8 |

### Validation Summary

- Code: 🟢 1 pass, 🔴 3 fail
- Schema: 🟢 4 pass, 🔴 1 fail

# Indic Language Report

**Generated:** 2026-06-14 14:47:30

## Test 1: Technical translation

| Language | Script Correct | Token Count | Content Preview |
|----------|----------------|-------------|-----------------|
| Hindi | ✅ | 2658 | API gateway आने वाले अनुरोधों को पहले एक रेट लिमिटर के माध्य… |
| Bengali | ✅ | 3065 | API গেটওয়ে রেট লিমিটারের মাধ্যমে আসন্ন অনুরোধগুলোকে উপযুক্ত… |
| Gujarati | ✅ | 3782 | API દ્વાર આવતા વિનંતીઓ દર-મર્યાદા દ્વારા તેમને યોગ્ય માઇક્રો… |
| Kannada | ✅ | 3855 | API gateway ಬರುವ ವಿನಂತಿಗಳನ್ನು rate limiter ಮೂಲಕ ಸೂಕ್ತ micros… |
| Malayalam | ✅ | 9554 | API gateway requests are routed through a rate limiter befor… |
| Marathi | ✅ | 3870 | API गेटवे दर मर्यादेतून (rate limiter) येणाऱ्या विनंत्या योग… |
| Odia | ✅ | 3051 | API ଗେଟୱେ rate limiter ମାଧ୍ୟମରେ ଆଗନ୍ତୁକ ଅନୁରୋଧଗୁଡ଼ିକୁ ସଠିକ୍ … |
| Punjabi | ✅ | 2585 | API ਗੇਟਵੇ ਆਉਣ ਵਾਲੀਆਂ ਬੇਨਤੀਆਂ ਨੂੰ ਇੱਕ ਰੇਟ ਲਿਮਿਟਰ ਰਾਹੀਂ ਉਚਿਤ m… |
| Tamil | ✅ | 2632 | ஏபிஐ நுழைவாயில், வரும் கோரிக்கைகளை rate limiter மூலம் பொருத்… |
| Telugu | ✅ | 2519 | API గేట్‌వే వచ్చే అభ్యర్థనలను, రేట్ లిమిటర్ ద్వారా, తగిన మైక… |

## Test 2: Product copy

| Language | Script Correct | Token Count | Content Preview |
|----------|----------------|-------------|-----------------|
| Hindi | ❌ | 1941 | Apni zameen, apni paani. Diesel ki mehengai aur bijli ki par… |
| Bengali | ❌ | 16384 | Solar-chalito jolkosh pump, krishokder jonyo ashar alo. Bors… |
| Gujarati | ❌ | 4126 | Suryānā ādhār vāḷo pānī pāmp. Dīsēl vāḷo pāmp jāṇī bhāra vāḷ… |
| Kannada | ✅ | 16384 | ನಮ್ಮ ಸೂರ್ಯಶಕ್ತಿ ಚಾಲಿತ ಜಲ ಪಂಪ್ ನಿಮ್ಮ ಹೊಲಗಳಿಗೆ ಹೊಸ ಆಯುಧ. ಬಿಸಿಲ… |
| Malayalam | ✅ | 16384 | സൗരോർജ്ജ ജലപമ്പ്: നിങ്ങളുടെ കൃഷിയിടങ്ങൾക്ക് കരുത്ത്.  മൺസൂൺ … |
| Marathi | ✅ | 1630 | आपल्या शेतीला पाणी. आपला सूर्यप्रकाशात चालणारा, स्वच्छ आणि स… |
| Odia | ❌ | 1938 | Surya shakti re, apananka krushi khetara jalara abhaba rahib… |
| Punjabi | ❌ | 1872 | Khet vich paani di pyaas bujhaayein. Bijli-bill te diesel-kh… |
| Tamil | ✅ | 1342 | நமது கிராமத்து விவசாயிகளுக்கு உதவும் சூரிய ஆற்றல் நீர் இறைக்… |
| Telugu | ✅ | 2205 | మీ పొలానికి ఈ సోలార్ పంపు ఒక కొత్త బలం. ఎండను వాడుకుని, ఎప్ప… |

## Test 3: Code-mixed (Hinglish/Tanglish/Kanglish)

*Single-prompt test — no per-language breakdown.*

## Test 4: Cross-script comprehension

*Single-prompt test — no per-language breakdown.*

## Test 21: Encoding robustness stress test

| Language | Script Correct | Token Count | Content Preview |
|----------|----------------|-------------|-----------------|
| Plain ASCII | — | 3525 | Of course. Here is a detailed explanation of `kanakkinakku`,… |
| IAST Diacritics | — | 3285 | Of course. Here is a detailed explanation of these terms in … |
| Native Script | — | 3214 | തീർച്ചയായും. കേരളത്തിലെ ഭൂനികുതി രേഖകളിൽ, പ്രത്യേകിച്ച് വസ്ത… |

## Test 25: Romanized Indic input

| Language | Script Correct | Token Count | Content Preview |
|----------|----------------|-------------|-----------------|
| Hindi | ✅ | 3240 | पायथन में, **डेकोरेटर** एक विशेष प्रकार का फंक्शन है जो दूसर… |
| Bengali | ❌ | 3124 | Python-e ekta decorator holo ekta special type-er function. … |
| Gujarati | ❌ | 3187 | Python ma decorator shu chhe ane teno upyog kem karvo? Ek sa… |
| Kannada | ❌ | 2752 | Of course! Python-nalli decorator andre Enu, adhu hEge use a… |
| Malayalam | ❌ | 16384 | Python il decorator enna anu? Oru function eduthu, athilekku… |
| Marathi | ❌ | 2839 | Python madhye decorator mhanje kay aani tyacha vapar kasa ka… |
| Odia | ✅ | 3248 | Python-ରେ Decorator kana? (Roman Odia-re)  Decorator heuchi … |
| Punjabi | ✅ | 3527 | Bilkul! Aao Roman Punjabi vich samajhde han ke Python vich d… |
| Tamil | ✅ | 3297 | நிச்சயமாக! Python-இல் Decorator என்றால் என்ன, அது எப்படி வேல… |
| Telugu | ❌ | 4000 | Python lo decorator ante enti mariyu daanni ela vadataru? Ok… |

## Test 26: Indic comprehension (ISRO)

| Language | Script Correct | Token Count | Content Preview |
|----------|----------------|-------------|-----------------|
| Hindi | ✅ | 1634 | 1. भारतीय अंतरिक्ष अनुसंधान संगठन (ISRO) का मुख्यालय बेंगलुर… |
| Bengali | ✅ | 2014 | 1. ইন্ডিয়ান স্পেস রিসার্চ অর্গানাইজেশন (ইসরো)-এর সদর দপ্তর … |
| Gujarati | ✅ | 1853 | 1. ભારતીય અવકાશ સંશોધન સંસ્થા (ISRO) નું મુખ્ય મથક બેંગલુરુ,… |
| Kannada | ✅ | 2064 | ನೀವು ಕೇಳಿದ ಪ್ರಶ್ನೆಗಳಿಗೆ ಉತ್ತರಗಳು ಇಲ್ಲಿವೆ:  1. ಭಾರತೀಯ ಬಾಹ್ಯಾಕ… |
| Malayalam | ✅ | 1568 | 1. ഇന്ത്യൻ സ്പേസ് റിസർച്ച് ഓർഗനൈസേഷന്റെ (ISRO) ആസ്ഥാനം കർണാട… |
| Marathi | ✅ | 2058 | भारतीय अंतराळ संशोधन संस्थेचे (इस्रो) मुख्यालय बेंगळुरू, कर्… |
| Odia | ✅ | 1958 | ବେଙ୍ଗାଲୁରୁ, କର୍ଣ୍ଣାଟକ। 23 ଅଗଷ୍ଟ, 2023; ସୋଭିଏତ୍ ସଂଘ। 2013; ମଙ… |
| Punjabi | ✅ | 1479 | 1. ਭਾਰਤੀ ਪੁਲਾੜ ਖੋਜ ਸੰਗਠਨ (ISRO) ਦਾ ਮੁੱਖ ਦਫ਼ਤਰ ਬੈਂਗਲੁਰੂ, ਕਰਨਾ… |
| Tamil | ✅ | 1455 | 1. இந்திய விண்வெளி ஆய்வு நிறுவனத்தின் (ஐ.எஸ்.ஆர்.ஓ.) தலைமையக… |
| Telugu | ✅ | 2879 | 1. భారతీయ అంతరిక్ష పరిశోధనా సంస్థ (ISRO) యొక్క ప్రధాన కార్యా… |

