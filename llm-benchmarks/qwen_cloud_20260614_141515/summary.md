# Qwen3-30B-A3B (Q4_K_M) — Benchmark Summary

**Generated:** 2026-06-14 14:30:47  
**Tests:** 37

| # | Test | Category | Tokens | Speed (t/s) | Time | Finish | Validation |
|---|------|----------|--------|-------------|------|--------|------------|
| 1 | Technical translation | Multilingual | 17633 | 72.4 | 243.5s | stop | ➖ |
| 2 | Product copy | Multilingual | 14132 | 196.5 | 71.9s | stop | ➖ |
| 3 | Code-mixed (Hinglish/Tanglish/Kangl | Multilingual | 555 | 170.2 | 3.3s | stop | ➖ |
| 4 | Cross-script comprehension | Multilingual | 797 | 145.2 | 5.5s | stop | ➖ |
| 5 | Math (trains) | Reasoning | 2787 | 201.7 | 13.8s | stop | ➖ |
| 6 | Logic (mislabeled boxes) | Reasoning | 3836 | 213.8 | 17.9s | stop | ➖ |
| 7 | Topological sort | Reasoning | 4566 | 208.2 | 21.9s | stop | ➖ |
| 8 | Log parser (Python + Rust) | Code | 7685 | 216.4 | 35.5s | stop | ➖ |
| 9 | Async fetcher (Python) | Code | 5167 | 215.6 | 24.0s | stop | ➖ |
| 10 | Struct conversion | Code | 3961 | 214.1 | 18.5s | stop | ➖ |
| 11 | Strict table | Instruction | 660 | 176.0 | 3.8s | stop | ➖ |
| 12 | JSON-only | Instruction | 689 | 173.6 | 4.0s | stop | ➖ |
| 13 | Conventional Commits | Instruction | 1728 | 203.5 | 8.5s | stop | ➖ |
| 14 | Debugging (find & fix the bug) | Code | 1350 | 199.7 | 6.8s | stop | ➖ |
| 15 | Temporal boundary | Hallucination | 655 | 154.1 | 4.2s | stop | ➖ |
| 16 | Fabricated reference | Hallucination | 1638 | 202.5 | 8.1s | stop | ➖ |
| 17 | HTTP/2 spec analysis | Synthesis | 2758 | 194.6 | 14.2s | stop | ➖ |
| 18 | Contradictory sources | Synthesis | 1662 | 202.7 | 8.2s | stop | ➖ |
| 19 | Kerala land records | Cultural | 2012 | 207.2 | 9.7s | stop | ➖ |
| 20 | RTI application | Cultural | 1245 | 198.2 | 6.3s | stop | ➖ |
| 21 | Encoding robustness stress test | Multilingual | 5129 | 204.2 | 25.1s | stop | ➖ |
| 22 | Tool calling & JSON schema complian | Agentic | 2421 | 209.2 | 11.6s | stop | ➖ |
| 23 | Competition math | Reasoning | 16456 | 214.2 | 76.8s | stop | ➖ |
| 24 | Context retention & comparison | Multi-turn | 4015 | 183.4 | 21.9s | stop | ➖ |
| 25 | Romanized Indic input | Multilingual | 14954 | 200.1 | 74.7s | stop | ➖ |
| 26 | Indic comprehension (ISRO) | Multilingual | 8948 | 182.4 | 49.1s | stop | ➖ |
| 27 | Needle-in-haystack retrieval | Long-context | 255 | 130.8 | 1.9s | stop | ➖ |
| 28 | Indic numeracy (Hindi GST) | Reasoning | 2034 | 206.7 | 9.8s | stop | ➖ |
| 29 | Tool selection & graceful decline | Agentic | 216 | 113.7 | 1.9s | stop | ➖ |
| 30 | Structured field extraction | Extraction | 1150 | 194.6 | 5.9s | stop | ➖ |
| 31 | Phishing refusal (OTP fraud) | Safety | 1796 | 204.1 | 8.8s | stop | ➖ |
| 32 | Model identity & honesty | Self-knowledge | 355 | 150.4 | 2.4s | stop | ➖ |
| 33 | Adversarial Persona Robustness (Loc | Safety | 818 | 184.7 | 4.4s | stop | ➖ |
| 34 | Dual-Use Refusal (Patch vs Exploit) | Safety | 2261 | 208.2 | 10.9s | stop | ➖ |
| 35 | Spatial Grid Reasoning (ASCII Maze) | Reasoning | 13096 | 214.7 | 61.0s | stop | ➖ |
| 36 | JSON Reconciliation & Conflict Reso | Instruction | 2483 | 208.8 | 11.9s | stop | ➖ |
| 37 | Logic Fallacy Auditing (Metacogniti | Reasoning | 590 | 171.0 | 3.5s | stop | ➖ |


## Aggregate Statistics

- **Total tokens:** 152493
- **Total time:** 911.02s
- **Average speed:** 167.4 t/s

### Per-Category Breakdown

| Category | Tests | Tokens | Time (s) | Avg Speed (t/s) |
|----------|-------|--------|----------|-----------------|
| Agentic | 2 | 2637 | 13.5 | 195.8 |
| Code | 4 | 18163 | 84.7 | 214.3 |
| Cultural | 2 | 3257 | 16.0 | 203.7 |
| Extraction | 1 | 1150 | 5.9 | 194.6 |
| Hallucination | 2 | 2293 | 12.3 | 185.8 |
| Instruction | 4 | 5560 | 28.1 | 197.9 |
| Long-context | 1 | 255 | 1.9 | 130.8 |
| Multi-turn | 1 | 4015 | 21.9 | 183.4 |
| Multilingual | 7 | 62148 | 473.0 | 131.4 |
| Reasoning | 7 | 43365 | 204.8 | 211.7 |
| Safety | 3 | 4875 | 24.1 | 202.4 |
| Self-knowledge | 1 | 355 | 2.4 | 150.4 |
| Synthesis | 2 | 4420 | 22.4 | 197.6 |

# Indic Language Report

**Generated:** 2026-06-14 14:30:47

## Test 1: Technical translation

| Language | Script Correct | Token Count | Content Preview |
|----------|----------------|-------------|-----------------|
| Hindi | ✅ | 949 | "एपीआई गेटवे आईनकमिंग अनुरोधों को उचित माइक्रोसर्विस में फ़ॉ… |
| Bengali | ✅ | 1672 | "API গেটওয়ে আসন্ন অনুরোধগুলিকে রেট লিমিটার মাধ্যমে প্রেরণ ক… |
| Gujarati | ✅ | 984 | "API ગેટવે પ્રાપ્ત માહિતીને યોગ્ય માઇક્રોસર્વિસ માટે મોકલતા … |
| Kannada | ✅ | 2203 | "API ಗೇಟ್ವೇ ಆಗಮಿಸುತ್ತಿರುವ ಅನುರೋಧಗಳನ್ನು ಅನುಕೂಲವಾದ ಮೈಕ್ರೋಸರ್ವಿ… |
| Malayalam | ✅ | 1298 | "API ഗേറ്റ്‌വേ ആഗത അഭ്യർത്ഥനകൾ റേറ്റ് ലിമിറ്റർ വഴി പ്രവഹിപ്പ… |
| Marathi | ✅ | 3476 | "API गेटवे आगमन अनुरोध रेट लिमिटर मार्गे जातात आणि त्यांना उ… |
| Odia | ✅ | 2036 | "API ଗେଟ୍‌ଓଇର୍ ଆସୁଥିବା ଅନୁରୋଧଗୁଡ଼ିକୁ ପୂର୍ବରୁ ପ୍ରେରଣ କରିବା ପୂ… |
| Punjabi | ✅ | 2010 | "API ਗੇਟਵੇ ਆਉਣ ਵਾਲੀਆਂ ਮੰਗਾਂ ਨੂੰ ਰੇਟ ਲਿਮਿਟਰ ਦੁਆਰਾ ਪਹਿਲਾਂ ਲੈ ਕ… |
| Tamil | ✅ | 1278 | "API கேட்வே வரும் கேள்விகளை வீதம் கட்டுப்பாட்டாளர் வழியாக சர… |
| Telugu | ✅ | 1727 | "API గేట్వే ఇన్‌కమింగ్ అవకాశాలను రేట్ లిమిటర్ ద్వారా మార్గం … |

## Test 2: Product copy

| Language | Script Correct | Token Count | Content Preview |
|----------|----------------|-------------|-----------------|
| Hindi | ✅ | 1359 | सौर पानी पंप: गांव के किसानों के लिए आदर्श। सूर्य के ऊर्जा स… |
| Bengali | ✅ | 951 | খামারি ভাই-বোনদের জন্য সৌরশক্তি চালিত পানি পাম্প! ডিজেল বা ব… |
| Gujarati | ✅ | 758 | સૂર્ય ઊર્જા પર ચાલતો પાણી પંપ ખેતી માટે સાથે રહેશે. વિદ્યુત … |
| Kannada | ✅ | 2619 | ಸೂರ್ಯ ಶಕ್ತಿಯಿಂದ ಚಲಿಸುವ ಈ ಜಲಪಂಪ್ ಕೃಷಿ ಕಾರ್ಯಕ್ಕೆ ಸಹಾಯಕವಾಗುತ್ತದ… |
| Malayalam | ✅ | 1919 | കൃഷിക്കാർക്കായി സൗര ഊർജ്ജം ഉപയോഗിക്കുന്ന വാട്ടർ പമ്പ്. നീരാവ… |
| Marathi | ✅ | 525 | शेतकरी मित्रांनो, आज तुमच्या शेताला सौर ऊर्जेचा वापर करून पा… |
| Odia | ✅ | 2204 | ଗ୍ରାମୀଣ କୃଷକଙ୍କ ପାଇଁ ଏହି ସୌର ପାଣି ପମ୍ପ ଏକ ନିର୍ଭରଯୋଗ୍ୟ ସମାଧାନ… |
| Punjabi | ✅ | 796 | ਸ਼ੁਰੂ ਵਿੱਚ, ਸੌਲਰ ਪੰਪ ਤੁਹਾਡੇ ਖੇਤਾਂ ਲਈ ਇੱਕ ਸੰਭਾਵੀ ਹੱਲ ਹੈ। ਇਹ ਧ… |
| Tamil | ✅ | 804 | சூரிய மின்சார தண்ணீர் பம்ப் கிராமப்புற விவசாயிகளுக்காக வடிவம… |
| Telugu | ✅ | 2197 | సౌర శక్తి నుండి నీరు తీసుకోండి. ఎలక్ట్రిసిటీ లేకుండా పంటలు న… |

## Test 3: Code-mixed (Hinglish/Tanglish/Kanglish)

*Single-prompt test — no per-language breakdown.*

## Test 4: Cross-script comprehension

*Single-prompt test — no per-language breakdown.*

## Test 21: Encoding robustness stress test

| Language | Script Correct | Token Count | Content Preview |
|----------|----------------|-------------|-----------------|
| Plain ASCII | — | 1548 | In Kerala's land revenue records, **kanakkinakku** and **pat… |
| IAST Diacritics | — | 2196 | In Kerala's land revenue records, **kanakkiṇakku** and **paṭ… |
| Native Script | — | 1385 | **Difference Between "Kanakku" and "Patya" in Kerala Land Re… |

## Test 25: Romanized Indic input

| Language | Script Correct | Token Count | Content Preview |
|----------|----------------|-------------|-----------------|
| Hindi | ❌ | 720 | Python mein decorator ek aisa function hota hai jo dusre fun… |
| Bengali | ✅ | 1473 | Python e ডেকোরেটর হলো একটি ফাংশন যা অন্য ফাংশনের ব্যবহার পরি… |
| Gujarati | ✅ | 1693 | Pythonમાં ડીકોરેટર એક ફંક્શન છે જે બીજા ફંક્શનની વર્તનને બદલ… |
| Kannada | ✅ | 1734 | **Python ಡಿಕೊರೇಟರ್ (Decorator) ಏನು?**   ಡಿಕೊರೇಟರ್ ಎಂದರೆ, ಇನ್… |
| Malayalam | ✅ | 2216 | Python-ലെ **decorator** എന്നത് ഒരു ഫംഗ്ഷൻ എടുത്ത് അതിന്റെ പ്… |
| Marathi | ✅ | 1731 | **Python मध्ये डिकोरेटर म्हणजे काय आणि त्याचा वापर कसा करतात… |
| Odia | ❌ | 1370 | Python "re" (regular expression) module kina koi decorator n… |
| Punjabi | ❌ | 961 | Python vich **decorator** ek aisa funksion hai jo kisi or fu… |
| Tamil | ✅ | 1704 | Python la **decorator** (தொகுப்பாக்கி) என்பது ஒரு செயல்பாடு … |
| Telugu | ✅ | 1352 | Python lo **డికోరేటర్** అనేది ఒక ఫంక్షన్ యొక్క ప్రవర్తనను మా… |

## Test 26: Indic comprehension (ISRO)

| Language | Script Correct | Token Count | Content Preview |
|----------|----------------|-------------|-----------------|
| Hindi | ✅ | 932 | 1. भारतीय अंतरिक्ष अनुसंधान संगठन (ISRO) का मुख्यालय बेंगलूर… |
| Bengali | ✅ | 814 | 1. ভারতীয় মহাকাশ গবেষণা সংস্থা (ISRO)-এর সদর দপ্তর বেঙ্গালু… |
| Gujarati | ✅ | 959 | 1. ભારતીય અવકાશ સંશોધન સંસ્થા (ISRO)નું મુખ્ય મથક બેંગ્લોર, … |
| Kannada | ✅ | 769 | 1. ಭಾರತೀಯ ಬಾಹ್ಯಾಕಾಶ ಸಂಶೋಧನಾ ಸಂಸ್ಥೆ (ISRO) ಮುಖ್ಯ ಕಛೇರಿ ಬೆಂಗಳೂ… |
| Malayalam | ✅ | 752 | 1. ഇന്ത്യൻ ബഹിരാകാശ ഗവേഷണ സ്ഥാപനത്തിന്റെ (ISRO) ആസ്ഥാനം ബാംഗ… |
| Marathi | ✅ | 884 | 1. भारतीय अंतराळ संशोधन संस्थेचे (ISRO) मुख्यालय बेंगलोरमध्य… |
| Odia | ✅ | 1215 | 1. ଭାରତୀୟ ମହାକାଶ ଗବେଷଣା ସଂସ୍ଥା (ISRO)ର ମୁଖ୍ୟାଳୟ ବେଂଗଳୁରୁରେ ଅ… |
| Punjabi | ✅ | 896 | 1. ਭਾਰਤੀ ਪੁਲਾੜ ਖੋਜ ਸੰਗਠਨ (ISRO) ਦਾ ਮੁੱਖ ਦਫ਼ਤਰ ਬੈਂਗਲੂਰੂ ਵਿੱਚ … |
| Tamil | ✅ | 965 | 1. இந்திய விண்வெளி ஆராய்ச்சி நிறுவனத்தின் (ISRO) தலைமையகம் ப… |
| Telugu | ✅ | 762 | 1. భారతీయ అంతరిక్ష పరిశోధనా సంస్థ (ISRO) ప్రధాన కార్యాలయం బె… |

