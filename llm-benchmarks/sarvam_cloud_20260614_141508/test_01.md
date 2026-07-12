# Sarvam 30B (Q4_K_M) — Test 1: Technical translation

**Category:** Multilingual  
**Date:** 2026-06-14 14:17:28  

### Hindi

**Prompt:** Translate the following paragraph into Hindi, using native Hindi script. Preserve technical terms in English where no standard native equivalent exists. Output only the Hindi translation, nothing else.

Text: "The API gateway routes incoming requests through a rate limiter before forwarding them to the appropriate microservice. If the circuit breaker is open, it returns a 503 Service Unavailable response. All request metadata is logged to a distributed tracing backend for observability."

*2658 tok | 10.36s | 256.7 t/s | think: 9600 chars | finish: stop*

<details><summary>Thinking (9600 chars)</summary>

````
1.  **Deconstruct the Request:**

    *   **Task:** Translate a specific English paragraph into Hindi.
    *   **Constraint 1:** Use native Hindi script (Devanagari). This means no transliteration (like "Romanised Hindi").
    *   **Constraint 2:** Preserve technical terms in English if no standard native equivalent exists. This is a key instruction. I need to identify the "jargon" and decide if it has a common Hindi equivalent or if it's better to keep it in English.
    *   **Constraint 3:** Output *only* the Hindi translation. No "Here is the translation:" or any other conversational text. Just the final, translated paragraph.

2.  **Analyze the Source Text:**

    *   "The API gateway routes incoming requests through a rate limiter before forwarding them to the appropriate microservice."
        *   **API gateway:** This is a very specific technical term. Is there a standard Hindi equivalent? "API" is often used as-is. "Gateway" can be "द्वार" (dwaar), but in a tech context, "API gateway" is a compound term. Keeping it in English is the most common and clear approach in the Indian tech community. I'll stick with "API gateway".
        *   **routes:** This means to direct or send. "राउट करता है" (routs karta hai) is a direct translation. "निर्देशित करता है" (nirdeshit karta hai) is also good. "राउट" is a common anglicism. "निर्देशित" is more formal/technical. Let's go with "राउट" as it's common in this context, or maybe "निर्देशित" for a more formal tone. Let's consider both. "राउट करता है" is concise. "निर्देशित करता है" is more descriptive. I'll lean towards "राउट" as it's a direct cognate and widely understood.
        *   **incoming requests:** "आने वाले अनुरोध" (aane waale anurodh) is a literal translation. "आने वाली अनुरोध" (aane waali anurodh) is also good. "आने वाले" (aane waale) is a common way to form adjectives. "अनुरोध" (anurodh) is the correct word for "request".
        *   **through a rate limiter:** "रेट लिमिटर के माध्यम से" (rate limiter ke madhyam se) is a direct translation. "रेट लिमिटर" is a standard term. "के माध्यम से" is standard.
        *   **before forwarding them:** "उन्हें आगे भेजने से पहले" (unhe aage bhejne se pehle) is a good, literal translation. "उन्हें अग्रेषित करने से पहले" (unhe agraheet karne se pehle) is more formal. "उन्हें भेजने से पहले" (unhe bhejne se pehle) is simpler. "आगे भेजना" (aage bhejna) is a very common and clear phrase.
        *   **to the appropriate microservice:** "उपयुक्त माइक्रोसर्विस" (upayukt microservice) is a direct translation. "उपयुक्त" is the right word for "appropriate". "माइक्रोसर्विस" is another standard technical term, often kept in English.

    *   **Sentence 2:** "If the circuit breaker is open, it returns a 503 Service Unavailable response."
        *   **If the circuit breaker is open:** "यदि सर्किट ब्रेकर खुला है" (yadi circuit breaker khula hai) is the standard translation. "सर्किट ब्रेकर" is a standard term. "खुला है" (khula hai) is the correct state.
        *   **it returns:** "यह वापस करता है" (yeh wapas karta hai) or "यह लौटाता है" (yeh lautata hai). "लौटाता है" (lautata hai) is more formal and fits the technical context better.
        *   **a 503 Service Unavailable response:** This is a very specific HTTP status code. "503 Service Unavailable" is the standard way to write this. "response" can be "प्रतिक्रिया" (pratikriya). So, "503 Service Unavailable प्रतिक्रिया". This is a standard way to present it.

    *   **Sentence 3:** "All request metadata is logged to a distributed tracing backend for observability."
        *   **All request metadata:** "सभी अनुरोध मेटाडेटा" (sabhi anurodh metadata). "मेटाडेटा" is a standard term, often used as-is.
        *   **is logged:** "दर्ज किया जाता है" (darj kiya jaata hai). This is the standard passive voice construction.
        *   **to a distributed tracing backend:** This is a complex technical phrase. "distributed tracing" is a key concept. "tracing" can be "ट्रेसिंग" or "अनुरेखण" (anurekhan). "distributed" is "वितरित" (vitarit). "backend" is "बैकएंड" or "बैकएंड". So, "वितरित अनुरेखण बैकएंड" (vitarit anurekhan backend). This is the most accurate and common way to say it.
        *   **for observability:** "अवलोकनीयता" (avashyogyata) is the direct and correct translation. It's a technical term, so keeping it in English is also an option, but the Hindi equivalent is well-established in this context.

3.  **Synthesize and Refine the Translation:**

    *   **Sentence 1:** "The API gateway routes incoming requests through a rate limiter before forwarding them to the appropriate microservice."
        *   *Attempt 1:* API gateway आने वाले अनुरोधों को रेट लिमिटर के माध्यम से आगे भेजने से पहले उपयुक्त माइक्रोसर्विस में राउट करता है। (A bit clunky with "आगे भेजने से पहले")
        *   *Attempt 2:* API gateway आने वाले अनुरोधों को पहले एक रेट लिमिटर के माध्यम से राउट करता है, और फिर उन्हें उपयुक्त माइक्रोसर्विस में अग्रेषित करता है। (A bit long, but clear).
        *   *Attempt 3 (combining ideas):* API gateway आने वाले अनुरोधों को एक रेट लिमिटर के माध्यम से पहले राउट करता है, और फिर उन्हें उपयुक्त माइक्रोसर्विस में अग्रेषित करता है। (Good).
        *   *Attempt 4 (more concise):* API gateway आने वाले अनुरोधों को एक रेट लिमिटर के माध्यम से उपयुक्त माइक्रोसर्विस में राउट करता है, अग्रेषित करने से पहले। (This is a bit awkward).
        *   *Attempt 5 (let's try to be very direct and clear):* API gateway आने वाले अनुरोधों को एक रेट लिमिटर के माध्यम से राउट करता है, और फिर उन्हें उपयुक्त माइक्रोसर्विस में अग्रेषित करता है। This seems the most natural. Let's try another one. "API gateway आने वाले अनुरोधों को पहले एक रेट लिमिटर के माध्यम से राउट करता है, और फिर उन्हें उपयुक्त माइक्रोसर्विस में अग्रेषित करता है।" This is also good. Let's stick with a slightly more formal and structured version.
        *   Final choice for sentence 1: "API gateway आने वाले अनुरोधों को पहले एक रेट लिमिटर के माध्यम से राउट करता है, और फिर उन्हें उपयुक्त माइक्रोसर्विस में अग्रेषित करता है।" This is clear and follows the original structure.

    *   **Sentence 2:** "If the circuit breaker is open, it returns a 503 Service Unavailable response."
        *   *Attempt 1:* यदि सर्किट ब्रेकर खुला है, तो यह 503 Service Unavailable प्रतिक्रिया लौटाता है। (This is perfect. "लौटाता है" is better than "लौटाता है" in this context. The rest is standard).

    *   **Sentence 3:** "All request metadata is logged to a distributed tracing backend for observability."
        *   *Attempt 1:* सभी अनुरोध मेटाडेटा को अवलोकनीयता के लिए एक वितरित अनुरेखण बैकएंड में दर्ज किया जाता है। (This is very good. "दर्ज किया जाता है" is correct. The structure is clear).
        *   *Attempt 2:* सभी अनुरोध मेटाडेटा को अवलोकनीयता के लिए वितरित अनुरेखण बैकएंड में दर्ज किया जाता है। (Also good, maybe slightly more concise).
        *   Final choice for sentence 3: "सभी अनुरोध मेटाडेटा को अवलोकनीयता के लिए वितरित अनुरेखण बैकएंड में दर्ज किया जाता है।" This is the most accurate and professional-sounding translation.

4.  **Final Review and Assembly:**

    *   **Sentence 1:** "API gateway आने वाले अनुरोधों को पहले एक रेट लिमिटर के माध्यम से राउट करता है, और फिर उन्हें उपयुक्त माइक्रोसर्विस में अग्रेषित करता है।"
    *   **Sentence 2:** "यदि सर्किट ब्रेकर खुला है, तो यह 503 Service Unavailable प्रतिक्रिया लौटाता है।"
    *   **Sentence 3:** "सभी अनुरोध मेटाडेटा को अवलोकनीयता के लिए वितरित अनुरेखण बैकएंड में दर्ज किया जाता है।"

    Let's combine them into a single paragraph.

    "API gateway आने वाले अनुरोधों को पहले एक रेट लिमिटर के माध्यम से राउट करता है, और फिर उन्हें उपयुक्त माइक्रोसर्विस में अग्रेषित करता है। यदि सर्किट ब्रेकर खुला है, तो यह 503 Service Unavailable प्रतिक्रिया लौटाता है। सभी अनुरोध मेटाडेटा को अवलोकनीयता के लिए वितरित अनुरेखण बैकएंड में दर्ज किया जाता है।"

    Now, let's re-read the prompt. "Preserve technical terms in English where no standard native equivalent exists."
    *   API gateway -> Kept in English. Correct.
    *   rate limiter -> Kept in English. Correct.
    *   microservice -> Kept in English. Correct.
    *   circuit breaker -> Kept in English. Correct.
    *   503 Service Unavailable -> Kept in English (standard format). Correct.
    *   distributed tracing -> Kept in English. Correct.
    *   observability -> Kept in English. Correct.

    The translation seems solid. The Hindi used is standard and formal. The technical terms are correctly handled. The script is native (Devanagari). The output will be *only* the translation.

    Let's do one final check on the Hindi phrasing.
    *   "राउट करता है" - good.
    *   "पहले... फिर" - good structure.
    *   "उपयुक्त" - correct.
    *   "अग्रषित करता है" - correct.
    *   "खुला है" - correct.
    *   "लौटाता है" - correct.
    *   "दर्ज किया जाता है" - correct.
    *   "के लिए" - correct.
    *   "के लिए... हेतु" - also correct, but "के लिए" is more concise.
    *   "वितरित अनुरेखण बैकएंड" - correct.
    *   "अवलोकनीयता" - correct.

    The translation is ready. I will output only the final paragraph as requested.

    Final check on the structure:
    1.  API gateway routes...
    2.  If the circuit breaker is open...
    3.  All request metadata is logged...

    My translation follows this structure.

    The final output:
    API gateway आने वाले अनुरोधों को पहले एक रेट लिमिटर के माध्यम से राउट करता है, और फिर उन्हें उपयुक्त माइक्रोसर्विस में अग्रेषित करता है। यदि सर्किट ब्रेकर खुला है, तो यह 503 Service Unavailable प्रतिक्रिया लौटाता है। सभी अनुरोध मेटाडेटा को अवलोकनीयता के लिए वितरित अनुरेखण बैकएंड में दर्ज किया जाता है।

    This looks perfect. It meets all constraints.
````

</details>

**Output:**

````
API gateway आने वाले अनुरोधों को पहले एक रेट लिमिटर के माध्यम से राउट करता है, और फिर उन्हें उपयुक्त माइक्रोसर्विस में अग्रेषित करता है। यदि सर्किट ब्रेकर खुला है, तो यह 503 Service Unavailable प्रतिक्रिया लौटाता है। सभी अनुरोध मेटाडेटा को अवलोकनीयता के लिए वितरित अनुरेखण बैकएंड में दर्ज किया जाता है।
````

### Bengali

**Prompt:** Translate the following paragraph into Bengali, using native Bengali script. Preserve technical terms in English where no standard native equivalent exists. Output only the Bengali translation, nothing else.

Text: "The API gateway routes incoming requests through a rate limiter before forwarding them to the appropriate microservice. If the circuit breaker is open, it returns a 503 Service Unavailable response. All request metadata is logged to a distributed tracing backend for observability."

*3065 tok | 11.48s | 266.9 t/s | think: 11206 chars | finish: stop*

<details><summary>Thinking (11206 chars)</summary>

````
1.  **Deconstruct the Request:**

    *   **Task:** Translate a specific English paragraph into Bengali.
    *   **Source Text:** "The API gateway routes incoming requests through a rate limiter before forwarding them to the appropriate microservice. If the circuit breaker is open, it returns a 503 Service Unavailable response. All request metadata is logged to a distributed tracing backend for observability."
    *   **Constraint 1:** Use native Bengali script (i.e., standard Bengali letters, not transliterated or "Roman" script).
    *   **Constraint 2:** Preserve technical terms in English where no standard native equivalent exists.
    *   **Constraint 3:** Output *only* the Bengali translation. No preamble, no explanation, no "Here is the translation:", just the final text.

2.  **Analyze the Source Text Sentence by Sentence:**

    *   **Sentence 1:** "The API gateway routes incoming requests through a rate limiter before forwarding them to the appropriate microservice."

        *   **"The API gateway"**: "API" is a universal technical term. "Gateway" is also common in tech, but "API gateway" is a specific architectural component. Should I translate it? "API gateway" is widely understood in the Bengali tech community. Translating it to "API গেটওয়ে" (API Gateyway) is a direct transliteration, which is common. However, a more natural Bengali term might be "API প্রবেশপথ" (API Probesh-thapath) or "API প্রবেশদ্বার" (API Probesh-dwari). Let's consider the context. "Gateway" implies a point of entry. "প্রবেশপথ" (probesh-thapath) or "প্রবেশদ্বার" (probesh-dwari) fit this well. "API গেটওয়ে" is also used and understood. Given the constraint to preserve technical terms, and the fact that "API gateway" is a standard term, keeping it as "API gateway" or using a direct transliteration like "API গেটওয়ে" is a safe and accurate choice. Let's go with "API গেটওয়ে" for now, as it's a common practice.

        *   **"routes"**: This means directing traffic. Bengali equivalents could be "রাস্তা দেখানো" (rastao dekhano), "রাস্তা দেওয়া" (rastao deoa), or more formally, "রাস্তা পরিচালনা করা" (rastao porichalona kora). "রাস্তা দেখানো" or "রাস্তা দেওয়া" are simpler and more direct. "রাস্তা পরিচালনা করা" is a bit more formal. Let's stick with "রাস্তা দেখানো" or "রাস্তা দেওয়া". "রাস্তা দেখানো" feels more active.

        *   **"incoming requests"**: "Incoming" is "আসন্ন" (ashonno) or "আগত" (aagot). "Request" is "অনুরোধ" (onurodh). So, "আসন্ন অনুরোধ" (ashonno onurodh) or "আগত অনুরোধ" (aagot onurodh). "আসন্ন" is a good fit for "incoming".

        *   **"through a rate limiter"**: "Through" is "মাধ্যমে" (madhyome). "Rate limiter" is a key technical term. There isn't a single, universally adopted native equivalent. It's often just left as "rate limiter" or sometimes translated as "রেট লিমিটার" (rate limiter) or "রেট নিয়ন্ত্রক" (rate niyontrok). The prompt says to preserve it if no standard equivalent exists. So, "rate limiter" is the best choice.

        *   **"before forwarding them"**: "Before" is "আগে" (age). "Forwarding" is "সামনে পাঠানো" (samne pathano) or "প্রেরণ করা" (preron kora). "সামনে পাঠানো" is more natural in this context. So, "তাদের সামনে পাঠানোর আগে" (tader samne pathano age).

        *   **"to the appropriate microservice"**: "To" is "দিকে" (dike). "Appropriate" is "উপযুক্ত" (upojukto) or "সঠিক" (sothik). "Microservice" is another key technical term. Like "rate limiter", it's often left in English. "Microservice" is the standard term.

        *   **Putting Sentence 1 together (Draft 1):** "API গেটওয়ে আসন্ন অনুরোধগুলোকে একটি রেট লিমিটারের মাধ্যমে সামনে পাঠানোর আগে উপযুক্ত মাইক্রোসার্ভিসে পাঠায়।"
            *   *Self-Correction:* "আসন্ন অনুরোধগুলোকে" is a bit clunky. Maybe "আসন্ন অনুরোধগুলোকে" is okay. Let's try another phrasing. "API গেটওয়ে আসন্ন অনুরোধগুলোকে... পাঠায়" (API gateway forwards incoming requests...). The structure is a bit long. Let's rephrase.
            *   *Draft 2:* "API গেটওয়ে রেট লিমিটারের মাধ্যমে আসন্ন অনুরোধগুলোকে উপযুক্ত মাইক্রোসার্ভিসে পাঠায়।" (The "before forwarding them" part is implied by the verb "পাঠায়"). This is more concise and natural. Let's stick with this.

    *   **Sentence 2:** "If the circuit breaker is open, it returns a 503 Service Unavailable response."

        *   **"If the circuit breaker is open"**: "If" is "যদি" (jodi). "Circuit breaker" is a key technical term. Like "rate limiter", it's often kept in English. "সার্কিট ব্রেকার" (circuit breaker). "If the circuit breaker is open" -> "যদি সার্কিট ব্রেকারটি খোলা থাকে" (jodi circuit breaker-ti khola thake). The "is" is implied in Bengali.
        *   **"it returns"**: "It" refers to the gateway. "Returns" in this context means sends back a response. "একটি response প্রদান করে" (ekti response prodan kore) or "একটি response পাঠায়" (ekti response pathay). "Response" is "রেসপন্স" (response). So, "এটি একটি 503 Service Unavailable response পাঠায়" (eti 503 Service Unavailable response pathay).
        *   **"a 503 Service Unavailable response"**: "503 Service Unavailable" is a standard HTTP status code phrase. "Response" is "রেসপন্স". So, "একটি 503 Service Unavailable response".

        *   **Putting Sentence 2 together:** "যদি সার্কিট ব্রেকারটি খোলা থাকে, তবে এটি একটি 503 Service Unavailable response পাঠায়।" (If the circuit breaker is open, then it returns a 503 Service Unavailable response). The "then" (তবে) is good for flow.

    *   **Sentence 3:** "All request metadata is logged to a distributed tracing backend for observability."

        *   **"All request metadata"**: "All" is "সব" (shob). "Request" is "অনুরোধ". "Metadata" is "মেটাডেটা". So, "সব অনুরোধের মেটাডেটা" (shob onurodher metadata).
        *   **"is logged"**: Passive voice. "লগ করা হয়" (log kora hoy).
        *   **"to a distributed tracing backend"**: "To" is "দিকে" (dike). "Distributed" is "বন্টিত" (bontito). "Tracing" is a technical term. "ট্রেসিং" (tracing) is often used. "Backend" is "ব্যাকএন্ড" (backend). So, "একটি বন্টিত ট্রেসিং ব্যাকএন্ডে" (ekti bontito tracing backend-e).
        *   **"for observability"**: "For" is "জন্য" (jonyo). "Observability" is a key technical term. "পর্যবেক্ষণযোগ্যতা" (poribeshonjogoyota) is the direct translation, but in the context of distributed systems, it's often left as "observability" or sometimes "পর্যবেক্ষণযোগ্যতা" is used. The prompt says to preserve if no standard equivalent. "পর্যবেক্ষণযোগ্যতা" is the standard equivalent. Let's use it.

        *   **Putting Sentence 3 together:** "সব অনুরোধের মেটাডেটা একটি বন্টিত ট্রেসিং ব্যাকএন্ডে পর্যবেক্ষণযোগ্যতার জন্য লগ করা হয়।" (All request metadata is logged to a distributed tracing backend for observability). This sounds a bit clunky. Let's rephrase.
        *   *Draft 2:* "বন্টিত ট্রেসিং ব্যাকএন্ডে সমস্ত অনুরোধের মেটাডেটা পর্যবেক্ষণযোগ্যতার জন্য লগ করা হয়।" (All request metadata is logged to a distributed tracing backend for observability). This is more direct. The "for observability" part feels slightly tacked on. Let's try: "সব অনুরোধের মেটাডেটা বন্টিত ট্রেসিং ব্যাকএন্ডে লগ করা হয় যাতে পর্যবেক্ষণযোগ্যতা নিশ্চিত করা যায়।" (All request metadata is logged to a distributed tracing backend so that observability is ensured). This is more natural but adds "নিশ্চিত করা যায়" (ensure) which wasn't in the original.
        *   *Draft 3 (Closer to original):* "সব অনুরোধের মেটাডেটা একটি বন্টিত ট্রেসিং ব্যাকএন্ডে পর্যবেক্ষণযোগ্যতার জন্য লগ করা হয়।" The structure is actually fine. The meaning is clear. Let's stick with this. It's a literal translation, which is often what's expected in technical contexts.

3.  **Final Assembly and Review:**

    *   **Sentence 1:** "API গেটওয়ে রেট লিমিটারের মাধ্যমে আসন্ন অনুরোধগুলোকে উপযুক্ত মাইক্রোসার্ভিসে পাঠায়।"
    *   **Sentence 2:** "যদি সার্কিট ব্রেকারটি খোলা থাকে, তবে এটি একটি 503 Service Unavailable response পাঠায়।"
    *   **Sentence 3:** "সব অনুরোধের মেটাডেটা একটি বন্টিত ট্রেসিং ব্যাকএন্ডে পর্যবেক্ষণযোগ্যতার জন্য লগ করা হয়।"

    *   **Combine:** "API গেটওয়ে রেট লিমিটারের মাধ্যমে আসন্ন অনুরোধগুলোকে উপযুক্ত মাইক্রোসার্ভিসে পাঠায়। যদি সার্কিট ব্রেকারটি খোলা থাকে, তবে এটি একটি 503 Service Unavailable response পাঠায়। সব অনুরোধের মেটাডেটা একটি বন্টিত ট্রেসিং ব্যাকএন্ডে পর্যবেক্ষণযোগ্যতার জন্য লগ করা হয়।"

4.  **Check against constraints:**

    *   **Native Bengali script?** Yes, I've used Bengali characters (বাংলা লিপি).
    *   **Preserve technical terms?**
        *   API gateway -> API গেটওয়ে (kept as is, a common practice)
        *   rate limiter -> রেট লিমিটার (kept)
        *   microservice -> মাইক্রোসার্ভিস (kept)
        *   circuit breaker -> সার্কিট ব্রেকার (kept)
        *   503 Service Unavailable -> 503 Service Unavailable (kept, standard phrase)
        *   distributed tracing backend -> বন্টিত ট্রেসিং ব্যাকএন্ড (kept, as these are standard terms)
        *   observability -> পর্যবেক্ষণযোগ্যতা (used the direct equivalent, which is standard)
        *   All technical terms have been preserved as requested.

    *   **Output only the translation?** Yes, the final output will be just the three sentences.

5.  **Final Polish:**

    *   Sentence 1: "API গেটওয়ে রেট লিমিটারের মাধ্যমে আসন্ন অনুরোধগুলোকে উপযুক্ত মাইক্রোসার্ভিসে পাঠায়।" - This is good. "আসন্ন অনুরোধ" is better than "আসন্ন অনুরোধগুলোকে" (without the case marker) as it's a general statement.
    *   Sentence 2: "যদি সার্কিট ব্রেকারটি খোলা থাকে, তবে এটি একটি 503 Service Unavailable response পাঠায়।" - "যদি... তবে..." is the correct conditional structure. The rest is fine.
    *   Sentence 3: "সব অনুরোধের মেটাডেটা একটি বন্টিত ট্রেসিং ব্যাকএন্ডে পর্যবেক্ষণযোগ্যতার জন্য লগ করা হয়।" - This is also good. It's a bit long, but it's a direct and accurate translation of the English sentence.

    Let's re-read the final proposed translation:
    "API গেটওয়ে রেট লিমিটারের মাধ্যমে আসন্ন অনুরোধগুলোকে উপযুক্ত মাইক্রোসার্ভিসে পাঠায়। যদি সার্কিট ব্রেকারটি খোলা থাকে, তবে এটি একটি 503 Service Unavailable response পাঠায়। সব অনুরোধের মেটাডেটা একটি বন্টিত ট্রেসিং ব্যাকএন্ডে পর্যবেক্ষণযোগ্যতার জন্য লগ করা হয়।"

    This looks solid. It meets all the requirements. The language is professional and suitable for a technical context. The handling of technical terms is consistent with the prompt's instructions. I will output this exact string.

    *Self-Correction on "আসন্ন অনুরোধগুলোকে":* In Bengali, nouns often need case markers (like `-a` for accusative, `-ke` for dative). However, in technical writing and modern Bengali, these markers are often dropped for conciseness, especially when the context is clear. "আসন্ন অনুরোধ" (incoming requests) is perfectly understandable and more natural than "আসন্ন অনুরোধগুলোকে" (incoming requests-ACC). I'll remove the case marker.

    *Final check on the whole text:*
    "API গেটওয়ে রেট লিমিটারের মাধ্যমে আসন্ন অনুরোধগুলোকে উপযুক্ত মাইক্রোসার্ভিসে পাঠায়। যদি সার্কিট ব্রেকারটি খোলা থাকে, তবে এটি একটি 503 Service Unavailable response পাঠায়। সব অনুরোধের মেটাডেটা একটি বন্টিত ট্রেসিং ব্যাকএন্ডে পর্যবেক্ষণযোগ্যতার জন্য লগ করা হয়।"

    This is the best version. It's accurate, follows the rules, and sounds natural for the target audience (Bengali-speaking developers/engineers). The output will be just this text.
````

</details>

**Output:**

````
API গেটওয়ে রেট লিমিটারের মাধ্যমে আসন্ন অনুরোধগুলোকে উপযুক্ত মাইক্রোসার্ভিসে পাঠায়। যদি সার্কিট ব্রেকারটি খোলা থাকে, তবে এটি একটি 503 Service Unavailable response পাঠায়। সব অনুরোধের মেটাডেটা একটি বন্টিত ট্রেসিং ব্যাকএন্ডে পর্যবেক্ষণযোগ্যতার জন্য লগ করা হয়।
````

### Gujarati

**Prompt:** Translate the following paragraph into Gujarati, using native Gujarati script. Preserve technical terms in English where no standard native equivalent exists. Output only the Gujarati translation, nothing else.

Text: "The API gateway routes incoming requests through a rate limiter before forwarding them to the appropriate microservice. If the circuit breaker is open, it returns a 503 Service Unavailable response. All request metadata is logged to a distributed tracing backend for observability."

*3782 tok | 14.01s | 269.9 t/s | think: 13579 chars | finish: stop*

<details><summary>Thinking (13579 chars)</summary>

````
1.  **Deconstruct the Request:**

    *   **Task:** Translate a specific English paragraph into Gujarati.
    *   **Source Text:** "The API gateway routes incoming requests through a rate limiter before forwarding them to the appropriate microservice. If the circuit breaker is open, it returns a 503 Service Unavailable response. All request metadata is logged to a distributed tracing backend for observability."
    *   **Constraint 1:** Use native Gujarati script (i.e., Gujarati characters, not transliteration).
    *   **Constraint 2:** Preserve technical terms in English where no standard native equivalent exists.
    *   **Constraint 3:** Output *only* the Gujarati translation. No extra text, no explanations, no "Here is the translation:", just the final text.

2.  **Analyze the Source Text - Sentence by Sentence:**

    *   **Sentence 1:** "The API gateway routes incoming requests through a rate limiter before forwarding them to the appropriate microservice."

        *   "The API gateway":
            *   "API" is a very common acronym. It's often used as-is in Gujarati technical contexts. So, "API".
            *   "gateway" can be translated as "દ્વાર" (door/gateway), "દ્વારપાળ" (gatekeeper), or sometimes kept as "gateway". "દ્વાર" is a good, common choice.
            *   So, "API gateway" -> "API દ્વાર" or "API દ્વારપાળ". Let's go with "API દ્વાર" for simplicity and common usage.

        *   "routes":
            *   This is a technical term. The direct translation might be "માર્ગદર્શન કરે છે" (guides/routes). A more specific term in networking/programming is "માર્ગ" (path/route). So, "માર્ગદર્શન કરે છે" or "માર્ગ આપે છે" (provides a path) or just "માર્ગ આપે છે" (provides a path) is good. "માર્ગદર્શન કરે છે" is also perfectly acceptable. Let's use "માર્ગદર્શન કરે છે".

        *   "incoming requests":
            *   "incoming" -> "આવતા" (coming).
            *   "requests" -> "વિનંતીઓ" (requests).
            *   So, "incoming requests" -> "આવતા વિનંતીઓ".

        *   "through a rate limiter":
            *   "through" -> "દ્વારા" (through).
            *   "rate limiter" -> This is a key technical term. Is there a standard native equivalent? Not really. "દર-મર્યાદા" (rate-limit) is a direct translation, but "rate limiter" is a specific component. Keeping it in English is the best practice per the instructions. So, "rate limiter".

        *   "before forwarding them":
            *   "before" -> "પહેલાં" (before).
            *   "forwarding" -> "આગળ મોકલવા" (forwarding).
            *   "them" -> "તેમને" (them).
            *   So, "before forwarding them" -> "તેમને આગળ મોકલતા પહેલાં" or "તેમને આગળ મોકલતા પહેલા". The latter is more natural.

        *   "to the appropriate microservice":
            *   "to" -> "સુધી" (to/until).
            *   "the appropriate" -> "યોગ્ય" (appropriate/right).
            *   "microservice" -> This is another key technical term. Like "rate limiter", it's often kept in English. So, "microservice".
            *   So, "the appropriate microservice" -> "યોગ્ય માઇક્રોસર્વિસ".

        *   **Putting Sentence 1 together:**
            *   "API દ્વાર આવતા વિનંતીઓ દર-મર્યાદા દ્વારા તેમને યોગ્ય માઇક્રોસર્વિસ પર આગળ મોકલતા પહેલાં માર્ગદર્શન આપે છે."
            *   Let's refine the flow. "API દ્વાર આવતા વિનંતીઓ દર-મર્યાદા દ્વારા તેમને યોગ્ય માઇક્રોસર્વિસ પર આગળ મોકલતા પહેલાં માર્ગદર્શન આપે છે." This sounds a bit clunky.
            *   Let's try rephrasing. "API દ્વાર આવતા વિનંતીઓ દર-મર્યાદા દ્વારા તેમને યોગ્ય માઇક્રોસર્વિસ પર આગળ મોકલે છે." "માર્ગદર્શન આપે છે" is good, but "મોકલે છે" (sends) is also very common and clear in this context. Let's stick with "માર્ગદર્શન આપે છે" as it's a bit more formal and fits "routes".
            *   Let's try another structure: "API દ્વાર આવતા વિનંતીઓ દર-મર્યાદા દ્વારા તેમને યોગ્ય માઇક્રોસર્વિસ પર આગળ મોકલતા પહેલાં માર્ગદર્શન આપે છે." The word order is okay.
            *   How about: "API દ્વાર આવતા વિનંતીઓ દર-મર્યાદા દ્વારા તેમને યોગ્ય માઇક્રોસર્વિસ પર આગળ મોકલતા પહેલાં માર્ગદર્શન આપે છે." This is a bit long.
            *   Let's simplify: "API દ્વાર આવતા વિનંતીઓ દર-મર્યાદા દ્વારા તેમને યોગ્ય માઇક્રોસર્વિસ પર આગળ મોકલે છે." This is concise and clear. The original says "routes... before forwarding". "મોકલે છે" implies the forwarding. "માર્ગદર્શન આપે છે" is more literal for "routes". Let's go with a more literal but still natural translation.
            *   Final choice for S1: "API દ્વાર આવતા વિનંતીઓ દર-મર્યાદા દ્વારા તેમને યોગ્ય માઇક્રોસર્વિસ પર આગળ મોકલતા પહેલાં માર્ગદર્શન આપે છે." It's a bit long, but it captures all the nuances. Let's try to make it smoother. "API દ્વાર આવતા વિનંતીઓ દર-મર્યાદા દ્વારા તેમને યોગ્ય માઇક્રોસર્વિસ પર આગળ મોકલતા પહેલાં માર્ગદર્શન આપે છે." The word "પહેલાં" (before) is key.
            *   Let's try: "API દ્વાર આવતા વિનંતીઓ દર-મર્યાદા દ્વારા તેમને યોગ્ય માઇક્રોસર્વિસ પર આગળ મોકલતા પહેલાં માર્ગદર્શન આપે છે." This is good. Let's try one more: "API દ્વાર આવતા વિનંતીઓ દર-મર્યાદા દ્વારા તેમને યોગ્ય માઇક્રોસર્વિસ પર આગળ મોકલે છે." This is also good, but loses the "before forwarding" part. The original is explicit.
            *   Let's stick to the more literal translation to be safe. "API દ્વાર આવતા વિનંતીઓ દર-મર્યાદા દ્વારા તેમને યોગ્ય માઇક્રોસર્વિસ પર આગળ મોકલતા પહેલાં માર્ગદર્શન આપે છે." This is the most accurate.

    *   **Sentence 2:** "If the circuit breaker is open, it returns a 503 Service Unavailable response."

        *   "If the circuit breaker is open":
            *   "If" -> "જો" (if).
            *   "the circuit breaker" -> This is a specific technical term. It's often kept in English. So, "circuit breaker".
            *   "is open" -> "ખુલ્લું હોય" (is open).
            *   So, "If the circuit breaker is open" -> "જો સર્કિટ બ્રેકર ખુલ્લું હોય".

        *   "it returns":
            *   "it" -> "તે" (it).
            *   "returns" -> "પરત કરે છે" (returns).
            *   So, "it returns" -> "તે પરત કરે છે".

        *   "a 503 Service Unavailable response":
            *   "a" -> "એક" (a).
            *   "503 Service Unavailable" -> This is a standard HTTP status code phrase. It's often kept in English. "503 Service Unavailable" is the standard.
            *   "response" -> "પ્રતિસાદ" (response).
            *   So, "a 503 Service Unavailable response" -> "એક 503 સર્વિસ અનએવેલેબલ પ્રતિસાદ".

        *   **Putting Sentence 2 together:**
            *   "જો સર્કિટ બ્રેકર ખુલ્લું હોય, તે 503 સર્વિસ અનએવેલેબલ પ્રતિસાદ પરત કરે છે."
            *   This looks perfect. It's accurate and uses the English term as instructed.

    *   **Sentence 3:** "All request metadata is logged to a distributed tracing backend for observability."

        *   "All request metadata":
            *   "All" -> "તમામ" (all).
            *   "request metadata" -> "વિનંતી મેટાડેટા" (request metadata). This is a common term in software engineering, often kept in English.
            *   So, "All request metadata" -> "તમામ વિનંતી મેટાડેટા".

        *   "is logged":
            *   "is logged" -> "લોગ કરવામાં આવે છે" (is logged). The passive voice "is logged" is best translated to the Gujarati passive "લોગ કરવામાં આવે છે".

        *   "to a distributed tracing backend":
            *   "to" -> "સુધી" (to/until).
            *   "a" -> "એક" (a).
            *   "distributed tracing backend" -> This is a key technical term. "distributed" -> "વિતરિત" (distributed). "tracing" -> "ટ્રેસિંગ" (tracing). "backend" -> "બેકએન્ડ". So, "વિતરિત ટ્રેસિંગ બેકએન્ડ". This is the standard term.
            *   So, "to a distributed tracing backend" -> "વિતરિત ટ્રેસિંગ બેકએન્ડ સુધી".

        *   "for observability":
            *   "for" -> "માટે" (for).
            *   "observability" -> This is another key technical term. It doesn't have a perfect one-to-one translation. It's about being able to see the internal state of a system. "નિરીક્ષણક્ષમતા" (niṣchāmāptavāyyatā) is a literal translation, but it's not commonly used in this context. The concept is often just called "observability" or explained. However, the instruction is to preserve English terms where no standard equivalent exists. "Observability" is such a term. So, we should keep it.
            *   So, "for observability" -> "નિરીક્ષણક્ષમતા માટે" or simply "for observability". Let's use the English word to be safe and precise.

        *   **Putting Sentence 3 together:**
            *   "તમામ વિનંતી મેટાડેટા વિતરિત ટ્રેસિંગ બેકએન્ડ સુધી નિરીક્ષણક્ષમતા માટે લોગ કરવામાં આવે છે."
            *   This looks good. "for observability" is a bit redundant with "for" but it mirrors the English structure. We could also say "...નિરીક્ષણક્ષમતાના હેતુથી" (for the purpose of observability). But the original is simpler. Let's stick closer to the original.
            *   Final choice for S3: "તમામ વિનંતી મેટાડેટા વિતરિત ટ્રેસિંગ બેકએન્ડ સુધી નિરીક્ષણક્ષમતા માટે લોગ કરવામાં આવે છે."

3.  **Final Assembly and Review:**

    *   **Sentence 1:** "API દ્વાર આવતા વિનંતીઓ દર-મર્યાદા દ્વારા તેમને યોગ્ય માઇક્રોસર્વિસ પર આગળ મોકલતા પહેલાં માર્ગદર્શન આપે છે."
    *   **Sentence 2:** "જો સર્કિટ બ્રેકર ખુલ્લું હોય, તે 503 સર્વિસ અનએવેલેબલ પ્રતિસાદ પરત કરે છે."
    *   **Sentence 3:** "તમામ વિનંતી મેટાડેટા વિતરિત ટ્રેસિંગ બેકએન્ડ સુધી નિરીક્ષણક્ષમતા માટે લોગ કરવામાં આવે છે."

    *   **Combine:** "API દ્વાર આવતા વિનંતીઓ દર-મર્યાદા દ્વારા તેમને યોગ્ય માઇક્રોસર્વિસ પર આગળ મોકલતા પહેલાં માર્ગદર્શન આપે છે. જો સર્કિટ બ્રેકર ખુલ્લું હોય, તે 503 સર્વિસ અનએવેલેબલ પ્રતિસાદ પરત કરે છે. તમામ વિનંતી મેટાડેટા વિતરિત ટ્રેસિંગ બેકએન્ડ સુધી નિરીક્ષણક્ષમતા માટે લોગ કરવામાં આવે છે."

    *   **Final Check against Constraints:**
        *   **Native Gujarati script?** Yes, I've used Gujarati characters.
        *   **Preserve technical terms in English?**
            *   "API gateway" -> "API દ્વાર" (API kept, gateway translated) - OK.
            *   "rate limiter" -> "rate limiter" (kept) - OK.
            *   "microservice" -> "microservice" (kept) - OK.
            *   "circuit breaker" -> "circuit breaker" (kept) - OK.
            *   "503 Service Unavailable" -> "503 સર્વિસ અનએવેલેબલ" (kept) - OK.
            *   "distributed tracing backend" -> "વિતરિત ટ્રેસિંગ બેકએન્ડ" (kept) - OK.
            *   "observability" -> "observability" (kept) - OK.
            *   All checks pass.
        *   **Output only the translation?** Yes, the final output should just be the text string.

    *   **Refining Sentence 1 again:** "API દ્વાર આવતા વિનંતીઓ દર-મર્યાદા દ્વારા તેમને યોગ્ય માઇક્રોસર્વિસ પર આગળ મોકલતા પહેલાં માર્ગદર્શન આપે છે." This is a bit long. Can we make it more natural?
        *   "API દ્વાર આવતા વિનંતીઓ દર-મર્યાદા દ્વારા તેમને યોગ્ય માઇક્રોસર્વિસ પર આગળ મોકલે છે." This is shorter and conveys the same meaning. The "before forwarding" is implied by the sequence of actions. However, the original explicitly states "before forwarding". To be precise, keeping "before forwarding" is better.
        *   Let's try: "API દ્વાર આવતા વિનંતીઓ દર-મર્યાદા દ્વારા તેમને યોગ્ય માઇક્રોસર્વિસ પર આગળ મોકલતા પહેલાં માર્ગદર્શન આપે છે." This seems to be the most accurate and complete translation. It's a bit of a mouthful, but it's correct.

    *   **Refining Sentence 3 again:** "તમામ વિનંતી મેટાડેટા વિતરિત ટ્રેસિંગ બેકએન્ડ સુધી નિરીક્ષણક્ષમતા માટે લોગ કરવામાં આવે છે." The phrase "for observability" is a bit clunky. In Gujarati technical writing, it might be phrased differently, like "...નિરીક્ષણના હેતુથી" (for the purpose of monitoring/observing). But the instruction is to preserve the English term. So, "નિરીક્ષણક્ષમતા માટે" is the correct interpretation of the rule.

    *   **Final Polish:**
        *   S1: "API દ્વાર આવતા વિનંતીઓ દર-મર્યાદા દ્વારા તેમને યોગ્ય માઇક્રોસર્વિસ પર આગળ મોકલતા પહેલાં માર્ગદર્શન આપે છે."
        *   S2: "જો સર્કિટ બ્રેકર ખુલ્લું હોય, તે 503 સર્વિસ અનએવેલેબલ પ્રતિસાદ પરત કરે છે."
        *   S3: "તમામ વિનંતી મેટાડેટા વિતરિત ટ્રેસિંગ બેકએન્ડ સુધી નિરીક્ષણક્ષમતા માટે લોગ કરવામાં આવે છે."

    *   Let's re-read the whole thing.
        "API દ્વાર આવતા વિનંતીઓ દર-મર્યાદા દ્વારા તેમને યોગ્ય માઇક્રોસર્વિસ પર આગળ મોકલતા પહેલાં માર્ગદર્શન આપે છે. જો સર્કિટ બ્રેકર ખુલ્લું હોય, તે 503 સર્વિસ અનએવેલેબલ પ્રતિસાદ પરત કરે છે. તમામ વિનંતી મેટાડેટા વિતરિત ટ્રેસિંગ બેકએન્ડ સુધી નિરીક્ષણક્ષમતા માટે લોગ કરવામાં આવે છે."

    *   This seems solid. The technical terms are preserved, the grammar is correct in Gujarati, and the meaning is preserved. The flow is good. The final output will be just this string.

    *   One last check on "rate limiter". Is "દર-મર્યાદા" a good enough translation? It's a literal one. "Rate limiting" is the process, "rate limiter" is the component. In the context of "through a rate limiter", it refers to the component. So, keeping "rate limiter" is definitely the right call.

    *   What about "API gateway"? "API દ્વાર" is good. "API દ્વારપાળ" (API gatekeeper) is also good. "API દ્વાર" is more common and less "official-sounding", which fits the context of a simple explanation. Let's stick with "API દ્વાર".

    *   What about "observability"? The instruction is to preserve the term. So "નિરીક્ષણક્ષમતા" (the Gujarati word for it) is the literal translation. But the instruction says "Preserve technical terms in English where no standard native equivalent exists." This implies that if a term *does* have a standard equivalent, we should use it. Does "observability" have a standard native equivalent? Not really in common technical parlance. So, keeping the English word "observability" is the correct application of the rule.

    *   The translation seems robust. I will now format the final output as requested.
````

</details>

**Output:**

````
API દ્વાર આવતા વિનંતીઓ દર-મર્યાદા દ્વારા તેમને યોગ્ય માઇક્રોસર્વિસ પર આગળ મોકલતા પહેલાં માર્ગદર્શન આપે છે. જો સર્કિટ બ્રેકર ખુલ્લું હોય, તે 503 સર્વિસ અનએવેલેબલ પ્રતિસાદ પરત કરે છે. તમામ વિનંતી મેટાડેટા વિતરિત ટ્રેસિંગ બેકએન્ડ સુધી નિરીક્ષણક્ષમતા માટે લોગ કરવામાં આવે છે.
````

### Kannada

**Prompt:** Translate the following paragraph into Kannada, using native Kannada script. Preserve technical terms in English where no standard native equivalent exists. Output only the Kannada translation, nothing else.

Text: "The API gateway routes incoming requests through a rate limiter before forwarding them to the appropriate microservice. If the circuit breaker is open, it returns a 503 Service Unavailable response. All request metadata is logged to a distributed tracing backend for observability."

*3855 tok | 14.3s | 269.6 t/s | think: 13609 chars | finish: stop*

<details><summary>Thinking (13609 chars)</summary>

````
1.  **Deconstruct the Request:**

    *   **Source Text:** "The API gateway routes incoming requests through a rate limiter before forwarding them to the appropriate microservice. If the circuit breaker is open, it returns a 503 Service Unavailable response. All request metadata is logged to a distributed tracing backend for observability."
    *   **Target Language:** Kannada.
    *   **Script:** Native Kannada script (not transliteration).
    *   **Constraint 1:** Preserve technical terms in English if no standard native equivalent exists.
    *   **Constraint 2:** Output *only* the Kannada translation. No extra text, no explanations, no "Here is the translation:". Just the final text.

2.  **Analyze the Source Text Sentence by Sentence:**

    *   **Sentence 1:** "The API gateway routes incoming requests through a rate limiter before forwarding them to the appropriate microservice."

        *   **"The API gateway"**:
            *   "API" is a very common acronym. In Kannada tech circles, it's often kept as "API". There's no standard, universally accepted native equivalent like "Application Programming Interface" that's commonly used in this context. So, "API" should be kept.
            *   "gateway" is a common English word. The concept is a "gateway" or "entry point". "Gateway" is often used directly. So, "API gateway" can be translated as "API gateway" or "API gateway". Let's go with "API gateway" for clarity.
            *   Putting it together: "API gateway" -> "API gateway" (or "API gateway"). Let's stick with the English term as it's standard in the industry.

        *   **"routes"**:
            *   This is a technical term. The direct equivalent in Kannada would be something like "ಮಾರ್ಗ ಮಾಡುತ್ತದೆ" (marga kareyutthe) or "ನಿರ್ದೇಶಿಸುತ್ತದೆ" (nirdeśisutthe). "ಮಾರ್ಗ ಮಾಡುತ್ತದೆ" is a good, common translation for "routes".

        *   **"incoming requests"**:
            *   "incoming" -> "ಬರುವ" (baruva).
            *   "requests" -> "ವಿನಂತಿಗಳು" (vinantigaLu).
            *   Combined: "ಬರುವ ವಿನಂತಿಗಳು" (baruva vinantigaLu).

        *   **"through a rate limiter"**:
            *   "rate limiter" is a technical term. Is there a standard Kannada equivalent? Not really. It's a specific piece of software/concept. The request says to preserve technical terms if no standard equivalent exists. So, "rate limiter" should remain "rate limiter".
            *   "through" -> "ಮೂಲಕ" (moolaka) or "ಬಳಸಿ" (baḍisi). "ಮೂಲಕ" is a good fit.
            *   Combined: "rate limiter ಮೂಲಕ" (rate limiter moolaka).

        *   **"before forwarding them"**:
            *   "before" -> "ಮೊದಲು" (modalu).
            *   "forwarding" -> "ಮುಂದಕ್ಕೆ ಕಳುಹಿಸುವುದು" (mundakke sāndisuvudhu).
            *   "them" -> "ಅವುಗಳನ್ನು" (avugaLannu).
            *   Combined: "ಮೊದಲು ಅವುಗಳನ್ನು ಕಳುಹಿಸುವುದು" (modalu avugaLannu sāndisuvudhu).

        *   **"to the appropriate microservice"**:
            *   "appropriate" -> "ಸರಿಯಾದ" (sariyaadha) or "ಸೂಕ್ತ" (sūpūta). "ಸರಿಯಾದ" is more common.
            *   "microservice" is another technical term. Like "rate limiter", there's no standard native equivalent. The request says to preserve it. So, "microservice" remains "microservice".
            *   "to" -> "ಗೆ" (ge).
            *   Combined: "ಸರಿಯಾದ microservice ಗೆ" (sariyaadha microservice ge).

        *   **Putting Sentence 1 together:**
            *   "API gateway routes incoming requests through a rate limiter before forwarding them to the appropriate microservice."
            *   "API gateway" (API gateway)
            *   "ಮಾರ್ಗ ಮಾಡುತ್ತದೆ" (marga kareyutthe)
            *   "ಬರುವ ವಿನಂತಿಗಳು" (baruva vinantigaLu)
            *   "rate limiter ಮೂಲಕ" (rate limiter moolaka)
            *   "ಮೊದಲು ಅವುಗಳನ್ನು ಕಳುಹಿಸುವುದು" (modalu avugaLannu sāndisuvudhu)
            *   "ಸರಿಯಾದ microservice ಗೆ" (sariyaadha microservice ge)
            *   **Final Sentence 1:** "API gateway ಬರುವ ವಿನಂತಿಗಳನ್ನು rate limiter ಮೂಲಕ ಮೊದಲು ಅವುಗಳನ್ನು ಸರಿಯಾದ microservice ಗೆ ಕಳುಹಿಸುತ್ತದೆ." (This sounds a bit clunky. Let's refine the word order and flow.)
            *   Let's try: "API gateway ಬರುವ ವಿನಂತಿಗಳನ್ನು rate limiter ಮೂಲಕ ಸೂಕ್ತ microservice ಗೆ ಮಾರ್ಗ ಮಾಡುತ್ತದೆ." (This is better. "ಸೂಕ್ತ" for "appropriate" is also a good choice).
            *   Let's try another: "API gateway ಬರುವ ವಿನಂತಿಗಳನ್ನು rate limiter ಮೂಲಕ ಸೂಕ್ತ microservice ಗೆ ಕಳುಹಿಸುತ್ತದೆ." (This is also good, using "sāndisutthe" for routes/forwards).
            *   Let's stick with the first refined version: "API gateway ಬರುವ ವಿನಂತಿಗಳನ್ನು rate limiter ಮೂಲಕ ಸೂಕ್ತ microservice ಗೆ ಮಾರ್ಗ ಮಾಡುತ್ತದೆ." (This is clear and professional).

3.  **Analyze Sentence 2:**

    *   **Sentence 2:** "If the circuit breaker is open, it returns a 503 Service Unavailable response."

        *   **"If the circuit breaker is open"**:
            *   "If" -> "ಒಂದು ವೇಳೆ" (ondhu vēle) or "ಒಂದು ವೇಳೆ" (ondhu vēle). Both are fine.
            *   "the circuit breaker" -> This is a technical term. The concept is a "circuit breaker". It's often kept as "circuit breaker". There's no standard Kannada equivalent. So, "circuit breaker" remains.
            *   "is open" -> "ತೆರೆ" (terē) or "ಬಹಿರಾಗಿದೆ" (bahirāgide). "ತೆರೆ" is a direct translation.
            *   Combined: "ಒಂದು ವೇಳೆ circuit breaker ತೆರೆದಿದೆ" (ondhu vēle circuit breaker terēda/bahirāgide). "ತೆರೆದಿದೆ" (terāda) is a better verb form here.

        *   **"it returns"**:
            *   "it" -> "ಅದು" (adhu).
            *   "returns" -> "ಹಿಂತಿರುಗಿಸುತ್ತದೆ" (hinthirugisutthe) or "ನೀಡುತ್ತದೆ" (neevuḍutthe). "ಹಿಂತಿರುಗಿಸುತ್ತದೆ" is more formal and fits the context of a response.
            *   Combined: "ಅದು ಹಿಂತಿರುಗಿಸುತ್ತದೆ" (adhu hinthirugisutthe).

        *   **"a 503 Service Unavailable response"**:
            *   "a" -> "ಒಂದು" (ondhu).
            *   "503" -> This is a standard HTTP status code. It's often kept as "503".
            *   "Service Unavailable" -> This is a standard HTTP status text. It's often kept as "Service Unavailable".
            *   "response" -> "ಪ್ರತಿಕ್ರಿಯೆ" (pratikriyē).
            *   Combined: "ಒಂದು 503 Service Unavailable ಪ್ರತಿಕ್ರಿಯೆ" (ondhu 503 Service Unavailable pratikriyē).

        *   **Putting Sentence 2 together:**
            *   "ಒಂದು ವೇಳೆ circuit breaker ತೆರೆದಿದೆ, ಅದು ಒಂದು 503 Service Unavailable ಪ್ರತಿಕ್ರಿಯೆ ಹಿಂತಿರುಗಿಸುತ್ತದೆ."
            *   This looks good. It's grammatically correct and preserves the technical terms.

4.  **Analyze Sentence 3:**

    *   **Sentence 3:** "All request metadata is logged to a distributed tracing backend for observability."

        *   **"All request metadata"**:
            *   "All" -> "ಎಲ್ಲಾ" (ellaa).
            *   "request" -> "ವಿನಂತಿ" (vinanṭi).
            *   "metadata" -> This is a technical term. There's no single, universally adopted Kannada word. It's often left as "metadata" or translated as "ಮಾಹಿತಿ" (maahithi) or "ದತ್ತಾಂಶ" (daṭṭa). Given the instruction to preserve technical terms, "metadata" is the safest and most accurate choice.
            *   Combined: "ಎಲ್ಲಾ ವಿನಂತಿ metadata" (ellaa vinanṭi metadata).

        *   **"is logged"**:
            *   "is" -> "ಆಗುತ್ತದೆ" (āgutthe) or is implied.
            *   "logged" -> "ದಾಖಲಿಸಲಾಗುತ್ತದೆ" (dākhilāyisutthe).
            *   Combined: "ಎಲ್ಲಾ ವಿನಂತಿ metadata ದಾಖಲಿಸಲಾಗುತ್ತದೆ" (ellaa vinanṭi metadata dākhilāyisutthe).

        *   **"to a distributed tracing backend"**:
            *   "to" -> "ಗೆ" (ge).
            *   "a" -> "ಒಂದು" (ondhu).
            *   "distributed" -> "ವಿತರಿತ" (viḍiritta).
            *   "tracing" -> This is a technical term. "Tracing" is often used directly.
            *   "backend" -> "ಹಿನ್ನೆಲೆ" (hinnele) or "ಸರ್ವರ್" (sērvār). "Backend" is often used as is.
            *   Combined: "ಒಂದು ವಿತರಿತ ಟ್ರೇಸಿಂಗ್ ಬ್ಯಾಕೆಂಡ್ ಗೆ" (ondhu viḍiritta tracing hinnege/sērvār ge). "Backend" is a common English word in this context.
            *   Let's go with "backend" to be safe, as per the instruction. "distributed tracing backend" -> "distributed tracing backend".

        *   **"for observability"**:
            *   "for" -> "ಗಾಗಿ" (gaagi).
            *   "observability" -> This is a technical term. It's often used as "observability" or translated as "ವೀಕ್ಷಣೆ" (veekōṇe). Given the instruction, "observability" is better.
            *   Combined: "ವೀಕ್ಷಣೆಗಾಗಿ" (veekōṇegaagi).

        *   **Putting Sentence 3 together:**
            *   "ಎಲ್ಲಾ ವಿನಂತಿ metadata ಒಂದು ವಿತರಿತ ಟ್ರೇಸಿಂಗ್ ಬ್ಯಾಕೆಂಡ್ ಗೆ ವೀಕ್ಷಣೆಗಾಗಿ ದಾಖಲಿಸಲಾಗುತ್ತದೆ."
            *   This looks good.

5.  **Final Review and Combination:**

    *   **Sentence 1:** "API gateway ಬರುವ ವಿನಂತಿಗಳನ್ನು rate limiter ಮೂಲಕ ಸೂಕ್ತ microservice ಗೆ ಮಾರ್ಗ ಮಾಡುತ್ತದೆ."
    *   **Sentence 2:** "ಒಂದು ವೇಳೆ circuit breaker ತೆರೆದಿದೆ, ಅದು ಒಂದು 503 Service Unavailable ಪ್ರತಿಕ್ರಿಯೆ ಹಿಂತಿರುಗಿಸುತ್ತದೆ."
    *   **Sentence 3:** "ಎಲ್ಲಾ ವಿನಂತಿ metadata ಒಂದು ವಿತರಿತ ಟ್ರೇಸಿಂಗ್ ಬ್ಯಾಕೆಂಡ್ ಗೆ ವೀಕ್ಷಣೆಗಾಗಿ ದಾಖಲಿಸಲಾಗುತ್ತದೆ."

    *   Let's combine them into a single paragraph.
    *   "API gateway ಬರುವ ವಿನಂತಿಗಳನ್ನು rate limiter ಮೂಲಕ ಸೂಕ್ತ microservice ಗೆ ಮಾರ್ಗ ಮಾಡುತ್ತದೆ. ಒಂದು ವೇಳೆ circuit breaker ತೆರೆದಿದೆ, ಅದು ಒಂದು 503 Service Unavailable ಪ್ರತಿಕ್ರಿಯೆ ಹಿಂತಿರುಗಿಸುತ್ತದೆ. ಎಲ್ಲಾ ವಿನಂತಿ metadata ಒಂದು ವಿತರಿತ ಟ್ರೇಸಿಂಗ್ ಬ್ಯಾಕೆಂಡ್ ಗೆ ವೀಕ್ಷಣೆಗಾಗಿ ದಾಖಲಿಸಲಾಗುತ್ತದೆ."

    *   **Check against constraints:**
        *   Translate into Kannada? Yes.
        *   Use native Kannada script? Yes.
        *   Preserve technical terms? Yes: "API", "rate limiter", "microservice", "circuit breaker", "503 Service Unavailable", "metadata", "distributed tracing backend", "observability". All of these are preserved.
        *   Output *only* the Kannada translation? Yes, the final output will be just the text.

    *   **Final Polish:**
        *   "API gateway" -> "API gateway" (This is standard).
        *   "ಬರುವ ವಿನಂತಿಗಳನ್ನು" -> "ಬರುವ ವಿನಂತಿಗಳನ್ನು" (Correct).
        *   "ಸೂಕ್ತ microservice ಗೆ" -> "ಸೂಕ್ತ microservice ಗೆ" (Correct).
        *   "ಮಾರ್ಗ ಮಾಡುತ್ತದೆ" -> "ಮಾರ್ಗ ಮಾಡುತ್ತದೆ" (Good).
        *   "ಒಂದು ವೇಳೆ circuit breaker ತೆರೆದಿದೆ" -> "ಒಂದು ವೇಳೆ circuit breaker ತೆರೆದಿದೆ" (Good).
        *   "ಹಿಂತಿರುಗಿಸುತ್ತದೆ" -> "ಹಿಂತಿರುಗಿಸುತ್ತದೆ" (Good).
        *   "ಒಂದು 503 Service Unavailable ಪ್ರತಿಕ್ರಿಯೆ" -> "ಒಂದು 503 Service Unavailable ಪ್ರತಿಕ್ರಿಯೆ" (Good).
        *   "ಎಲ್ಲಾ ವಿನಂತಿ metadata" -> "ಎಲ್ಲಾ ವಿನಂತಿ metadata" (Good).
        *   "ವಿತರಿತ ಟ್ರೇಸಿಂಗ್ ಬ್ಯಾಕೆಂಡ್ ಗೆ" -> "ವಿತರಿತ ಟ್ರೇಸಿಂಗ್ ಬ್ಯಾಕೆಂಡ್ ಗೆ" (Good).
        *   "ವೀಕ್ಷಣೆಗಾಗಿ ದಾಖಲಿಸಲಾಗುತ್ತದೆ" -> "ವೀಕ್ಷಣೆಗಾಗಿ ದಾಖಲಿಸಲಾಗುತ್ತದೆ" (Good).

    *   The combined text seems solid. I will now format it for the final output, ensuring there are no extra characters or explanations. The sentences should be separated by a space, which is standard in Kannada.

    *   Final text to output:
        `API gateway ಬರುವ ವಿನಂತಿಗಳನ್ನು rate limiter ಮೂಲಕ ಸೂಕ್ತ microservice ಗೆ ಮಾರ್ಗ ಮಾಡುತ್ತದೆ. ಒಂದು ವೇಳೆ circuit breaker ತೆರೆದಿದೆ, ಅದು ಒಂದು 503 Service Unavailable ಪ್ರತಿಕ್ರಿಯೆ ಹಿಂತಿರುಗಿಸುತ್ತದೆ. ಎಲ್ಲಾ ವಿನಂತಿ metadata ಒಂದು ವಿತರಿತ ಟ್ರೇಸಿಂಗ್ ಬ್ಯಾಕೆಂಡ್ ಗೆ ವೀಕ್ಷಣೆಗಾಗಿ ದಾಖಲಿಸಲಾಗುತ್ತದೆ.`

    *   Wait, let's re-read the source text. "The API gateway routes...". My translation "API gateway ಮಾರ್ಗ ಮಾಡುತ್ತದೆ..." is slightly different. A more direct translation would be "API gateway ಬರುವ ವಿನಂತಿಗಳನ್ನು... ಮಾರ್ಗ ಮಾಡುತ್ತದೆ...". This is better. Let's adjust.

    *   **Revised Sentence 1:** "API gateway ಬರುವ ವಿನಂತಿಗಳನ್ನು rate limiter ಮೂಲಕ ಸೂಕ್ತ microservice ಗೆ ಮಾರ್ಗ ಮಾಡುತ್ತದೆ." (This is actually the same as my previous attempt, but I'm now more confident in the structure).

    *   Let's re-read the whole thing.
        *   "API gateway routes incoming requests through a rate limiter before forwarding them to the appropriate microservice." -> "API gateway ಬರುವ ವಿನಂತಿಗಳನ್ನು rate limiter ಮೂಲಕ ಸೂಕ್ತ microservice ಗೆ ಮಾರ್ಗ ಮಾಡುತ್ತದೆ." (This is a good, direct translation).
        *   "If the circuit breaker is open, it returns a 503 Service Unavailable response." -> "ಒಂದು ವೇಳೆ circuit breaker ತೆರೆದಿದೆ, ಅದು ಒಂದು 503 Service Unavailable ಪ್ರತಿಕ್ರಿಯೆ ಹಿಂತಿರುಗಿಸುತ್ತದೆ." (Perfect).
        *   "All request metadata is logged to a distributed tracing backend for observability." -> "ಎಲ್ಲಾ ವಿನಂತಿ metadata ಒಂದು ವಿತರಿತ ಟ್ರೇಸಿಂಗ್ ಬ್ಯಾಕೆಂಡ್ ಗೆ ವೀಕ್ಷಣೆಗಾಗಿ ದಾಖಲಿಸಲಾಗುತ್ತದೆ." (Perfect).

    *   The final combined text is:
        `API gateway ಬರುವ ವಿನಂತಿಗಳನ್ನು rate limiter ಮೂಲಕ ಸೂಕ್ತ microservice ಗೆ ಮಾರ್ಗ ಮಾಡುತ್ತದೆ. ಒಂದು ವೇಳೆ circuit breaker ತೆರೆದಿದೆ, ಅದು ಒಂದು 503 Service Unavailable ಪ್ರತಿಕ್ರಿಯೆ ಹಿಂತಿರುಗಿಸುತ್ತದೆ. ಎಲ್ಲಾ ವಿನಂತಿ metadata ಒಂದು ವಿತರಿತ ಟ್ರೇಸಿಂಗ್ ಬ್ಯಾಕೆಂಡ್ ಗೆ ವೀಕ್ಷಣೆಗಾಗಿ ದಾಖಲಿಸಲಾಗುತ್ತದೆ.`

    *   This seems correct and follows all rules. I will output this exact string. I should double-check the script.
        *   API gateway -> API gateway (English)
        *   ಬರುವ -> ಬರುವುದು (bāruva)
        *   ವಿನಂತಿಗಳನ್ನು -> ವಿನಂತಿಗಳು (vinantigaLu)
        *   ದರ -> ದರ (dara)
        *   ಮಿತಿಗಾರಕ -> ಮಿತಿಗಾರಕ (māṭigaḷāyika)
        *   ಸೂಕ್ತ -> ಸೂಕ್ತ (sūpūta)
        *   ಸೂಕ್ಷ್ಮ ಸೇವೆ -> ಸೂಕ್ಷ್ಮ ಸೇವೆ (sūkṣma sēvē)
        *   ಮಾರ್ಗ ಮಾಡುತ್ತದೆ -> ಮಾರ್ಗ ಮಾಡುತ್ತದೆ (mārga kareyutthe)
        *   ಒಂದು ವೇಳೆ -> ಒಂದು ವೇಳೆ (ondhu vēle)
        *   ತೆರೆದಿದೆ -> ತೆರೆದಿದೆ (terāda)
        *   ಹಿಂತಿರುಗಿಸುತ್ತದೆ -> ಹಿಂತಿರುಗಿಸುತ್ತದೆ (hinthirugisutthe)
        *   ಪ್ರತಿಕ್ರಿಯೆ -> ಪ್ರತಿಕ್ರಿಯೆ (pratikriyē)
        *   ಎಲ್ಲಾ -> ಎಲ್ಲಾ (ellaa)
        *   ದಾಖಲಿಸಲಾಗುತ್ತದೆ -> ದಾಖಲಿಸಲಾಗುತ್ತದೆ (dākhilāyisutthe)
        *   ವಿತರಿತ -> ವಿತರಿತ (viḍiritta)
        *   ಟ್ರೇಸಿಂಗ್ -> ಟ್ರೇಸಿಂಗ್ (trāsīṅ)
        *   ಬ್ಯಾಕೆಂಡ್ -> ಬ್ಯಾಕೆಂಡ್ (bākēnd)
        *   ವೀಕ್ಷಣೆ -> ವೀಕ್ಷಣೆ (veekōṇe)
        *   ಗಾಗಿ -> ಗಾಗಿ (gaagi)

    *   The script is correct. The logic holds. The constraints are met. I am ready to generate the final output.
````

</details>

**Output:**

````
API gateway ಬರುವ ವಿನಂತಿಗಳನ್ನು rate limiter ಮೂಲಕ ಸೂಕ್ತ microservice ಗೆ ಮಾರ್ಗ ಮಾಡುತ್ತದೆ. ಒಂದು ವೇಳೆ circuit breaker ತೆರೆದಿದೆ, ಅದು ಒಂದು 503 Service Unavailable ಪ್ರತಿಕ್ರಿಯೆ ಹಿಂತಿರುಗಿಸುತ್ತದೆ. ಎಲ್ಲಾ ವಿನಂತಿ metadata ಒಂದು ವಿತರಿತ ಟ್ರೇಸಿಂಗ್ ಬ್ಯಾಕೆಂಡ್ ಗೆ ವೀಕ್ಷಣೆಗಾಗಿ ದಾಖಲಿಸಲಾಗುತ್ತದೆ.
````

### Malayalam

**Prompt:** Translate the following paragraph into Malayalam, using native Malayalam script. Preserve technical terms in English where no standard native equivalent exists. Output only the Malayalam translation, nothing else.

Text: "The API gateway routes incoming requests through a rate limiter before forwarding them to the appropriate microservice. If the circuit breaker is open, it returns a 503 Service Unavailable response. All request metadata is logged to a distributed tracing backend for observability."

*9554 tok | 34.3s | 278.5 t/s | think: 37183 chars | finish: stop*

<details><summary>Thinking (37183 chars)</summary>

````
1.  **Deconstruct the Request:**

    *   **Source Text:** "The API gateway routes incoming requests through a rate limiter before forwarding them to the appropriate microservice. If the circuit breaker is open, it returns a 503 Service Unavailable response. All request metadata is logged to a distributed tracing backend for observability."
    *   **Target Language:** Malayalam.
    *   **Script:** Native Malayalam script (not transliteration).
    *   **Constraint 1:** Preserve technical terms in English where no standard native equivalent exists.
    *   **Constraint 2:** Output *only* the Malayalam translation. No extra text, no explanations, no "Here is the translation:". Just the final text.

2.  **Analyze the Source Text Sentence by Sentence:**

    *   **Sentence 1:** "The API gateway routes incoming requests through a rate limiter before forwarding them to the appropriate microservice."

        *   "The API gateway":
            *   "API" (Application Programming Interface) is a very common technical term. Is there a standard Malayalam equivalent? Not really. "Application Programming Interface" is often just kept as "API". It's universally understood in the tech community.
            *   "gateway" (in this context) is also a common term. It's the entry point. "Gateway" is often used directly.
            *   So, "API gateway" is a good candidate for preservation. Let's keep it as "API gateway".

        *   "routes": This means to direct or send. In Malayalam, this could be "കൈമാറുന്നു" (kaṃmaṟṟu - sends), "നയിക്കുന്നു" (nāyikkunnu - directs), or "കൈകാര്യം ചെയ്യുന്നു" (kaṭṭaṁkūṭṭu - handles/manages). "കൈമാറുന്നു" is a very direct and common translation for "routes". "കൈകാര്യം ചെയ്യുന്നു" is also good, implying management. Let's go with "കൈമാറുന്നു" as it's more specific to the action of sending.

        *   "incoming requests":
            *   "incoming": "വരുന്നത്" (varṇaṁ - coming) or "വരുന്ന" (varunna - coming). "വരുന്നത്" is a good choice.
            *   "requests": "അഭ്യർത്ഥനകൾ" (abhyarthanaḷ - requests/applications) or "ആവശ്യങ്ങൾ" (āvaṇikal - demands/requests). "Abhyarthanaḷ" is more formal and fits the technical context better.
            *   So, "incoming requests" -> "വരുന്നത് അഭ്യർത്ഥനകൾ" (varṇaṁ abhyarthanaḷ).

        *   "through a rate limiter":
            *   "rate limiter" is a technical term. The standard term is "rate limiter". No need to translate it.
            *   "through": "വഴി" (vazhi - through).
            *   So, "through a rate limiter" -> "ഒരു rate limiter വഴി" (oru rate limiter vazhi).

        *   "before forwarding them":
            *   "forwarding": "കൈമാറുന്നു" (kaṃmaṟṟu - sending/forwarding).
            *   "them": "അവയെ" (avēṇe - them).
            *   "before": "മുമ്പ്" (mumpu - before).
            *   So, "before forwarding them" -> "അവയെ കൈമാറുന്നതിന് മുമ്പ്" (avēṇe kaṃmaṟṟuvinu mumpu).

        *   "to the appropriate microservice":
            *   "appropriate": "അനുയോജ്യമായ" (anuyōgyapēṭṭiyā - suitable/appropriate).
            *   "microservice": This is another key technical term. The standard Malayalam term is "മൈക്രോ സർവീസ്" (Mykro Sevīs). It's a direct transliteration and is widely used. So, preserve it.
            *   "to": "ലേക്ക്" (lekk - to).
            *   So, "to the appropriate microservice" -> "അനുയോജ്യമായ മൈക്രോ സർവീസിലേക്ക്" (anuyōgyapēṭṭiyā Mykro Sevīsilekk).

        *   **Putting Sentence 1 together:**
            *   "API gateway" + " routes" + " incoming requests" + " through a rate limiter" + " before forwarding them" + " to the appropriate microservice".
            *   "API gateway" (preserved) + " അഭ്യർത്ഥനകൾ" (requests) + " " (space) + " വരുന്നത്" (incoming) + " " (space) + " rate limiter" (preserved) + " വഴി" (through) + " " (space) + " അവയെ" (them) + " " (space) + " കൈമാറുന്നതിന്" (forwarding) + " " (space) + " മുമ്പ്" (before) + " " (space) + " അവയെ" (them) + " " (space) + " അനുയോജ്യമായ" (appropriate) + " " (space) + " മൈക്രോ സർവീസിലേക്ക്" (microservice).
            *   Wait, I made a mistake. The structure is "The API gateway routes...". So "The" is implied.
            *   Let's re-assemble: "API gateway" + " requests" + " through a rate limiter" + " before forwarding them" + " to the appropriate microservice".
            *   "API gateway requests" - this sounds weird. It should be "The API gateway routes requests".
            *   Let's try again, focusing on the verb.
            *   "API gateway" (subject) + " requests" (object) + " through a rate limiter" (prepositional phrase) + " before forwarding them" (subordinate clause) + " to the appropriate microservice" (prepositional phrase).
            *   "API gateway" + " incoming requests" + " through a rate limiter" + " before forwarding them" + " to the appropriate microservice".
            *   "API gateway" + " വരുന്നത് അഭ്യർത്ഥനകൾ" + " ഒരു rate limiter വഴി" + " അവയെ കൈമാറുന്നതിന് മുമ്പ്" + " അനുയോജ്യമായ മൈക്രോ സർവീസിലേക്ക്".
            *   This is getting clunky. Let's simplify the sentence structure.
            *   "API gateway requests" -> "API gateway അഭ്യർത്ഥനകൾ" (API gateway requests). This is a common way to express this in technical Malayalam. The verb "routes" is then implied by the context.
            *   So, "API gateway requests" + " through a rate limiter" + " before forwarding them" + " to the appropriate microservice".
            *   "API gateway requests" (API gateway requests) + " ഒരു rate limiter വഴി" (through a rate limiter) + " അവയെ കൈമാറുന്നതിന് മുമ്പ്" (before forwarding them) + " അനുയോജ്യമായ മൈക്രോ സർവീസിലേക്ക്" (to the appropriate microservice).
            *   Let's check the grammar. "API gateway requests" is the subject. "through a rate limiter" is a prepositional phrase modifying "requests". "before forwarding them" is another one. "to the appropriate microservice" is the final destination. This works.
            *   Final Sentence 1: "API gateway requests ഒരു rate limiter വഴി അവയെ കൈമാറുന്നതിന് മുമ്പ് അനുയോജ്യമായ മൈക്രോ സർവീസിലേക്ക്." This feels a bit long.
            *   Let's try a more natural flow. "API gateway requests" (subject) "are routed" (passive voice, "കൈമാറുന്നു") "through a rate limiter" (phrase) "before being forwarded" (passive) "to the appropriate microservice".
            *   "API gateway requests are routed through a rate limiter before being forwarded to the appropriate microservice."
            *   Malayalam: "API gateway requests are routed through a rate limiter before being forwarded to the appropriate microservice."
            *   "API gateway requests" (API gateway requests) + " ഒരു rate limiter വഴി" (through a rate limiter) + " കൈമാറുന്നു" (are routed) + " അതിനുശേഷം" (after) + " അവയെ അനുയോജ്യമായ മൈക്രോ സർവീസിലേക്ക് കൈമാറുന്നു" (are forwarded to the appropriate microservice).
            *   This is too long.
            *   Let's go back to the first idea, it was more concise.
            *   "API gateway requests" (API gateway requests) + " ഒരു rate limiter വഴി" (through a rate limiter) + " അവയെ കൈമാറുന്നതിന് മുമ്പ്" (before forwarding them) + " അനുയോജ്യമായ മൈക്രോ സർവീസിലേക്ക്" (to the appropriate microservice).
            *   This is grammatically correct but a bit of a mouthful.
            *   How about: "API gateway requests are routed through a rate limiter before being forwarded to the appropriate microservice."
            *   Malayalam: "API gateway requests are routed through a rate limiter before being forwarded to the appropriate microservice."
            *   Let's try a different structure. "Incoming requests are routed by the API gateway through a rate limiter before being forwarded to the appropriate microservice."
            *   "വരുന്നത് അഭ്യർത്ഥനകൾ API gateway വഴി ഒരു rate limiter വഴി അനുയോജ്യമായ മൈക്രോ സർവീസിലേക്ക് കൈമാറുന്നു." (Incoming requests are routed by the API gateway through a rate limiter to the appropriate microservice). This is better. But the original sentence starts with "The API gateway".
            *   Let's stick to the original structure.
            *   "API gateway" (subject) + " requests" (object) + " are routed" (verb) + " through a rate limiter" (prep phrase) + " before being forwarded" (prep phrase) + " to the appropriate microservice" (prep phrase).
            *   "API gateway requests are routed through a rate limiter before being forwarded to the appropriate microservice."
            *   Let's translate this: "API gateway requests are routed through a rate limiter before being forwarded to the appropriate microservice."
            *   "API gateway requests" (API gateway requests) + " are routed" (കൈമാറുന്നു) + " through a rate limiter" (ഒരു rate limiter വഴി) + " before being forwarded" (കൈമാറുന്നതിന് മുമ്പ്) + " to the appropriate microservice" (അനുയോജ്യമായ മൈക്രോ സർവീസിലേക്ക്).
            *   This seems solid. Let's refine the wording. "API gateway requests" is a bit ambiguous. It could mean the requests *belong* to the gateway.
            *   Let's try: "API gateway routes incoming requests through a rate limiter before forwarding them to the appropriate microservice."
            *   "API gateway" (subject) + " requests" (object) + " are routed" (verb) + " through a rate limiter" (prep phrase) + " before being forwarded" (prep phrase) + " to the appropriate microservice" (prep phrase).
            *   "API gateway requests are routed through a rate limiter before being forwarded to the appropriate microservice."
            *   This is the most natural-sounding option. Let's go with it.
            *   Final check: "API gateway requests" is a common term in Malayalam tech parlance. "routed" -> "കൈമാറുന്നു". "through a rate limiter" -> "ഒരു rate limiter വഴി". "before being forwarded" -> "കൈമാറുന്നതിന് മുമ്പ്". "to the appropriate microservice" -> "അനുയോജ്യമായ മൈക്രോ സർവീസിലേക്ക്". Looks good.

    *   **Sentence 2:** "If the circuit breaker is open, it returns a 503 Service Unavailable response."

        *   "If the circuit breaker is open":
            *   "If": "എങ്കിൽ" (enkil - if).
            *   "the circuit breaker": This is a technical term. It's often kept as "circuit breaker".
            *   "is open": "തുറന്നിരിക്കുന്നു" (tuṟanniririsu - is open).
            *   So, "If the circuit breaker is open" -> "സർക്യൂട്ട് ബ്രേക്കർ തുറന്നിരിക്കുകയാണെങ്കിൽ" (Saṅkyaṭṭa brēkkar ēṟu irukkiri yānkil). The "If" clause in Malayalam often comes at the end.
            *   Alternative: "സർക്യൂട്ട് ബ്രേക്കർ തുറന്നിരിക്കുകയാണെങ്കിൽ" (Circuit breaker is open if). This is also very common.
            *   Let's go with the second one, it's more concise.

        *   "it returns":
            *   "it" refers to the circuit breaker.
            *   "returns": "തിരികെ നൽകുന്നു" (thirike nalkunnu - returns/gives back).
            *   So, "it returns" -> "അത് തിരികെ നൽകുന്നു" (aṭṭa thirike nalkunnu).

        *   "a 503 Service Unavailable response":
            *   "503 Service Unavailable" is a standard HTTP status code description. It's almost always kept in English.
            *   "response": "പ്രതികരണം" (pratiṟikaraṇam - response).
            *   So, "a 503 Service Unavailable response" -> "ഒരു 503 Service Unavailable response".

        *   **Putting Sentence 2 together:**
            *   "Circuit breaker open if, it returns a 503 Service Unavailable response."
            *   "സർക്യൂട്ട് ബ്രേക്കർ തുറന്നിരിക്കുകയാണെങ്കിൽ, അത് ഒരു 503 Service Unavailable response തിരികെ നൽകുന്നു."
            *   This is grammatically correct and preserves the technical terms. The comma after "യാണെങ്കിൽ" (yānkil) is good for readability.

    *   **Sentence 3:** "All request metadata is logged to a distributed tracing backend for observability."

        *   "All request metadata":
            *   "All": "എല്ലാ" (ella - all).
            *   "request metadata": This is a technical term. "Metadata" is often kept as "metadata". "request" can be "അഭ്യർത്ഥന" (abhyarthana). So, "request metadata" -> "അഭ്യർത്ഥന metadata".
            *   So, "All request metadata" -> "എല്ലാ അഭ്യർത്ഥന metadata".

        *   "is logged":
            *   "is logged": "ലോഗ് ചെയ്യപ്പെടുന്നു" (lōg ēḍukka pāṟu - is logged).
            *   "to": "ലേക്ക്" (lekk - to).
            *   So, "is logged to" -> "ലേക്ക് ലോഗ് ചെയ്യപ്പെടുന്നു" (lekk lōg ēḍukka pāṟu).

        *   "a distributed tracing backend":
            *   "distributed": "വിതരണം ചെയ്തത്" (vittiriyampetṭṭiya - distributed).
            *   "tracing": "ട്രേസിംഗ്" (ṭreːsīṅ - tracing).
            *   "backend": "ബാക്കെൻഡ്" (bākkiṇḍ - backend).
            *   So, "a distributed tracing backend" -> "ഒരു വിതരണം ചെയ്ത ട്രേസിംഗ് ബാക്കെൻഡ്" (oru vittiṟiyampetṭṭiya ṭreːsīṅ bākkiṇḍ).

        *   "for observability":
            *   "for": "ലക്ഷ്യമാക്കി" (lakṣyamaki - for the purpose of).
            *   "observability": This is a technical term. The standard English word is often used, or a transliteration. "Observability" is the common term. Let's preserve it.
            *   So, "for observability" -> "നിരീക്ഷണക്ഷമതയ്ക്ക്" (niṣekōṇakṣamataykk - for observability) or "നിരീക്ഷണക്ഷമതയ്ക്കായി" (niṣekōṇakṣamataykkaayi - for observability). "ലക്ഷ്യമാക്കി" is also good. Let's use "നിരീക്ഷണക്ഷമതയ്ക്ക്" (niṣekōṇakṣamataykk) as it's a direct dative case.

        *   **Putting Sentence 3 together:**
            *   "All request metadata" (എല്ലാ അഭ്യർത്ഥന metadata) + " is logged to" (ലോഗ് ചെയ്യപ്പെടുന്നു) + " a distributed tracing backend" (ഒരു വിതരണം ചെയ്ത ട്രേസിംഗ് ബാക്കെൻഡ്) + " for observability" (നിരീക്ഷണക്ഷമതയ്ക്ക്).
            *   "എല്ലാ അഭ്യർത്ഥന metadata ഒരു വിതരണം ചെയ്ത ട്രേസിംഗ് ബാക്കെൻഡിലേക്ക് നിരീക്ഷണക്ഷമതയ്ക്ക് ലോഗ് ചെയ്യപ്പെടുന്നു."
            *   Wait, the original says "to a backend". So "ലോഗ് ചെയ്യപ്പെടുന്നു" (is logged) should take the dative case. "ലോഗ് ചെയ്യപ്പെടുന്നു" + "ലേക്ക്" (lekk).
            *   "All request metadata is logged to a distributed tracing backend for observability."
            *   "എല്ലാ അഭ്യർത്ഥന metadata ഒരു വിതരണം ചെയ്ത ട്രേസിംഗ് ബാക്കെൻഡിലേക്ക് ലോഗ് ചെയ്യപ്പെടുന്നു, നിരീക്ഷണക്ഷമതയ്ക്ക് വേണ്ടി." (All request metadata is logged to a distributed tracing backend, for observability). The "for" is better placed at the end.
            *   Let's try again: "എല്ലാ അഭ്യർത്ഥന metadata ഒരു വിതരണം ചെയ്ത ട്രേസിംഗ് ബാക്കെൻഡിൽ ലോഗ് ചെയ്യപ്പെടുന്നു, നിരീക്ഷണക്ഷമതയ്ക്ക് വേണ്ടി." (is logged *in* a backend, for observability). This is more accurate. The data is logged *in* the backend.
            *   Let's check the original again: "is logged to a... backend". This implies a destination.
            *   "All request metadata is logged to a distributed tracing backend for observability."
            *   "എല്ലാ അഭ്യർത്ഥന metadata" (All request metadata) + " ഒരു വിതരണം ചെയ്ത ട്രേസിംഗ് ബാക്കെൻഡിലേക്ക്" (to a distributed tracing backend) + " ലോഗ് ചെയ്യപ്പെടുന്നു" (is logged) + " നിരീക്ഷണക്ഷമതയ്ക്ക് വേണ്ടി" (for observability).
            *   This seems to capture the meaning well. The "to" is part of the destination phrase.

3.  **Final Review and Assembly:**

    *   **Sentence 1:** "API gateway requests are routed through a rate limiter before being forwarded to the appropriate microservice."
        *   "API gateway" (preserved) + " requests" (requests) + " are routed" (are routed) + " through a rate limiter" (through a rate limiter) + " before being forwarded" (before being forwarded) + " to the appropriate microservice" (to the appropriate microservice).
        *   Let's make it more active and closer to the original.
        *   "API gateway routes incoming requests through a rate limiter before forwarding them to the appropriate microservice."
        *   "API gateway" (subject) + " routes" (verb) + " incoming requests" (incoming requests) + " through a rate limiter" (prep phrase) + " before forwarding them" (prep phrase) + " to the appropriate microservice" (prep phrase).
        *   "API gateway requests" (API gateway requests) + " are routed" (are routed) + " through a rate limiter" (through a rate limiter) + " before being forwarded" (before being forwarded) + " to the appropriate microservice" (to the appropriate microservice).
        *   Let's try one more time for a smooth sentence.
        *   "API gateway routes incoming requests through a rate limiter before forwarding them to the appropriate microservice."
        *   "API gateway" (subject) + " requests" (object) + " are routed" (verb) + " through a rate limiter" (prep phrase) + " before being forwarded" (prep phrase) + " to the appropriate microservice" (prep phrase).
        *   This is the best structure.
        *   Malayalam: "API gateway requests are routed through a rate limiter before being forwarded to the appropriate microservice."
        *   Let's try a more direct translation that avoids the passive "are routed".
        *   "API gateway routes incoming requests through a rate limiter before forwarding them to the appropriate microservice."
        *   "API gateway" (API gateway) + " requests" (requests) + " are routed" (are routed) + " through a rate limiter" (through a rate limiter) + " before being forwarded" (before being forwarded) + " to the appropriate microservice" (to the appropriate microservice).
        *   "API gateway requests are routed through a rate limiter before being forwarded to the appropriate microservice." This is the most natural.
        *   Let's try to be more concise.
        *   "API gateway routes incoming requests through a rate limiter before forwarding them to the appropriate microservice."
        *   "API gateway" (subject) + " requests" (object) + " are routed" (verb) + " through a rate limiter" (prep phrase) + " before being forwarded" (prep phrase) + " to the appropriate microservice" (prep phrase).
        *   This is the best. Let's stick with it.

    *   **Sentence 2:** "If the circuit breaker is open, it returns a 503 Service Unavailable response."
        *   "Circuit breaker" (preserved) + " open" (open) + " if" (if) + " it returns" (it returns) + " a 503 Service Unavailable response" (a 503 Service Unavailable response).
        *   "സർക്യൂട്ട് ബ്രേക്കർ തുറന്നിരിക്കുകയാണെങ്കിൽ, അത് ഒരു 503 Service Unavailable response തിരികെ നൽകുന്നു."
        *   This is good. "തിരികെ നൽകുന്നു" (returns) is a good translation for "returns" in this context.

    *   **Sentence 3:** "All request metadata is logged to a distributed tracing backend for observability."
        *   "All request metadata" (preserved) + " is logged to" (is logged to) + " a distributed tracing backend" (a distributed tracing backend) + " for observability" (for observability).
        *   "എല്ലാ അഭ്യർത്ഥന metadata ഒരു വിതരണം ചെയ്ത ട്രേസിംഗ് ബാക്കെൻഡിലേക്ക് ലോഗ് ചെയ്യപ്പെടുന്നു, നിരീക്ഷണക്ഷമതയ്ക്ക് വേണ്ടി."
        *   The "for" at the end is more natural in Malayalam.
        *   "എല്ലാ അഭ്യർത്ഥന metadata വിതരണം ചെയ്ത ട്രേസിംഗ് ബാക്കെൻഡിൽ ലോഗ് ചെയ്യപ്പെടുന്നു, നിരീക്ഷണക്ഷമതയ്ക്ക് വേണ്ടി." (All request metadata is logged in the distributed tracing backend, for observability). This is very accurate.
        *   Let's check the original again: "is logged to a... backend". The destination is "a backend".
        *   "All request metadata is logged to a distributed tracing backend for observability."
        *   "എല്ലാ അഭ്യർത്ഥന metadata" (All request metadata) + " ഒരു വിതരണം ചെയ്ത ട്രേസിംഗ് ബാക്കെൻഡിലേക്ക്" (to a distributed tracing backend) + " ലോഗ് ചെയ്യപ്പെടുന്നു" (is logged) + " നിരീക്ഷണക്ഷമതയ്ക്ക് വേണ്ടി" (for observability).
        *   This is the most faithful translation.

4.  **Final Assembly and Polish:**

    *   **Sentence 1:** "API gateway requests are routed through a rate limiter before being forwarded to the appropriate microservice."
        *   "API gateway" (API gateway) + " requests" (requests) + " are routed" (are routed) + " through a rate limiter" (through a rate limiter) + " before being forwarded" (before being forwarded) + " to the appropriate microservice" (to the appropriate microservice).
        *   Let's use "കൈമാറുന്നു" (kaṃmaṟṟu - sends/routes) for a more active feel.
        *   "API gateway requests കൈമാറുന്നു..." - this makes the subject "API gateway requests", which is okay.
        *   Let's try to keep the structure of the original.
        *   "API gateway routes incoming requests through a rate limiter before forwarding them to the appropriate microservice."
        *   "API gateway" (subject) + " requests" (object) + " are routed" (verb) + " through a rate limiter" (prep phrase) + " before being forwarded" (prep phrase) + " to the appropriate microservice" (prep phrase).
        *   "API gateway requests are routed through a rate limiter before being forwarded to the appropriate microservice." This is the most natural and clear.

    *   **Sentence 2:** "If the circuit breaker is open, it returns a 503 Service Unavailable response."
        *   "സർക്യൂട്ട് ബ്രേക്കർ തുറന്നിരിക്കുകയാണെങ്കിൽ, അത് ഒരു 503 Service Unavailable response തിരികെ നൽകുന്നു."
        *   This is perfect.

    *   **Sentence 3:** "All request metadata is logged to a distributed tracing backend for observability."
        *   "എല്ലാ അഭ്യർത്ഥന metadata വിതരണം ചെയ്ത ട്രേസിംഗ് ബാക്കെൻഡിലേക്ക് ലോഗ് ചെയ്യപ്പെടുന്നു, നിരീക്ഷണക്ഷമതയ്ക്ക് വേണ്ടി."
        *   This is also perfect.

    *   **Combine and Final Check:**
        *   "API gateway requests are routed through a rate limiter before being forwarded to the appropriate microservice. സർക്യൂട്ട് ബ്രേക്കർ തുറന്നിരിക്കുകയാണെങ്കിൽ, അത് ഒരു 503 Service Unavailable response തിരികെ നൽകുന്നു. എല്ലാ അഭ്യർത്ഥന metadata വിതരണം ചെയ്ത ട്രേസിംഗ് ബാക്കെൻഡിലേക്ക് ലോഗ് ചെയ്യപ്പെടുന്നു, നിരീക്ഷണക്ഷമതയ്ക്ക് വേണ്ടി."
        *   The request asks for *only* the Malayalam translation. So I need to remove the English terms I used for my own thought process and just output the final Malayalam text.
        *   Let's re-read the prompt: "Translate the following paragraph into Malayalam, using native Malayalam script. Preserve technical terms in English where no standard native equivalent exists. Output only the Malayalam translation, nothing else."
        *   This means the final output should be just the Malayalam text. The English terms I'm preserving are *part of* the Malayalam text.
        *   So, "API gateway" should be in the output. "circuit breaker" should be in the output. "Service Unavailable" should be in the output.
        *   Let's construct the final output string.

        *   **Sentence 1:** "API gateway requests are routed through a rate limiter before being forwarded to the appropriate microservice."
            *   "API gateway" (preserved)
            *   "requests" (requests)
            *   "are routed" (കൈമാറുന്നു)
            *   "through a rate limiter" (ഒരു rate limiter വഴി)
            *   "before being forwarded" (കൈമാറുന്നതിന് മുമ്പ്)
            *   "to the appropriate microservice" (അനുയോജ്യമായ മൈക്രോ സർവീസിലേക്ക്)
            *   Final: "API gateway requests കൈമാറുന്നു ഒരു rate limiter വഴി അവയെ അനുയോജ്യമായ മൈക്രോ സർവീസിലേക്ക് കൈമാറുന്നതിന് മുമ്പ്." This is getting too long.
            *   Let's go back to the simpler, more natural phrasing.
            *   "API gateway requests are routed through a rate limiter before being forwarded to the appropriate microservice."
            *   Malayalam: "API gateway requests are routed through a rate limiter before being forwarded to the appropriate microservice."
            *   Let's check the grammar again. "API gateway requests" is the subject. "are routed" is the verb. "through a rate limiter" is a prepositional phrase modifying the action. "before being forwarded" is another. "to the appropriate microservice" is the final destination. This works.
            *   But "API gateway requests" is a bit clunky. How about just "API gateway" as the subject?
            *   "API gateway routes requests through a rate limiter before forwarding them to the appropriate microservice."
            *   Malayalam: "API gateway requests കൈമാറുന്നു ഒരു rate limiter വഴി അവയെ അനുയോജ്യമായ മൈക്രോ സർവീസിലേക്ക് കൈമാറുന്നതിന് മുമ്പ്." Still clunky.
            *   Let's try: "API gateway requests are routed through a rate limiter before being forwarded to the appropriate microservice."
            *   Malayalam: "API gateway requests are routed through a rate limiter before being forwarded to the appropriate microservice."
            *   Let's try one more time, making it as smooth as possible.
            *   "API gateway requests are routed through a rate limiter before being forwarded to the appropriate microservice."
            *   "API gateway" (subject) + " requests" (object) + " are routed" (verb) + " through a rate limiter" (prep phrase) + " before being forwarded" (prep phrase) + " to the appropriate microservice" (prep phrase).
            *   This is the most faithful and clear structure. I'll stick with it.

        *   **Sentence 2:** "If the circuit breaker is open, it returns a 503 Service Unavailable response."
            *   "Circuit breaker" (preserved)
            *   "is open" (തുറന്നിരിക്കുന്നു)
            *   "it returns" (തിരികെ നൽകുന്നു)
            *   "a 503 Service Unavailable response" (ഒരു 503 Service Unavailable response)
            *   Malayalam: "സർക്യൂട്ട് ബ്രേക്കർ തുറന്നിരിക്കുകയാണെങ്കിൽ, അത് ഒരു 503 Service Unavailable response തിരികെ നൽകുന്നു." This is good.

        *   **Sentence 3:** "All request metadata is logged to a distributed tracing backend for observability."
            *   "All request metadata" (preserved)
            *   "is logged to" (ലോഗ് ചെയ്യപ്പെടുന്നു)
            *   "a distributed tracing backend" (വിതരണം ചെയ്ത ട്രേസിംഗ് ബാക്കെൻഡ്)
            *   "for observability" (നിരീക്ഷണക്ഷമതയ്ക്ക് വേണ്ടി)
            *   Malayalam: "എല്ലാ അഭ്യർത്ഥന metadata വിതരണം ചെയ്ത ട്രേസിംഗ് ബാക്കെൻഡിലേക്ക് ലോഗ് ചെയ്യപ്പെടുന്നു, നിരീക്ഷണക്ഷമതയ്ക്ക് വേണ്ടി." This is also good.

    *   **Final Combination:**
        *   "API gateway requests are routed through a rate limiter before being forwarded to the appropriate microservice. സർക്യൂട്ട് ബ്രേക്കർ തുറന്നിരിക്കുകയാണെങ്കിൽ, അത് ഒരു 503 Service Unavailable response തിരികെ നൽകുന്നു. എല്ലാ അഭ്യർത്ഥന metadata വിതരണം ചെയ്ത ട്രേസിംഗ് ബാക്കെൻഡിലേക്ക് ലോഗ് ചെയ്യപ്പെടുന്നു, നിരീക്ഷണക്ഷമതയ്ക്ക് വേണ്ടി."
        *   I need to make sure I'm using the correct Malayalam script.
        *   API gateway -> API gateway (preservation)
        *   requests -> അഭ്യർത്ഥനകൾ (requests)
        *   are routed -> കൈമാറുന്നു (are routed)
        *   through a rate limiter -> ഒരു rate limiter വഴി (through a rate limiter)
        *   before being forwarded -> കൈമാറുന്നതിന് മുമ്പ് (before being forwarded)
        *   to the appropriate microservice -> അനുയോജ്യമായ മൈക്രോ സർവീസിലേക്ക് (to the appropriate microservice)
        *   Circuit breaker -> സർക്യൂട്ട് ബ്രേക്കർ (preserved)
        *   is open -> തുറന്നിരിക്കുന്നു (is open)
        *   it returns -> അത് തിരികെ നൽകുന്നു (it returns)
        *   a 503 Service Unavailable response -> ഒരു 503 Service Unavailable response (preserved)
        *   All request metadata -> എല്ലാ അഭ്യർത്ഥന metadata (preserved)
        *   is logged to -> ലോഗ് ചെയ്യപ്പെടുന്നു (is logged)
        *   a distributed tracing backend -> വിതരണം ചെയ്ത ട്രേസിംഗ് ബാക്കെൻഡ് (preserved)
        *   for observability -> നിരീക്ഷണക്ഷമതയ്ക്ക് വേണ്ടി (for observability)

    *   Let's re-assemble with the correct terms.
        *   Sentence 1: "API gateway requests are routed through a rate limiter before being forwarded to the appropriate microservice."
            *   "API gateway" (preserved)
            *   "requests" (requests)
            *   "are routed" (കൈമാറുന്നു)
            *   "through a rate limiter" (ഒരു rate limiter വഴി)
            *   "before being forwarded" (കൈമാറുന്നതിന് മുമ്പ്)
            *   "to the appropriate microservice" (അനുയോജ്യമായ മൈക്രോ സർവീസിലേക്ക്)
            *   Let's try to make it more active.
            *   "API gateway routes requests through a rate limiter before forwarding them to the appropriate microservice."
            *   "API gateway" (subject) + " routes" (verb) + " requests" (object) + " through a rate limiter" (prep phrase) + " before forwarding them" (prep phrase) + " to the appropriate microservice" (prep phrase).
            *   This is much better. It's more direct.
            *   Malayalam: "API gateway requests കൈമാറുന്നു ഒരു rate limiter വഴി അവയെ അനുയോജ്യമായ മൈക്രോ സർവീസിലേക്ക് കൈമാറുന്നതിന് മുമ്പ്." Still feels a bit off.
            *   Let's go with the most standard, clear translation.
            *   "API gateway routes incoming requests through a rate limiter before forwarding them to the appropriate microservice."
            *   "API gateway" (subject) + " routes" (verb) + " incoming requests" (object) + " through a rate limiter" (prep phrase) + " before forwarding them" (prep phrase) + " to the appropriate microservice" (prep phrase).
            *   Malayalam: "API gateway requests വരുന്നത് ഒരു rate limiter വഴി അനുയോജ്യമായ മൈക്രോ സർവീസിലേക്ക് കൈമാറുന്നതിന് മുമ്പ്." This is a good, natural-sounding sentence. But the prompt says "Preserve technical terms in English". "API gateway" should be preserved.
            *   So: "API gateway requests വരുന്നത് ഒരു rate limiter വഴി അനുയോജ്യമായ മൈക്രോ സർവീസിലേക്ക് കൈമാറുന്നതിന് മുമ്പ്." This is not right. "API gateway" is the subject.
            *   "API gateway requests are routed through a rate limiter before being forwarded to the appropriate microservice."
            *   Let's use the passive voice, it's common in technical descriptions.
            *   "API gateway requests are routed through a rate limiter before being forwarded to the appropriate microservice."
            *   "API gateway requests" (API gateway requests) + " are routed" (are routed) + " through a rate limiter" (through a rate limiter) + " before being forwarded" (before being forwarded) + " to the appropriate microservice" (to the appropriate microservice).
            *   This is the most accurate and clear. I'll use this.

        *   Sentence 2: "സർക്യൂട്ട് ബ്രേക്കർ തുറന്നിരിക്കുകയാണെങ്കിൽ, അത് ഒരു 503 Service Unavailable response തിരികെ നൽകുന്നു." (Circuit breaker is open, it returns a 503 Service Unavailable response.) - This is perfect.

        *   Sentence 3: "എല്ലാ അഭ്യർത്ഥന metadata വിതരണം ചെയ്ത ട്രേസിംഗ് ബാക്കെൻഡിലേക്ക് ലോഗ് ചെയ്യപ്പെടുന്നു, നിരീക്ഷണക്ഷമതയ്ക്ക് വേണ്ടി." (All request metadata is logged in the distributed tracing backend, for observability.) - This is also perfect. The "to a" is captured by "വിതരണം ചെയ്ത... ബാക്കെൻഡിലേക്ക്" (in the distributed... backend).

    *   **Final check on the whole text:**
        *   "API gateway requests are routed through a rate limiter before being forwarded to the appropriate microservice. സർക്യൂട്ട് ബ്രേക്കർ തുറന്നിരിക്കുകയാണെങ്കിൽ, അത് ഒരു 503 Service Unavailable response തിരികെ നൽകുന്നു. എല്ലാ അഭ്യർത്ഥന metadata വിതരണം ചെയ്ത ട്രേസിംഗ് ബാക്കെൻഡിലേക്ക് ലോഗ് ചെയ്യപ്പെടുന്നു, നിരീക്ഷണക്ഷമതയ്ക്ക് വേണ്ടി."
        *   This looks solid. It follows all the rules. It uses the native script. It preserves the technical terms. It's just the translation.
        *   Wait, let's re-read the first sentence one more time. "The API gateway routes incoming requests through a rate limiter before forwarding them to the appropriate microservice."
        *   "API gateway" (preserved) + " routes" (verb) + " incoming requests" (object) + " through a rate limiter" (prep phrase) + " before forwarding them" (prep phrase) + " to the appropriate microservice" (prep phrase).
        *   "API gateway requests വരുന്നത് ഒരു rate limiter വഴി അനുയോജ്യമായ മൈക്രോ സർവീസിലേക്ക് കൈമാറുന്നതിന് മുമ്പ്." This is a bit awkward.
        *   Let's try: "API gateway requests are routed through a rate limiter before being forwarded to the appropriate microservice."
        *   "API gateway requests" (API gateway requests) + " are routed" (are routed) + " through a rate limiter" (through a rate limiter) + " before being forwarded" (before being forwarded) + " to the appropriate microservice" (to the appropriate microservice).
        *   This is the best version. It's passive, but it's the standard way to describe such a process in technical writing.

    *   Let's do a final check on the wording.
        *   "API gateway requests are routed through a rate limiter before being forwarded to the appropriate microservice." -> This is a bit long.
        *   How about: "API gateway routes requests through a rate limiter before forwarding them to the appropriate microservice."
        *   "API gateway" (subject) + " routes" (verb) + " requests" (object) + " through a rate limiter" (prep phrase) + " before forwarding them" (prep phrase) + " to the appropriate microservice" (prep phrase).
        *   This is more active and concise. The "requests" are implied to be the API gateway's requests. This is a common pattern.
        *   Let's use this one. It's better.

    *   **Final Final Version:**
        1.  "API gateway routes requests through a rate limiter before forwarding them to the appropriate microservice."
        2.  "സർക്യൂട്ട് ബ്രേക്കർ തുറന്നിരിക്കുകയാണെങ്കിൽ, അത് ഒരു 503 Service Unavailable response തിരികെ നൽകുന്നു."
        3.  "എല്ലാ അഭ്യർത്ഥന metadata വിതരണം ചെയ്ത ട്രേസിംഗ് ബാക്കെൻഡിലേക്ക് ലോഗ് ചെയ്യപ്പെടുന്നു, നിരീക്ഷണക്ഷമതയ്ക്ക് വേണ്ടി."

    *   Wait, the prompt says "Translate the following paragraph". This implies the whole thing should be translated. My version 1 is more of a direct translation of the *structure*. Let's try to make it more natural.
    *   "API gateway routes incoming requests through a rate limiter before forwarding them to the appropriate microservice."
    *   "API gateway" (subject) + " routes" (verb) + " incoming requests" (object) + " through a rate limiter" (prep phrase) + " before forwarding them" (prep phrase) + " to the appropriate microservice" (prep phrase).
    *   This is a very direct and clear translation. I'll stick with this one. It's less ambiguous than "API gateway requests".

    *   Let's re-check sentence 3.
    *   "All request metadata is logged to a distributed tracing backend for observability."
    *   "എല്ലാ അഭ്യർത്ഥന metadata ഒരു വിതരണം ചെയ്ത ട്രേസിംഗ് ബാക്കെൻഡിലേക്ക് ലോഗ് ചെയ്യപ്പെടുന്നു, നിരീക്ഷണക്ഷമതയ്ക്ക് വേണ്ടി." (All request metadata is logged to a distributed tracing backend, for observability.)
    *   This is good. It captures the "to a" part.

    *   Okay, I'm confident in this final version. I will now output *only* this text.
    *   "API gateway routes incoming requests through a rate limiter before forwarding them to the appropriate microservice. സർക്യൂട്ട് ബ്രേക്കർ തുറന്നിരിക്കുകയാണെങ്കിൽ, അത് ഒരു 503 Service Unavailable response തിരികെ നൽകുന്നു. എല്ലാ അഭ്യർത്ഥന metadata വിതരണം ചെയ്ത ട്രേസിംഗ് ബാക്കെൻഡിലേക്ക് ലോഗ് ചെയ്യപ്പെടുന്നു, നിരീക്ഷണക്ഷമതയ്ക്ക് വേണ്ടി."
    *   I need to make sure the script is correct.
    *   API gateway -> API gateway
    *   incoming requests -> വരുന്നത് അഭ്യർത്ഥനകൾ
    *   through a rate limiter -> ഒരു rate limiter വഴി
    *   before forwarding them -> അവയെ കൈമാറുന്നതിന് മുമ്പ്
    *   to the appropriate microservice -> അനുയോജ്യമായ മൈക്രോ സർവീസിലേക്ക്
    *   Circuit breaker -> സർക്യൂട്ട് ബ്രേക്കർ
    *   is open -> തുറന്നിരിക്കുന്നു
    *   it returns -> അത് തിരികെ നൽകുന്നു
    *   a 503 Service Unavailable response -> ഒരു 503 Service Unavailable response
    *   All request metadata -> എല്ലാ അഭ്യർത്ഥന metadata
    *   is logged to -> ലോഗ് ചെയ്യപ്പെടുന്നു
    *   a distributed tracing backend -> വിതരണം ചെയ്ത ട്രേസിംഗ് ബാക്കെൻഡ്
    *   for observability -> നിരീക്ഷണക്ഷമതയ്ക്ക് വേണ്ടി

    *   Final text to output:
    *   "API gateway requests are routed through a rate limiter before being forwarded to the appropriate microservice. സർക്യൂട്ട് ബ്രേക്കർ തുറന്നിരിക്കുകയാണെങ്കിൽ, അത് ഒരു 503 Service Unavailable response തിരികെ നൽകുന്നു. എല്ലാ അഭ്യർത്ഥന metadata വിതരണം ചെയ്ത ട്രേസിംഗ് ബാക്കെൻഡിലേക്ക് ലോഗ് ചെയ്യപ്പെടുന്നു, നിരീക്ഷണക്ഷമതയ്ക്ക് വേണ്ടി."
    *   I'm changing my mind on sentence 1. The passive voice is more standard for this kind of description. "API gateway requests are routed..." is better than "API gateway routes requests...". It's more formal and less ambiguous.

    *   Final, final, *final* version:
    *   1. API gateway requests are routed through a rate limiter before being forwarded to the appropriate microservice.
    *   2. സർക്യൂട്ട് ബ്രേക്കർ തുറന്നിരിക്കുകയാണെങ്കിൽ, അത് ഒരു 503 Service Unavailable response തിരികെ നൽകുന്നു.
    *   3. എല്ലാ അഭ്യർത്ഥന metadata വിതരണം ചെയ്ത ട്രേസിംഗ് ബാക്കെൻഡിലേക്ക് ലോഗ് ചെയ്യപ്പെടുന്നു, നിരീക്ഷണക്ഷമതയ്ക്ക് വേണ്ടി.

    *   Let's check the constraints again. "Output only the Malayalam translation, nothing else."
    *   So, I must provide only the text block. No preamble.
    *   The text block will be:
    *   API gateway requests are routed through a rate limiter before being forwarded to the appropriate microservice. സർക്യൂട്ട് ബ്രേക്കർ തുറന്നിരിക്കുകയാണെങ്കിൽ, അത് ഒരു 503 Service Unavailable response തിരികെ നൽകുന്നു. എല്ലാ അഭ്യർത്ഥന metadata വിതരണം ചെയ്ത ട്രേസിംഗ് ബാക്കെൻഡിലേക്ക് ലോഗ് ചെയ്യപ്പെടുന്നു, നിരീക്ഷണക്ഷമതയ്ക്ക് വേണ്ടി.
    *   This seems correct and complete.
````

</details>

**Output:**

````
API gateway requests are routed through a rate limiter before being forwarded to the appropriate microservice. സർക്യൂട്ട് ബ്രേക്കർ തുറന്നിരിക്കുകയാണെങ്കിൽ, അത് ഒരു 503 Service Unavailable response തിരികെ നൽകുന്നു. എല്ലാ അഭ്യർത്ഥന metadata വിതരണം ചെയ്ത ട്രേസിംഗ് ബാക്കെൻഡിലേക്ക് ലോഗ് ചെയ്യപ്പെടുന്നു, നിരീക്ഷണക്ഷമതയ്ക്ക് വേണ്ടി.
````

### Marathi

**Prompt:** Translate the following paragraph into Marathi, using native Marathi script. Preserve technical terms in English where no standard native equivalent exists. Output only the Marathi translation, nothing else.

Text: "The API gateway routes incoming requests through a rate limiter before forwarding them to the appropriate microservice. If the circuit breaker is open, it returns a 503 Service Unavailable response. All request metadata is logged to a distributed tracing backend for observability."

*3870 tok | 14.33s | 270.1 t/s | think: 13430 chars | finish: stop*

<details><summary>Thinking (13430 chars)</summary>

````
1.  **Deconstruct the English Source Text:**

    *   "The API gateway routes incoming requests through a rate limiter before forwarding them to the appropriate microservice."
    *   "If the circuit breaker is open, it returns a 503 Service Unavailable response."
    *   "All request metadata is logged to a distributed tracing backend for observability."

2.  **Analyze Each Phrase for Translation and Technical Terms:**

    *   **"The API gateway"**:
        *   "API" is a very common acronym. In Marathi, it's often transliterated as "API" or sometimes explained as "Application Programming Interface". However, in a technical context, just "API" is universally understood. I'll stick with "API".
        *   "gateway" means a point of entry. In Marathi, this could be "द्वार" (dvār), "प्रवेशद्वार" (praṇīvadvār), or "गेटवे" (gēvēy). "Gateway" is also commonly used in Marathi tech circles, so "API gateway" is a standard term. I'll use "API gateway" or "API गेटवे". Let's go with "API गेटवे" for a more native feel, but "API gateway" is also acceptable. I'll use "API गेटवे" as it's a good middle ground.

    *   **"routes incoming requests"**:
        *   "routes" means to direct or send. Marathi verbs: "मार्ग दाखवते" (mārg daḍhavate - directs), "पाठवते" (pāṭhavate - sends), "मार्गस्थ करते" (mārgsthācē - makes direct). "मार्ग दाखवते" or "पाठवते" are good. "मार्गस्थ करते" is a bit more formal/technical. I'll use "मार्ग दाखवते".
        *   "incoming requests" means requests that are coming in. Marathi: "येणाऱ्या विनंत्या" (yēvānyā vinantiyā), "येणाऱ्या विनंत्या" is a direct translation. "येणाऱ्या" (yēvānyā) is a good adjective. "विनंत्या" (vinantiyā) is the plural of "विनंती" (vinantī). So, "येणाऱ्या विनंत्या" is perfect.

    *   **"through a rate limiter"**:
        *   "rate limiter" is a specific technical term. There's no single, universally accepted native Marathi equivalent. The instruction says to "Preserve technical terms in English where no standard native equivalent exists." So, I will keep "rate limiter" as is.
        *   "through" can be "मधून" (madhun). So, "rate limiter मधून" (rate limiter madhun).

    *   **"before forwarding them"**:
        *   "before" is "पूर्वी" (pūrvī) or "आधी" (ādhī). "पूर्वी" is slightly more formal.
        *   "forwarding" means sending on. Marathi: "त्यांना पाठवते" (tyānā pāṭhavate), "त्यांना मार्गस्थ करते" (tyānā mārgsthācē).
        *   "them" refers to the requests. So, "त्यांना" (tyānā).
        *   Putting it together: "पूर्वी, त्यांना पाठवते" (pūrvī, tyānā pāṭhavate) or "पूर्वी, त्यांना मार्गस्थ करते" (pūrvī, tyānā mārgsthācē). "Forwarding" is better captured by "पाठवते" (pāṭhavate - sends) in this context. So, "पूर्वी, त्यांना पाठवते".

    *   **"to the appropriate microservice"**:
        *   "appropriate" means suitable or correct. Marathi: "योग्य" (yogya), "योग्य" (yogya), "योग्य" (yogya). "योग्य" is the best fit.
        *   "microservice" is another key technical term. No standard equivalent. Keep "microservice".
        *   "to" is "कडे" (kē).
        *   "the" is "ते" (te).
        *   Putting it together: "योग्य microservice कडे" (yogya microservice kē).

    *   **Sentence 1 Result:** "API गेटवे दर मर्यादेतून (rate limiter मधून) येणाऱ्या विनंत्या योग्य microservice कडे पाठवते." (API gateway rate limiter मधून येणाऱ्या विनंत्या योग्य microservice कडे पाठवते.) - This sounds good and natural.

3.  **Analyze the Second Sentence:**

    *   **"If the circuit breaker is open"**:
        *   "If" is "जर" (jar).
        *   "the circuit breaker" is a technical term. No standard Marathi equivalent. Keep "circuit breaker".
        *   "is open" means not closed. Marathi: "उघडा आहे" (ughḍā āhe), "बंद नाही" (bandh nāhī). "उघडा आहे" is the direct translation.
        *   Putting it together: "जर circuit breaker उघडा असेल" (jar circuit breaker ughḍā āhe).

    *   **"it returns"**:
        *   "it" refers to the gateway. "गेटवे" (gēvēy).
        *   "returns" means sends back. Marathi: "परत करते" (parat cēte), "प्रतिसाद देते" (pratisaad dēte). "परत करते" is more common for a 503 response.
        *   "a 503 Service Unavailable response" is a technical term. "503" is a status code. "Service Unavailable" is the English phrase. The instruction says to preserve technical terms. So, I'll keep the whole phrase.
        *   Putting it together: "गेटवे 503 Service Unavailable प्रतिसाद परत करते" (gēvēy 503 Service Unavailable pratisaad parat cēte). "प्रतिसाद" (pratisaad - response) is a good word to include.

    *   **Sentence 2 Result:** "जर circuit breaker उघडा असेल, तर गेटवे 503 Service Unavailable प्रतिसाद परत करते." (If circuit breaker is open, then the gateway returns a 503 Service Unavailable response.) - Adding "तर" (tar - then) makes the sentence flow better in Marathi.

4.  **Analyze the Third Sentence:**

    *   **"All request metadata"**:
        *   "All" is "सर्व" (sarva) or "सर्व" (sarva).
        *   "request" is "विनंती" (vinantī).
        *   "metadata" is a technical term. No standard equivalent. Keep "metadata".
        *   So, "सर्व विनंती मेटाडेटा" (sarva vinantī metadata).

    *   **"is logged"**:
        *   "is logged" is passive voice. Marathi: "नोंदवले जाते" (nōndavle jāte), "नोंदवल्या जातात" (nōndavlyā jātā). "नोंदवले जाते" is a good translation.
        *   "to" is "कडे" (kē).
        *   "All request metadata is logged to..." -> "सर्व विनंती मेटाडेटा... कडे नोंदवले जाते".

    *   **"a distributed tracing backend"**:
        *   "distributed" is a technical term. Keep "distributed".
        *   "tracing" is a technical term. Keep "tracing".
        *   "backend" is a technical term. Keep "backend".
        *   So, "distributed tracing backend".
        *   "for" is "साठी" (fēr).
        *   "observability" is a technical term. Keep "observability".
        *   "All request metadata is logged to a distributed tracing backend for observability." -> "सर्व विनंती मेटाडेटा, निरीक्षणासाठी (observability) एका distributed tracing backend मध्ये नोंदवला जातो." (All request metadata, for observability, is logged to a distributed tracing backend.)

    *   **Sentence 3 Result:** "सर्व विनंती मेटाडेटा, निरीक्षणासाठी (observability) एका distributed tracing backend मध्ये नोंदवला जातो." - This is a bit clunky. Let's refine.
        *   How about: "सर्व विनंती मेटाडेटा, निरीक्षणासाठी (observability) एका distributed tracing backend मध्ये नोंदवला जातो." (This is better).
        *   Or: "निरीक्षणासाठी (observability) सर्व विनंती मेटाडेटा, एका distributed tracing backend मध्ये नोंदवला जातो." (This puts the purpose first, which is common in technical writing).
        *   Let's stick with the first one, it's more direct. "सर्व विनंती मेटाडेटा, निरीक्षणासाठी (observability) एका distributed tracing backend मध्ये नोंदवला जातो."

5.  **Final Assembly and Review:**

    *   **Sentence 1:** "API गेटवे दर मर्यादेतून (rate limiter) येणाऱ्या विनंत्या योग्य microservice कडे पाठवते."
    *   **Sentence 2:** "जर circuit breaker उघडा असेल, तर गेटवे 503 Service Unavailable प्रतिसाद परत करते."
    *   **Sentence 3:** "सर्व विनंती मेटाडेटा, निरीक्षणासाठी (observability) एका distributed tracing backend मध्ये नोंदवला जातो."

    *   Let's combine them into a single paragraph.
    *   "API गेटवे दर मर्यादेतून (rate limiter) येणाऱ्या विनंत्या योग्य microservice कडे पाठवते. जर circuit breaker उघडा असेल, तर गेटवे 503 Service Unavailable प्रतिसाद परत करते. सर्व विनंती मेटाडेटा, निरीक्षणासाठी (observability) एका distributed tracing backend मध्ये नोंदवला जातो."

    *   Now, let's re-read the instructions: "Translate the following paragraph into Marathi, using native Marathi script. Preserve technical terms in English where no standard native equivalent exists. Output only the Marathi translation, nothing else."

    *   My translation uses native Marathi script (Devanagari).
    *   It preserves technical terms: "API गेटवे", "rate limiter", "microservice", "circuit breaker", "503 Service Unavailable response", "metadata", "distributed tracing backend", "observability". This follows the instruction.
    *   The output should be *only* the translation.

    *   Let's do a final check on the phrasing for naturalness.
        *   "API गेटवे दर मर्यादेतून (rate limiter) येणाऱ्या विनंत्या योग्य microservice कडे पाठवते." - This is good. "येणाऱ्या विनंत्या" is a bit literal. "येणाऱ्या विनंत्या" (yēvānyā vinantiyā) or "येणाऱ्या विनंत्या" (yēvānyā vinantiyā) are both fine. "येणाऱ्या विनंत्या" is slightly more common. I'll use that.
        *   "API गेटवे दर मर्यादेतून (rate limiter) येणाऱ्या विनंत्या योग्य microservice कडे पाठवते." - Looks solid.
        *   "जर circuit breaker उघडा असेल, तर गेटवे 503 Service Unavailable प्रतिसाद परत करते." - "गेटवे" is a good substitute for "it". The rest is standard.
        *   "सर्व विनंती मेटाडेटा, निरीक्षणासाठी (observability) एका distributed tracing backend मध्ये नोंदवला जातो." - This is also good. The structure is clear.

    *   Let's try one more pass at the first sentence for flow.
        *   "API गेटवे येणाऱ्या विनंत्यांना दर मर्यादेतून (rate limiter) योग्य microservice कडे पाठवते."
        *   This is more concise. "येणाऱ्या विनंत्यांना" (yēvānyā vinantiyānā) - "to the incoming requests". This is a very natural way to phrase it in Marathi.
        *   "दर मर्यादेतून (rate limiter)" - "through the rate limiter". This is also a good structure.
        *   Let's compare:
            1.  "API गेटवे दर मर्यादेतून (rate limiter) येणाऱ्या विनंत्या योग्य microservice कडे पाठवते." (Slightly more literal, but clear)
            2.  "API गेटवे येणाऱ्या विनंत्यांना दर मर्यादेतून (rate limiter) योग्य microservice कडे पाठवते." (More concise and natural)

        *   I think option 2 is better. Let's go with that.

    *   Final check of the whole paragraph with the refined first sentence:
        *   "API गेटवे येणाऱ्या विनंत्यांना दर मर्यादेतून (rate limiter) योग्य microservice कडे पाठवते. जर circuit breaker उघडा असेल, तर गेटवे 503 Service Unavailable प्रतिसाद परत करते. सर्व विनंती मेटाडेटा, निरीक्षणासाठी (observability) एका distributed tracing backend मध्ये नोंदवला जातो."

    *   This seems correct, follows all instructions, and is well-phrased. The technical terms are preserved, and the rest is in native Marathi. The output will be just this text.

    *   Wait, let's reconsider the first sentence. The original is "routes incoming requests through a rate limiter before forwarding them to...". My refined version "API गेटवे येणाऱ्या विनंत्यांना दर मर्यादेतून (rate limiter) योग्य microservice कडे पाठवते" is good, but it loses the "before forwarding them" part.
    *   Let's try to include it.
        *   "API गेटवे दर मर्यादेतून (rate limiter) येणाऱ्या विनंत्यांना योग्य microservice कडे पाठवते."
        *   This is very concise and captures the essence. "through a rate limiter" is the method, and "before forwarding them" is the action. This phrasing implies the order.
        *   Let's compare:
            *   "API गेटवे दर मर्यादेतून (rate limiter) येणाऱ्या विनंत्या योग्य microservice कडे पाठवते." (This is what I had before, but it's slightly ambiguous. Does it mean the gateway *is* the rate limiter, or that it uses one? The original is clearer).
            *   "API गेटवे येणाऱ्या विनंत्यांना दर मर्यादेतून (rate limiter) योग्य microservice कडे पाठवते." (This is also good).
            *   Let's go back to the original structure, it's more faithful.
            *   "API गेटवे दर मर्यादेतून (rate limiter) येणाऱ्या विनंत्या योग्य microservice कडे पाठवते."
            *   This is actually the most direct and accurate translation of the original's structure. "routes incoming requests" -> "पाठवते येणाऱ्या विनंत्या". "through a rate limiter" -> "दर मर्यादेतून". "before forwarding them" -> This part is implied by the sequence of actions. The gateway receives, then applies the rate limiter, then forwards. The translation captures this flow. It's the best option.

    *   So, the final plan is:
        1.  Sentence 1: "API गेटवे दर मर्यादेतून (rate limiter) येणाऱ्या विनंत्या योग्य microservice कडे पाठवते."
        2.  Sentence 2: "जर circuit breaker उघडा असेल, तर गेटवे 503 Service Unavailable प्रतिसाद परत करते."
        3.  Sentence 3: "सर्व विनंती मेटाडेटा, निरीक्षणासाठी (observability) एका distributed tracing backend मध्ये नोंदवला जातो."
        4.  Combine them.
        5.  Ensure only the final text is outputted.

    *   Final check on "All request metadata is logged to a distributed tracing backend for observability."
        *   "सर्व विनंती मेटाडेटा" (sarva vinantī metadata) - Good.
        *   "is logged to" (नोंदवले जाते) - Good.
        *   "a distributed tracing backend" (एका distributed tracing backend मध्ये) - Good.
        *   "for observability" (निरीक्षणासाठी) - Good.
        *   The sentence structure is a bit passive. In Marathi, we might say: "निरीक्षणासाठी (observability) सर्व विनंती मेटाडेटा, एका distributed tracing backend मध्ये नोंदवला जातो." This is more natural. Let's use this version.

    *   Final final version:
        *   "API गेटवे दर मर्यादेतून (rate limiter) येणाऱ्या विनंत्या योग्य microservice कडे पाठवते. जर circuit breaker उघडा असेल, तर गेटवे 503 Service Unavailable प्रतिसाद परत करते. निरीक्षणासाठी (observability) सर्व विनंती मेटाडेटा, एका distributed tracing backend मध्ये नोंदवला जातो."

    *   This looks excellent. It's accurate, follows the rules, and is well-written in Marathi. I will output this.
````

</details>

**Output:**

````
API गेटवे दर मर्यादेतून (rate limiter) येणाऱ्या विनंत्या योग्य microservice कडे पाठवते. जर circuit breaker उघडा असेल, तर गेटवे 503 Service Unavailable प्रतिसाद परत करते. निरीक्षणासाठी (observability) सर्व विनंती मेटाडेटा, एका distributed tracing backend मध्ये नोंदवला जातो.
````

### Odia

**Prompt:** Translate the following paragraph into Odia, using native Odia script. Preserve technical terms in English where no standard native equivalent exists. Output only the Odia translation, nothing else.

Text: "The API gateway routes incoming requests through a rate limiter before forwarding them to the appropriate microservice. If the circuit breaker is open, it returns a 503 Service Unavailable response. All request metadata is logged to a distributed tracing backend for observability."

*3051 tok | 11.47s | 266.0 t/s | think: 11406 chars | finish: stop*

<details><summary>Thinking (11406 chars)</summary>

````
1.  **Deconstruct the English source text:**

    *   "The API gateway routes incoming requests through a rate limiter before forwarding them to the appropriate microservice."
    *   "If the circuit breaker is open, it returns a 503 Service Unavailable response."
    *   "All request metadata is logged to a distributed tracing backend for observability."

2.  **Identify key terms and concepts:**

    *   **API gateway:** This is a very common technical term. In Odia, there's no single, universally adopted word. I need to find the most understandable and widely used translation. "API" is often kept as "API". "Gateway" can be "ଗେଟୱେ" (Gateway) or "ଦ୍ୱାର" (door/gate). "API ଗେଟୱେ" is a good, direct translation. Let's go with that.
    *   **routes:** This means to direct or send. Odia verbs for this would be "ପଠାଇବା" (sending), "ପଠାଇବା" (directing), or "ପରିଚାଳନା କରିବା" (managing/handling). "ପରିଚାଳନା କରେ" (manages/handles) or "ପଠାଇବା" (sends) would work well in this context. "ପରିଚାଳନା କରେ" feels more appropriate for a gateway.
    *   **incoming requests:** "incoming" can be "ଆଗନ୍ତୁକ" (incoming) or "ଆସୁଥିବା" (coming). "ଆଗନ୍ତୁକ" is a good fit. "requests" is "ଅନୁରୋଧ" (request). So, "ଆଗନ୍ତୁକ ଅନୁରୋଧ" (incoming requests).
    *   **through a rate limiter:** "through" can be "ମାଧ୍ୟମରେ" (through). "rate limiter" is a specific technical term. There's no standard Odia equivalent. The instruction says to preserve technical terms in English where no standard native equivalent exists. So, I'll keep "rate limiter". The phrase becomes "rate limiter ମାଧ୍ୟମରେ" (through a rate limiter).
    *   **before forwarding them:** "before" is "ପୂର୍ବରୁ" (before). "forwarding" is "ପଠାଇବା" (sending/forwarding). "them" refers to the requests. So, "ସେମାନଙ୍କୁ ପଠାଇବା ପୂର୍ବରୁ" (before forwarding them).
    *   **to the appropriate microservice:** "to" is "କୁ" (to). "appropriate" is "ଉପଯୁକ୍ତ" (appropriate) or "ସଠିକ୍" (correct). "microservice" is another technical term. Again, no standard Odia equivalent. I'll keep "microservice". So, "ସଠିକ୍ microservice କୁ" (to the appropriate microservice).
    *   **If the circuit breaker is open:** "If" is "ଯଦି" (if). "the circuit breaker" is a technical term. No standard Odia equivalent. Keep "circuit breaker". "is open" is "ଖୋଲା ଅଛି" (is open). So, "ଯଦି circuit breaker ଖୋଲା ଅଛି" (If the circuit breaker is open).
    *   **it returns a 503 Service Unavailable response:** "it" refers to the gateway. "returns" is "ଫେରସ୍ତ କରେ" (returns) or "ପଠାଇବା" (sends). "a 503 Service Unavailable response" is a standard HTTP status code phrase. "503 Service Unavailable" is often kept in English, but a translation is also possible. "Service Unavailable" can be "ସେବା ଅନୁପଲବ୍ଧ" (service unavailable). So, "503 Service Unavailable response" is a common way to write it. I'll keep the English phrase as it's standard in technical documentation. The verb "returns" can be "ଫେରସ୍ତ କରେ" (returns). So, "ଯଦି circuit breaker ଖୋଲା ଅଛି, ଏହା 503 Service Unavailable response ଫେରସ୍ତ କରେ।" (If the circuit breaker is open, it returns a 503 Service Unavailable response).
    *   **All request metadata:** "All" is "ସମସ୍ତ" (all). "request" is "ଅନୁରୋଧ" (request). "metadata" is a technical term. Keep "metadata". So, "ସମସ୍ତ ଅନୁରୋଧ ମେଟାଡାଟା" (all request metadata).
    *   **is logged:** "is logged" is passive voice. Odia can handle this. "logged" is "ଲଗ୍ ହୋଇଥିବା" (logged) or "ରେକର୍ଡ ହୋଇଥିବା" (recorded). "is" is "ଅଛି।". So, "ରେକର୍ଡ ହୋଇଛି" (is recorded) or "ଲଗ୍ ହୋଇଛି" (is logged). "ରେକର୍ଡ ହୋଇଛି" sounds a bit more formal and fitting for technical logs.
    *   **to a distributed tracing backend:** "to" is "କୁ" (to). "a distributed tracing backend" is a technical term. No standard Odia equivalent. Keep the whole phrase. So, "ଏକ distributed tracing backend କୁ" (to a distributed tracing backend).
    *   **for observability:** "for" is "ପାଇଁ" (for). "observability" is a technical term. Keep "observability". So, "observability ପାଇଁ" (for observability).

3.  **Assemble the first sentence:**

    *   "The API gateway" -> "API ଗେଟୱେ"
    *   "routes" -> "ପରିଚାଳନା କରେ"
    *   "incoming requests" -> "ଆଗନ୍ତୁକ ଅନୁରୋଧ"
    *   "through a rate limiter" -> "rate limiter ମାଧ୍ୟମରେ"
    *   "before forwarding them" -> "ସେମାନଙ୍କୁ ପଠାଇବା ପୂର୍ବରୁ"
    *   "to the appropriate microservice" -> "ସଠିକ୍ microservice କୁ"

    *   **Combine:** "API ଗେଟୱେ rate limiter ମାଧ୍ୟମରେ ସେମାନଙ୍କୁ ସଠିକ୍ microservice କୁ ପଠାଇବା ପୂର୍ବରୁ ଆଗନ୍ତୁକ ଅନୁରୋଧ ପରିଚାଳନା କରେ।" (This sounds a bit clunky. Let's rephrase.)
    *   **Alternative phrasing:** "API ଗେଟୱେ ଆଗନ୍ତୁକ ଅନୁରୋଧଗୁଡ଼ିକୁ rate limiter ମାଧ୍ୟମରେ ସଠିକ୍ microservice କୁ ପଠାଇବା ପୂର୍ବରୁ ପରିଚାଳନା କରେ।" (This is better. "ଆଗନ୍ତୁକ ଅନୁରୋଧଗୁଡ଼ିକୁ" as the object of "ପରିଚାଳନା କରେ" is more natural than "ଆଗନ୍ତୁକ ଅନୁରୋଧ" as the subject).
    *   **Let's try another one:** "API ଗେଟୱେ rate limiter ମାଧ୍ୟମରେ ଆଗନ୍ତୁକ ଅନୁରୋଧଗୁଡ଼ିକୁ ସଠିକ୍ microservice କୁ ପଠାଇବା ପୂର୍ବରୁ ପରିଚାଳନା କରେ।" (This is also good, but "ପରିଚାଳନା କରେ" feels slightly more active and appropriate for a gateway). I'll stick with this one.

4.  **Assemble the second sentence:**

    *   "If the circuit breaker is open," -> "ଯଦି circuit breaker ଖୋଲା ଅଛି,"
    *   "it returns" -> "ଏହା ଫେରସ୍ତ କରେ"
    *   "a 503 Service Unavailable response." -> "503 Service Unavailable response"

    *   **Combine:** "ଯଦି circuit breaker ଖୋଲା ଅଛି, ଏହା 503 Service Unavailable response ଫେରସ୍ତ କରେ।" (This is a direct and accurate translation).

5.  **Assemble the third sentence:**

    *   "All request metadata" -> "ସମସ୍ତ ଅନୁରୋଧ ମେଟାଡାଟା"
    *   "is logged" -> "ରେକର୍ଡ ହୋଇଛି" (or "ଲଗ୍ ହୋଇଛି")
    *   "to a distributed tracing backend" -> "ଏକ distributed tracing backend କୁ"
    *   "for observability." -> "observability ପାଇଁ।"

    *   **Combine:** "ସମସ୍ତ ଅନୁରୋଧ ମେଟାଡାଟା observability ପାଇଁ ଏକ distributed tracing backend କୁ ରେକର୍ଡ ହୋଇଛି।" (This is a good, standard technical translation).

6.  **Final Review and Polish:**

    *   Sentence 1: "API ଗେଟୱେ rate limiter ମାଧ୍ୟମରେ ଆଗନ୍ତୁକ ଅନୁରୋଧଗୁଡ଼ିକୁ ସଠିକ୍ microservice କୁ ପଠାଇବା ପୂର୍ବରୁ ପରିଚାଳନା କରେ।"
    *   Sentence 2: "ଯଦି circuit breaker ଖୋଲା ଅଛି, ଏହା 503 Service Unavailable response ଫେରସ୍ତ କରେ।"
    *   Sentence 3: "ସମସ୍ତ ଅନୁରୋଧ ମେଟାଡାଟା observability ପାଇଁ ଏକ distributed tracing backend କୁ ରେକର୍ଡ ହୋଇଛି।"

    Let's check the flow and grammar.
    *   "API ଗେଟୱେ..." - Subject.
    *   "...rate limiter ମାଧ୍ୟମରେ..." - Prepositional phrase.
    *   "...ଆଗନ୍ତୁକ ଅନୁରୋଧଗୁଡ଼ିକୁ..." - Object of "ପରିଚାଳନା କରେ".
    *   "...ସଠିକ୍ microservice କୁ ପଠାଇବା ପୂର୍ବରୁ..." - Infinitive phrase explaining *what* it manages.
    *   The structure is a bit complex but grammatically correct and clear in a technical context.

    *   "ଯଦି circuit breaker ଖୋଲା ଅଛି," - Conditional clause.
    *   "ଏହା 503 Service Unavailable response ଫେରସ୍ତ କରେ।" - Main clause. Perfect.

    *   "ସମସ୍ତ ଅନୁରୋଧ ମେଟାଡାଟା..." - Subject.
    *   "...observability ପାଇଁ..." - Prepositional phrase.
    *   "...ଏକ distributed tracing backend କୁ ରେକର୍ଡ ହୋଇଛି।" - Verb (passive) with its object and destination. Perfect.

    The use of "API" and "microservice" and "circuit breaker" in English is per the instructions.
    The use of "rate limiter" in English is also per the instructions.
    The use of "503 Service Unavailable response" in English is standard practice in Odia technical writing.
    The use of "observability" in English is also standard.

    The translation seems accurate, follows the instructions, and uses native Odia script. The output should be *only* the Odia translation.

    Final check on the first sentence.
    "The API gateway routes incoming requests through a rate limiter before forwarding them to the appropriate microservice."
    "API ଗେଟୱେ" - OK
    "ଆଗନ୍ତୁକ ଅନୁରୋଧ" - OK
    "rate limiter ମାଧ୍ୟମରେ" - OK
    "ସେମାନଙ୍କୁ ପଠାଇବା ପୂର୍ବରୁ" - OK
    "ସଠିକ୍ microservice କୁ" - OK

    Let's try one more rephrasing for flow.
    "ଆଗନ୍ତୁକ ଅନୁରୋଧଗୁଡ଼ିକୁ API ଗେଟୱେ rate limiter ମାଧ୍ୟମରେ ସଠିକ୍ microservice କୁ ପଠାଇବା ପୂର୍ବରୁ ପରିଚାଳନା କରାଯାଏ।" (This is passive voice, which might be more formal, but the original is active. "The API gateway routes..." is active).
    So, the active voice translation is better.

    Let's reconsider the first sentence:
    "API ଗେଟୱେ ଆଗନ୍ତୁକ ଅନୁରୋଧଗୁଡ଼ିକୁ rate limiter ମାଧ୍ୟମରେ ସଠିକ୍ microservice କୁ ପଠାଇବା ପୂର୍ବରୁ ପରିଚାଳନା କରେ।"
    This is good. Let's break it down again:
    - Subject: API ଗେଟୱେ
    - Verb: ପରିଚାଳନା କରେ
    - Object: ଆଗନ୍ତୁକ ଅନୁରୋଧଗୁଡ଼ିକୁ
    - Prepositional Phrase 1: rate limiter ମାଧ୍ୟମରେ
    - Infinitive Phrase: ସଠିକ୍ microservice କୁ ପଠାଇବା ପୂର୍ବରୁ

    This is a bit convoluted. Let's simplify.
    "API ଗେଟୱେ ଆଗନ୍ତୁକ ଅନୁରୋଧଗୁଡ଼ିକୁ rate limiter ମାଧ୍ୟମରେ ସଠିକ୍ microservice କୁ ପଠାଇବା ପୂର୍ବରୁ ପରିଚାଳନା କରେ।"
    The "them" in the original refers to "requests".
    So, "ଆଗନ୍ତୁକ ଅନୁରୋଧଗୁଡ଼ିକୁ... ପଠାଇବା ପୂର୍ବରୁ" is the core action.
    Let's try:
    "API ଗେଟୱେ ଆଗନ୍ତୁକ ଅନୁରୋଧଗୁଡ଼ିକୁ rate limiter ମାଧ୍ୟମରେ ସଠିକ୍ microservice କୁ ପଠାଇବା ପୂର୍ବରୁ ପରିଚାଳନା କରେ।"
    This is still a bit long.
    How about:
    "API ଗେଟୱେ rate limiter ମାଧ୍ୟମରେ ଆଗନ୍ତୁକ ଅନୁରୋଧଗୁଡ଼ିକୁ ସଠିକ୍ microservice କୁ ପଠାଇବା ପୂର୍ବରୁ ପରିଚାଳନା କରେ।"
    This is slightly better. The object is "ଆଗନ୍ତୁକ ଅନୁରୋଧଗୁଡ଼ିକୁ" and the verb is "ପରିଚାଳନା କରେ". The "rate limiter" part is a modifier.

    Let's try another angle.
    "API ଗେଟୱେ ଆଗନ୍ତୁକ ଅନୁରୋଧଗୁଡ଼ିକୁ rate limiter ମାଧ୍ୟମରେ ସଠିକ୍ microservice କୁ ପଠାଇବା ପୂର୍ବରୁ ପରିଚାଳନା କରେ।"
    This is also good.

    Let's go with a slightly more direct, but still natural, phrasing.
    "API ଗେଟୱେ rate limiter ମାଧ୍ୟମରେ ଆଗନ୍ତୁକ ଅନୁରୋଧଗୁଡ଼ିକୁ ସଠିକ୍ microservice କୁ ପଠାଇବା ପୂର୍ବରୁ ପରିଚାଳନା କରେ।"
    This seems the most balanced.

    Let's finalize the three sentences:
    1.  API ଗେଟୱେ rate limiter ମାଧ୍ୟମରେ ଆଗନ୍ତୁକ ଅନୁରୋଧଗୁଡ଼ିକୁ ସଠିକ୍ microservice କୁ ପଠାଇବା ପୂର୍ବରୁ ପରିଚାଳନା କରେ।
    2.  ଯଦି circuit breaker ଖୋଲା ଅଛି, ଏହା 503 Service Unavailable response ଫେରସ୍ତ କରେ।
    3.  ସମସ୍ତ ଅନୁରୋଧ ମେଟାଡାଟା observability ପାଇଁ ଏକ distributed tracing backend କୁ ରେକର୍ଡ ହୋଇଛି।

    Wait, the instruction says "Output only the Odia translation, nothing else." This means no numbering, no "Here is the translation:", just the raw text.

    Let's do one final check on the wording.
    "API ଗେଟୱେ..." - OK.
    "...ଆଗନ୍ତୁକ ଅନୁରୋଧଗୁଡ଼ିକୁ..." - OK.
    "...rate limiter ମାଧ୍ୟମରେ..." - OK.
    "...ସଠିକ୍ microservice କୁ..." - OK.
    "...ପଠାଇବା ପୂର୍ବରୁ..." - OK.
    "...ପରିଚାଳନା କରେ।" - OK.

    "ଯଦି circuit breaker ଖୋଲା ଅଛି," - OK.
    "...ଏହା 503 Service Unavailable response ଫେରସ୍ତ କରେ।" - OK.

    "ସମସ୍ତ ଅନୁରୋଧ ମେଟାଡାଟା..." - OK.
    "...observability ପାଇଁ..." - OK.
    "...ଏକ distributed tracing backend କୁ ରେକର୍ଡ ହୋଇଛି।" - OK.

    The translation is solid. I will now format it as the final output, ensuring no extra text or explanation is included. The sentences should be separated by spaces or newlines as in the original. The original has them as separate sentences, so I'll use periods to separate them in the Odia text as well.

    Final Odia text:
    "API ଗେଟୱେ rate limiter ମାଧ୍ୟମରେ ଆଗନ୍ତୁକ ଅନୁରୋଧଗୁଡ଼ିକୁ ସଠିକ୍ microservice କୁ ପଠାଇବା ପୂର୍ବରୁ ପରିଚାଳନା କରେ। ଯଦି circuit breaker ଖୋଲା ଅଛି, ଏହା 503 Service Unavailable response ଫେରସ୍ତ କରେ। ସମସ୍ତ ଅନୁରୋଧ ମେଟାଡାଟା observability ପାଇଁ ଏକ distributed tracing backend କୁ ରେକର୍ଡ ହୋଇଛି।"

    This looks correct and follows all instructions. The technical terms are preserved, the rest is translated into native Odia, and the output is just the translation.
````

</details>

**Output:**

````
API ଗେଟୱେ rate limiter ମାଧ୍ୟମରେ ଆଗନ୍ତୁକ ଅନୁରୋଧଗୁଡ଼ିକୁ ସଠିକ୍ microservice କୁ ପଠାଇବା ପୂର୍ବରୁ ପରିଚାଳନା କରେ। ଯଦି circuit breaker ଖୋଲା ଅଛି, ଏହା 503 Service Unavailable response ଫେରସ୍ତ କରେ। ସମସ୍ତ ଅନୁରୋଧ ମେଟାଡାଟା observability ପାଇଁ ଏକ distributed tracing backend କୁ ରେକର୍ଡ ହୋଇଛି।
````

### Punjabi

**Prompt:** Translate the following paragraph into Punjabi, using native Punjabi script. Preserve technical terms in English where no standard native equivalent exists. Output only the Punjabi translation, nothing else.

Text: "The API gateway routes incoming requests through a rate limiter before forwarding them to the appropriate microservice. If the circuit breaker is open, it returns a 503 Service Unavailable response. All request metadata is logged to a distributed tracing backend for observability."

*2585 tok | 9.89s | 261.3 t/s | think: 8690 chars | finish: stop*

<details><summary>Thinking (8690 chars)</summary>

````
1.  **Deconstruct the Request:**

    *   **Source Text:** "The API gateway routes incoming requests through a rate limiter before forwarding them to the appropriate microservice. If the circuit breaker is open, it returns a 503 Service Unavailable response. All request metadata is logged to a distributed tracing backend for observability."
    *   **Target Language:** Punjabi.
    *   **Script:** Native Punjabi script (Gurmukhi).
    *   **Constraint 1:** Preserve technical terms in English where no standard native equivalent exists.
    *   **Constraint 2:** Output *only* the Punjabi translation. No extra text, no explanations, no "Here is the translation:".

2.  **Analyze the Source Text for Key Terms and Concepts:**

    *   "The API gateway": This is a core technical term. "API" is universally used. "Gateway" can be translated, but in a tech context, it's often left as is or a specific equivalent is used. I'll need to decide on the best fit. "API gateway" -> "API ਗੇਟਵੇ" (API gateway) is a common and understandable transliteration. A more "native" translation might be "API ਦੁਆਰ" (API door/gateway), but "gate" (ਦਰਵਾਜ਼ਾ) might be too literal. "API ਗੇਟਵੇ" is the most common and professional-sounding option in the Punjabi tech community. I'll stick with that.
    *   "routes": This is a verb. The direct translation could be "ਰਾਹ ਦਿਖਾਉਣਾ" (to show the path) or "ਭੇਜਣਾ" (to send). In the context of a gateway, "ਰਾਹ ਦਿਖਾਉਣਾ" or "ਭੇਜਣਾ" works. "ਰਾਹ ਦਿਖਾਉਣਾ" feels more accurate for routing.
    *   "incoming requests": "Incoming" -> "ਆਉਣ ਵਾਲੇ" (ਆਉਣ ਵਾਲੇ). "Requests" -> "ਬੇਨਤੀਆਂ" (ਬੇਨਤੀਆਂ). So, "ਆਉਣ ਵਾਲੀਆਂ ਬੇਨਤੀਆਂ" (incoming requests).
    *   "through a rate limiter": "through" -> "ਰਾਹੀਂ" (ਰਾਹੀਂ). "a rate limiter" -> "ਇੱਕ ਰੇਟ ਲਿਮਿਟਰ" (ਇੱਕ ਰੇਟ ਲਿਮਿਟਰ). This is a standard term, so a direct transliteration/transliteration-based translation is appropriate.
    *   "before forwarding them": "before" -> "ਤੋਂ ਪਹਿਲਾਂ" (ਤੋਂ ਪਹਿਲਾਂ). "forwarding them" -> "ਉਨ੍ਹਾਂ ਨੂੰ ਅੱਗੇ ਭੇਜਣਾ" (ਉਨ੍ਹਾਂ ਨੂੰ ਅੱਗੇ ਭੇਜਣਾ).
    *   "to the appropriate microservice": "to" -> "ਨੂੰ" (ਨੂੰ). "the appropriate" -> "ਉਚਿਤ" (ਉਚਿਤ). "microservice" -> This is a key technical term. The direct translation "ਸੂਖਮ ਸੇਵਾ" (ਸੂਖਮ ਸੇਵਾ) is sometimes used, but in the context of microservices architecture, it's very common to just use the English word "microservice" or a slightly adapted version. The prompt says to preserve technical terms where no standard native equivalent exists. "Microservice" fits this perfectly. It's so common in Punjabi tech circles that a direct translation might sound clunky. I'll use "microservice" as is.
    *   "If the circuit breaker is open": "If" -> "ਜੇਕਰ" (ਜੇਕਰ). "the circuit breaker" -> This is another key technical term. "Circuit breaker" -> "ਸਰਕਟ ਬ੍ਰੇਕਰ" (ਸਰਕਟ ਬ੍ਰੇਕਰ) is the standard, widely used term. "Breaker" can be "ਟੁੱਟਣ ਵਾਲਾ" (ਟੁੱਟਣ ਵਾਲਾ), but in this context, "ਬ੍ਰੇਕਰ" is the established term. So, "ਜੇਕਰ ਸਰਕਟ ਬ੍ਰੇਕਰ ਖੁੱਲ੍ਹਾ ਹੈ" (If the circuit breaker is open).
    *   "it returns": "it" -> "ਇਹ" (ਇਹ). "returns" -> "ਵਾਪਸ ਕਰਦਾ ਹੈ" (ਵਾਪਸ ਕਰਦਾ ਹੈ) or "ਵਾਪਸ ਕਰਦਾ ਹੈ" (ਵਾਪਸ ਕਰਦਾ ਹੈ). "Returns a response" is a common phrase.
    *   "a 503 Service Unavailable response": This is a very specific HTTP status code and message. "503 Service Unavailable" is standard. "response" -> "ਜਵਾਬ" (ਜਵਾਬ). So, "ਇੱਕ 503 Service Unavailable ਜਵਾਬ". It's good practice to keep the code and the English phrase together.
    *   "All request metadata": "All" -> "ਸਾਰੀਆਂ" (ਸਾਰੀਆਂ). "request" -> "ਬੇਨਤੀ" (ਬੇਨਤੀ). "metadata" -> This is a technical term. "ਮੈਟਾਡਾਟਾ" is often used as-is. "ਡਾਟਾ" is data. "ਮੈਟਾਡਾਟਾ" is metadata. So, "ਸਾਰੀਆਂ ਬੇਨਤੀ ਮੈਟਾਡਾਟਾ".
    *   "is logged": "is logged" -> "ਲੌਗ ਕੀਤਾ ਜਾਂਦਾ ਹੈ" (ਲੌਗ ਕੀਤਾ ਜਾਂਦਾ ਹੈ) or "ਲੌਗ ਕੀਤਾ ਜਾਂਦਾ ਹੈ" (ਲੌਗ ਕੀਤਾ ਜਾਂਦਾ ਹੈ). "Log" is often used as "ਲੌਗ". "To log" is "ਲੌਗ ਕਰਨਾ". So, passive voice "is logged" becomes "ਲੌਗ ਕੀਤਾ ਜਾਂਦਾ ਹੈ".
    *   "to a distributed tracing backend": "to" -> "ਨੂੰ" (ਨੂੰ). "a" -> "ਇੱਕ" (ਇੱਕ). "distributed" -> "ਵੰਡਿਆ ਹੋਇਆ" (ਵੰਡਿਆ ਹੋਇਆ). "tracing" -> "ਟ੍ਰੇਸਿੰਗ" (ਟ੍ਰੇਸਿੰਗ). "backend" -> "ਬੈਕਐਂਡ" (ਬੈਕਐਂਡ). So, "ਇੱਕ ਵੰਡਿਆ ਹੋਇਆ ਟ੍ਰੇਸਿੰਗ ਬੈਕਐਂਡ ਨੂੰ".
    *   "for observability": "for" -> "ਲਈ" (ਲਈ). "observability" -> This is another key technical term. The direct translation is "ਨਿਰੀਖਣਯੋਗਤਾ" (ਨਿਰੀਖਣਯੋਗਤਾ). This is the correct and standard term.

3.  **Assemble the First Sentence:**

    *   "The API gateway" -> "API ਗੇਟਵੇ"
    *   "routes" -> "ਰਾਹ ਦਿਖਾਉਂਦਾ ਹੈ"
    *   "incoming requests" -> "ਆਉਣ ਵਾਲੀਆਂ ਬੇਨਤੀਆਂ"
    *   "through a rate limiter" -> "ਇੱਕ ਰੇਟ ਲਿਮਿਟਰ ਰਾਹੀਂ"
    *   "before forwarding them" -> "ਉਨ੍ਹਾਂ ਨੂੰ ਅੱਗੇ ਭੇਜਣ ਤੋਂ ਪਹਿਲਾਂ"
    *   "to the appropriate microservice" -> "ਉਚਿਤ microservice ਨੂੰ"

    *   **Putting it together:** "API ਗੇਟਵੇ ਆਉਣ ਵਾਲੀਆਂ ਬੇਨਤੀਆਂ ਨੂੰ ਇੱਕ ਰੇਟ ਲਿਮਿਟਰ ਰਾਹੀਂ ਉਨ੍ਹਾਂ ਨੂੰ ਅੱਗੇ ਭੇਜਣ ਤੋਂ ਪਹਿਲਾਂ ਉਚਿਤ microservice ਨੂੰ ਰਾਹ ਦਿਖਾਉਂਦਾ ਹੈ।"
    *   **Refinement:** The phrase "ਉਨ੍ਹਾਂ ਨੂੰ ਅੱਗੇ ਭੇਜਣ ਤੋਂ ਪਹਿਲਾਂ" is a bit redundant since "ਰਾਹ ਦਿਖਾਉਂਦਾ ਹੈ" already implies forwarding. A more concise and natural phrasing might be: "API ਗੇਟਵੇ ਆਉਣ ਵਾਲੀਆਂ ਬੇਨਤੀਆਂ ਨੂੰ ਇੱਕ ਰੇਟ ਲਿਮਿਟਰ ਰਾਹੀਂ ਉਚਿਤ microservice ਨੂੰ ਭੇਜਦਾ ਹੈ।" or "API ਗੇਟਵੇ ਆਉਣ ਵਾਲੀਆਂ ਬੇਨਤੀਆਂ ਨੂੰ ਇੱਕ ਰੇਟ ਲਿਮਿਟਰ ਰਾਹੀਂ ਉਚਿਤ microservice ਵੱਲ ਭੇਜਦਾ ਹੈ।" The word "ਰਾਹ ਦਿਖਾਉਂਦਾ ਹੈ" (to route) is very specific and fits well. Let's try to combine the ideas.
    *   **Alternative assembly:** "API ਗੇਟਵੇ ਆਉਣ ਵਾਲੀਆਂ ਬੇਨਤੀਆਂ ਨੂੰ ਇੱਕ ਰੇਟ ਲਿਮਿਟਰ ਰਾਹੀਂ ਉਚਿਤ microservice ਨੂੰ ਭੇਜਦਾ ਹੈ।" This is clean and accurate.
    *   **Let's try another one, closer to the original structure:** "API ਗੇਟਵੇ ਆਉਣ ਵਾਲੀਆਂ ਬੇਨਤੀਆਂ ਨੂੰ ਇੱਕ ਰੇਟ ਲਿਮਿਟਰ ਰਾਹੀਂ ਉਚਿਤ microservice ਨੂੰ ਰਾਹ ਦਿਖਾਉਂਦਾ ਹੈ।" This is also good. The word "ਰਾਹ ਦਿਖਾਉਂਦਾ ਹੈ" (to route) is the perfect verb here. The "ਉਨ੍ਹਾਂ ਨੂੰ ਅੱਗੇ ਭੇਜਣ ਤੋਂ ਪਹਿਲਾਂ" part is slightly implied by the action of routing. Let's stick with the more direct, slightly more literal translation that captures all parts of the original sentence.
    *   **Final choice for sentence 1:** "API ਗੇਟਵੇ ਆਉਣ ਵਾਲੀਆਂ ਬੇਨਤੀਆਂ ਨੂੰ ਇੱਕ ਰੇਟ ਲਿਮਿਟਰ ਰਾਹੀਂ ਉਚਿਤ microservice ਨੂੰ ਰਾਹ ਦਿਖਾਉਂਦਾ ਹੈ।"

4.  **Assemble the Second Sentence:**

    *   "If the circuit breaker is open" -> "ਜੇਕਰ ਸਰਕਟ ਬ੍ਰੇਕਰ ਖੁੱਲ੍ਹਾ ਹੈ"
    *   "it returns" -> "ਇਹ ਵਾਪਸ ਕਰਦਾ ਹੈ"
    *   "a 503 Service Unavailable response" -> "ਇੱਕ 503 Service Unavailable ਜਵਾਬ"

    *   **Putting it together:** "ਜੇਕਰ ਸਰਕਟ ਬ੍ਰੇਕਰ ਖੁੱਲ੍ਹਾ ਹੈ, ਤਾਂ ਇਹ ਇੱਕ 503 Service Unavailable ਜਵਾਬ ਵਾਪਸ ਕਰਦਾ ਹੈ।"
    *   **Refinement:** The comma placement is natural. "ਜੇਕਰ... ਖੁੱਲ੍ਹਾ ਹੈ, ਤਾਂ..." is the correct conditional structure. This looks good.

5.  **Assemble the Third Sentence:**

    *   "All request metadata" -> "ਸਾਰੀਆਂ ਬੇਨਤੀ ਮੈਟਾਡਾਟਾ"
    *   "is logged" -> "ਲੌਗ ਕੀਤਾ ਜਾਂਦਾ ਹੈ"
    *   "to a distributed tracing backend" -> "ਇੱਕ ਵੰਡਿਆ ਹੋਇਆ ਟ੍ਰੇਸਿੰਗ ਬੈਕਐਂਡ ਨੂੰ"
    *   "for observability" -> "ਨਿਰੀਖਣਯੋਗਤਾ ਲਈ"

    *   **Putting it together:** "ਸਾਰੀਆਂ ਬੇਨਤੀ ਮੈਟਾਡਾਟਾ ਨਿਰੀਖਣਯੋਗਤਾ ਲਈ ਇੱਕ ਵੰਡਿਆ ਹੋਇਆ ਟ੍ਰੇਸਿੰਗ ਬੈਕਐਂਡ ਨੂੰ ਲੌਗ ਕੀਤਾ ਜਾਂਦਾ ਹੈ।"
    *   **Refinement:** The word order is a bit clunky. In Punjabi, the verb often comes at the end. "ਨਿਰੀਖਣਯੋਗਤਾ ਲਈ ਸਾਰੀਆਂ ਬੇਨਤੀ ਮੈਟਾਡਾਟਾ ਇੱਕ ਵੰਡਿਆ ਹੋਇਆ ਟ੍ਰੇਸਿੰਗ ਬੈਕਐਂਡ ਨੂੰ ਲੌਗ ਕੀਤੀਆਂ ਜਾਂਦੀਆਂ ਹਨ।" Using the plural form "ਲੌਗ ਕੀਤੀਆਂ ਜਾਂਦੀਆਂ ਹਨ" is more natural in Punjabi when talking about "ਸਾਰੀਆਂ... ਮੈਟਾਡਾਟਾ". This sounds much better.

6.  **Final Review and Combination:**

    *   Sentence 1: "API ਗੇਟਵੇ ਆਉਣ ਵਾਲੀਆਂ ਬੇਨਤੀਆਂ ਨੂੰ ਇੱਕ ਰੇਟ ਲਿਮਿਟਰ ਰਾਹੀਂ ਉਚਿਤ microservice ਨੂੰ ਰਾਹ ਦਿਖਾਉਂਦਾ ਹੈ।"
    *   Sentence 2: "ਜੇਕਰ ਸਰਕਟ ਬ੍ਰੇਕਰ ਖੁੱਲ੍ਹਾ ਹੈ, ਤਾਂ ਇਹ ਇੱਕ 503 Service Unavailable ਜਵਾਬ ਵਾਪਸ ਕਰਦਾ ਹੈ।"
    *   Sentence 3: "ਸਾਰੀਆਂ ਬੇਨਤੀ ਮੈਟਾਡਾਟਾ ਨਿਰੀਖਣਯੋਗਤਾ ਲਈ ਇੱਕ ਵੰਡਿਆ ਹੋਇਆ ਟ੍ਰੇਸਿੰਗ ਬੈਕਐਂਡ ਨੂੰ ਲੌਗ ਕੀਤੀਆਂ ਜਾਂਦੀਆਂ ਹਨ।"

    *   **Combine them:**
        "API ਗੇਟਵੇ ਆਉਣ ਵਾਲੀਆਂ ਬੇਨਤੀਆਂ ਨੂੰ ਇੱਕ ਰੇਟ ਲਿਮਿਟਰ ਰਾਹੀਂ ਉਚਿਤ microservice ਨੂੰ ਰਾਹ ਦਿਖਾਉਂਦਾ ਹੈ। ਜੇਕਰ ਸਰਕਟ ਬ੍ਰੇਕਰ ਖੁੱਲ੍ਹਾ ਹੈ, ਤਾਂ ਇਹ ਇੱਕ 503 Service Unavailable ਜਵਾਬ ਵਾਪਸ ਕਰਦਾ ਹੈ। ਸਾਰੀਆਂ ਬੇਨਤੀ ਮੈਟਾਡਾਟਾ ਨਿਰੀਖਣਯੋਗਤਾ ਲਈ ਇੱਕ ਵੰਡਿਆ ਹੋਇਆ ਟ੍ਰੇਸਿੰਗ ਬੈਕਐਂਡ ਨੂੰ ਲੌਗ ਕੀਤੀਆਂ ਜਾਂਦੀਆਂ ਹਨ।"

    *   **Final check against constraints:**
        *   Punjabi? Yes.
        *   Native Punjabi script (Gurmukhi)? Yes.
        *   Technical terms preserved? Yes: "API ਗੇਟਵੇ", "rate limiter", "microservice", "circuit breaker", "503 Service Unavailable", "distributed tracing backend", "observability".
        *   Output only the translation? Yes, I will remove all my thought process and just output the final string.

7.  **Final Polish:** The translation seems solid. The technical terms are correctly handled, and the grammar is sound in Punjabi. The flow is logical. The use of "ਰਾਹ ਦਿਖਾਉਂਦਾ ਹੈ" is precise. The passive construction "ਲੌਗ ਕੀਤੀਆਂ ਜਾਂਦੀਆਂ ਹਨ" is idiomatic. The translation is ready.
````

</details>

**Output:**

````
API ਗੇਟਵੇ ਆਉਣ ਵਾਲੀਆਂ ਬੇਨਤੀਆਂ ਨੂੰ ਇੱਕ ਰੇਟ ਲਿਮਿਟਰ ਰਾਹੀਂ ਉਚਿਤ microservice ਨੂੰ ਰਾਹ ਦਿਖਾਉਂਦਾ ਹੈ। ਜੇਕਰ ਸਰਕਟ ਬ੍ਰੇਕਰ ਖੁੱਲ੍ਹਾ ਹੈ, ਤਾਂ ਇਹ ਇੱਕ 503 Service Unavailable ਜਵਾਬ ਵਾਪਸ ਕਰਦਾ ਹੈ। ਸਾਰੀਆਂ ਬੇਨਤੀ ਮੈਟਾਡਾਟਾ ਨਿਰੀਖਣਯੋਗਤਾ ਲਈ ਇੱਕ ਵੰਡਿਆ ਹੋਇਆ ਟ੍ਰੇਸਿੰਗ ਬੈਕਐਂਡ ਨੂੰ ਲੌਗ ਕੀਤੀਆਂ ਜਾਂਦੀਆਂ ਹਨ।
````

### Tamil

**Prompt:** Translate the following paragraph into Tamil, using native Tamil script. Preserve technical terms in English where no standard native equivalent exists. Output only the Tamil translation, nothing else.

Text: "The API gateway routes incoming requests through a rate limiter before forwarding them to the appropriate microservice. If the circuit breaker is open, it returns a 503 Service Unavailable response. All request metadata is logged to a distributed tracing backend for observability."

*2632 tok | 10.08s | 261.1 t/s | think: 9844 chars | finish: stop*

<details><summary>Thinking (9844 chars)</summary>

````
1.  **Deconstruct the English source text:**

    *   "The API gateway routes incoming requests through a rate limiter before forwarding them to the appropriate microservice."
    *   "If the circuit breaker is open, it returns a 503 Service Unavailable response."
    *   "All request metadata is logged to a distributed tracing backend for observability."

2.  **Analyze each sentence/phrase for translation challenges, especially with technical terms:**

    *   **"The API gateway"**:
        *   "API" is a very common acronym. The standard Tamil transliteration is "ஏபிஐ" (pronounced "aapi").
        *   "Gateway" in this context is a network term. There isn't a single, universally accepted native Tamil word that perfectly captures the concept of a "gateway" in a software/network architecture sense. "வாயில்" (vaayil - gate/door) is a possible translation, but it might sound too physical. "நுழைவாயில்" (pravisayvaayil - entry gate) is also an option. However, in technical Tamil, "ஏபிஐ நுழைவாயில்" (API pravisayvaayil) is the most common and understood term. It's a compound term, which is common in technical language. So, "ஏபிஐ நுழைவாயில்" or simply "ஏபிஐ கேட்வே" (using the English word "gateway" as is common in tech) are both strong candidates. I'll go with "ஏபிஐ நுழைவாயில்" as it's more "Tamil-ized".

    *   **"routes incoming requests"**:
        *   "routes" -> "வழிப்படுத்துதல்" (vaayippu seithal). This is the standard technical term.
        *   "incoming requests" -> "வரும் கோரிக்கைகள்" (varum koorkkaigal). "கோரிக்கை" (koorkkai) is the standard word for "request". "வரும்" (varum) means "coming" or "incoming".

    *   **"through a rate limiter"**:
        *   "through" -> "மூலம்" (moolam) or "வழியாக" (vazhiyaaga). "மூலம்" is more concise and common in this context.
        *   "rate limiter" -> This is a key technical term. There is no standard, native Tamil equivalent. The instruction says to "Preserve technical terms in English where no standard native equivalent exists." So, "rate limiter" should remain "rate limiter".

    *   **"before forwarding them to the appropriate microservice"**:
        *   "before" -> "அதன்பின்" (adhavin) or "அதற்கு முன்" (adhuvarku mun). "அதன்பின்" is more fluid here.
        *   "forwarding" -> "முன்னனுப்புதல்" (munnanuppithal).
        *   "them" -> refers to "requests", so it's implied.
        *   "to the appropriate" -> "பொருத்தமான" (poruthamaana) or "பொருத்தமான" (poruthamaana). "பொருத்தமான" is the correct adjective.
        *   "microservice" -> Another key technical term. No standard native equivalent. The instruction says to preserve it. So, "microservice".

    *   **Putting the first sentence together:**
        *   "The API gateway" -> "ஏபிஐ நுழைவாயில்"
        *   "routes" -> "வழிப்படுத்துகிறது" (vaayippu seithu)
        *   "incoming requests" -> "வரும் கோரிக்கைகளை" (varum koorkkaigal)
        *   "through a rate limiter" -> "rate limiter மூலம்" (rate limiter moolam)
        *   "before forwarding them" -> "அவை முன்னனுப்பப்படுவதற்கு முன்" (avai munnanuppappaduvatharku mun)
        *   "to the appropriate microservice" -> "பொருத்தமான microservice-க்கு" (poruthamaana microservice-ukku)
        *   **Sentence 1:** "ஏபிஐ நுழைவாயில், வரும் கோரிக்கைகளை rate limiter மூலம் அவை பொருத்தமான microservice-க்கு முன்னனுப்பப்படுவதற்கு முன் வழிப்படுத்துகிறது."
        *   *Self-correction:* This is a bit long and clunky. Let's try to make it more natural. "ஏபிஐ நுழைவாயில், வரும் கோரிக்கைகளை rate limiter-ன் வழியாக, பொருத்தமான microservice-க்கு முன்னனுப்புகிறது." (The API gateway, with the help of the rate limiter, forwards the incoming requests to the appropriate microservice). This is better. Or even simpler: "ஏபிஐ நுழைவாயில், வரும் கோரிக்கைகளை rate limiter-ன் வழியாக பொருத்தமான microservice-க்கு வழிப்படுத்துகிறது." This is concise and clear. Let's go with this. The "-ஆல்" (aa-l) suffix for "through" is very common in technical writing.

    *   **"If the circuit breaker is open"**:
        *   "If" -> "எனில்" (innal) or "இருந்தால்" (irundhaal). "எனில்" is more formal and fits well.
        *   "the circuit breaker" -> This is a key technical term. No native equivalent. Preserve as "circuit breaker".
        *   "is open" -> "திறக்கப்பட்டுள்ள" (thirakkappaddu) or "திறந்த நிலையில் உள்ளது" (thiranthu nilaiyil irukku). "திறந்த நிலையில் உள்ளது" (thiranthu nilaiyil irukku) is a very common and clear way to express this.

    *   **"it returns a 503 Service Unavailable response"**:
        *   "it" -> Refers to the API gateway. Can be omitted in Tamil.
        *   "returns" -> "திரும்ப அளிக்கிறது" (thirumba alikkiradhu) or "திரும்ப அளிக்கிறது" (thirumba alikkiradhu). Both are good. "திரும்ப அளிக்கிறது" is slightly more common.
        *   "a 503 Service Unavailable response" -> This is a standard HTTP status code and phrase. "503" should be kept. "Service Unavailable" is a standard term. "பதில்" (pazhakam) means "response". So, "503 Service Unavailable பதில்". The whole phrase can be "503 Service Unavailable பதிலை அளிக்கிறது".

    *   **Putting the second sentence together:**
        *   "எனில், circuit breaker திறந்த நிலையில் உள்ளது, அது 503 Service Unavailable பதிலை அளிக்கிறது."
        *   *Self-correction:* "திறந்த நிலையில் உள்ளது" is an adjective phrase. It's better to say "circuit breaker is open". So, "எனில், circuit breaker திறக்கப்பட்டுள்ளது, அது 503 Service Unavailable பதிலை அளிக்கிறது." This is more direct.

    *   **"All request metadata"**:
        *   "All" -> "அனைத்து" (anaithu).
        *   "request" -> "கோரிக்கை" (koorkkai).
        *   "metadata" -> This is a technical term. No standard native equivalent. Preserve as "metadata".
        *   **Putting it together:** "அனைத்து கோரிக்கை metadata" (anaithu koorkkai metadata).

    *   **"is logged"**:
        *   "is logged" -> "பதிவு செய்யப்படுகிறது" (pathivu seyyappadudhu). This is the standard passive voice construction.

    *   **"to a distributed tracing backend"**:
        *   "to" -> "க்கு" (ku).
        *   "a" -> "ஒரு" (oru).
        *   "distributed tracing" -> Key technical term. No native equivalent. Preserve as "distributed tracing".
        *   "backend" -> Key technical term. No native equivalent. Preserve as "backend".
        *   **Putting it together:** "ஒரு distributed tracing backend-க்கு" (oru distributed tracing backend-ku).

    *   **"for observability"**:
        *   "for" -> "நோக்கத்திற்காக" (nokkathirkaaga) or "என்பதற்காக" (enniradhu). "நோக்கத்திற்காக" is a good fit.
        *   "observability" -> This is a key technical term. No native equivalent. Preserve as "observability".

    *   **Putting the third sentence together:**
        *   "அனைத்து கோரிக்கை metadata-வும் ஒரு distributed tracing backend-க்கு நோக்கத்திற்காக பதிவு செய்யப்படுகிறது."
        *   *Self-correction:* "metadata-வும்" is better than "metadata" because it's a compound noun. The double "உம்" (um) is often used for emphasis and clarity in such compound structures.

3.  **Final Review and Assembly:**

    *   **Sentence 1:** "ஏபிஐ நுழைவாயில், வரும் கோரிக்கைகளை rate limiter மூலம் பொருத்தமான microservice-க்கு வழிப்படுத்துகிறது." (This sounds good and professional).
    *   **Sentence 2:** "எனில், circuit breaker திறக்கப்பட்டுள்ளது, அது 503 Service Unavailable பதிலை அளிக்கிறது." (This is also good and clear).
    *   **Sentence 3:** "அனைத்து கோரிக்கை metadata-வும் ஒரு distributed tracing backend-க்கு நோக்கத்திற்காக பதிவு செய்யப்படுகிறது." (This is accurate and uses the preserved terms correctly).

    *   **Combine them:**
        "ஏபிஐ நுழைவாயில், வரும் கோரிக்கைகளை rate limiter மூலம் பொருத்தமான microservice-க்கு வழிப்படுத்துகிறது. எனில், circuit breaker திறக்கப்பட்டுள்ளது, அது 503 Service Unavailable பதிலை அளிக்கிறது. அனைத்து கோரிக்கை metadata-வும் ஒரு distributed tracing backend-க்கு நோக்கத்திற்காக பதிவு செய்யப்படுகிறது."

4.  **Final Polish:** Check for flow and any potential awkward phrasing.

    *   "ஏபிஐ நுழைவாயில், வரும் கோரிக்கைகளை rate limiter மூலம் பொருத்தமான microservice-க்கு வழிப்படுத்துகிறது." - Good.
    *   "எனில், circuit breaker திறக்கப்பட்டுள்ளது, அது 503 Service Unavailable பதிலை அளிக்கிறது." - Good.
    *   "அனைத்து கோரிக்கை metadata-வும் ஒரு distributed tracing backend-க்கு நோக்கத்திற்காக பதிவு செய்யப்படுகிறது." - Good.

    The translation seems solid. It correctly identifies the technical terms to be preserved and uses appropriate, standard Tamil equivalents for the non-technical parts. The grammar and sentence structure are natural for technical documentation in Tamil.

    Let's try an alternative for the first sentence for comparison: "ஏபிஐ நுழைவாயில் வரும் கோரிக்கைகளை rate limiter-ன் வழியாக, பொருத்தமான microservice-க்கு முன்னனுப்புகிறது." This is also very good. The one I chose, "வழிப்படுத்துகிறது" (vaayippu seithu), is a very common verb in this context. I'll stick with the first choice.

    The output must be *only* the Tamil translation. So, I will just provide the final text.

    Final check on the instructions:
    *   "Translate the following paragraph into Tamil" - Done.
    *   "using native Tamil script" - Done (using the standard Unicode Tamil script).
    *   "Preserve technical terms in English where no standard native equivalent exists" - Done (API, rate limiter, circuit breaker, 503 Service Unavailable, metadata, distributed tracing, backend, observability).
    *   "Output only the Tamil translation, nothing else." - I will ensure my final output adheres to this.

    The final string to output is:
    "ஏபிஐ நுழைவாயில், வரும் கோரிக்கைகளை rate limiter மூலம் பொருத்தமான microservice-க்கு வழிப்படுத்துகிறது. எனில், circuit breaker திறக்கப்பட்டுள்ளது, அது 503 Service Unavailable பதிலை அளிக்கிறது. அனைத்து கோரிக்கை metadata-வும் ஒரு distributed tracing backend-க்கு நோக்கத்திற்காக பதிவு செய்யப்படுகிறது."

    This looks correct and complete.
````

</details>

**Output:**

````
ஏபிஐ நுழைவாயில், வரும் கோரிக்கைகளை rate limiter மூலம் பொருத்தமான microservice-க்கு வழிப்படுத்துகிறது. எனில், circuit breaker திறக்கப்பட்டுள்ளது, அது 503 Service Unavailable பதிலை அளிக்கிறது. அனைத்து கோரிக்கை metadata-வும் ஒரு distributed tracing backend-க்கு நோக்கத்திற்காக பதிவு செய்யப்படுகிறது.
````

### Telugu

**Prompt:** Translate the following paragraph into Telugu, using native Telugu script. Preserve technical terms in English where no standard native equivalent exists. Output only the Telugu translation, nothing else.

Text: "The API gateway routes incoming requests through a rate limiter before forwarding them to the appropriate microservice. If the circuit breaker is open, it returns a 503 Service Unavailable response. All request metadata is logged to a distributed tracing backend for observability."

*2519 tok | 9.67s | 260.6 t/s | think: 9083 chars | finish: stop*

<details><summary>Thinking (9083 chars)</summary>

````
1.  **Deconstruct the Request:**

    *   **Core Task:** Translate a specific English paragraph into Telugu.
    *   **Constraint 1:** Use *native Telugu script*. This means no transliteration (like "API gateway" -> "API gateway"). The output must be in the Telugu alphabet (తెలుగు లిపి).
    *   **Constraint 2:** *Preserve technical terms in English* where no standard native equivalent exists. This is a crucial rule. I need to identify these terms.
    *   **Constraint 3:** *Output only the Telugu translation, nothing else*. No "Here is the translation:", no explanations, no greetings, just the final translated text.

2.  **Analyze the Source Text (Sentence by Sentence):**

    *   **Sentence 1:** "The API gateway routes incoming requests through a rate limiter before forwarding them to the appropriate microservice."

        *   "The API gateway": This is a technical term. "API" (Application Programming Interface) is very common, but the full phrase "API gateway" is a specific architectural component. Is there a standard, universally accepted Telugu equivalent? A quick mental check (or a quick search if unsure) suggests that while people might *understand* the concept, there isn't a single, universally adopted native term like "అప్లికేషన్ ప్రోగ్రామింగ్ ఇంటర్‌ఫేస్ గేట్‌వే" (which is a direct transliteration and not native). The instruction says "where no standard native equivalent exists." This is a borderline case. However, in modern tech circles, English terms like "API gateway" are often kept as-is, sometimes with a Telugu explanation. Given the instruction to *preserve* English terms, keeping "API gateway" is the safest and most accurate interpretation. It's a key term of art.

        *   "routes": This means to direct or send. A good Telugu verb would be "పంపజేస్తుంది" (pampisthundi - sends) or "దారి మళ్ళిస్తుంది" (dari malli - directs). "దారి మళ్ళిస్తుంది" is more specific to routing. Let's go with that.

        *   "incoming requests": "incoming" -> "వచ్చే" (vache - coming). "requests" -> "అభ్యర్థనలు" (arjanelu - applications/requests). So, "వచ్చే అభ్యర్థనలు" (vache abhyarthanalu).

        *   "through a rate limiter": "rate limiter" is a technical term. Similar to "API gateway," this is a specific component. Is there a standard native term? "రేట్ లిమిటర్" (Rate limiter) is often used directly. It's a loanword. This fits the "preserve where no standard equivalent" rule. So, "రేట్ లిమిటర్" stays.

        *   "before forwarding them": "forwarding" -> "ముందుకు పంపుతుంది" (munduku pamputhundi - forwards). "them" refers to the requests. So, "వాటిని ముందుకు పంపే ముందు" (vanatini munduku pampe mundu).

        *   "to the appropriate microservice": "appropriate" -> "తగిన" (thagina - appropriate/suitable). "microservice" is another specific technical term. Just like "API gateway," this is often kept as-is. "మైక్రో సర్వీస్" (Micro service). So, "తగిన మైక్రో సర్వీస్" (thagina micro service).

        *   **Putting Sentence 1 together:** "API gateway" + "దారి మళ్ళిస్తుంది" + "వచ్చే అభ్యర్థనలు" + "రేట్ లిమిటర్ ద్వారా" + "వాటిని ముందుకు పంపే ముందు" + "తగిన మైక్రో సర్వీస్" + "కి" (to). Let's refine the flow.
            *   "API gateway" (as a subject)
            *   "వచ్చే అభ్యర్థనలను" (the incoming requests)
            *   "రేట్ లిమిటర్ ద్వారా" (through a rate limiter)
            *   "దారి మళ్ళిస్తుంది" (routes)
            *   "వాటిని" (them)
            *   "తగిన మైక్రో సర్వీస్" (to the appropriate microservice)
            *   "కి" (to).
            *   Let's try a more natural sentence structure: "API gateway వచ్చే అభ్యర్థనలను, రేట్ లిమిటర్ ద్వారా, తగిన మైక్రో సర్వీస్ కి దారి మళ్ళిస్తుంది." (The API gateway, by means of a rate limiter, routes the incoming requests to the appropriate microservice.) This sounds good. The "వచ్చే" (vache) is implied by "అభ్యర్థనలు" (abhyarthanalu) in this context.

    *   **Sentence 2:** "If the circuit breaker is open, it returns a 503 Service Unavailable response."

        *   "If the circuit breaker is open": "circuit breaker" is a technical term. Again, often kept as "సర్క్యూట్ బ్రేకర్" (Circuit breaker). "is open" -> "తెరిచి ఉంది" (terichi undi - is open). So, "సర్క్యూట్ బ్రేకర్ తెరిచి ఉంటే" (Circuit breaker terichi unte).

        *   "it returns": "తిరిగి ఇస్తుంది" (tirigi isthundi - returns/gives).

        *   "a 503 Service Unavailable response": "503 Service Unavailable" is a specific HTTP status code. The standard way to refer to this is by its English name. "response" -> "ప్రతిస్పందన" (pratispandana). So, "503 Service Unavailable response" -> "503 సర్వీస్ అన్‌అవైలబుల్ రెస్పాన్స్". This is a common way to handle such codes in technical writing in many languages.

        *   **Putting Sentence 2 together:** "సర్క్యూట్ బ్రేకర్ తెరిచి ఉంటే, అది 503 సర్వీస్ అన్‌అవైలబుల్ రెస్పాన్స్ ఇస్తుంది." (If the circuit breaker is open, it returns a 503 Service Unavailable response.) This is a direct and accurate translation.

    *   **Sentence 3:** "All request metadata is logged to a distributed tracing backend for observability."

        *   "All request metadata": "request" -> "అభ్యర్థన" (abhyarthana). "metadata" is a technical term. Often kept as "మెటాడేటా" (Metadata). So, "అభ్యర్థన మెటాడేటా" (abhyarthana metadata).

        *   "is logged to": "లాగ్ చేయబడుతుంది" (log cheyabaduthundi - is logged). "to" -> "కి" (ki).

        *   "a distributed tracing backend": "distributed" -> "పంపిణీ చేయబడిన" (pampinee chendina). "tracing" -> "ట్రేసింగ్" (Tracing). "backend" -> "బ్యాకెండ్" (Backend). So, "పంపిణీ చేయబడిన ట్రేసింగ్ బ్యాకెండ్" (pampinee distributed tracing backend).

        *   "for observability": "observability" is a technical term. Often kept as "అబ్జర్వబిలిటీ" (Observability). "for" -> "కోసం" (kosam).

        *   **Putting Sentence 3 together:** "అభ్యర్థన మెటాడేటా పంపిణీ చేయబడిన ట్రేసింగ్ బ్యాకెండ్ కి అబ్జర్వబిలిటీ కోసం లాగ్ చేయబడుతుంది." (All request metadata is logged to a distributed tracing backend for observability.) This works.

3.  **Final Review and Refinement:**

    *   **Sentence 1:** "API gateway వచ్చే అభ్యర్థనలను, రేట్ లిమిటర్ ద్వారా, తగిన మైక్రో సర్వీస్ కి దారి మళ్ళిస్తుంది."
        *   "API gateway" - Preserved as per rule.
        *   "వచ్చే అభ్యర్థనలు" - Correct.
        *   "రేట్ లిమిటర్" - Preserved as per rule.
        *   "దారి మళ్ళిస్తుంది" - Good verb for "routes".
        *   "తగిన మైక్రో సర్వీస్" - Correct.
        *   The structure is natural.

    *   **Sentence 2:** "సర్క్యూట్ బ్రేకర్ తెరిచి ఉంటే, అది 503 సర్వీస్ అన్‌అవైలబుల్ రెస్పాన్స్ ఇస్తుంది."
        *   "సర్క్యూట్ బ్రేకర్" - Preserved.
        *   "తెరిచి ఉంటే" - Correct conditional.
        *   "503 సర్వీస్ అన్‌అవైలబుల్ రెస్పాన్స్" - Correctly handled as a technical term/code.
        *   "ఇస్తుంది" - Correct verb.
        *   This is solid.

    *   **Sentence 3:** "అభ్యర్థన మెటాడేటా పంపిణీ చేయబడిన ట్రేసింగ్ బ్యాకెండ్ కి అబ్జర్వబిలిటీ కోసం లాగ్ చేయబడుతుంది."
        *   "అభ్యర్థన మెటాడేటా" - Correct.
        *   "పంపిణీ చేయబడిన ట్రేసింగ్ బ్యాకెండ్" - Correct.
        *   "అబ్జర్వబిలిటీ" - Preserved as per rule.
        *   "లాగ్ చేయబడుతుంది" - Correct passive voice.
        *   "కి" - Correct.
        *   This is also solid.

4.  **Final Assembly and Check against Constraints:**

    *   The combined translation is: "API gateway వచ్చే అభ్యర్థనలను, రేట్ లిమిటర్ ద్వారా, తగిన మైక్రో సర్వీస్ కి దారి మళ్ళిస్తుంది. సర్క్యూట్ బ్రేకర్ తెరిచి ఉంటే, అది 503 సర్వీస్ అన్‌అవైలబుల్ రెస్పాన్స్ ఇస్తుంది. అభ్యర్థన మెటాడేటా పంపిణీ చేయబడిన ట్రేసింగ్ బ్యాకెండ్ కి అబ్జర్వబిలిటీ కోసం లాగ్ చేయబడుతుంది."

    *   **Constraint 1: Native Telugu script?** Yes, the entire sentence is in Telugu script.

    *   **Constraint 2: Preserve English technical terms?** Yes, I've identified and preserved:
        *   API gateway
        *   rate limiter
        *   microservice
        *   circuit breaker
        *   503 Service Unavailable (handled as a technical concept)
        *   metadata
        *   distributed tracing backend
        *   observability

    *   **Constraint 3: Output only the translation?** Yes, I will only output the final string, without any preamble.

    *   Let's do one last polish. The phrasing is a bit stilted in places, which is common in technical translations. Can I make it more fluid?
        *   "API gateway వచ్చే అభ్యర్థనలను, రేట్ లిమిటర్ ద్వారా, తగిన మైక్రో సర్వీస్ కి దారి మళ్ళిస్తుంది." -> This is good. It's clear and accurate.
        *   "సర్క్యూట్ బ్రేకర్ తెరిచి ఉంటే, అది 503 సర్వీస్ అన్‌అవైలబుల్ రెస్పాన్స్ ఇస్తుంది." -> Also good.
        *   "అభ్యర్థన మెటాడేటా పంపిణీ చేయబడిన ట్రేసింగ్ బ్యాకెండ్ కి అబ్జర్వబిలిటీ కోసం లాగ్ చేయబడుతుంది." -> This is also the standard way to phrase this in technical documentation.

    *   The translation seems accurate and follows all the rules. The chosen terms are standard in the Telugu tech community, and the preservation of English terms for concepts without a direct equivalent is correctly applied. The output will be just the final text.

5.  **Final Output Generation:** I will now write the final output based on this refined translation.
````

</details>

**Output:**

````
API గేట్‌వే వచ్చే అభ్యర్థనలను, రేట్ లిమిటర్ ద్వారా, తగిన మైక్రో సర్వీస్ కి దారి మళ్ళిస్తుంది. సర్క్యూట్ బ్రేకర్ తెరిచి ఉంటే, అది 503 సర్వీస్ అన్‌అవైలబుల్ రెస్పాన్స్ ఇస్తుంది. అభ్యర్థన మెటాడేటా పంపిణీ చేయబడిన ట్రేసింగ్ బ్యాకెండ్ కి అబ్జర్వబిలిటీ కోసం లాగ్ చేయబడుతుంది.
````

