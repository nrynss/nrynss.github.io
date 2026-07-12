# Sarvam 105B (BF16 Cloud) — Benchmark Summary

**Generated:** 2026-06-14 22:55:17  
**Tests:** 37

| # | Test | Category | Tokens | Speed (t/s) | Time | Finish | Validation |
|---|------|----------|--------|-------------|------|--------|------------|
| 1 | Technical translation | Multilingual | 23693 | 25.9 | 913.5s | stop | ➖ |
| 2 | Product copy | Multilingual | 14187 | 111.1 | 127.7s | stop | ➖ |
| 3 | Code-mixed (Hinglish/Tanglish/Kangl | Multilingual | 2667 | 124.8 | 21.4s | stop | ➖ |
| 4 | Cross-script comprehension | Multilingual | 2203 | 124.2 | 17.7s | stop | ➖ |
| 5 | Math (trains) | Reasoning | 2494 | 125.1 | 19.9s | stop | ➖ |
| 6 | Logic (mislabeled boxes) | Reasoning | 3274 | 126.0 | 26.0s | stop | ➖ |
| 7 | Topological sort | Reasoning | 3687 | 126.7 | 29.1s | stop | ➖ |
| 8 | Log parser (Python + Rust) | Code | 4013 | 126.6 | 31.7s | stop | 🔴 |
| 9 | Async fetcher (Python) | Code | 3100 | 125.8 | 24.6s | stop | 🔴 |
| 10 | Struct conversion | Code | 3995 | 126.9 | 31.5s | stop | 🔴 |
| 11 | Strict table | Instruction | 1943 | 122.4 | 15.9s | stop | ➖ |
| 12 | JSON-only | Instruction | 551 | 105.0 | 5.2s | stop | 🟢 |
| 13 | Conventional Commits | Instruction | 2381 | 123.6 | 19.3s | stop | ➖ |
| 14 | Debugging (find & fix the bug) | Code | 1548 | 121.4 | 12.8s | stop | ➖ |
| 15 | Temporal boundary | Hallucination | 374 | 97.1 | 3.9s | stop | ➖ |
| 16 | Fabricated reference | Hallucination | 3158 | 126.2 | 25.0s | stop | ➖ |
| 17 | HTTP/2 spec analysis | Synthesis | 3995 | 107.2 | 37.3s | stop | ➖ |
| 18 | Contradictory sources | Synthesis | 3876 | 126.7 | 30.6s | stop | ➖ |
| 19 | Kerala land records | Cultural | 3165 | 126.0 | 25.1s | stop | ➖ |
| 20 | RTI application | Cultural | 2413 | 124.1 | 19.4s | stop | ➖ |
| 21 | Encoding robustness stress test | Multilingual | 10226 | 126.2 | 81.0s | stop | ➖ |
| 22 | Tool calling & JSON schema complian | Agentic | 16384 | 127.7 | 128.3s | stop+forced | 🟢 |
| 23 | Competition math | Reasoning | 6778 | 123.7 | 54.8s | stop | ➖ |
| 24 | Context retention & comparison | Multi-turn | 5555 | 122.6 | 45.3s | stop | ➖ |
| 25 | Romanized Indic input | Multilingual | 21444 | 123.9 | 173.1s | stop | ➖ |
| 26 | Indic comprehension (ISRO) | Multilingual | 16990 | 121.9 | 139.3s | stop | ➖ |
| 27 | Needle-in-haystack retrieval | Long-context | 674 | 110.0 | 6.1s | stop | ➖ |
| 28 | Indic numeracy (Hindi GST) | Reasoning | 1680 | 121.0 | 13.9s | stop | ➖ |
| 29 | Tool selection & graceful decline | Agentic | 259 | 89.0 | 2.9s | stop | 🟢 |
| 30 | Structured field extraction | Extraction | 406 | 99.0 | 4.1s | stop | 🟢 |
| 31 | Phishing refusal (OTP fraud) | Safety | 332 | 94.6 | 3.5s | stop | ➖ |
| 32 | Model identity & honesty | Self-knowledge | 1355 | 119.6 | 11.3s | stop | ➖ |
| 33 | Adversarial Persona Robustness (Loc | Safety | 725 | 111.5 | 6.5s | stop | ➖ |
| 34 | Dual-Use Refusal (Patch vs Exploit) | Safety | 3717 | 126.6 | 29.4s | stop | ➖ |
| 35 | Spatial Grid Reasoning (ASCII Maze) | Reasoning | 16384 | 127.5 | 128.5s | stop+forced | 🔴 |
| 36 | JSON Reconciliation & Conflict Reso | Instruction | 926 | 115.9 | 8.0s | stop | 🟢 |
| 37 | Logic Fallacy Auditing (Metacogniti | Reasoning | 1429 | 120.5 | 11.9s | stop | ➖ |


## Aggregate Statistics

- **Total tokens:** 191981
- **Total time:** 2285.67s
- **Average speed:** 84.0 t/s

### Per-Category Breakdown

| Category | Tests | Tokens | Time (s) | Avg Speed (t/s) |
|----------|-------|--------|----------|-----------------|
| Agentic | 2 | 16643 | 131.2 | 126.8 |
| Code | 4 | 12656 | 100.6 | 125.8 |
| Cultural | 2 | 5578 | 44.6 | 125.2 |
| Extraction | 1 | 406 | 4.1 | 99.0 |
| Hallucination | 2 | 3532 | 28.9 | 122.3 |
| Instruction | 4 | 5801 | 48.4 | 119.9 |
| Long-context | 1 | 674 | 6.1 | 110.0 |
| Multi-turn | 1 | 5555 | 45.3 | 122.6 |
| Multilingual | 7 | 91410 | 1473.9 | 62.0 |
| Reasoning | 7 | 35726 | 284.0 | 125.8 |
| Safety | 3 | 4774 | 39.4 | 121.3 |
| Self-knowledge | 1 | 1355 | 11.3 | 119.6 |
| Synthesis | 2 | 7871 | 67.9 | 116.0 |

### Validation Summary

- Code: 🟢 1 pass, 🔴 3 fail
- Schema: 🟢 5 pass, 🔴 0 fail

# Indic Language Report

**Generated:** 2026-06-14 22:55:17

## Test 1: Technical translation

| Language | Script Correct | Token Count | Content Preview |
|----------|----------------|-------------|-----------------|
| Hindi | ✅ | 2004 | API gateway आने वाले अनुरोधों को एक rate limiter के माध्यम स… |
| Bengali | ✅ | 2495 | এ.পি.আই গেটওয়ে আগত অনুরোধগুলোকে রেট লিমিটারের মাধ্যমে রুট ক… |
| Gujarati | ✅ | 2432 | API gateway આવતા વિનંતીઓને એક rate limiter દ્વારા માર્ગદર્શન… |
| Kannada | ✅ | 2165 | API ಗೇಟ್‌ವೇ ಬರುವ ವಿನಂತಿಗಳನ್ನು ದರ ಸೀಮಿತಗೊಳಿಸುವ ಮೂಲಕ ಸೂಕ್ತವಾದ … |
| Malayalam | ✅ | 2204 | API gateway വരുന്ന റിക്വസ്റ്റുകളെ ഒരു റേറ്റ് ലിമിറ്ററിലൂടെ റ… |
| Marathi | ✅ | 2669 | API गेटवे येणाऱ्या विनंत्या एका रेट लिमिटरमधून मार्गित करते,… |
| Odia | ✅ | 2131 | API gateway ଆସୁଥିବା requests କୁ ଏକ rate limiter ମାଧ୍ୟମରେ rou… |
| Punjabi | ✅ | 2166 | API gateway ਆਉਣ ਵਾਲੀਆਂ ਬੇਨਤੀਆਂ ਨੂੰ rate limiter ਰਾਹੀਂ ਢੁਕਵੇਂ… |
| Tamil | ✅ | 3538 | ஏ.பி.ஐ. கேட்வே (API gateway) உள்வரும் கோரிக்கைகளை, விகிதக் க… |
| Telugu | ✅ | 1889 | API gateway వచ్చే అభ్యర్థనలను రేట్ లిమిటర్ ద్వారా పంపి, సరైన… |

## Test 2: Product copy

| Language | Script Correct | Token Count | Content Preview |
|----------|----------------|-------------|-----------------|
| Hindi | ❌ | 1666 | Har khet ko paani, har fasal ko jaan. Bijli aur diesel ki te… |
| Bengali | ✅ | 2063 | বিদুৎ বিলের চিন্তা ছেড়ো। সূর্যের শক্তি দিয়ে জল তুলে নিন আপ… |
| Gujarati | ✅ | 1558 | વીજળીનું બિલ ભૂલી જાઓ. સૂર્યપ્રકાશથી ચાલતો આ શક્તિશાળી પંપ ત… |
| Kannada | ✅ | 775 | ಸೂರ್ಯನ ಬೆಳಕಿನ ಶಕ್ತಿ ಬಳಸಿ ನಿಮ್ಮ ಹೊಲಗಳನ್ನು ಹಸಿರಾಗಿ ಇಡಿ. ನಮ್ಮ ಸ… |
| Malayalam | ✅ | 1087 | സൂര്യപ്രകാശത്തിൽ പ്രവർത്തിക്കുന്ന ഈ വാട്ടർ പമ്പ് നിങ്ങളുടെ ക… |
| Marathi | ✅ | 751 | आमच्या सोलर वॉटर पंपामुळे तुमच्या शेतात पाणी आणणे सोपे होईल.… |
| Odia | ✅ | 1892 | ଭାଇ ଓ ଭଉଣୀମାନେ, ବିଦ୍ୟୁତ୍ କଟିଲେ ପାଣି ପାଇଁ କଷ୍ଟ ହୁଏ ନା? ଆମ ସୌର… |
| Punjabi | ✅ | 1681 | ਸੂਰਜ ਦੀ ਰੌਸ਼ਨੀ ਨਾਲ ਆਪਣੀ ਜ਼ਮੀਨ ਨੂੰ ਪਾਣੀ ਦੇ। ਬਿਜਲੀ ਦਾ ਬਿੱਲ, ਲੋਡ… |
| Tamil | ✅ | 780 | சூரிய சக்தியில் இயங்கும் இந்த நீர் பம்ப் உங்கள் விவசாயத்திற்… |
| Telugu | ✅ | 1934 | సూర్యుడి ఉచిత శక్తితో మీ పొలానికి నిరంతర నీరు. ఈ సౌర పంపుతో … |

## Test 3: Code-mixed (Hinglish/Tanglish/Kanglish)

*Single-prompt test — no per-language breakdown.*

## Test 4: Cross-script comprehension

*Single-prompt test — no per-language breakdown.*

## Test 21: Encoding robustness stress test

| Language | Script Correct | Token Count | Content Preview |
|----------|----------------|-------------|-----------------|
| Plain ASCII | — | 3057 | Of course. Here is a detailed explanation of these terms in … |
| IAST Diacritics | — | 3817 | Of course. Here is a detailed explanation of the difference … |
| Native Script | — | 3352 | തീർച്ചയായും. കേരളത്തിലെ ഭൂനികുതി രേഖകളിൽ (land revenue recor… |

## Test 25: Romanized Indic input

| Language | Script Correct | Token Count | Content Preview |
|----------|----------------|-------------|-----------------|
| Hindi | ❌ | 2439 | Of course! Python mein decorator kya hai aur uska use kaise … |
| Bengali | ❌ | 2645 | Oboshshoi! Python-er decorator niye ekta simple explanation … |
| Gujarati | ✅ | 2640 | ચોક્કસ! Python ma decorator shu છે અને એનો ઉપયોગ કેમ કરવો, એ… |
| Kannada | ✅ | 2569 | ಖಂಡಿತ, Python-ನಲ್ಲಿ ಅಲಂಕಾರಿಕ ಅಂದ್ರೆ decorator ಬಗ್ಗೆ Roman Ka… |
| Malayalam | ❌ | 842 | Python-il Decorator enna oru powerful feature undu. Oru func… |
| Marathi | ✅ | 2402 | नक्कीच! Python मध्ये decorator म्हणजे काय आणि त्याचा वापर कस… |
| Odia | ❌ | 1152 | # Python re Decorators  Python re decorator eka special func… |
| Punjabi | ❌ | 2666 | Bilkul, ithe decorator ki hai, eh kiwein use hunda hai, ate … |
| Tamil | ✅ | 2865 | Python decorator-ன்னா என்ன?  Python-ல decorator-ங்கறது ஒரு f… |
| Telugu | ❌ | 1224 | Python lo decorator ante enti?  Python lo decorator anedi ok… |

## Test 26: Indic comprehension (ISRO)

| Language | Script Correct | Token Count | Content Preview |
|----------|----------------|-------------|-----------------|
| Hindi | ✅ | 1649 | 1. भारतीय अंतरिक्ष अनुसंधान संगठन (ISRO) का मुख्यालय बेंगलुर… |
| Bengali | ✅ | 1537 | ভারতীয় মহাকাশ গবেষণা সংস্থা (ইসরো)-এর সদর দপ্তর কর্ণাটকের ব… |
| Gujarati | ✅ | 1925 | ભારતીય અવકાશ સંશોધન સંસ્થા (ISRO) નું મુખ્ય મથક બેંગલુરુ, કર… |
| Kannada | ✅ | 1532 | 1. ಭಾರತೀಯ ಬಾಹ್ಯಾಕಾಶ ಸಂಶೋಧನಾ ಸಂಸ್ಥೆಯ (ISRO) ಪ್ರಧಾನ ಕಚೇರಿಯು ಬೆ… |
| Malayalam | ✅ | 1373 | 1. ഇന്ത്യൻ ബഹിരാകാശ ഗവേഷണ സ്ഥാപനത്തിന്റെ (ISRO) ആസ്ഥാനം സ്ഥി… |
| Marathi | ✅ | 1896 | 1. भारतीय अंतराळ संशोधन संस्थेचे (इस्रो) मुख्यालय कर्नाटकाती… |
| Odia | ✅ | 1788 | ଭାରତୀୟ ମହାକାଶ ଗବେଷଣା ସଂସ୍ଥା (ISRO) ର ମୁଖ୍ୟାଳୟ କର୍ଣ୍ଣାଟକର ବେଙ… |
| Punjabi | ✅ | 1797 | 1. ਭਾਰਤੀ ਪੁਲਾੜ ਖੋਜ ਸੰਸਥਾ (ISRO) ਦਾ ਮੁੱਖ ਦਫ਼ਤਰ ਬੈਂਗਲੁਰੂ, ਕਰਨਾ… |
| Tamil | ✅ | 1509 | 1. இந்திய விண்வெளி ஆய்வு நிறுவனத்தின் (இஸ்ரோ - ISRO) தலைமையக… |
| Telugu | ✅ | 1984 | భారతీయ అంతరిక్ష పరిశోధనా సంస్థ (ISRO) ప్రధాన కార్యాలయం బెంగళ… |

