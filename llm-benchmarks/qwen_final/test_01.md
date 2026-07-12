# Qwen3-30B-A3B (Q4_K_M) — Test 1: Technical translation

**Category:** Multilingual  
**Date:** 2026-05-27 11:24:13  

### Hindi

**Prompt:** Translate the following paragraph into Hindi, using native Hindi script. Preserve technical terms in English where no standard native equivalent exists. Output only the Hindi translation, nothing else.

Text: "The API gateway routes incoming requests through a rate limiter before forwarding them to the appropriate microservice. If the circuit breaker is open, it returns a 503 Service Unavailable response. All request metadata is logged to a distributed tracing backend for observability."

*1124 tok | 78.16s | 14.4 t/s | think: 2679 chars | finish: stop*

<details><summary>Thinking (2679 chars)</summary>

````
Okay, let's tackle this translation. First, I need to understand the original text thoroughly. The paragraph is about an API gateway's functionality, mentioning components like rate limiter, circuit breaker, and distributed tracing backend. 

Starting with the first sentence: "The API gateway routes incoming requests through a rate limiter before forwarding them to the appropriate microservice." 

- "API gateway" is a technical term. In Hindi, it's commonly referred to as "एपीआई गेटवे" (API Gateway) since there's no standard native term. 
- "Routes" here means directing traffic, so "मार्गदर्शित करता है" (routes) seems right.
- "Incoming requests" translates to "आगमन प्रतिक्रियाएं" (incoming responses) but "requests" is more accurate as "अनुरोध" (requests). So "आगमन अनुरोध" (incoming requests).
- "Through a rate limiter" – "दर सीमक" (rate limiter) is the term used, as there's no standard Hindi equivalent.
- "Before forwarding them to the appropriate microservice" – "उचित माइक्रोसर्विस के लिए फ़ॉरवर्ड करता है" (forwarding to the appropriate microservice). "Microservice" remains in English as per the instruction.

Next sentence: "If the circuit breaker is open, it returns a 503 Service Unavailable response."

- "Circuit breaker" is a technical term, so "सर्किट ब्रेकर" (circuit breaker) is used.
- "Is open" translates to "खुला है" (is open).
- "Returns a 503 Service Unavailable response" – "503 सेवा उपलब्ध नहीं है प्रतिक्रिया लौटाता है" (returns a 503 Service Unavailable response). The HTTP status code remains as is.

Third sentence: "All request metadata is logged to a distributed tracing backend for observability."

- "All request metadata" – "सभी अनुरोध मेटाडेटा" (all request metadata).
- "Is logged" – "लॉग किया जाता है" (is logged).
- "To a distributed tracing backend" – "वितरित ट्रेसिंग बैकएंड" (distributed tracing backend). "Distributed" is "वितरित" and "tracing backend" is "ट्रेसिंग बैकएंड".
- "For observability" – "पार्सन के लिए" (for observability). However, "observability" is a technical term, so maybe "निरीक्षण" (observation) but the user said to keep technical terms in English. So "observability" remains as is.

Now, checking for any technical terms that might have a standard Hindi equivalent. Terms like "microservice" and "circuit breaker" don't have standard translations, so they stay in English. "Rate limiter" is also kept as is. "Distributed tracing backend" is translated, but "distributed" is "वितरित" and "tracing backend" is "ट्रेसिंग बैकएंड". 

Need to ensure that the translation is accurate and maintains the technical meaning. Also, using the native Hindi script, so Devanagari script. Let me put it all together now.
````

</details>

**Output:**

````
"एपीआई गेटवे आगमन अनुरोध को दर सीमक के माध्यम से मार्गदर्शित करता है जिसके बाद उचित माइक्रोसर्विस के लिए फॉरवर्ड करता है। यदि सर्किट ब्रेकर खुला है, तो यह 503 सेवा उपलब्ध नहीं है प्रतिक्रिया लौटाता है। सभी अनुरोध मेटाडेटा को वितरित ट्रेसिंग बैकएंड में लॉग किया जाता है जिसके लिए निरीक्षण के लिए।"
````

### Bengali

**Prompt:** Translate the following paragraph into Bengali, using native Bengali script. Preserve technical terms in English where no standard native equivalent exists. Output only the Bengali translation, nothing else.

Text: "The API gateway routes incoming requests through a rate limiter before forwarding them to the appropriate microservice. If the circuit breaker is open, it returns a 503 Service Unavailable response. All request metadata is logged to a distributed tracing backend for observability."

*734 tok | 48.64s | 15.1 t/s | think: 1600 chars | finish: stop*

<details><summary>Thinking (1600 chars)</summary>

````
Okay, the user wants me to translate a technical paragraph into Bengali using the native script. Let me start by reading the original text carefully.

First, the sentence about the API gateway routing requests through a rate limiter. "API gateway" is a technical term, so I should keep it in English. "Rate limiter" might not have a standard Bengali equivalent, so I'll leave that as is too. The rest of the sentence should be translated. "Routes incoming requests" becomes "আসন্ন অনুরোধগুলিকে পরিচালনা করে" and "forwarding them to the appropriate microservice" would be "সঠিক মাইক্রোসার্ভিসে পাঠায়।"

Next sentence: "If the circuit breaker is open, it returns a 503 Service Unavailable response." "Circuit breaker" is another technical term, so keep it in English. "Returns a 503 Service Unavailable response" translates to "503 সেবা অনুপলব্ধ উত্তর ফেরত দেয়।" I need to make sure the HTTP status code stays as is.

Third sentence: "All request metadata is logged to a distributed tracing backend for observability." "Request metadata" can be "অনুরোধের মেটাডেটা" and "distributed tracing backend" might not have a standard term, so keep it in English. "For observability" becomes "পর্যবেক্ষণের জন্য।"

I should check if any terms are better left in English. Terms like "microservice," "circuit breaker," "distributed tracing backend" don't have standard Bengali equivalents, so keeping them in English is correct. Also, ensure that the translation uses the native Bengali script without any transliteration. Avoid using any markdown and just provide the translation. Let me put it all together now.
````

</details>

**Output:**

````
"API গেটওয়ে আসন্ন অনুরোধগুলিকে একটি রেট লিমিটার মাধ্যমে পরিচালনা করে যথাযথ মাইক্রোসার্ভিসে পাঠায়। যদি সার্কিট ব্রেকার খোলা থাকে, তবে এটি 503 সেবা অনুপলব্ধ উত্তর ফেরত দেয়। সব অনুরোধের মেটাডেটা পর্যবেক্ষণের জন্য একটি ডিস্ট্রিবিউটেড ট্রেসিং ব্যাকএন্ডে লগ করা হয়।"
````

### Gujarati

**Prompt:** Translate the following paragraph into Gujarati, using native Gujarati script. Preserve technical terms in English where no standard native equivalent exists. Output only the Gujarati translation, nothing else.

Text: "The API gateway routes incoming requests through a rate limiter before forwarding them to the appropriate microservice. If the circuit breaker is open, it returns a 503 Service Unavailable response. All request metadata is logged to a distributed tracing backend for observability."

*3005 tok | 265.16s | 11.3 t/s | think: 4955 chars | finish: stop*

<details><summary>Thinking (4955 chars)</summary>

````
Okay, I need to translate this paragraph into Gujarati using the native script. Let me start by reading the original text carefully.

The first sentence: "The API gateway routes incoming requests through a rate limiter before forwarding them to the appropriate microservice." 

Breaking it down, "API gateway" is a technical term. Since there's no standard Gujarati equivalent, I'll keep it in English. "Routes" can be "સંચાલિત કરે છે" (routes). "Incoming requests" is "આવતા માગણીઓ". "Through a rate limiter" – "દર મર્યાદક માધ્યમ દ્વારા". "Before forwarding them" – "સ્થાનાંતરિત કરતા પહેલા". "To the appropriate microservice" – "યોગ્ય માઇક્રોસર્વિસ માટે".

Second sentence: "If the circuit breaker is open, it returns a 503 Service Unavailable response."

"Circuit breaker" is another technical term, so keep it as is. "Is open" – "ખુલ્લું છે". "Returns a 503 Service Unavailable response" – "503 સેવા ઉપલબ્ધ નથી પ્રતિસાદ પાછો ફરે છે".

Third sentence: "All request metadata is logged to a distributed tracing backend for observability."

"All request metadata" – "બધા માગણી મેટાડેટા". "Is logged" – "દર્શાવવામાં આવે છે". "To a distributed tracing backend" – "વિતરિત ટ્રેસિંગ બેકએન્ડ માટે". "For observability" – "નિરીક્ષણ માટે".

Now, putting it all together in Gujarati, making sure to use the native script. I need to check for any possible errors. For example, "rate limiter" is "દર મર્યાદક" which is a direct translation, but maybe "રેટ મર્યાદક" is more accurate. However, since the user said to preserve technical terms in English if there's no standard, maybe "rate limiter" stays as is. Wait, the instruction says to use native Gujarati script but preserve technical terms in English where no standard exists. So "rate limiter" might be translated, but if there's no standard, keep it in English. But I'm not sure if "દર મર્યાદક" is standard. Maybe it's better to keep "rate limiter" in English. Similarly for "circuit breaker" and "microservice".

So revising the translation:

"API ગેટવે આવતા માગણીઓને સ્થાનાંતરિત કરતા પહેલા રેટ મર્યાદક માધ્યમ દ્વારા માર્ગે મોકલે છે. જો સર્કિટ બ્રેકર ખુલ્લું છે, તો તે 503 સેવા ઉપલબ્ધ નથી પ્રતિસાદ પાછો ફરે છે. બધા માગણી મેટાડેટાને નિરીક્ષણ માટે વિતરિત ટ્રેસિંગ બેકએન્ડ માટે દર્શાવવામાં આવે છે."

Wait, "સર્કિટ બ્રેકર" is the Gujarati translation for "circuit breaker", but if there's no standard, maybe it should be kept in English. But I think "સર્કિટ બ્રેકર" is acceptable. Similarly, "માઇક્રોસર્વિસ" for microservice. However, the original text says "microservice" which is a technical term. The user said to preserve technical terms in English where no standard exists. So "microservice" should stay as is. So in the first sentence, "appropriate microservice" would be "યોગ્ય માઇક્રોસર્વિસ".

So adjusting that:

"API ગેટવે આવતા માગણીઓને સ્થાનાંતરિત કરતા પહેલા રેટ મર્યાદક માધ્યમ દ્વારા માર્ગે મોકલે છે. જો સર્કિટ બ્રેકર ખુલ્લું છે, તો તે 503 સેવા ઉપલબ્ધ નથી પ્રતિસાદ પાછો ફરે છે. બધા માગણી મેટાડેટાને નિરીક્ષણ માટે વિતરિત ટ્રેસિંગ બેકએન્ડ માટે દર્શાવવામાં આવે છે."

Wait, "રેટ મર્યાદક" for rate limiter. If there's no standard, maybe "rate limiter" should stay in English. So changing that to "રેટ મર્યાદક" or "રેટ લિમિટર". But since the user said to preserve technical terms in English where no standard exists, maybe "rate limiter" should be kept as is. But the user also said to use native Gujarati script. So I need to check if "રેટ મર્યાદક" is the correct translation. Alternatively, maybe "રેટ લિમિટર" is better. However, without knowing the exact standard, it's safer to use the direct translation. But I think "રેટ મર્યાદક" is acceptable.

Similarly, "સર્કિટ બ્રેકર" for circuit breaker. If there's no standard, maybe it's better to keep it in English. But again, the user might expect the Gujarati translation. This is a bit tricky. Since the instruction is to preserve technical terms in English where no standard exists, but the user also wants the translation in Gujarati script. So if there's no standard Gujarati term, use English. But how do I know if "સર્કિટ બ્રેકર" is standard? Maybe it's better to use the English term here. But I'm not sure. Maybe the user expects the Gujarati translation. 

This is a bit of a dilemma. To resolve, I'll check if "સર્કિટ બ્રેકર" is commonly used in Gujarati technical contexts. If not, then use the English term. Since I can't look it up, I'll proceed with the Gujarati translation as "સર્કિટ બ્રેકર" and "માઇક્રોસર્વિસ" for microservice.

So the final translation would be:

"API ગેટવે આવતા માગણીઓને સ્થાનાંતરિત કરતા પહેલા રેટ મર્યાદક માધ્યમ દ્વારા માર્ગે મોકલે છે. જો સર્કિટ બ્રેકર ખુલ્લું છે, તો તે 503 સેવા ઉપલબ્ધ નથી પ્રતિસાદ પાછો ફરે છે. બધા માગણી મેટાડેટાને નિરીક્ષણ માટે વિતરિત ટ્રેસિંગ બેકએન્ડ માટે દર્શાવવામાં આવે છે."

I think that's it. Now, double-checking for any errors. Make sure all technical terms are preserved where necessary. The user said to output only the Gujarati translation, nothing else. So this should be the final answer.
````

</details>

**Output:**

````
"API ગેટવે આવતા માગણીઓને સ્થાનાંતરિત કરતા પહેલા રેટ મર્યાદક માધ્યમ દ્વારા માર્ગે મોકલે છે. જો સર્કિટ બ્રેકર ખુલ્લું છે, તો તે 503 સેવા ઉપલબ્ધ નથી પ્રતિસાદ પાછો ફરે છે. બધા માગણી મેટાડેટાને નિરીક્ષણ માટે વિતરિત ટ્રેસિંગ બેકએન્ડ માટે દર્શાવવામાં આવે છે."
````

### Kannada

**Prompt:** Translate the following paragraph into Kannada, using native Kannada script. Preserve technical terms in English where no standard native equivalent exists. Output only the Kannada translation, nothing else.

Text: "The API gateway routes incoming requests through a rate limiter before forwarding them to the appropriate microservice. If the circuit breaker is open, it returns a 503 Service Unavailable response. All request metadata is logged to a distributed tracing backend for observability."

*1257 tok | 88.54s | 14.2 t/s | think: 1812 chars | finish: stop*

<details><summary>Thinking (1812 chars)</summary>

````
Okay, I need to translate this paragraph into Kannada using the native script. Let me start by reading the original text carefully.

First sentence: "The API gateway routes incoming requests through a rate limiter before forwarding them to the appropriate microservice." 

"API gateway" – I think "API" is commonly used in Kannada tech contexts, so I'll keep it as is. "Gateway" might be "ಗೇಟ್ವೇ" in Kannada. "Routes" could be "ಮಾರ್ಗನಿರ್ದೇಶಿಸುತ್ತದೆ". "Incoming requests" is "ಆಗಮಿಸುವ ಪ್ರಶ್ನೆಗಳು" or "ಆಗಮಿಸುವ ಅನುರೋಧಗಳು". "Rate limiter" is a technical term; maybe "ರೇಟ್ ಲಿಮಿಟರ್" since there's no standard translation. "Forwarding them" would be "ಅವುಗಳನ್ನು ಮುಂದಿನ ಮಾರ್ಗಕ್ಕೆ ಕಳುಹಿಸುತ್ತದೆ". "Appropriate microservice" – "ಅನುಕೂಲಕರ ಮೈಕ್ರೋಸರ್ವಿಸ್" or "ಸರಿಯಾದ ಮೈಕ್ರೋಸರ್ವಿಸ್".

Second sentence: "If the circuit breaker is open, it returns a 503 Service Unavailable response."

"Circuit breaker" is a technical term, so "ಸರ್ಕ್ಯೂಟ್ ಬ್ರೇಕರ್" might be used. "Open" is "ತೆರೆದಿರುವ". "Returns a 503 Service Unavailable response" – "503 ಸೇವೆ ಅನುಲಭ್ಯವಿಲ್ಲದ ಪ್ರತಿಕ್ರಿಯೆಯನ್ನು ಹಿಂತಿರುಗಿಸುತ್ತದೆ". I need to check if "Service Unavailable" is translated or kept as is. Since it's a standard HTTP status code, maybe keep it in English.

Third sentence: "All request metadata is logged to a distributed tracing backend for observability."

"All request metadata" – "ಪ್ರತಿ ಅನುರೋಧದ ಮೆಟಾಡೇಟಾ". "Logged" is "ದಾಖಲಿಸಲಾಗುತ್ತದೆ". "Distributed tracing backend" – "ವಿತರಿತ ಟ್ರೇಸಿಂಗ್ ಬ್ಯಾಕೆಂಡ್". "For observability" – "ಆತ್ಮನಿರೀಕ್ಷಣೆಗಾಗಿ".

Now, putting it all together in Kannada, making sure to use the native script. I need to ensure that technical terms like API, rate limiter, circuit breaker, 503, etc., are preserved as in the original. Also, check for proper grammar and sentence structure in Kannada. Let me verify each part again for accuracy.
````

</details>

**Output:**

````
"API ಗೇಟ್ವೇ ಆಗಮಿಸುವ ಅನುರೋಧಗಳನ್ನು ರೇಟ್ ಲಿಮಿಟರ್ ಮೂಲಕ ಮಾರ್ಗನಿರ್ದೇಶಿಸುತ್ತದೆ ಮತ್ತು ಸರಿಯಾದ ಮೈಕ್ರೋಸರ್ವಿಸ್ಗೆ ಮುಂದಿನ ಮಾರ್ಗಕ್ಕೆ ಕಳುಹಿಸುತ್ತದೆ. ಸರ್ಕ್ಯೂಟ್ ಬ್ರೇಕರ್ ತೆರೆದಿರುವಾಗ, ಅದು 503 ಸರ್ವೀಸ್ ಅನುಲಭ್ಯವಿಲ್ಲದ ಪ್ರತಿಕ್ರಿಯೆಯನ್ನು ಹಿಂತಿರುಗಿಸುತ್ತದೆ. ಪ್ರತಿ ಅನುರೋಧದ ಮೆಟಾಡೇಟಾವನ್ನು ಆತ್ಮನಿರೀಕ್ಷಣೆಗಾಗಿ ವಿತರಿತ ಟ್ರೇಸಿಂಗ್ ಬ್ಯಾಕೆಂಡ್‌ಗೆ ದಾಖಲಿಸಲಾಗುತ್ತದೆ."
````

### Malayalam

**Prompt:** Translate the following paragraph into Malayalam, using native Malayalam script. Preserve technical terms in English where no standard native equivalent exists. Output only the Malayalam translation, nothing else.

Text: "The API gateway routes incoming requests through a rate limiter before forwarding them to the appropriate microservice. If the circuit breaker is open, it returns a 503 Service Unavailable response. All request metadata is logged to a distributed tracing backend for observability."

*1150 tok | 80.1s | 14.4 t/s | think: 1568 chars | finish: stop*

<details><summary>Thinking (1568 chars)</summary>

````
Okay, I need to translate this paragraph into Malayalam using the native script. Let me start by reading the original text carefully.

The first sentence: "The API gateway routes incoming requests through a rate limiter before forwarding them to the appropriate microservice." 

Breaking it down: "API gateway" is a technical term. Since there's no standard Malayalam equivalent, I'll keep it as "API ഗേറ്റ്വേ". "Routes incoming requests" – "ഇന്കമിംഗ് അപേക്ഷകൾ റൂട്ട് ചെയ്യുന്നു" might work. "Through a rate limiter" – "റേറ്റ് ലിമിറ്റർ വഴി" is straightforward. "Before forwarding them to the appropriate microservice" – "അനുയോജ്യമായ മൈക്രോസർവിസിലേക്ക് പ്രേരിപ്പിക്കുന്നതിനുമുമ്പ്".

Second sentence: "If the circuit breaker is open, it returns a 503 Service Unavailable response."

"Circuit breaker" is another technical term. I'll use "സർക്യൂട്ട് ബ്രേക്കർ". "Is open" – "തുറന്നിരിക്കുന്നു". "Returns a 503 Service Unavailable response" – "503 സേവനം ലഭ്യമല്ല എന്ന പ്രതികരണം തിരികെ നൽകുന്നു".

Third sentence: "All request metadata is logged to a distributed tracing backend for observability."

"All request metadata" – "എല്ലാ അപേക്ഷാ മെറ്റാഡാറ്റ ആണ്". "Is logged" – "ലോഗ് ചെയ്യുന്നു". "To a distributed tracing backend" – "ഡിസ്ട്രിബ്യൂട്ടഡ് ട്രേസിംഗ് ബാക്ക്‌ഡെൻ ആയി". "For observability" – "ഓബ്സർവേബിലിറ്റിക്കായി".

I need to make sure that technical terms like "rate limiter", "circuit breaker", "microservice", "distributed tracing backend" are kept in English as per the instructions. Also, check for correct Malayalam script usage. Let me put it all together now.
````

</details>

**Output:**

````
"API ഗേറ്റ്വേ ഇന്കമിംഗ് അപേക്ഷകൾ റേറ്റ് ലിമിറ്റർ വഴി റൂട്ട് ചെയ്യുന്നു, അനുയോജ്യമായ മൈക്രോസർവിസിലേക്ക് പ്രേരിപ്പിക്കുന്നതിനുമുമ്പ്. സർക്യൂട്ട് ബ്രേക്കർ തുറന്നിരിക്കുന്നുവെങ്കിൽ, 503 സേവനം ലഭ്യമല്ല എന്ന പ്രതികരണം തിരികെ നൽകുന്നു. എല്ലാ അപേക്ഷാ മെറ്റാഡാറ്റ ഓബ്സർവേബിലിറ്റിക്കായി ഡിസ്ട്രിബ്യൂട്ടഡ് ട്രേസിംഗ് ബാക്ക്‌ഡെൻ ആയി ലോഗ് ചെയ്യുന്നു."
````

### Marathi

**Prompt:** Translate the following paragraph into Marathi, using native Marathi script. Preserve technical terms in English where no standard native equivalent exists. Output only the Marathi translation, nothing else.

Text: "The API gateway routes incoming requests through a rate limiter before forwarding them to the appropriate microservice. If the circuit breaker is open, it returns a 503 Service Unavailable response. All request metadata is logged to a distributed tracing backend for observability."

*1162 tok | 81.11s | 14.3 t/s | think: 2131 chars | finish: stop*

<details><summary>Thinking (2131 chars)</summary>

````
Okay, I need to translate this paragraph into Marathi using the native script. Let me start by understanding each part of the text.

First sentence: "The API gateway routes incoming requests through a rate limiter before forwarding them to the appropriate microservice." 

"API gateway" – I think "API" is used as is in Marathi, so "एपीआई गेटवे" (API Gateway). "Routes" would be "मार्गदर्शित करते" (routes). "Incoming requests" is "आगमन प्रतिक्रिया" (incoming requests). "Through a rate limiter" – "दर सीमक" (rate limiter). "Before forwarding them" – "पूर्वी पाठविण्यापूर्वी". "To the appropriate microservice" – "अनुकूल मायक्रोसर्व्हिसला" (appropriate microservice). So the first sentence would be: "एपीआई गेटवे आगमन प्रतिक्रिया दर सीमक मार्गे मार्गदर्शित करते आणि त्यांना अनुकूल मायक्रोसर्व्हिसला पाठविण्यापूर्वी."

Second sentence: "If the circuit breaker is open, it returns a 503 Service Unavailable response."

"Circuit breaker" – "सर्किट ब्रेकर" (since there's no standard Marathi term). "Is open" – "खुला आहे". "It returns" – "ते परत करते". "A 503 Service Unavailable response" – "503 सेवा उपलब्ध नाही उत्तर" (keeping the code as is). So: "जर सर्किट ब्रेकर खुला असेल तर ते 503 सेवा उपलब्ध नाही उत्तर परत करते."

Third sentence: "All request metadata is logged to a distributed tracing backend for observability."

"All request metadata" – "सर्व प्रतिक्रिया मेटाडेटा". "Is logged" – "लॉग केले जाते". "To a distributed tracing backend" – "वितरित ट्रेसिंग बॅकएंड मध्ये". "For observability" – "अवलोकनासाठी". So: "सर्व प्रतिक्रिया मेटाडेटा वितरित ट्रेसिंग बॅकएंड मध्ये अवलोकनासाठी लॉग केले जाते."

Now, I need to check if technical terms like "rate limiter", "circuit breaker", "microservice", "distributed tracing backend" are correctly kept in English. Also, ensure the Marathi script is correct. Let me verify each term again. 

"Rate limiter" – "दर सीमक" seems okay. "Circuit breaker" – "सर्किट ब्रेकर" is acceptable. "Microservice" – "मायक्रोसर्व्हिस" is the direct translation. "Distributed tracing backend" – "वितरित ट्रेसिंग बॅकएंड" is correct. 

I think that's all. Now, putting it all together without any extra text.
````

</details>

**Output:**

````
"एपीआई गेटवे आगमन प्रतिक्रिया दर सीमक मार्गे मार्गदर्शित करते आणि त्यांना अनुकूल मायक्रोसर्व्हिसला पाठविण्यापूर्वी. जर सर्किट ब्रेकर खुला असेल तर ते 503 सेवा उपलब्ध नाही उत्तर परत करते. सर्व प्रतिक्रिया मेटाडेटा वितरित ट्रेसिंग बॅकएंड मध्ये अवलोकनासाठी लॉग केले जाते."
````

### Odia

**Prompt:** Translate the following paragraph into Odia, using native Odia script. Preserve technical terms in English where no standard native equivalent exists. Output only the Odia translation, nothing else.

Text: "The API gateway routes incoming requests through a rate limiter before forwarding them to the appropriate microservice. If the circuit breaker is open, it returns a 503 Service Unavailable response. All request metadata is logged to a distributed tracing backend for observability."

*2453 tok | 201.32s | 12.2 t/s | think: 3259 chars | finish: stop*

<details><summary>Thinking (3259 chars)</summary>

````
Okay, I need to translate this paragraph into Odia using the native script. Let me start by reading the original text carefully.

The first sentence: "The API gateway routes incoming requests through a rate limiter before forwarding them to the appropriate microservice." 

Breaking it down: "API gateway" – since there's no standard Odia term, I'll keep it as "API gateway". "Routes incoming requests" – "ଆଇନକମିଂ ଅନୁରୋଧ ପାଇଁ ରାଉଟ୍ କରେ" maybe? "Through a rate limiter" – "ଏକ ରେଟ୍ ଲିମିଟର ମାଧ୍ୟମରେ". "Before forwarding them" – "ଅଗ୍ରାଗ୍ରିମ ପଠାଇବା ପୂର୍ବରୁ". "To the appropriate microservice" – "ଉଚିତ ମାଇକ୍ରୋସର୍ଭିସ୍ କୁ".

Second sentence: "If the circuit breaker is open, it returns a 503 Service Unavailable response."

"Circuit breaker" – again, no standard term, so keep as "ସର୍କିଟ ବ୍ରେକର୍". "Is open" – "ଖୋଲା ଅଛି". "Returns a 503 Service Unavailable response" – "503 ସର୍ଭିସ୍ ଅନ୍ଯାପନୀୟ ଉତ୍ତର ଫିରି ଦିଏ".

Third sentence: "All request metadata is logged to a distributed tracing backend for observability."

"All request metadata" – "ସମସ୍ତ ଅନୁରୋଧ ମେଟାଡାଟା". "Is logged" – "ଲଗ୍ କରାଯାଏ". "To a distributed tracing backend" – "ଏକ ବିତରିତ ଟ୍ରାସିଂ ବାକ୍କଣ୍ଟ୍ରି କୁ". "For observability" – "ଦୃଶ୍ୟତା ପାଇଁ".

Now, putting it all together in Odia, making sure the technical terms are in English and the script is correct. I need to check for any grammatical errors. Also, ensure that the structure is natural in Odia. Maybe adjust the word order where necessary. For example, "ଅଗ୍ରାଗ୍ରିମ ପଠାଇବା ପୂର୍ବରୁ" might be better as "ପଠାଇବା ପୂର୍ବରୁ" for brevity. Also, check if "ବାକ୍କଣ୍ଟ୍ରି" is the right term for "backend" – maybe "ବ୍ୟାକ୍ଏଣ୍ଡ" is more common, but since the user said to preserve technical terms in English, maybe "backend" is okay. Wait, the instruction says to preserve technical terms in English where no standard native equivalent exists. So "backend" might be okay as is. But "tracing backend" – maybe "ଟ୍ରାସିଂ ବାକ୍ଏଣ୍ଡ" if "backend" is kept in English. But I'm not sure. Alternatively, use "ବାକ୍ଏଣ୍ଡ" as the native term. Hmm. But the user said to use native Odia script, so maybe "ବାକ୍ଏଣ୍ଡ" is acceptable. But I need to check. Since "backend" is a technical term, and there's no standard Odia equivalent, it's better to keep it as "backend".

So the final translation would be:

"API gateway ଆଇନକମିଂ ଅନୁରୋଧଗୁଡିକୁ ଏକ ରେଟ୍ ଲିମିଟର ମାଧ୍ୟମରେ ପଠାଇବା ପୂର୍ବରୁ ଉଚିତ ମାଇକ୍ରୋସର୍ଭିସ୍ କୁ ପଠାଏ। ଯଦି ସର୍କିଟ ବ୍ରେକର୍ ଖୋଲା ଅଛି, ତେବେ ଏହା 503 ସର୍ଭିସ୍ ଅନ୍ଯାପନୀୟ ଉତ୍ତର ଫିରି ଦିଏ। ସମସ୍ତ ଅନୁରୋଧ ମେଟାଡାଟା ଦୃଶ୍ୟତା ପାଇଁ ଏକ ବିତରିତ ଟ୍ରାସିଂ ବାକ୍ଏଣ୍ଡ କୁ ଲଗ୍ କରାଯାଏ।"

Wait, "ବିତରିତ ଟ୍ରାସିଂ" – "distributed tracing" is "ବିତରିତ ଟ୍ରାସିଂ" but maybe "ବିତରିତ ଟ୍ରାସିଂ" is okay. Also, "ବାକ୍ଏଣ୍ଡ" is the English term, but in Odia, sometimes "ବ୍ୟାକ୍ଏଣ୍ଡ" is used. However, since the instruction says to preserve technical terms in English, maybe "backend" is better. So "ବିତରିତ ଟ୍ରାସିଂ ବ୍ୟାକ୍ଏଣ୍ଡ" – but I'm not sure. Alternatively, "ବିତରିତ ଟ୍ରାସିଂ ବାକ୍ଏଣ୍ଡ" – but the user might prefer the English term. I think it's safer to use the English term here as per the instruction. So the final translation should have "backend" as is. Let me adjust that.

Final check: Make sure all technical terms are in English and the script is correct. Also, ensure that the sentences flow naturally in Odia. Looks good.
````

</details>

**Output:**

````
"API gateway ଆଇନକମିଂ ଅନୁରୋଧଗୁଡିକୁ ଏକ ରେଟ୍ ଲିମିଟର ମାଧ୍ୟମରେ ପଠାଇବା ପୂର୍ବରୁ ଉଚିତ ମାଇକ୍ରୋସର୍ଭିସ୍ କୁ ପଠାଏ। ଯଦି ସର୍କିଟ ବ୍ରେକର୍ ଖୋଲା ଅଛି, ତେବେ ଏହା 503 ସର୍ଭିସ୍ ଅନ୍ଯାପନୀୟ ଉତ୍ତର ଫିରି ଦିଏ। ସମସ୍ତ ଅନୁରୋଧ ମେଟାଡାଟା ଦୃଶ୍ୟତା ପାଇଁ ଏକ ବିତରିତ ଟ୍ରାସିଂ backend କୁ ଲଗ୍ କରାଯାଏ।"
````

### Punjabi

**Prompt:** Translate the following paragraph into Punjabi, using native Punjabi script. Preserve technical terms in English where no standard native equivalent exists. Output only the Punjabi translation, nothing else.

Text: "The API gateway routes incoming requests through a rate limiter before forwarding them to the appropriate microservice. If the circuit breaker is open, it returns a 503 Service Unavailable response. All request metadata is logged to a distributed tracing backend for observability."

*1297 tok | 92.22s | 14.1 t/s | think: 2484 chars | finish: stop*

<details><summary>Thinking (2484 chars)</summary>

````
Okay, I need to translate this paragraph into Punjabi using the native script. Let me start by reading the original text carefully.

The first sentence: "The API gateway routes incoming requests through a rate limiter before forwarding them to the appropriate microservice." 

"API gateway" – since "API" is a technical term, I'll keep it as is. "Gateway" in Punjabi is "गेटवे" (gatwe). "Routes" would be "रूट करता है" (root karta hai). "Incoming requests" is "आगंतुक अनुरोध" (aagantu anurodh). "Through a rate limiter" – "रेट लिमिटर के माध्यम से" (rate limiter ka madhyam se). "Before forwarding them" – "पहले फ़ॉरवर्ड करता है" (pahle forward karta hai). "To the appropriate microservice" – "उचित माइक्रोसर्विस के लिए" (uchit microservice ke liye). So the first sentence would be: "एपीआई गेटवे आगंतुक अनुरोध को रेट लिमिटर के माध्यम से पहले फ़ॉरवर्ड करता है जो उचित माइक्रोसर्विस के लिए होता है।"

Next sentence: "If the circuit breaker is open, it returns a 503 Service Unavailable response."

"Circuit breaker" – this is a technical term, so I'll keep "सर्किट ब्रेकर" (sirkuit breakar). "Is open" – "खुला है" (khula hai). "It returns" – "यह लौटता है" (yeh lautata hai). "A 503 Service Unavailable response" – "503 सेविस अनएवेलेबल प्रतिक्रिया" (503 service unavialable pratiyaya). So the sentence: "अगर सर्किट ब्रेकर खुला है, तो यह 503 सेविस अनएवेलेबल प्रतिक्रिया लौटाता है।"

Third sentence: "All request metadata is logged to a distributed tracing backend for observability."

"All request metadata" – "सभी अनुरोध मेटाडेटा" (sabhi anurodh metadata). "Is logged" – "लॉग किया जाता है" (log kiya jata hai). "To a distributed tracing backend" – "एक वितरित ट्रेसिंग बैकएंड के लिए" (ek vitarit tracing backend ke liye). "For observability" – "पर्यवेक्षण के लिए" (paryavekshan ke liye). So the sentence: "सभी अनुरोध मेटाडेटा को वितरित ट्रेसिंग बैकएंड में लॉग किया जाता है पर्यवेक्षण के लिए।"

Now, I need to check if all technical terms are preserved as in the original. Terms like "API", "rate limiter", "microservice", "circuit breaker", "503 Service Unavailable", "distributed tracing backend" – these are kept in English or transliterated as per Punjabi script. 

Wait, "distributed tracing backend" – "वितरित ट्रेसिंग बैकएंड" (vitarit tracing backend) seems correct. "Observability" is translated to "पर्यवेक्षण" (paryavekshan), which is the standard term in Punjabi. 

I think this should be accurate. Let me put it all together without any extra text as per the user's instruction.
````

</details>

**Output:**

````
"एपीआई गेटवे आगंतुक अनुरोध को रेट लिमिटर के माध्यम से पहले फ़ॉरवर्ड करता है जो उचित माइक्रोसर्विस के लिए होता है। अगर सर्किट ब्रेकर खुला है, तो यह 503 सेविस अनएवेलेबल प्रतिक्रिया लौटाता है। सभी अनुरोध मेटाडेटा को वितरित ट्रेसिंग बैकएंड में लॉग किया जाता है पर्यवेक्षण के लिए।"
````

### Tamil

**Prompt:** Translate the following paragraph into Tamil, using native Tamil script. Preserve technical terms in English where no standard native equivalent exists. Output only the Tamil translation, nothing else.

Text: "The API gateway routes incoming requests through a rate limiter before forwarding them to the appropriate microservice. If the circuit breaker is open, it returns a 503 Service Unavailable response. All request metadata is logged to a distributed tracing backend for observability."

*1436 tok | 103.87s | 13.8 t/s | think: 2696 chars | finish: stop*

<details><summary>Thinking (2696 chars)</summary>

````
Okay, I need to translate this paragraph into Tamil using the native script. Let me start by reading the original text carefully.

The first sentence: "The API gateway routes incoming requests through a rate limiter before forwarding them to the appropriate microservice." 

"API gateway" – I think "API" is commonly used in Tamil tech contexts, so I'll keep it as is. "Gateway" can be "கேட்வே" (kēṭvē). "Routes" would be "நியமிக்கிறது" (niyamikkiṟatu). "Incoming requests" is "வரும் செய்கைகள்" (varum ceykaiyalkaḷ). "Through a rate limiter" – "rate limiter" might not have a standard translation, so I'll keep it in English. "Before forwarding them" is "முன்னர் அனுப்புகிறது" (muṉnara anuppu kiṟatu). "To the appropriate microservice" – "microservice" is another technical term, so I'll keep it as is. "Appropriate" can be "தகுந்த" (thakuṇṭa).

So the first sentence: "API கேட்வே வரும் செய்கைகளை ஓர் ரேட் லிமிட்டர் மூலம் தகுந்த மைக்ரோசர்விஸ் க்கு முன்னர் அனுப்புகிறது."

Next sentence: "If the circuit breaker is open, it returns a 503 Service Unavailable response."

"Circuit breaker" is a technical term, so I'll keep it in English. "Is open" – "திறந்துள்ளது" (tiṟantuḷḷatu). "Returns a 503 Service Unavailable response" – "503 சேவை கிடைக்காது என்ற பதிலை திரும்ப அனுப்புகிறது." But "Service Unavailable" is a standard HTTP status, so maybe keep it as is. So: "சர்க்யூட் பிரேக்கர் திறந்துள்ளது எனில், அது 503 Service Unavailable பதிலை திரும்ப அனுப்புகிறது."

Third sentence: "All request metadata is logged to a distributed tracing backend for observability."

"All request metadata" – "அனைத்து செய்கை மெட்டாடேட்டா" (aṉaittu ceykai mettāṭēṭā). "Is logged" – "பதிவு செய்யப்படுகிறது" (paṭivu ceyyappadukiṟatu). "To a distributed tracing backend" – "நிலையான தொடர்வு பின்னோக்கி" (niḻaẏāna ṭōṭarvu piṉnōkki). "For observability" – "நோக்குமைக்காக" (nōkkumai kāka). So: "அனைத்து செய்கை மெட்டாடேட்டா நிலையான தொடர்வு பின்னோக்கி நோக்குமைக்காக பதிவு செய்யப்படுகிறது."

Now, check for technical terms. "Rate limiter," "circuit breaker," "microservice," "distributed tracing backend" – these might not have standard translations, so keeping them in English is correct. Also, "503 Service Unavailable" is an HTTP status, so it's okay to leave as is.

Make sure the Tamil script is correct. Use native Tamil script, not transliteration. So, for example, "கேட்வே" instead of "kēṭvē". Also, check for any grammar issues. The sentences should be structured properly in Tamil.

Double-check each part. The translation seems accurate. No extra words, just the translation. The user said to output only the Tamil translation, nothing else. So the final answer should be the three sentences in Tamil script as above.
````

</details>

**Output:**

````
"API கேட்வே வரும் செய்கைகளை ஓர் ரேட் லிமிட்டர் மூலம் தகுந்த மைக்ரோசர்விஸ் க்கு முன்னர் அனுப்புகிறது. சர்க்யூட் பிரேக்கர் திறந்துள்ளது எனில், அது 503 Service Unavailable பதிலை திரும்ப அனுப்புகிறது. அனைத்து செய்கை மெட்டாடேட்டா நிலையான தொடர்வு பின்னோக்கி நோக்குமைக்காக பதிவு செய்யப்படுகிறது."
````

### Telugu

**Prompt:** Translate the following paragraph into Telugu, using native Telugu script. Preserve technical terms in English where no standard native equivalent exists. Output only the Telugu translation, nothing else.

Text: "The API gateway routes incoming requests through a rate limiter before forwarding them to the appropriate microservice. If the circuit breaker is open, it returns a 503 Service Unavailable response. All request metadata is logged to a distributed tracing backend for observability."

*1162 tok | 81.47s | 14.3 t/s | think: 1672 chars | finish: stop*

<details><summary>Thinking (1672 chars)</summary>

````
Okay, I need to translate this paragraph into Telugu using the native script. Let me start by reading the original text carefully.

The first sentence: "The API gateway routes incoming requests through a rate limiter before forwarding them to the appropriate microservice." 

Breaking it down: "API gateway" is a technical term. Since there's no standard Telugu equivalent, I'll keep it as "ఏపీఐ గేట్వే". "Routes incoming requests" – "ఇన్‌కమింగ్ అవకాశాలను మార్గం ఇస్తుంది". "Through a rate limiter" – "రేట్ లిమిటర్ ద్వారా". "Before forwarding them to the appropriate microservice" – "సరైన మైక్రోసర్వీస్ కు పంపడానికి ముందు".

Second sentence: "If the circuit breaker is open, it returns a 503 Service Unavailable response."

"Circuit breaker" is another technical term. I'll keep it as "సర్క్యూట్ బ్రేకర్". "Is open" – "పెద్దది". "Returns a 503 Service Unavailable response" – "503 సర్వీస్ అన్‌యేషబుల్ సమాధానం తిరిగి ఇస్తుంది".

Third sentence: "All request metadata is logged to a distributed tracing backend for observability."

"All request metadata" – "అన్ని అవకాశాల మెటాడేటా". "Is logged" – "లాగ్ చేయబడుతుంది". "To a distributed tracing backend" – "డిస్ట్రిబ్యూటెడ్ ట్రేసింగ్ బ్యాకెండ్ కు". "For observability" – "అంచనా కోసం".

Now, putting it all together in Telugu script. I need to ensure that technical terms like API, rate limiter, circuit breaker, microservice, distributed tracing backend, etc., are kept in English as per the instructions. Also, check for correct Telugu script usage and sentence structure. Let me verify each part again to make sure there are no errors. Once done, the output should be only the Telugu translation without any additional text.
````

</details>

**Output:**

````
"ఏపీఐ గేట్వే ఇన్‌కమింగ్ అవకాశాలను రేట్ లిమిటర్ ద్వారా మార్గం ఇస్తుంది మరియు సరైన మైక్రోసర్వీస్ కు పంపడానికి ముందు. సర్క్యూట్ బ్రేకర్ పెద్దది అయితే, ఇది 503 సర్వీస్ అన్‌యేషబుల్ సమాధానం తిరిగి ఇస్తుంది. అన్ని అవకాశాల మెటాడేటా డిస్ట్రిబ్యూటెడ్ ట్రేసింగ్ బ్యాకెండ్ కు లాగ్ చేయబడుతుంది అంచనా కోసం."
````

