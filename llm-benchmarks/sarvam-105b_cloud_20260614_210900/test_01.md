# Sarvam 30B (Q4_K_M) — Test 1: Technical translation

**Category:** Multilingual  
**Date:** 2026-06-14 21:24:15  

### Hindi

**Prompt:** Translate the following paragraph into Hindi, using native Hindi script. Preserve technical terms in English where no standard native equivalent exists. Output only the Hindi translation, nothing else.

Text: "The API gateway routes incoming requests through a rate limiter before forwarding them to the appropriate microservice. If the circuit breaker is open, it returns a 503 Service Unavailable response. All request metadata is logged to a distributed tracing backend for observability."

*2004 tok | 737.27s | 2.7 t/s | think: 7784 chars | finish: stop*

<details><summary>Thinking (7784 chars)</summary>

````
1.  **Deconstruct the Request:**

    *   **Task:** Translate a specific English paragraph into Hindi.
    *   **Source Text:** "The API gateway routes incoming requests through a rate limiter before forwarding them to the appropriate microservice. If the circuit breaker is open, it returns a 503 Service Unavailable response. All request metadata is logged to a distributed tracing backend for observability."
    *   **Language:** Hindi.
    *   **Script:** Native Hindi script (Devanagari).
    *   **Constraint 1:** Preserve technical terms in English where no standard native equivalent exists. This is the key constraint. I need to identify these terms.
    *   **Constraint 2:** Output *only* the Hindi translation. No preamble, no explanation, no "Here is the translation:". Just the Hindi text itself.

2.  **Analyze the Source Text for Technical Terms:**

    *   "API gateway": This is a very specific technical term. While one could try to translate it literally ("API द्वार"), "API Gateway" is the universally accepted standard in the industry. So, I will keep it as "API gateway".
    *   "routes": A common verb, but in this context, it has a technical meaning. A good Hindi equivalent would be "मार्गदर्शित करता है" (guides/routes) or "भेजता है" (sends). "मार्गदर्शित करता है" is more precise.
    *   "incoming requests": "आने वाले अनुरोध" (āne vale anurodh) is the standard and perfect translation.
    *   "rate limiter": Another specific technical component. No standard Hindi equivalent. I must keep it as "rate limiter".
    *   "forwarding them": "उन्हें अग्रेषित करना" (unhein agreshit karna) is the correct technical term. "भेजना" (bhejna) is also possible but "अग्रेषित करना" is more formal and fitting for technical documentation.
    *   "appropriate microservice": "उपयुक्त माइक्रोसर्विस" (upayukt microsarvis) is a direct and accurate translation. "माइक्रोसर्विस" is a standard loanword in Hindi tech circles.
    *   "circuit breaker": A specific design pattern. No standard Hindi equivalent. Must be kept as "circuit breaker".
    *   "is open": "खुला है" (khula hai). Simple and correct.
    *   "it returns": "यह वापस करता है" (yah vaapas karta hai). Standard phrasing.
    *   "503 Service Unavailable response": This is a specific HTTP status code and its associated message. The number "503" must stay. "Service Unavailable" is the standard English phrase for this status. Translating it would be confusing and incorrect. So, "503 Service Unavailable response" should be kept as is. "प्रतिक्रिया" (pratikriya) for "response" is the correct word.
    *   "All request metadata": "सभी अनुरोध मेटाडेटा" (sabhi anurodh metadata). "मेटाडेटा" (metadata) is a standard loanword.
    *   "is logged": "दर्ज किया जाता है" (darj kiya jata hai) or "लॉग किया जाता है" (log kiya jata hai). "लॉग किया जाता है" is more common and concise in a technical context.
    *   "distributed tracing backend": This is a complex technical term. "distributed tracing" is a specific technique, and "backend" is the server-side part. No standard Hindi equivalents. I will keep both parts: "distributed tracing backend".
    *   "for observability": "अवलोकनीयता के लिए" (avlokniyata ke liye). "Observability" translates well to "अवलोकनीयता" (avlokniyata).

3.  **Synthesize the Translation, Sentence by Sentence:**

    *   **Sentence 1:** "The API gateway routes incoming requests through a rate limiter before forwarding them to the appropriate microservice."
        *   "The API gateway" -> "API gateway" (as decided)
        *   "routes" -> "मार्गदर्शित करता है"
        *   "incoming requests" -> "आने वाले अनुरोधों" (genitive case, "of the incoming requests")
        *   "through a rate limiter" -> "एक rate limiter के माध्यम से" (use "के माध्यम से" for "through")
        *   "before forwarding them" -> "उन्हें अग्रेषित करने से पहले"
        *   "to the appropriate microservice" -> "उपयुक्त माइक्रोसर्विस को"
        *   **Putting it together:** "API gateway आने वाले अनुरोधों को एक rate limiter के माध्यम से निर्देशित करता है, उन्हें उपयुक्त माइक्रोसर्विस को अग्रेषित करने से पहले।"
        *   **Refinement:** This sounds a bit clunky with "अग्रेषित करने से पहले". A more natural flow in Hindi might be to rephrase slightly. How about: "API gateway आने वाले अनुरोधों को एक rate limiter के माध्यम से भेजता है, और फिर उन्हें उपयुक्त माइक्रोसर्विस को अग्रेषित करता है।" (The API gateway sends incoming requests through a rate limiter, and then forwards them to the appropriate microservice.) Or, stick closer to the original structure. The original structure is actually quite good in Hindi. "API gateway आने वाले अनुरोधों को एक rate limiter के माध्यम से निर्देशित करता है, उन्हें उपयुक्त माइक्रोसर्विस को अग्रेषित करने से पहले।" This is clear and accurate. I'll stick with this.

    *   **Sentence 2:** "If the circuit breaker is open, it returns a 503 Service Unavailable response."
        *   "If" -> "यदि"
        *   "the circuit breaker" -> "circuit breaker" (as decided)
        *   "is open" -> "खुला है"
        *   ", it returns" -> ", तो यह वापस करता है" (Adding "तो" makes the "if...then" structure more natural in Hindi).
        *   "a 503 Service Unavailable response" -> "एक 503 Service Unavailable प्रतिक्रिया"
        *   **Putting it together:** "यदि circuit breaker खुला है, तो यह एक 503 Service Unavailable प्रतिक्रिया वापस करता है।"
        *   **Refinement:** This is perfect. The grammar is correct, and the technical terms are preserved as required.

    *   **Sentence 3:** "All request metadata is logged to a distributed tracing backend for observability."
        *   "All request metadata" -> "सभी अनुरोध मेटाडेटा"
        *   "is logged" -> "लॉग किया जाता है"
        *   "to a distributed tracing backend" -> "एक distributed tracing backend पर" (use "पर" for "to" in the sense of "onto" or "into")
        *   "for observability" -> "अवलोकनीयता के लिए"
        *   **Putting it together:** "सभी अनुरोध मेटाडेटा एक distributed tracing backend पर लॉग किया जाता है, अवलोकनीयता के लिए।"
        *   **Refinement:** The placement of "अवलोकनीयता के लिए" at the end feels a bit like a tacked-on explanation. A more integrated sentence structure would be better. How about: "अवलोकनीयता के लिए, सभी अनुरोध मेटाडेटा एक distributed tracing backend पर लॉग किया जाता है।" (For observability, all request metadata is logged to a distributed tracing backend.) This is good. Or, "सभी अनुरोध मेटाडेटा अवलोकनीयता के लिए एक distributed tracing backend पर लॉग किया जाता है।" (All request metadata is logged to a distributed tracing backend for observability.) This is also good and closer to the original English structure. Let's go with this one as it's a direct and clear translation.

4.  **Final Assembly and Review:**

    *   **Sentence 1:** API gateway आने वाले अनुरोधों को एक rate limiter के माध्यम से निर्देशित करता है, उन्हें उपयुक्त माइक्रोसर्विस को अग्रेषित करने से पहले।
    *   **Sentence 2:** यदि circuit breaker खुला है, तो यह एक 503 Service Unavailable प्रतिक्रिया वापस करता है।
    *   **Sentence 3:** सभी अनुरोध मेटाडेटा अवलोकनीयता के लिए एक distributed tracing backend पर लॉग किया जाता है।

    *   **Final Check against Constraints:**
        *   Is it in Hindi? Yes.
        *   Is it in native Hindi script (Devanagari)? Yes.
        *   Are technical terms preserved in English where no standard equivalent exists? Yes. "API gateway", "rate limiter", "circuit breaker", "503 Service Unavailable", "distributed tracing backend" are all kept in English. "metadata" is also a standard loanword, which is appropriate.
        *   Is the output *only* the Hindi translation? Yes, I will ensure no extra text is included.

    The translation looks solid, accurate, and follows all instructions. I'm ready to output the final result.
````

</details>

**Output:**

````
API gateway आने वाले अनुरोधों को एक rate limiter के माध्यम से निर्देशित करता है, उन्हें उपयुक्त माइक्रोसर्विस को अग्रेषित करने से पहले। यदि circuit breaker खुला है, तो यह एक 503 Service Unavailable प्रतिक्रिया वापस करता है। सभी अनुरोध मेटाडेटा अवलोकनीयता के लिए एक distributed tracing backend पर लॉग किया जाता है।
````

### Bengali

**Prompt:** Translate the following paragraph into Bengali, using native Bengali script. Preserve technical terms in English where no standard native equivalent exists. Output only the Bengali translation, nothing else.

Text: "The API gateway routes incoming requests through a rate limiter before forwarding them to the appropriate microservice. If the circuit breaker is open, it returns a 503 Service Unavailable response. All request metadata is logged to a distributed tracing backend for observability."

*2495 tok | 21.54s | 115.8 t/s | think: 7921 chars | finish: stop*

<details><summary>Thinking (7921 chars)</summary>

````
1.  **Deconstruct the English Paragraph:** I'll break down the original text sentence by sentence and then phrase by phrase to understand its components and meaning.

    *   **Sentence 1:** "The API gateway routes incoming requests through a rate limiter before forwarding them to the appropriate microservice."
        *   "The API gateway": This is a specific technical term. While there might be a Bengali equivalent, "API gateway" is universally used in the tech industry. The instruction says to "Preserve technical terms in English where no standard native equivalent exists." "API gateway" is a prime example. So, I will keep it as "API gateway".
        *   "routes": This is a verb. The Bengali equivalent could be "রুট করে" (rūṭ kore) or "পরিচালনা করে" (parichalana kare). "রুট করে" is a direct transliteration and very common in tech contexts. "পরিচালনা করে" is more general. I'll go with "রুট করে" as it's more specific to the action of routing.
        *   "incoming requests": "incoming" -> "আগত" (āgata). "requests" -> "অনুরোধ" (anurodha). So, "আগত অনুরোধ" (āgata anurodha).
        *   "through a rate limiter": "through" -> "এর মাধ্যমে" (ēr madhyē) or "দিয়ে" (diyē). "through a rate limiter" -> "রেট লিমিটার-এর মাধ্যমে" (rēṭ limiṭār-ēr madhyē). "Rate limiter" is another technical term. "লিমিটার" (limiṭār) is a common loanword, so I'll keep it as "রেট লিমিটার".
        *   "before forwarding them": "before" -> "আগে" (āge). "forwarding them" -> "সেগুলোকে ফরোয়ার্ড করার আগে" (sēgulōkāk fōrward kōrār āge). "Forwarding" is another key tech term. "ফরোয়ার্ড করা" (fōrward kōrā) is the standard way to say this.
        *   "to the appropriate microservice": "to the" -> "উপযুক্ত" (upajukta). "microservice" -> "মাইক্রোসার্ভিস" (maikhrōsērvīs). This is also a standard loanword. So, "উপযুক্ত মাইক্রোসার্ভিস-এ" (upajukta mikhrōsērvīs-ē).

    *   **Putting Sentence 1 together (Draft 1):** "API gateway আগত অনুরোধগুলোকে রেট লিমিটার-এর মাধ্যমে রুট করে, সেগুলোকে উপযুক্ত মাইক্রোসার্ভিস-এ ফরোয়ার্ড করার আগে।"
        *   *Self-Correction/Refinement:* The structure is a bit clunky with "এর মাধ্যমে" and "আগে". Let's try a smoother flow. How about starting with the subject?
        *   "API gateway আগত অনুরোধগুলোকে রেট লিমিটার-এর মাধ্যমে রুট করে এবং তারপর সেগুলোকে উপযুক্ত মাইক্রোসার্ভিস-এ ফরোয়ার্ড করে।" (API gateway routes incoming requests through a rate limiter and then forwards them to the appropriate microservice.) This is good, but it changes the "before" meaning slightly to "and then". Let's stick closer to the original.
        *   Let's re-examine "before forwarding them". The "them" refers to the requests. So, the forwarding happens *after* the rate limiting. The original sentence structure is fine.
        *   Let's try a different phrasing for "before forwarding them". "ফরোয়ার্ড করার আগে" (fōrward kōrār āge) is the most direct and correct translation.
        *   Let's re-assemble: "API gateway আগত অনুরোধগুলোকে রেট লিমিটার-এর মাধ্যমে রুট করে, ফরোয়ার্ড করার আগে সেগুলোকে উপযুক্ত মাইক্রোসার্ভিস-এ।" This is okay, but the comma feels a bit forced.
        *   How about: "API gateway প্রথমে আগত অনুরোধগুলোকে রেট লিমিটার-এর মাধ্যমে রুট করে এবং তারপর সেগুলোকে উপযুক্ত মাইক্রোসার্ভিস-এ ফরোয়ার্ড করে।" (API gateway first routes incoming requests through a rate limiter and then forwards them to the appropriate microservice.) This is very clear and natural. However, the original "before" implies a sequence, not necessarily "first... then".
        *   Let's go back to the most faithful translation. "API gateway আগত অনুরোধগুলোকে রেট লিমিটার-এর মাধ্যমে রুট করে এবং তারপর সেগুলোকে উপযুক্ত মাইক্রোসার্ভিস-এ ফরোয়ার্ড করে।" The "then" is implied by the sequence of actions. Let's try to remove it.
        *   "API gateway আগত অনুরোধগুলোকে রেট লিমিটার-এর মাধ্যমে রুট করে উপযুক্ত মাইক্রোসার্ভিস-এ ফরোয়ার্ড করার আগে।" This is grammatically correct and preserves the meaning well. It's a bit more formal/technical. I'll use this one.

2.  **Deconstruct Sentence 2:** "If the circuit breaker is open, it returns a 503 Service Unavailable response."
    *   "If the circuit breaker is open": "If" -> "যদি" (yadi). "the circuit breaker" -> "সার্কিট ব্রেকার" (sārkēṭ brēkēr). Another standard loanword. "is open" -> "খোলা থাকে" (khōlā rēṇa) or "খোলা হয়" (khōlā haoyā). "খোলা থাকে" is more common for a state. So, "যদি সার্কিট ব্রেকার খোলা থাকে,".
    *   "it returns": "it" -> "এটি" (āti). "returns" -> "রিটার্ন করে" (rīṭān kare) or "পাঠায়" (pāṭhae). "রিটার্ন করে" is the direct tech term. So, "তবে এটি রিটার্ন করে,".
    *   "a 503 Service Unavailable response": "a" -> "একটি" (ekṭi). "503 Service Unavailable" -> This is a specific HTTP status code. It should *not* be translated. It must remain "503 Service Unavailable". "response" -> "রেসপন্স" (rēspons). So, "একটি 503 Service Unavailable রেসপন্স."

    *   **Putting Sentence 2 together (Draft 1):** "যদি সার্কিট ব্রেকার খোলা থাকে, তবে এটি একটি 503 Service Unavailable রেসপন্স রিটার্ন করে।"
        *   *Self-Correction/Refinement:* This is perfect. The flow is natural, the technical terms are preserved, and the grammar is correct. No changes needed.

3.  **Deconstruct Sentence 3:** "All request metadata is logged to a distributed tracing backend for observability."
    *   "All request metadata": "All" -> "সমস্ত" (samasta) or "সব" (sabaṁ). "সমস্ত" is more formal and fits the technical context better. "request metadata" -> "অনুরোধ মেটাডেটা" (anurodha mētādēṭā). "Metadata" is a standard loanword. So, "সমস্ত অনুরোধ মেটাডেটা".
    *   "is logged": "is" -> "হয়" (hoy) or "থাকে" (thāke). "is logged" -> "লগ করা হয়" (log karā hoy). This is the standard passive voice construction. So, "লগ করা হয়".
    *   "to a distributed tracing backend": "to a" -> "একটি" (ekṭi). "distributed tracing" -> "ডিস্ট্রিবিউটেড ট্রেসিং" (distribuṭēd trēsiṅ). These are standard terms. "backend" -> "ব্যাকএন্ড" (bēkēnd). So, "একটি ডিস্ট্রিবিউটেড ট্রেসিং ব্যাকএন্ড-এ".
    *   "for observability": "for" -> "জন্য" (dhārṇa). "observability" -> "অবজারভেবিলিটি" (ōbjērvēbiliti). This is a key DevOps/observability term and is almost always used as a loanword. So, "অবজারভেবিলিটি-র জন্য".

    *   **Putting Sentence 3 together (Draft 1):** "সমস্ত অনুরোধ মেটাডেটা একটি ডিস্ট্রিবিউটেড ট্রেসিং ব্যাকএন্ড-এ লগ করা হয় অবজারভেবিলিটি-র জন্য।"
        *   *Self-Correction/Refinement:* This is also perfect. The grammar is sound, and the technical terms are correctly handled.

4.  **Final Assembly and Review:** Now I'll combine the three translated sentences and read them as a whole to ensure consistency and flow.

    *   Sentence 1: "API gateway আগত অনুরোধগুলোকে রেট লিমিটার-এর মাধ্যমে রুট করে উপযুক্ত মাইক্রোসার্ভিস-এ ফরোয়ার্ড করার আগে।"
    *   Sentence 2: "যদি সার্কিট ব্রেকার খোলা থাকে, তবে এটি একটি 503 Service Unavailable রেসপন্স রিটার্ন করে।"
    *   Sentence 3: "সমস্ত অনুরোধ মেটাডেটা একটি ডিস্ট্রিবিউটেড ট্রেসিং ব্যাকএন্ড-এ লগ করা হয় অবজারভেবিলিটি-র জন্য।"

    Let's check the rules again:
    *   "Translate the following paragraph into Bengali" - Done.
    *   "using native Bengali script" - Done.
    *   "Preserve technical terms in English where no standard native equivalent exists" - Done. "API gateway", "rate limiter", "microservice", "circuit breaker", "503 Service Unavailable", "metadata", "distributed tracing", "backend", "observability" are all preserved or transliterated as standard loanwords in Bengali tech contexts.
    *   "Output only the Bengali translation, nothing else." - I will ensure my final output is just the text.

    The translation looks solid. The language is appropriate for a technical context. The use of "রেট লিমিটার", "মাইক্রোসার্ভিস", "সার্কিট ব্রেকার", "মেটাডেটা", "ডিস্ট্রিবিউটেড ট্রেসিং", "ব্যাকএন্ড", and "অবজারভেবিলিটি" as loanwords is standard practice among Bengali-speaking developers and engineers. The grammar and sentence structure are correct. I'm ready to generate the final output.
````

</details>

**Output:**

````
এ.পি.আই গেটওয়ে আগত অনুরোধগুলোকে রেট লিমিটারের মাধ্যমে রুট করে উপযুক্ত মাইক্রোসার্ভিসে পাঠানোর আগে। যদি সার্কিট ব্রেকারটি খোলা থাকে, তবে এটি একটি 503 সার্ভিস আনঅ্যাভেলেবল রেসপন্স প্রদান করে। সমস্ত অনুরোধের মেটাডেটা অবজারভেবিলিটির জন্য একটি ডিস্ট্রিবিউটেড ট্রেসিং ব্যাকএন্ডে লগ করা হয়।
````

### Gujarati

**Prompt:** Translate the following paragraph into Gujarati, using native Gujarati script. Preserve technical terms in English where no standard native equivalent exists. Output only the Gujarati translation, nothing else.

Text: "The API gateway routes incoming requests through a rate limiter before forwarding them to the appropriate microservice. If the circuit breaker is open, it returns a 503 Service Unavailable response. All request metadata is logged to a distributed tracing backend for observability."

*2432 tok | 19.71s | 123.4 t/s | think: 9330 chars | finish: stop*

<details><summary>Thinking (9330 chars)</summary>

````
1.  **Analyze the User's Request:**
    *   **Task:** Translate a paragraph from English to Gujarati.
    *   **Source Text:** "The API gateway routes incoming requests through a rate limiter before forwarding them to the appropriate microservice. If the circuit breaker is open, it returns a 503 Service Unavailable response. All request metadata is logged to a distributed tracing backend for observability."
    *   **Language:** Gujarati.
    *   **Script:** Native Gujarati script (Gujarati lipi).
    *   **Special Instruction 1:** Preserve technical terms in English where no standard native equivalent exists. This is a crucial instruction. I need to identify these terms and decide how to handle them.
    *   **Special Instruction 2:** Output *only* the Gujarati translation. No extra text, no explanations, no "Here is the translation:". Just the final Gujarati text.

2.  **Break Down the Source Text Sentence by Sentence:**

    *   **Sentence 1:** "The API gateway routes incoming requests through a rate limiter before forwarding them to the appropriate microservice."
        *   `The API gateway`: This is a technical term. "API" is an acronym, often kept as is. "Gateway" is a common English word, but in this context, it's a specific technical component. It's best to keep "API Gateway" as is. A direct translation like "API પ્રવેશદ્વાર" might be understood but isn't standard practice in technical circles. So, "API gateway" it is.
        *   `routes incoming requests`: "routes" can be translated as "માર્ગદર્શન કરે છે" (maargdarshan kare chhe) or "પસાર કરે છે" (passesar kare chhe). "incoming requests" can be "આવતા વિનંતીઓ" (avta vinantio). So, "API gateway આવતા વિનંતીઓને માર્ગદર્શન કરે છે" sounds natural.
        *   `through a rate limiter`: "rate limiter" is another technical term. There isn't a widely adopted native Gujarati equivalent. The instruction says to preserve it. So, "through a rate limiter" becomes "એક rate limiter દ્વારા" (ek rate limiter dwara). "through" can be "દ્વારા" (dwara) or "થ્રુ" (through). "દ્વારા" is more formal and fits well.
        *   `before forwarding them`: "before" is "પહેલાં" (pehla). "forwarding" is "આગળ મોકલવા" (agla moklava) or "ફોરવર્ડિંગ" (forwarding). "them" refers to the requests, which is already implied in the Gujarati sentence structure. So, "પહેલાં આગળ મોકલવા" (pehla agla moklava).
        *   `to the appropriate microservice`: "appropriate" can be "યોગ્ય" (yogy). "microservice" is a technical term. Like "gateway," it's best to keep it as "microservice". So, "યોગ્ય microservice ને" (yogy microservice ne).

    *   **Putting Sentence 1 together:**
        *   "API gateway આવતા વિનંતીઓને એક rate limiter દ્વારા માર્ગદર્શન કરે છે, તેમને યોગ્ય microservice ને આગળ મોકલવા પહેલાં."
        *   Let's refine this. The flow can be improved. "The API gateway routes incoming requests..." -> "API gateway આવતા વિનંતીઓને માર્ગદર્શન કરે છે...". The "through a rate limiter" part can be integrated more smoothly.
        *   Alternative: "API gateway આવતા વિનંતીઓને એક rate limiter દ્વારા યોગ્ય microservice ને આગળ મોકલવા પહેલાં માર્ગદર્શન કરે છે." This sounds a bit clunky.
        *   Let's try a different structure: "API gateway આવતા વિનંતીઓને એક rate limiter દ્વારા માર્ગદર્શન કરે છે, અને પછી તેમને યોગ્ય microservice ને મોકલે છે." (The API gateway guides incoming requests through a rate limiter, and then sends them to the appropriate microservice). This is clearer.
        *   Let's stick closer to the original structure. "API gateway આવતા વિનંતીઓને એક rate limiter દ્વારા માર્ગદર્શન કરે છે, તેમને યોગ્ય microservice ને આગળ મોકલવા પહેલાં." This is a good, direct translation that respects the original flow. Let's go with this.

    *   **Sentence 2:** "If the circuit breaker is open, it returns a 503 Service Unavailable response."
        *   `If the circuit breaker is open`: "circuit breaker" is a technical term (from Martin Fowler's patterns). No standard Gujarati equivalent. Keep it as "circuit breaker". "is open" can be "ખુલ્લું છે" (khullu chhe). So, "જો circuit breaker ખુલ્લું હોય" (jo circuit breaker khullu hoy). "If" is "જો" (jo).
        *   `it returns`: "it" refers to the gateway. "returns" is "પરત કરે છે" (parat kare chhe). So, "તે પરત કરે છે" (te parat kare chhe).
        *   `a 503 Service Unavailable response`: "503 Service Unavailable" is an HTTP status code. It's universally used in English. Keep it as is. "response" is "પ્રતિસાદ" (pratisad). So, "503 Service Unavailable પ્રતિસાદ" (503 Service Unavailable pratisad).

    *   **Putting Sentence 2 together:**
        *   "જો circuit breaker ખુલ્લું હોય, તો તે 503 Service Unavailable પ્રતિસાદ પરત કરે છે."
        *   This is perfect. The use of "તો" (to) after "જો" (jo) is standard for conditional sentences in Gujarati.

    *   **Sentence 3:** "All request metadata is logged to a distributed tracing backend for observability."
        *   `All request metadata`: "All" is "બધા" (badha). "request metadata" is technical. "metadata" is often kept as is, or sometimes "માહિતી" (mahit). "request metadata" can be "વિનંતીની માહિતી" (vinantini mahit). Let's use that. So, "બધી વિનંતીની માહિતી" (badhi vinantini mahit).
        *   `is logged`: "is logged" is "લોગ કરવામાં આવે છે" (log karvama ave chhe). "Log" is a very common loanword.
        *   `to a distributed tracing backend`: "distributed tracing" is a technical concept. Keep it as "distributed tracing". "backend" is also a common loanword. Keep it as "backend". "to" is "માં" (ma) or "ને" (ne). "માં" is more common for locations/systems. So, "એક distributed tracing backend માં" (ek distributed tracing backend ma).
        *   `for observability`: "observability" is a key technical term. There isn't a standard, single-word Gujarati equivalent that's widely used. "નિરીક્ષણક્ષમતા" (nirikshanshilta) is a literal translation, but "observability" is the standard term in the industry. Following the instruction to preserve technical terms, "observability" should be kept. "for" is "માટે" (mate).

    *   **Putting Sentence 3 together:**
        *   "બધી વિનંતીની માહિતી એક distributed tracing backend માં લોગ કરવામાં આવે છે observability માટે."
        *   This is a good, direct translation.

3.  **Final Review and Assembly:**

    *   **Sentence 1:** API gateway આવતા વિનંતીઓને એક rate limiter દ્વારા માર્ગદર્શન કરે છે, તેમને યોગ્ય microservice ને આગળ મોકલવા પહેલાં.
    *   **Sentence 2:** જો circuit breaker ખુલ્લું હોય, તો તે 503 Service Unavailable પ્રતિસાદ પરત કરે છે.
    *   **Sentence 3:** બધી વિનંતીની માહિતી એક distributed tracing backend માં લોગ કરવામાં આવે છે observability માટે.

    *   Let's check the flow and grammar.
        *   Sentence 1: "માર્ગદર્શન કરે છે... પહેલાં" is a bit of a mixed structure. A more natural Gujarati flow might be "API gateway આવતા વિનંતીઓને એક rate limiter દ્વારા યોગ્ય microservice ને આગળ મોકલવા પહેલાં મોકલે છે." (The API gateway sends incoming requests through a rate limiter to the appropriate microservice before forwarding them). This is also good. The original "routes... before forwarding" is better captured by the first version. Let's stick with the first one, it's a more faithful translation of the English structure. "માર્ગદર્શન કરે છે" (guides/routes) and "આગળ મોકલવા" (forwarding) are distinct actions.
        *   Sentence 2: Looks perfect.
        *   Sentence 3: "માં... માટે" is correct. "માટે" (for) is the right word.

    *   Let's consider an alternative for Sentence 1 for better flow.
        *   "API gateway આવતા વિનંતીઓને એક rate limiter દ્વારા માર્ગદર્શન કરે છે, અને પછી તેમને યોગ્ય microservice ને મોકલે છે." (The API gateway guides incoming requests through a rate limiter, and then sends them to the appropriate microservice.) This is also very good and perhaps more natural. However, the original uses "before forwarding," which implies a sequence. The version with "પહેલાં" (pehla) captures this sequence more precisely. I'll stick with the "પહેલાં" version as it's a more literal and accurate translation of the original's temporal relationship.

    *   Final check on the instruction: "Preserve technical terms in English where no standard native equivalent exists."
        *   `API gateway` -> Kept.
        *   `rate limiter` -> Kept.
        *   `microservice` -> Kept.
        *   `circuit breaker` -> Kept.
        *   `503 Service Unavailable` -> Kept (it's a code, but it functions as a technical term here).
        *   `distributed tracing` -> Kept.
        *   `backend` -> Kept.
        *   `observability` -> Kept.
        *   This seems correct. The rest of the words are translated into native Gujarati.

4.  **Final Output Construction:**
    *   Combine the three sentences.
    *   Ensure correct punctuation (periods at the end of each sentence).
    *   The user wants *only* the translation. So, I will output just the Gujarati text.

    *   Final text: "API gateway આવતા વિનંતીઓને એક rate limiter દ્વારા માર્ગદર્શન કરે છે, તેમને યોગ્ય microservice ને આગળ મોકલવા પહેલાં. જો circuit breaker ખુલ્લું હોય, તો તે 503 Service Unavailable પ્રતિસાદ પરત કરે છે. બધી વિનંતીની માહિતી એક distributed tracing backend માં લોગ કરવામાં આવે છે observability માટે."

This looks solid. It follows all instructions, uses the correct script, preserves technical terms, and is grammatically sound in Gujarati.
````

</details>

**Output:**

````
API gateway આવતા વિનંતીઓને એક rate limiter દ્વારા માર્ગદર્શન કરે છે, તેમને યોગ્ય microservice ને આગળ મોકલવા પહેલાં. જો circuit breaker ખુલ્લું હોય, તો તે 503 Service Unavailable પ્રતિસાદ પરત કરે છે. બધી વિનંતીની માહિતી એક distributed tracing backend માં લોગ કરવામાં આવે છે observability માટે.
````

### Kannada

**Prompt:** Translate the following paragraph into Kannada, using native Kannada script. Preserve technical terms in English where no standard native equivalent exists. Output only the Kannada translation, nothing else.

Text: "The API gateway routes incoming requests through a rate limiter before forwarding them to the appropriate microservice. If the circuit breaker is open, it returns a 503 Service Unavailable response. All request metadata is logged to a distributed tracing backend for observability."

*2165 tok | 17.63s | 122.8 t/s | think: 6791 chars | finish: stop*

<details><summary>Thinking (6791 chars)</summary>

````
1.  **Deconstruct the English Text:** I'll break down the original paragraph sentence by sentence and even phrase by phrase to understand the core concepts and find the best Kannada equivalents.

    *   **Sentence 1:** "The API gateway routes incoming requests through a rate limiter before forwarding them to the appropriate microservice."
        *   **"API gateway"**: This is a technical term. There isn't a universally accepted, single-word Kannada equivalent. The standard practice is to transliterate it. "API" is often kept as "API". "Gateway" can be transliterated as "गेवे" (geve) or more formally as "द्वारम्" (dwāram). However, in modern tech contexts, a direct transliteration is common. I'll go with "API गेटवे" (API geṭeve) as it's clear and widely understood in the Bangalore tech scene.
        *   **"routes"**: This means directs or sends. "ಮಾರ್ಗ ಮಾಡುತ್ತದೆ" (mārga kārṇḍāḍe) is a good translation for "routes". "ನಿರ್ದೇಶಿಸುತ್ತದೆ" (nirdēśisutthade) also works. "ಮಾರ್ಗ ಮಾಡುತ್ತದೆ" feels slightly more natural in this context.
        *   **"incoming requests"**: "ಬರುವ ವಿನಂತಿಗಳು" (baruva vinantigaḷu). "ಬರುವ" (baruva) means "coming/incoming". "ವಿನಂತಿಗಳು" (vinantigaḷu) means "requests". This is a straightforward translation.
        *   **"through a rate limiter"**: "ದರ ಸೀಮಿತಗೊಳಿಸುವ ಮೂಲಕ" (dara siṁditāraṇa dāraka). "ದರ" (dara) is "rate". "ಸೀಮಿತಗೊಳಿಸುವ" (siṁditāraṇa) is "limiting". "ದರ ಸೀಮಿತಗೊಳಿಸುವ" is a direct and accurate translation for "rate limiter". "ದರ ಸೀಮಿತಗೊಳಿಸುವ ಮೂಲಕ" means "through a rate limiter".
        *   **"before forwarding them"**: "ಮುಂದಕ್ಕೆ ಕಳುಹಿಸುವ ಮೊದಲು" (mundāku sēḷḷisuva modhalu). "ಮುಂದಕ್ಕೆ" (mundāku) means "forward". "ಕಳುಹಿಸುವ" (sēḷḷisuva) is "sending". "ಮೊದಲು" (modhalu) means "before". This phrase works perfectly.
        *   **"to the appropriate microservice"**: "ಸೂಕ್ತವಾದ ಮೈಕ್ರೋಸರ್ವಿಸ್‌ಗೆ" (sūkṣma-sērvise-ge). "ಸೂಕ್ತವಾದ" (sūkṣma) means "appropriate/suitable". "ಮೈಕ್ರೋಸರ್ವಿಸ್‌ಗೆ" (microservice-ge) is the dative case of "ಮೈಕ್ರೋಸರ್ವಿಸ್" (microservice). "ಮೈಕ್ರೋಸರ್ವಿಸ್" is another technical term. Like "API gateway", it's best to keep it in English. The "-ಗೆ" suffix is crucial to indicate the destination ("to the microservice").

    *   **Sentence 2:** "If the circuit breaker is open, it returns a 503 Service Unavailable response."
        *   **"If the circuit breaker is open"**: "ಸರ್ಕ್ಯೂಟ್ ಬ್ರೇಕರ್ ತೆರೆದಿದ್ದರೆ" (sarkyūṭ brakēra tereyiddhare). "ಸರ್ಕ್ಯೂಟ್ ಬ್ರೇಕರ್" (circuit brakēra) is the standard transliteration. "ತೆರೆದಿದ್ದರೆ" (tereyiddhare) is the conditional "if...is open". "ತೆರೆ" (tere) is "open". "ಇದ್ದರೆ" (iddhare) is the conditional suffix.
        *   **"it returns"**: "ಅದು ಪ್ರತಿಕ್ರಿಯೆಯನ್ನು ನೀಡುತ್ತದೆ" (adu pratikriyēyannu dēradhāre). "ಅದು" (adu) is "it". "ಪ್ರತಿಕ್ರಿಯೆಯನ್ನು" (pratikriyēyannu) is "response" (accusative case). "ನೀಡುತ್ತದೆ" (dēradhāre) is "returns/gives".
        *   **"a 503 Service Unavailable response"**: "503 ಸೇವಾ ಲಭ್ಯವಿಲ್ಲ ಪ್ರತಿಕ್ರಿಯೆ" (503 sēvā avāgyakavillā pratikriyē). This is a standard HTTP status code and message. The standard practice is to keep the number "503" and transliterate the message. "503 ಸೇವಾ ಲಭ್ಯವಿಲ್ಲ ಪ್ರತಿಕ್ರಿಯೆ" is the correct and conventional way to state this in Kannada technical documentation. "ಸೇವಾ ಲಭ್ಯವಿಲ್ಲ" (sēvā avāgyakavillā) is the direct translation of "Service Unavailable".

    *   **Sentence 3:** "All request metadata is logged to a distributed tracing backend for observability."
        *   **"All request metadata"**: "ಎಲ್ಲಾ ವಿನಂತಿ ಮೆಟಾಡೇಟಾ" (ellaa vinanti mētādēṭā). "ಎಲ್ಲಾ" (ellaa) is "all". "ವಿನಂತಿ" (vinanti) is "request". "ಮೆಟಾಡೇಟಾ" (mētādēṭā) is "metadata". Again, "metadata" is a technical term often kept as-is.
        *   **"is logged"**: "ದಾಖಲಿಸಲಾಗುತ್ತದೆ" (dākhalisalaagutthade). This is the standard passive voice form for "is logged". "ದಾಖಲೆ" (dākhalē) is "log/record". "ಮಾಡಲಾಗುತ್ತದೆ" (māḍalaagutthade) is "is done/is made".
        *   **"to a distributed tracing backend"**: "ವಿತರಿತ ಟ್ರೇಸಿಂಗ್ ಬ್ಯಾಕೆಂಡ್‌ಗೆ" (vitariṭa trace-ing bēkēnd-ge). "ವಿತರಿತ" (vitariṭa) is "distributed". "ಟ್ರೇಸಿಂಗ್" (trace-ing) is "tracing". "ಬ್ಯಾಕೆಂಡ್" (bēkēnd) is "backend". All three are technical terms. "ವಿತರಿತ ಟ್ರೇಸಿಂಗ್ ಬ್ಯಾಕೆಂಡ್‌ಗೆ" is the most accurate representation. The "-ಗೆ" suffix again indicates the destination ("to the backend").
        *   **"for observability"**: "ವೀಕ್ಷಣೆಗಾಗಿ" (vīkṣaṇēgaḷigaagi). "ವೀಕ್ಷಣೆ" (vīkṣaṇē) is "observability" (literally "the act of observing"). "ಗಾಗಿ" (gaagi) is the postposition "for". This is a perfect fit.

2.  **Assemble the Full Translation:** Now, I'll combine the translated parts into a coherent paragraph, ensuring correct grammar, word order, and script.

    *   **Sentence 1:** API गेटवे ಬರುವ ವಿನಂತಿಗಳನ್ನು ದರ ಸೀಮಿತಗೊಳಿಸುವ ಮೂಲಕ ಸೂಕ್ತವಾದ ಮೈಕ್ರೋಸರ್ವಿಸ್‌ಗೆ ಮುಂದಕ್ಕೆ ಕಳುಹಿಸುವ ಮೊದಲು ಮಾರ್ಗ ಮಾಡುತ್ತದೆ.
    *   **Sentence 2:** ಸರ್ಕ್ಯೂಟ್ ಬ್ರೇಕರ್ ತೆರೆದಿದ್ದರೆ, ಅದು 503 ಸೇವಾ ಲಭ್ಯವಿಲ್ಲ ಪ್ರತಿಕ್ರಿಯೆಯನ್ನು ನೀಡುತ್ತದೆ.
    *   **Sentence 3:** ಎಲ್ಲಾ ವಿನಂತಿ ಮೆಟಾಡೇಟಾವನ್ನು ವಿತರಿತ ಟ್ರೇಸಿಂಗ್ ಬ್ಯಾಕೆಂಡ್‌ಗೆ ವೀಕ್ಷಣೆಗಾಗಿ ದಾಖಲಿಸಲಾಗುತ್ತದೆ.

3.  **Final Review:** I'll read the complete Kannada text to check for flow, clarity, and accuracy.

    *   "API गेटवे ಬರುವ ವಿನಂತಿಗಳನ್ನು ದರ ಸೀಮಿತಗೊಳಿಸುವ ಮೂಲಕ ಸೂಕ್ತವಾದ ಮೈಕ್ರೋಸರ್ವಿಸ್‌ಗೆ ಮುಂದಕ್ಕೆ ಕಳುಹಿಸುವ ಮೊದಲು ಮಾರ್ಗ ಮಾಡುತ್ತದೆ." - This sounds natural and technically accurate. The use of "ಮಾರ್ಗ ಮಾಡುತ್ತದೆ" is good. The structure is correct.
    *   "ಸರ್ಕ್ಯೂಟ್ ಬ್ರೇಕರ್ ತೆರೆದಿದ್ದರೆ, ಅದು 503 ಸೇವಾ ಲಭ್ಯವಿಲ್ಲ ಪ್ರತಿಕ್ರಿಯೆಯನ್ನು ನೀಡುತ್ತದೆ." - The comma after "ತೆರೆದಿದ್ದರೆ" is good practice. The translation of the HTTP status code is standard. "ಪ್ರತಿಕ್ರಿಯೆಯನ್ನು ನೀಡುತ್ತದೆ" is the right verb.
    *   "ಎಲ್ಲಾ ವಿನಂತಿ ಮೆಟಾಡೇಟಾವನ್ನು ವಿತರಿತ ಟ್ರೇಸಿಂಗ್ ಬ್ಯಾಕೆಂಡ್‌ಗೆ ವೀಕ್ಷಣೆಗಾಗಿ ದಾಖಲಿಸಲಾಗುತ್ತದೆ." - The use of "ಮೆಟಾಡೇಟಾವನ್ನು" (accusative case) is correct. The passive voice "ದಾಖಲಿಸಲಾಗುತ್ತದೆ" is appropriate. The phrase "ವೀಕ್ಷಣೆಗಾಗಿ" is perfect.

The translation is solid. It preserves the technical terms as requested (API gateway, microservice, circuit breaker, rate limiter, metadata, distributed tracing, backend, observability), uses native Kannada script for the rest, and follows standard grammatical and idiomatic conventions for technical writing in Kannada. The output should be *only* the translation, as per the user's request.

So, the final output will be:
API गेटवे ಬರುವ ವಿನಂತಿಗಳನ್ನು ದರ ಸೀಮಿತಗೊಳಿಸುವ ಮೂಲಕ ಸೂಕ್ತವಾದ ಮೈಕ್ರೋಸರ್ವಿಸ್‌ಗೆ ಮುಂದಕ್ಕೆ ಕಳುಹಿಸುವ ಮೊದಲು ಮಾರ್ಗ ಮಾಡುತ್ತದೆ. ಸರ್ಕ್ಯೂಟ್ ಬ್ರೇಕರ್ ತೆರೆದಿದ್ದರೆ, ಅದು 503 ಸೇವಾ ಲಭ್ಯವಿಲ್ಲ ಪ್ರತಿಕ್ರಿಯೆಯನ್ನು ನೀಡುತ್ತದೆ. ಎಲ್ಲಾ ವಿನಂತಿ ಮೆಟಾಡೇಟಾವನ್ನು ವಿತರಿತ ಟ್ರೇಸಿಂಗ್ ಬ್ಯಾಕೆಂಡ್‌ಗೆ ವೀಕ್ಷಣೆಗಾಗಿ ದಾಖಲಿಸಲಾಗುತ್ತದೆ.

I'll double-check the script. All characters are standard Kannada. The transliterated English words are correctly rendered in Kannada script (e.g., गेटवे, ಸರ್ವಿಸ್, ಬ್ರೇಕರ್, ಮೆಟಾಡೇಟಾ, ಬ್ಯಾಕೆಂಡ್). Everything looks correct. I'm ready to generate the final output.
````

</details>

**Output:**

````
API ಗೇಟ್‌ವೇ ಬರುವ ವಿನಂತಿಗಳನ್ನು ದರ ಸೀಮಿತಗೊಳಿಸುವ ಮೂಲಕ ಸೂಕ್ತವಾದ ಮೈಕ್ರೋಸರ್ವಿಸ್‌ಗೆ ಮುಂದಕ್ಕೆ ಕಳುಹಿಸುವ ಮೊದಲು ಮಾರ್ಗ ಮಾಡುತ್ತದೆ. ಸರ್ಕ್ಯೂಟ್ ಬ್ರೇಕರ್ ತೆರೆದಿದ್ದರೆ, ಅದು 503 ಸೇವಾ ಲಭ್ಯವಿಲ್ಲದ ಪ್ರತಿಕ್ರಿಯೆಯನ್ನು ನೀಡುತ್ತದೆ. ಎಲ್ಲಾ ವಿನಂತಿ ಮೆಟಾಡೇಟಾವನ್ನು ವಿತರಿತ ಟ್ರೇಸಿಂಗ್ ಬ್ಯಾಕೆಂಡ್‌ಗೆ ವೀಕ್ಷಣೆಗಾಗಿ ದಾಖಲಿಸಲಾಗುತ್ತದೆ.
````

### Malayalam

**Prompt:** Translate the following paragraph into Malayalam, using native Malayalam script. Preserve technical terms in English where no standard native equivalent exists. Output only the Malayalam translation, nothing else.

Text: "The API gateway routes incoming requests through a rate limiter before forwarding them to the appropriate microservice. If the circuit breaker is open, it returns a 503 Service Unavailable response. All request metadata is logged to a distributed tracing backend for observability."

*2204 tok | 17.9s | 123.1 t/s | think: 7997 chars | finish: stop*

<details><summary>Thinking (7997 chars)</summary>

````
1.  **Deconstruct the Request:**
    *   **Source Text:** "The API gateway routes incoming requests through a rate limiter before forwarding them to the appropriate microservice. If the circuit breaker is open, it returns a 503 Service Unavailable response. All request metadata is logged to a distributed tracing backend for observability."
    *   **Target Language:** Malayalam.
    *   **Script:** Native Malayalam script (not Romanised).
    *   **Key Constraint 1:** Preserve technical terms in English where no standard native equivalent exists.
    *   **Key Constraint 2:** Output *only* the Malayalam translation. No extra text, no explanations, no "Here is the translation:".

2.  **Analyze the Source Text for Technical Terms and Concepts:**
    *   `API gateway`: This is a very common term. While one could try to translate it ("API ഗേറ്റ്‌വേ"), the English term is universally understood and used by developers in Kerala. The instruction says "where no standard native equivalent exists." "API gateway" *is* the standard term. So, I should keep it as "API gateway".
    *   `routes incoming requests`: "routes" (റൂട്ട് ചെയ്യുന്നു) and "incoming requests" (വരുന്ന റിക്വസ്റ്റുകൾ) are standard. "Requests" can be "റിക്വസ്റ്റുകൾ" or "ആവശ്യങ്ങൾ". "Requests" is more common in this context.
    *   `rate limiter`: This is a specific design pattern. There's no single, universally accepted Malayalam word for it. "റേറ്റ് ലിമിറ്റർ" is the direct transliteration and is commonly understood. "നിരക്ക് പരിമിതപ്പെടുത്തുന്ന സംവിധാനം" is a literal translation but clunky and not used in practice. The instruction says to preserve it in English where no standard equivalent exists. "Rate limiter" fits this perfectly.
    *   `forwarding them`: "ഫോർവേഡ് ചെയ്യുന്നു" is the standard verb.
    *   `appropriate microservice`: "അനുയോജ്യമായ മൈക്രോ സർവീസ്". "Microservice" is another universal English term. "മൈക്രോ സർവീസ്" is the common transliteration.
    *   `circuit breaker`: This is another specific design pattern. Like "rate limiter," there's no standard Malayalam equivalent. "സർക്യൂട്ട് ബ്രേക്കർ" is the standard way to refer to it.
    *   `is open`: "തുറന്നിരിക്കുകയാണെങ്കിൽ" or "തുറന്നാൽ". "തുറന്നാൽ" is more concise and fits the conditional "If...".
    *   `503 Service Unavailable`: This is an HTTP status code. The numbers and the English phrase are standard and must be preserved.
    *   `response`: "റെസ്പോൺസ്" or "പ്രതികരണം". "Response" is very common.
    *   `request metadata`: "റിക്വസ്റ്റ് മെറ്റാഡാറ്റ". "Metadata" is almost always used as-is in Malayalam technical contexts.
    *   `is logged`: "ലോഗ് ചെയ്യുന്നു" or "രേഖപ്പെടുത്തുന്നു". "ലോഗ് ചെയ്യുന്നു" is the standard term.
    *   `distributed tracing backend`: This is a complex term. "Distributed tracing" is a concept. "Backend" is a standard English word used in Malayalam. "Distributed tracing backend" as a whole doesn't have a standard Malayalam equivalent. The best approach is to keep the English terms. So, "distributed tracing backend".
    *   `observability`: This is a key DevOps/SRE concept. There's no direct, single-word equivalent that captures the full meaning. "നിരീക്ഷണക്ഷമത" is a literal translation, but "observability" is the standard term used by practitioners. The instruction says to preserve it where no standard equivalent exists. "Observability" fits this.

3.  **Synthesize the Translation, Sentence by Sentence:**

    *   **Sentence 1:** "The API gateway routes incoming requests through a rate limiter before forwarding them to the appropriate microservice."
        *   `The API gateway`: "API gateway"
        *   `routes incoming requests`: "വരുന്ന റിക്വസ്റ്റുകളെ റൂട്ട് ചെയ്യുന്നു" (Using "റിക്വസ്റ്റുകളെ" - accusative case).
        *   `through a rate limiter`: "ഒരു റേറ്റ് ലിമിറ്ററിലൂടെ" (Using "റേറ്റ് ലിമിറ്ററിലൂടെ").
        *   `before forwarding them`: "ഫോർവേഡ് ചെയ്യുന്നതിന് മുമ്പ്" (Using the infinitive "ഫോർവേഡ് ചെയ്യുന്നതിന്").
        *   `to the appropriate microservice`: "അനുയോജ്യമായ മൈക്രോ സർവീസിലേക്ക്".
        *   **Putting it together:** "API gateway വരുന്ന റിക്വസ്റ്റുകളെ ഒരു റേറ്റ് ലിമിറ്ററിലൂടെ റൂട്ട് ചെയ്യുകയും, അനുയോജ്യമായ മൈക്രോ സർവീസിലേക്ക് ഫോർവേഡ് ചെയ്യുന്നതിന് മുമ്പ്." The "ചെയ്യുകയും" (and) and "മുമ്പ്" (before) structure works well. Let's refine it. "API gateway വരുന്ന റിക്വസ്റ്റുകളെ ഒരു റേറ്റ് ലിമിറ്ററിലൂടെ റൂട്ട് ചെയ്യുകയും അനുയോജ്യമായ മൈക്രോ സർവീസിലേക്ക് ഫോർവേഡ് ചെയ്യുന്നതിന് മുമ്പ്." This is a bit long. A more natural flow might be: "API gateway വരുന്ന റിക്വസ്റ്റുകളെ ഒരു റേറ്റ് ലിമിറ്ററിലൂടെ റൂട്ട് ചെയ്യുകയും അനുയോജ്യമായ മൈക്രോ സർവീസിലേക്ക് ഫോർവേഡ് ചെയ്യുകയും ചെയ്യുന്നു." The "before" is implied by the sequence of operations. But the original text explicitly says "before forwarding". Let's stick closer to that. "API gateway വരുന്ന റിക്വസ്റ്റുകളെ ഒരു റേറ്റ് ലിമിറ്ററിലൂടെ റൂട്ട് ചെയ്യുകയും, അനുയോജ്യമായ മൈക്രോ സർവീസിലേക്ക് ഫോർവേഡ് ചെയ്യുന്നതിന് മുമ്പ്." This is grammatically correct and clear. Another option: "API gateway വരുന്ന റിക്വസ്റ്റുകളെ ഒരു റേറ്റ് ലിമിറ്ററിലൂടെ റൂട്ട് ചെയ്യുകയും അനുയോജ്യമായ മൈക്രോ സർവീസിലേക്ക് ഫോർവേഡ് ചെയ്യുന്നതിന് മുൻപ്." "മുൻപ്" is slightly more common than "മുമ്പ്". Let's go with "മുൻപ്".
        *   **Final Sentence 1:** "API gateway വരുന്ന റിക്വസ്റ്റുകളെ ഒരു റേറ്റ് ലിമിറ്ററിലൂടെ റൂട്ട് ചെയ്യുകയും അനുയോജ്യമായ മൈക്രോ സർവീസിലേക്ക് ഫോർവേഡ് ചെയ്യുന്നതിന് മുൻപ്."

    *   **Sentence 2:** "If the circuit breaker is open, it returns a 503 Service Unavailable response."
        *   `If the circuit breaker is open`: "സർക്യൂട്ട് ബ്രേക്കർ തുറന്നാൽ" or "സർക്യൂട്ട് ബ്രേക്കർ തുറന്നിരിക്കുകയാണെങ്കിൽ". "തുറന്നാൽ" is more direct and common for conditionals.
        *   `it returns`: "അത് 503 സർവീസ് അൺഅവൈലബിൾ റെസ്പോൺസ് നൽകുന്നു." "നൽകുന്നു" is a good verb for "returns". "തിരികെ നൽകുന്നു" is also good.
        *   `a 503 Service Unavailable response`: "ഒരു 503 സർവീസ് അൺഅവൈലബിൾ റെസ്പോൺസ്".
        *   **Putting it together:** "സർക്യൂട്ട് ബ്രേക്കർ തുറന്നാൽ, അത് ഒരു 503 സർവീസ് അൺഅവൈലബിൾ റെസ്പോൺസ് നൽകുന്നു." This is perfect. The comma after the conditional clause is standard.

    *   **Sentence 3:** "All request metadata is logged to a distributed tracing backend for observability."
        *   `All request metadata`: "എല്ലാ റിക്വസ്റ്റ് മെറ്റാഡാറ്റയും". "എല്ലാ" (all) and "മെറ്റാഡാറ്റയും" (metadata).
        *   `is logged to`: "ഒരു ... ലേക്ക് ലോഗ് ചെയ്യുന്നു" or "ലോഗ് ചെയ്യുന്നു". "ഒരു ... ലേക്ക് ലോഗ് ചെയ്യുന്നു" is more specific and better here.
        *   `a distributed tracing backend`: "ഒരു ഡിസ്ട്രിബ്യൂട്ടഡ് ട്രേസിംഗ് ബാക്കെൻഡിലേക്ക്".
        *   `for observability`: "നിരീക്ഷണക്ഷമതയ്ക്കായി" or "നിരീക്ഷണത്തിന് വേണ്ടി". "നിരീക്ഷണക്ഷമതയ്ക്കായി" is the more technical and accurate term, matching the source.
        *   **Putting it together:** "എല്ലാ റിക്വസ്റ്റ് മെറ്റാഡാറ്റയും ഒരു ഡിസ്ട്രിബ്യൂട്ടഡ് ട്രേസിംഗ് ബാക്കെൻഡിലേക്ക് നിരീക്ഷണക്ഷമതയ്ക്കായി ലോഗ് ചെയ്യുന്നു." This is a very standard and natural-sounding sentence in Malayalam technical writing.

4.  **Final Review and Assembly:**
    *   Sentence 1: "API gateway വരുന്ന റിക്വസ്റ്റുകളെ ഒരു റേറ്റ് ലിമിറ്ററിലൂടെ റൂട്ട് ചെയ്യുകയും അനുയോജ്യമായ മൈക്രോ സർവീസിലേക്ക് ഫോർവേഡ് ചെയ്യുന്നതിന് മുൻപ്."
    *   Sentence 2: "സർക്യൂട്ട് ബ്രേക്കർ തുറന്നാൽ, അത് ഒരു 503 സർവീസ് അൺഅവൈലബിൾ റെസ്പോൺസ് നൽകുന്നു."
    *   Sentence 3: "എല്ലാ റിക്വസ്റ്റ് മെറ്റാഡാറ്റയും ഒരു ഡിസ്ട്രിബ്യൂട്ടഡ് ട്രേസിംഗ് ബാക്കെൻഡിലേക്ക് നിരീക്ഷണക്ഷമതയ്ക്കായി ലോഗ് ചെയ്യുന്നു."

    Combine them with spaces. The flow is good. The technical terms are preserved as decided. The grammar is correct. The script is Malayalam. The output should be *only* this text.

    Let's do one last check on the constraints.
    *   Translate to Malayalam: Yes.
    *   Native Malayalam script: Yes.
    *   Preserve technical terms in English: Yes (API gateway, rate limiter, microservice, circuit breaker, 503 Service Unavailable, distributed tracing backend, observability).
    *   Output only the translation: Yes.

    The translation looks solid. I will now output just the final text.
````

</details>

**Output:**

````
API gateway വരുന്ന റിക്വസ്റ്റുകളെ ഒരു റേറ്റ് ലിമിറ്ററിലൂടെ റൂട്ട് ചെയ്യുകയും അനുയോജ്യമായ മൈക്രോ സർവീസിലേക്ക് ഫോർവേഡ് ചെയ്യുന്നതിന് മുൻപ്. സർക്യൂട്ട് ബ്രേക്കർ തുറന്നാൽ, അത് ഒരു 503 സർവീസ് അൺഅവൈലബിൾ റെസ്പോൺസ് നൽകുന്നു. എല്ലാ റിക്വസ്റ്റ് മെറ്റാഡാറ്റയും നിരീക്ഷണക്ഷമതയ്ക്കായി ഒരു ഡിസ്ട്രിബ്യൂട്ടഡ് ട്രേസിംഗ് ബാക്കെൻഡിലേക്ക് ലോഗ് ചെയ്യുന്നു.
````

### Marathi

**Prompt:** Translate the following paragraph into Marathi, using native Marathi script. Preserve technical terms in English where no standard native equivalent exists. Output only the Marathi translation, nothing else.

Text: "The API gateway routes incoming requests through a rate limiter before forwarding them to the appropriate microservice. If the circuit breaker is open, it returns a 503 Service Unavailable response. All request metadata is logged to a distributed tracing backend for observability."

*2669 tok | 21.4s | 124.7 t/s | think: 8667 chars | finish: stop*

<details><summary>Thinking (8667 chars)</summary>

````
1.  **Deconstruct the English Text:** I'll break down the original paragraph into smaller, manageable chunks.

    *   "The API gateway routes incoming requests..."
    *   "...through a rate limiter..."
    *   "...before forwarding them to the appropriate microservice."
    *   "If the circuit breaker is open..."
    *   "...it returns a 503 Service Unavailable response."
    *   "All request metadata is logged to a distributed tracing backend..."
    *   "...for observability."

2.  **Analyze Each Chunk for Translation:** Now, I'll go through each chunk and think about the best way to translate it into Marathi, paying close attention to the technical terms.

    *   **"The API gateway"**: "API" is a standard acronym, so it stays. "gateway" is a technical term. While a direct translation might be "द्वार" (dvāra), in a technical context, "गेटवे" (gētve) is the common and understood term. So, "API गेटवे" is the best choice.

    *   **"routes incoming requests"**:
        *   "routes" (verb): This means to direct or send along a path. Good Marathi equivalents could be "मार्ग दाखवते" (mārg dākhavte - shows the path), "पाठवते" (pāthavte - sends), or "मार्गित करते" (mārgit karte - routes). "मार्गित करते" is a very direct and good fit for "routes". "पाठवते" is also good and perhaps a bit more common. I'll lean towards "मार्गित करते" as it's a closer cognate.
        *   "incoming requests": "incoming" means "आणारे" (āṇāre). "requests" is a key technical term. The direct translation "विनंत्या" (vinantyā) is a bit formal. "विनंती" (vinanti) is more common. "विनंती संदेश" (vinanti sandēśa - request message) is also good. Let's stick with "विनंती" for conciseness. So, "येणाऱ्या विनंत्या" (yēṇāryā vinantyā) or "आणाऱ्या विनंत्या" (āṇāryā vinantyā). "येणाऱ्या" is slightly more natural in this context. So, "API गेटवे येणाऱ्या विनंत्या मार्गित करते."

    *   **"through a rate limiter"**:
        *   "through": "मधून" (mūḷēṃ).
        *   "a rate limiter": This is a very specific technical component. There's no standard, universally used Marathi equivalent. The best practice, as per the user's instructions, is to keep it in English. So, "rate limiter" it is.
        *   Putting it together: "एका रेट लिमिटरमधून" (ekā rēṭ limīṭar-mūḷēṃ). "एका" is better than "एक" because it's a singular object in the process.

    *   **"before forwarding them to the appropriate microservice"**:
        *   "before": "पूर्वी" (pūrvē).
        *   "forwarding them": "पुढे पाठवण्यापूर्वी" (pudē pāthavanyā-pūrvē - before forwarding). Or "पुढे पाठवून" (pudē pāthavūna - having forwarded). The "पूर्वी" structure is cleaner. So, "पुढे पाठवण्यापूर्वी" (pudē pāthavanyā-pūrvē).
        *   "to the appropriate": "योग्य" (yōgya) or "योग्य त्या" (yōgya tyā). "योग्य" is sufficient.
        *   "microservice": Another technical term. Like "rate limiter", there's no standard native equivalent. The standard practice is to use "मायक्रोसर्व्हिस" (māikrōsarvis).
        *   Putting it together: "योग्य मायक्रोसर्व्हिसला." (yōgya māikrōsarvis-lā). The "ला" (lā) case marker is crucial here.

    *   **"If the circuit breaker is open"**:
        *   "If": "जर" (jar).
        *   "the circuit breaker": Again, a technical term. "सर्किट ब्रेकर" (sarkīṭ brēkar) is the standard way to refer to it.
        *   "is open": "उघडे आहे" (ughḍe āhe).
        *   Putting it together: "जर सर्किट ब्रेकर उघडे असेल तर" (jar sarkīṭ brēkar ughḍe asēl tar). Using "असेल तर" (asēl tar) is slightly more formal and conditional than just "आहे तर" (āhe tar), which fits the technical context well.

    *   **"it returns a 503 Service Unavailable response"**:
        *   "it returns": "ते परत करते" (te pārt karte) or "ते प्रतिसाद देते" (te pratisad dēte). "प्रतिसाद देते" is more specific to APIs and services, so it's a better choice.
        *   "a 503 Service Unavailable response": "503" is a number, stays. "Service Unavailable" is a standard HTTP status phrase. It's almost always left in English in technical contexts. "प्रतिसाद" (pratisad) means "response". So, "503 Service Unavailable प्रतिसाद".
        *   Putting it together: "ते 503 Service Unavailable प्रतिसाद देते."

    *   **"All request metadata is logged"**:
        *   "All": "सर्व" (sarva).
        *   "request metadata": "request" is "विनंती". "metadata" is a technical term. The standard is "मेटाडेटा" (metāḍatā). So, "विनंती मेटाडेटा".
        *   "is logged": "लॉग केले जाते" (log karēl jāte). This is the standard passive voice construction for logging.
        *   Putting it together: "सर्व विनंती मेटाडेटा लॉग केला जातो." (sarva vinanti metāḍatā log karēl jāto). I need to ensure the verb ending agrees with the subject. "मेटाडेटा" is treated as a singular neuter noun in Marathi, so "जायो" (jāto) is the correct form.

    *   **"to a distributed tracing backend"**:
        *   "to": "कडे" (kade) or "ला" (lā). "कडे" is good for indicating a destination.
        *   "a distributed tracing backend": This is a phrase of three technical terms.
            *   "distributed": "डिस्ट्रिब्युटेड" (disṭribyūṭed) is the standard.
            *   "tracing": "ट्रेसिंग" (trēsing) is the standard.
            *   "backend": "बॅकएंड" (bēk-end) is the standard.
        *   Putting it together: "एका डिस्ट्रिब्युटेड ट्रेसिंग बॅकएंडकडे." (ekā disṭribyūṭed trēsing bēk-end-kade).

    *   **"for observability"**:
        *   "for": "साठी" (sāṭhī).
        *   "observability": This is a key concept in modern software engineering. There isn't a single, perfect, everyday Marathi word for it. "निरीक्षणक्षमता" (nirīkṣaṇakṣamatā - the state of being observable) is a literal translation but is very clunky and not used in the industry. The standard practice is to use the English word "observability".
        *   Putting it together: "निरीक्षणक्षमतेसाठी" (using the clunky native term) or "observability साठी" (using the standard English term). The instructions say "Preserve technical terms in English where no standard native equivalent exists." "Observability" fits this description perfectly. So, "observability साठी".

3.  **Assemble and Refine the Final Paragraph:** Now I'll put all the pieces together and read it for flow and correctness.

    *   "API गेटवे येणाऱ्या विनंत्या एका रेट लिमिटरमधून मार्गित करते, योग्य मायक्रोसर्व्हिसला पुढे पाठवण्यापूर्वी." (API gateway routes incoming requests through a rate limiter before forwarding them to the appropriate microservice.) - This flows well. The comma helps separate the clauses.

    *   "जर सर्किट ब्रेकर उघडे असेल तर, ते 503 Service Unavailable प्रतिसाद देते." (If the circuit breaker is open, it returns a 503 Service Unavailable response.) - This is also good. The comma after "तर" is standard practice.

    *   "सर्व विनंती मेटाडेटा लॉग केला जातो, एका डिस्ट्रिब्युटेड ट्रेसिंग बॅकएंडकडे, observability साठी." (All request metadata is logged to a distributed tracing backend for observability.) - This part feels a bit clunky with the commas. Let's rephrase. "सर्व विनंती मेटाडेटा लॉग केला जातो, निरीक्षणक्षमतेसाठी डिस्ट्रिब्युटेड ट्रेसिंग बॅकएंडकडे." This reordering sounds more natural in Marathi. The "साठी" (sāṭhī) phrase can come before the destination. Let's try that. "सर्व विनंती मेटाडेटा निरीक्षणक्षमतेसाठी एका डिस्ट्रिब्युटेड ट्रेसिंग बॅकएंडकडे लॉग केला जातो." This is much better. It's a single, flowing sentence.

4.  **Final Polish and Review:** Let's combine the refined sentences and do a final check.

    *   Sentence 1: "API गेटवे येणाऱ्या विनंत्या एका रेट लिमिटरमधून मार्गित करते, योग्य मायक्रोसर्व्हिसला पुढे पाठवण्यापूर्वी." (Looks good).
    *   Sentence 2: "जर सर्किट ब्रेकर उघडे असेल तर, ते 503 Service Unavailable प्रतिसाद देते." (Looks good).
    *   Sentence 3: "सर्व विनंती मेटाडेटा निरीक्षणक्षमतेसाठी एका डिस्ट्रिब्युटेड ट्रेसिंग बॅकएंडकडे लॉग केला जातो." (Looks good).

    Let's combine them into one paragraph.

    "API गेटवे येणाऱ्या विनंत्या एका रेट लिमिटरमधून मार्गित करते, योग्य मायक्रोसर्व्हिसला पुढे पाठवण्यापूर्वी. जर सर्किट ब्रेकर उघडे असेल तर, ते 503 Service Unavailable प्रतिसाद देते. सर्व विनंती मेटाडेटा निरीक्षणक्षमतेसाठी एका डिस्ट्रिब्युटेड ट्रेसिंग बॅकएंडकडे लॉग केला जातो."

    This seems correct, natural, and follows all instructions. The technical terms (API gateway, rate limiter, microservice, circuit breaker, 503 Service Unavailable, request metadata, distributed tracing backend, observability) are all handled appropriately. "metadata" is sometimes transliterated as "मेटाडेटा" and sometimes as "मेटा डेटा". "मेटाडेटा" is more common. "backend" is almost always "बॅकएंड". The verbs and sentence structure are grammatically sound in Marathi. The final output should be just this text.
````

</details>

**Output:**

````
API गेटवे येणाऱ्या विनंत्या एका रेट लिमिटरमधून मार्गित करते, योग्य मायक्रोसर्व्हिसला पुढे पाठवण्यापूर्वी. जर सर्किट ब्रेकर उघडे असेल तर, ते 503 Service Unavailable प्रतिसाद देते. सर्व विनंती मेटाडेटा निरीक्षणक्षमतेसाठी एका डिस्ट्रिब्युटेड ट्रेसिंग बॅकएंडकडे लॉग केला जातो.
````

### Odia

**Prompt:** Translate the following paragraph into Odia, using native Odia script. Preserve technical terms in English where no standard native equivalent exists. Output only the Odia translation, nothing else.

Text: "The API gateway routes incoming requests through a rate limiter before forwarding them to the appropriate microservice. If the circuit breaker is open, it returns a 503 Service Unavailable response. All request metadata is logged to a distributed tracing backend for observability."

*2131 tok | 17.22s | 123.8 t/s | think: 8446 chars | finish: stop*

<details><summary>Thinking (8446 chars)</summary>

````
1.  **Deconstruct the Request:**

    *   **Source Text:** "The API gateway routes incoming requests through a rate limiter before forwarding them to the appropriate microservice. If the circuit breaker is open, it returns a 503 Service Unavailable response. All request metadata is logged to a distributed tracing backend for observability."
    *   **Target Language:** Odia.
    *   **Script:** Native Odia script (Odia Lipi).
    *   **Constraint 1:** Preserve technical terms in English where no standard native equivalent exists.
    *   **Constraint 2:** Output *only* the Odia translation. No extra text, no explanations, no "Here is the translation:".
    *   **Constraint 3:** The translation must be accurate and natural-sounding in Odia.

2.  **Analyze the Source Text for Technical Terms:**

    *   `API gateway`: This is a very specific software architecture component. Is there a standard Odia equivalent? A quick mental check or search suggests not. "API" is universally known. "Gateway" could be translated, but "API gateway" as a single term is best left as is. So, `API gateway` stays.
    *   `routes`: A common verb, but in this context, it's a technical term. It can be translated as "route କରେ" (routes), "ପଠାଇଥାଏ" (sends), "forward କରେ" (forwards). "Route କରେ" is a direct and good translation.
    *   `incoming requests`: "incoming" can be "ଆସିଥିବା" (incoming), "ଆସିବାକୁ ଥିବା" (coming). "requests" is a technical term. It can be translated as "requests" (using the English word), "ଆବେଦନ" (application, as in a request), or "ଅନୁରୋଧ" (request). "Request" is the most common and direct term used in Odia tech circles. So, "ଆସିଥିବା requests" is a good choice.
    *   `rate limiter`: Another specific component. No standard Odia equivalent. Should be kept in English.
    *   `forwarding`: "forwarding" can be translated as "forward କରିବା" (to forward) or "ପଠାଇବା" (to send). "Forward କରିବା" is a perfect cognate and fits well.
    *   `appropriate microservice`: "appropriate" -> "ଉପଯୁକ୍ତ" (appropriate), "ସଠିକ୍" (correct). "microservice" is a key technical term. While one could try to translate it, it's almost universally used as "microservice" in Odia technical contexts. So, "ଉପଯୁକ୍ତ microservice" is the best choice.
    *   `circuit breaker`: Another specific design pattern/component. No standard Odia equivalent. Keep in English.
    *   `is open`: "is" -> "ଅଛି" (is). "open" -> "ଖୋଲା ଅଛି" (is open). So, "circuit breaker ଖୋଲା ଅଛି".
    *   `returns a 503 Service Unavailable response`: "returns" -> "ଫେରସ୍ତ କରେ" (returns). "503 Service Unavailable" is a specific HTTP status code and message. The standard practice is to keep the code and message in English. So, "503 Service Unavailable response" stays as is.
    *   `All request metadata`: "All" -> "ସମସ୍ତ" (all). "request metadata" -> "request metadata". "metadata" is another one of those terms. "Metadata" is the standard. "request metadata" is also standard. So, "ସମସ୍ତ request metadata".
    *   `is logged`: "is" -> "ଅଛି" (is). "logged" -> "log କରାଯାଏ" (is logged), "ଲିପିବଦ୍ଧ କରାଯାଏ" (is recorded/written down). "Log କରାଯାଏ" is a direct and common translation in this context.
    *   `distributed tracing backend`: "distributed tracing" is a specific technique. No standard Odia equivalent. Keep in English. "backend" is also a technical term. It's often used as "backend" in Odia, or sometimes "ପଛାତ୍ ଭାଗ" (back part) or "ସର୍ଭର" (server). "Backend" is the most precise and common term here. So, "distributed tracing backend" is the best choice.
    *   `for observability`: "for" -> "ପାଇଁ" (for). "observability" is a key DevOps/monitoring concept. No standard Odia equivalent. The English word "observability" is used directly.

3.  **Synthesize the Translation (Sentence by Sentence):**

    *   **Sentence 1:** "The API gateway routes incoming requests through a rate limiter before forwarding them to the appropriate microservice."
        *   "The API gateway" -> "API gateway"
        *   "routes" -> "route କରେ"
        *   "incoming requests" -> "ଆସିଥିବା requests"
        *   "through a rate limiter" -> "ଏକ rate limiter ମାଧ୍ୟମରେ" (through a rate limiter). "ମାଧ୍ୟମରେ" is the perfect word for "through".
        *   "before forwarding them" -> "forward କରିବା ପୂର୍ବରୁ" (before forwarding). "them" is implied in the verb structure.
        *   "to the appropriate microservice" -> "ଉପଯୁକ୍ତ microservice କୁ" (to the appropriate microservice). "କୁ" is the dative case marker for direction.
        *   **Putting it together:** "API gateway ଆସିଥିବା requests କୁ ଏକ rate limiter ମାଧ୍ୟମରେ route କରେ, ଉପଯୁକ୍ତ microservice କୁ forward କରିବା ପୂର୍ବରୁ।" This sounds a bit clunky. Let's try rephrasing.
        *   Alternative: "API gateway ଆସିଥିବା requests କୁ ଏକ rate limiter ମାଧ୍ୟମରେ ପଠାଇଥାଏ, ଉପଯୁକ୍ତ microservice କୁ forward କରିବା ପୂର୍ବରୁ।" "ପଠାଇଥାଏ" (sends) flows better than "route କରେ... forward କରିବା ପୂର୍ବରୁ".
        *   Let's try another structure: "API gateway ଆସିଥିବା requests କୁ ଏକ rate limiter ମାଧ୍ୟମରେ route କରେ ଏବଂ ଉପଯୁକ୍ତ microservice କୁ forward କରେ।" (API gateway routes incoming requests through a rate limiter and forwards them to the appropriate microservice). The "before" is lost, but the meaning is preserved. The original has a specific sequence.
        *   Let's stick closer to the original. "API gateway ଆସିଥିବା requests କୁ ଏକ rate limiter ମାଧ୍ୟମରେ route କରେ, ଉପଯୁକ୍ତ microservice କୁ forward କରିବା ପୂର୍ବରୁ।" This is actually grammatically correct and natural. The comma helps. Let's refine it slightly. "API gateway ଆସୁଥିବା requests କୁ ଏକ rate limiter ମାଧ୍ୟମରେ route କରେ, ଉପଯୁକ୍ତ microservice କୁ forward କରିବା ପୂର୍ବରୁ।" "ଅସୁଥିବା" (incoming) feels slightly more natural than "ଆସିଥିବା" in this context. Let's go with that.
        *   Final check for sentence 1: "API gateway ଆସୁଥିବା requests କୁ ଏକ rate limiter ମାଧ୍ୟମରେ route କରେ, ଉପଯୁକ୍ତ microservice କୁ forward କରିବା ପୂର୍ବରୁ।" This is good. It's accurate and flows well.

    *   **Sentence 2:** "If the circuit breaker is open, it returns a 503 Service Unavailable response."
        *   "If the circuit breaker is open" -> "ଯଦି circuit breaker ଖୋଲା ଅଛି" (If circuit breaker is open). Straightforward.
        *   "it returns" -> "ଏହା ଫେରସ୍ତ କରେ" (it returns). "ଏହା" (it) is the subject.
        *   "a 503 Service Unavailable response" -> "ଏକ 503 Service Unavailable response". "ଏକ" (a) is the indefinite article.
        *   **Putting it together:** "ଯଦି circuit breaker ଖୋଲା ଅଛି, ଏହା ଏକ 503 Service Unavailable response ଫେରସ୍ତ କରେ।" This is perfect. It's direct, accurate, and uses standard terminology.

    *   **Sentence 3:** "All request metadata is logged to a distributed tracing backend for observability."
        *   "All request metadata" -> "ସମସ୍ତ request metadata".
        *   "is logged" -> "log କରାଯାଏ" (is logged).
        *   "to a distributed tracing backend" -> "ଏକ distributed tracing backend କୁ" (to a distributed tracing backend).
        *   "for observability" -> "observability ପାଇଁ".
        *   **Putting it together:** "ସମସ୍ତ request metadata ଏକ distributed tracing backend କୁ log କରାଯାଏ, observability ପାଇଁ।" This is grammatically correct and flows well. The word order is natural for Odia.

4.  **Final Review and Assembly:**

    *   Sentence 1: API gateway ଆସୁଥିବା requests କୁ ଏକ rate limiter ମାଧ୍ୟମରେ route କରେ, ଉପଯୁକ୍ତ microservice କୁ forward କରିବା ପୂର୍ବରୁ।
    *   Sentence 2: ଯଦି circuit breaker ଖୋଲା ଅଛି, ଏହା ଏକ 503 Service Unavailable response ଫେରସ୍ତ କରେ।
    *   Sentence 3: ସମସ୍ତ request metadata ଏକ distributed tracing backend କୁ log କରାଯାଏ, observability ପାଇଁ।

    The three sentences combine to form the full paragraph. I need to make sure the spacing and punctuation are correct in Odia script. The comma (,) and period (.) are used similarly.

    Let's do one last check against the constraints:
    *   **Translate to Odia?** Yes.
    *   **Native Odia script?** Yes.
    *   **Preserve technical terms in English?** Yes: API gateway, rate limiter, microservice, circuit breaker, 503 Service Unavailable, request metadata, distributed tracing backend, observability. This is correct as these terms are standard in the Odia tech community.
    *   **Output only the Odia translation?** Yes, I will make sure my final output is *just* the text.

    The translation looks solid. The grammar is correct, the word choices are appropriate for a technical context, and the constraints are met. I'm ready to generate the final output.
````

</details>

**Output:**

````
API gateway ଆସୁଥିବା requests କୁ ଏକ rate limiter ମାଧ୍ୟମରେ route କରେ, ଉପଯୁକ୍ତ microservice କୁ forward କରିବା ପୂର୍ବରୁ। ଯଦି circuit breaker ଖୋଲା ଅଛି, ଏହା ଏକ 503 Service Unavailable response ଫେରସ୍ତ କରେ। ସମସ୍ତ request metadata ଏକ distributed tracing backend କୁ log କରାଯାଏ, observability ପାଇଁ।
````

### Punjabi

**Prompt:** Translate the following paragraph into Punjabi, using native Punjabi script. Preserve technical terms in English where no standard native equivalent exists. Output only the Punjabi translation, nothing else.

Text: "The API gateway routes incoming requests through a rate limiter before forwarding them to the appropriate microservice. If the circuit breaker is open, it returns a 503 Service Unavailable response. All request metadata is logged to a distributed tracing backend for observability."

*2166 tok | 17.45s | 124.1 t/s | think: 8000 chars | finish: stop*

<details><summary>Thinking (8000 chars)</summary>

````
1.  **Deconstruct the English Paragraph:** I'll break down the original text into its core components and identify key terms.

    *   "The API gateway routes incoming requests..."
        *   "API gateway": This is a technical term. It doesn't have a standard, universally accepted Punjabi equivalent. The best practice is to keep it in English. So, "API gateway".
        *   "routes": This means directs or sends. "ਰਾਊਟ ਕਰਦਾ ਹੈ" (ra-ut karda hai) or "ਭੇਜਦਾ ਹੈ" (bhejda hai) are good options. "ਰਾਊਟ ਕਰਦਾ ਹੈ" is more technical and common in this context.
        *   "incoming requests": "ਆਉਣ ਵਾਲੀਆਂ ਬੇਨਤੀਆਂ" (aaun waaliyan benatiyan). "ਬੇਨਤੀਆਂ" (benatiyan) is the standard word for "requests".

    *   "...through a rate limiter..."
        *   "rate limiter": Another technical term. No standard Punjabi equivalent. Keep it in English: "rate limiter".
        *   "through": "ਰਾਹੀਂ" (raahi).

    *   "...before forwarding them to the appropriate microservice."
        *   "before forwarding": "ਅੱਗੇ ਭੇਜਣ ਤੋਂ ਪਹਿਲਾਂ" (agge bhejan toh pehlan). This is a direct and clear translation.
        *   "them": Refers to "requests". In Punjabi, this can be implied or stated as "ਉਹਨਾਂ" (unhan). The implied form is more natural.
        *   "to the appropriate": "ਢੁਕਵੇਂ" (dhukwein) or "ਉਚਿਤ" (uchit). "ਢੁਕਵੇਂ" is a good fit.
        *   "microservice": A very common technical term. While one could try to coin a term like "ਸੂਖਮ ਸੇਵਾ" (sookham seva), it's not standard practice. The industry standard is to keep it as "microservice". So, "microservice".

    *   "If the circuit breaker is open..."
        *   "If": "ਜੇਕਰ" (jekar).
        *   "the circuit breaker": This is a key technical term from the Circuit Breaker pattern. It doesn't have a native equivalent. The standard practice is to keep it as "circuit breaker".
        *   "is open": "ਖੁੱਲ੍ਹਾ ਹੈ" (khulha hai). This is the standard way to describe the state of a circuit breaker.

    *   "...it returns a 503 Service Unavailable response."
        *   "it returns": "ਇਹ ਵਾਪਸ ਕਰਦਾ ਹੈ" (eh waapas karda hai). "ਵਾਪਸ ਕਰਦਾ ਹੈ" is the standard term for "returns" in a programming context.
        *   "a 503 Service Unavailable response": This is an HTTP status code and its associated phrase. The number "503" and the phrase "Service Unavailable" are standard technical terms. They are almost always kept in English in technical documentation and discussions within the Punjabi-speaking tech community. So, "503 Service Unavailable response". "ਰਿਸਪਾਂਸ" (response) is also a common English loanword used in this context, so it's fine to keep it.

    *   "All request metadata is logged..."
        *   "All request metadata": "ਸਾਰੀ ਬੇਨਤੀ ਮੈਟਾਡੇਟਾ" (sari benati metadata). "Metadata" is another technical term that is universally used in its English form. "ਸਾਰੀ" (sari) means "all".
        *   "is logged": "ਲੌਗ ਕੀਤਾ ਜਾਂਦਾ ਹੈ" (log kita janda hai). The passive voice "is logged" is best translated using the passive construction "ਲੌਗ ਕੀਤਾ ਜਾਂਦਾ ਹੈ" (log kita janda hai) or the more active "ਲੌਗ ਕਰਦਾ ਹੈ" (log karda hai, if an actor is implied, like "the system logs it"). "ਲੌਗ ਕੀਤਾ ਜਾਂਦਾ ਹੈ" is more direct and fits the tone.

    *   "...to a distributed tracing backend..."
        *   "to a": "ਨੂੰ" (nu).
        *   "distributed tracing": A technical term. Keep it as "distributed tracing".
        *   "backend": Another technical term. The Punjabi word "ਪਿਛਲਾ ਪਾਸਾ" (pichhla passaa) or "ਬੈਕਐਂਡ" (backend) are both used. "ਬੈਕਐਂਡ" is more common and concise in a tech context. Let's go with "ਬੈਕਐਂਡ".

    *   "...for observability."
        *   "for": "ਲਈ" (lai).
        *   "observability": This is a core concept in modern software engineering. While one could try to translate it ("ਨਿਰੀਖਣਯੋਗਤਾ" - nirikshan-yogta), the technical community overwhelmingly uses the English term "observability". It's a key term to preserve.

2.  **Assemble the Punjabi Sentence:** Now, I'll put the pieces together, ensuring correct grammar and flow.

    *   **Sentence 1:** "The API gateway routes incoming requests through a rate limiter before forwarding them to the appropriate microservice."
        *   Start with the subject: "API gateway"
        *   Add the verb: "ਰਾਊਟ ਕਰਦਾ ਹੈ"
        *   Add the object: "ਆਉਣ ਵਾਲੀਆਂ ਬੇਨਤੀਆਂ"
        *   Add the prepositional phrase: "ਰਾਹੀਂ rate limiter"
        *   Add the subordinate clause: "ਢੁਕਵੇਂ microservice ਨੂੰ ਅੱਗੇ ਭੇਜਣ ਤੋਂ ਪਹਿਲਾਂ"
        *   Combine: "API gateway ਆਉਣ ਵਾਲੀਆਂ ਬੇਨਤੀਆਂ ਨੂੰ rate limiter ਰਾਹੀਂ ਢੁਕਵੇਂ microservice ਨੂੰ ਅੱਗੇ ਭੇਜਣ ਤੋਂ ਪਹਿਲਾਂ ਰਾਊਟ ਕਰਦਾ ਹੈ।"
        *   *Self-correction:* The word order "ਰਾਊਟ ਕਰਦਾ ਹੈ... ਅੱਗੇ ਭੇਜਣ ਤੋਂ ਪਹਿਲਾਂ" feels a bit clunky. Let's rephrase. "API gateway ਆਉਣ ਵਾਲੀਆਂ ਬੇਨਤੀਆਂ ਨੂੰ ਢੁਕਵੇਂ microservice ਨੂੰ ਅੱਗੇ ਭੇਜਣ ਤੋਂ ਪਹਿਲਾਂ rate limiter ਰਾਹੀਂ ਰਾਊਟ ਕਰਦਾ ਹੈ।" This flows better. Let's try another variant: "API gateway ਆਉਣ ਵਾਲੀਆਂ ਬੇਨਤੀਆਂ ਨੂੰ rate limiter ਰਾਹੀਂ ਢੁਕਵੇਂ microservice ਤੱਕ ਪਹੁੰਚਾਉਂਦਾ ਹੈ।" The phrase "ਪਹੁੰਚਾਉਂਦਾ ਹੈ" (pahuncha-unda hai) is a good alternative for "routes" or "forwarding". It implies successful delivery. Let's stick with the original "ਰਾਊਟ ਕਰਦਾ ਹੈ" as it's a closer match to the source text, but re-order for clarity.
        *   Final version for sentence 1: "API gateway ਆਉਣ ਵਾਲੀਆਂ ਬੇਨਤੀਆਂ ਨੂੰ rate limiter ਰਾਹੀਂ ਢੁਕਵੇਂ microservice ਨੂੰ ਅੱਗੇ ਭੇਜਣ ਤੋਂ ਪਹਿਲਾਂ ਰਾਊਟ ਕਰਦਾ ਹੈ।" This is good.

    *   **Sentence 2:** "If the circuit breaker is open, it returns a 503 Service Unavailable response."
        *   Start with the condition: "ਜੇਕਰ circuit breaker ਖੁੱਲ੍ਹਾ ਹੈ,"
        *   Add the result: "ਤਾਂ ਇਹ 503 Service Unavailable response ਵਾਪਸ ਕਰਦਾ ਹੈ।"
        *   *Self-correction:* The "ਤਾਂ" (then) is often optional in Punjabi conditional sentences but can add clarity. Let's include it. "ਇਹ 503 Service Unavailable response ਵਾਪਸ ਕਰਦਾ ਹੈ" is also perfectly fine without "ਤਾਂ". Let's go with the more concise version.
        *   Final version for sentence 2: "ਜੇਕਰ circuit breaker ਖੁੱਲ੍ਹਾ ਹੈ, ਤਾਂ ਇਹ 503 Service Unavailable response ਵਾਪਸ ਕਰਦਾ ਹੈ।"

    *   **Sentence 3:** "All request metadata is logged to a distributed tracing backend for observability."
        *   Start with the subject: "ਸਾਰੀ ਬੇਨਤੀ ਮੈਟਾਡੇਟਾ"
        *   Add the verb: "ਲੌਗ ਕੀਤਾ ਜਾਂਦਾ ਹੈ"
        *   Add the destination: "distributed tracing ਬੈਕਐਂਡ ਨੂੰ"
        *   Add the purpose: "ਨਿਰੀਖਣਯੋਗਤਾ ਲਈ"
        *   Combine: "ਸਾਰੀ ਬੇਨਤੀ ਮੈਟਾਡੇਟਾ distributed tracing ਬੈਕਐਂਡ ਨੂੰ ਲੌਗ ਕੀਤਾ ਜਾਂਦਾ ਹੈ ਨਿਰੀਖਣਯੋਗਤਾ ਲਈ।"
        *   *Self-correction:* The word order is slightly off. The "for" part should come after the main action. "ਸਾਰੀ ਬੇਨਤੀ ਮੈਟਾਡੇਟਾ ਨਿਰੀਖਣਯੋਗਤਾ ਲਈ distributed tracing ਬੈਕਐਂਡ ਨੂੰ ਲੌਗ ਕੀਤਾ ਜਾਂਦਾ ਹੈ।" This sounds more natural.
        *   Let's check the technical terms again: "metadata", "distributed tracing", "backend", "observability". All are correctly kept in English as per the instructions.
        *   Final version for sentence 3: "ਸਾਰੀ ਬੇਨਤੀ ਮੈਟਾਡੇਟਾ ਨਿਰੀਖਣਯੋਗਤਾ ਲਈ distributed tracing ਬੈਕਐਂਡ ਨੂੰ ਲੌਗ ਕੀਤਾ ਜਾਂਦਾ ਹੈ।"

3.  **Final Review:** Read the complete translated paragraph to ensure it's coherent, grammatically correct, and follows all instructions.

    *   "API gateway ਆਉਣ ਵਾਲੀਆਂ ਬੇਨਤੀਆਂ ਨੂੰ rate limiter ਰਾਹੀਂ ਢੁਕਵੇਂ microservice ਨੂੰ ਅੱਗੇ ਭੇਜਣ ਤੋਂ ਪਹਿਲਾਂ ਰਾਊਟ ਕਰਦਾ ਹੈ। ਜੇਕਰ circuit breaker ਖੁੱਲ੍ਹਾ ਹੈ, ਤਾਂ ਇਹ 503 Service Unavailable response ਵਾਪਸ ਕਰਦਾ ਹੈ। ਸਾਰੀ ਬੇਨਤੀ ਮੈਟਾਡੇਟਾ ਨਿਰੀਖਣਯੋਗਤਾ ਲਈ distributed tracing ਬੈਕਐਂਡ ਨੂੰ ਲੌਗ ਕੀਤਾ ਜਾਂਦਾ ਹੈ।"

    *   **Checklist:**
        *   Is it in native Punjabi script? Yes.
        *   Are technical terms preserved in English? Yes ("API gateway", "rate limiter", "microservice", "circuit breaker", "503 Service Unavailable response", "metadata", "distributed tracing", "backend", "observability").
        *   Is the output *only* the translation? Yes.
        *   Does it accurately convey the meaning? Yes. The flow is natural for a technical context.

This detailed process ensures all constraints are met and the final translation is accurate and contextually appropriate.
````

</details>

**Output:**

````
API gateway ਆਉਣ ਵਾਲੀਆਂ ਬੇਨਤੀਆਂ ਨੂੰ rate limiter ਰਾਹੀਂ ਢੁਕਵੇਂ microservice ਨੂੰ ਅੱਗੇ ਭੇਜਣ ਤੋਂ ਪਹਿਲਾਂ ਰਾਊਟ ਕਰਦਾ ਹੈ। ਜੇਕਰ circuit breaker ਖੁੱਲ੍ਹਾ ਹੈ, ਤਾਂ ਇਹ 503 Service Unavailable response ਵਾਪਸ ਕਰਦਾ ਹੈ। ਸਾਰੀ ਬੇਨਤੀ ਮੈਟਾਡੇਟਾ ਨਿਰੀਖਣਯੋਗਤਾ ਲਈ distributed tracing ਬੈਕਐਂਡ ਨੂੰ ਲੌਗ ਕੀਤਾ ਜਾਂਦਾ ਹੈ।
````

### Tamil

**Prompt:** Translate the following paragraph into Tamil, using native Tamil script. Preserve technical terms in English where no standard native equivalent exists. Output only the Tamil translation, nothing else.

Text: "The API gateway routes incoming requests through a rate limiter before forwarding them to the appropriate microservice. If the circuit breaker is open, it returns a 503 Service Unavailable response. All request metadata is logged to a distributed tracing backend for observability."

*3538 tok | 28.04s | 126.2 t/s | think: 12386 chars | finish: stop*

<details><summary>Thinking (12386 chars)</summary>

````
1.  **Deconstruct the English Paragraph:** I'll break down the original text sentence by sentence, and even clause by clause, to understand its meaning and identify key terms.

    *   **Sentence 1:** "The API gateway routes incoming requests through a rate limiter before forwarding them to the appropriate microservice."
        *   "API gateway": This is a standard technical term. No direct Tamil equivalent. Keep it as "API gateway".
        *   "routes": "வழிநடத்துகிறது" (vazhinaduthugiradhu) or "அனுப்புகிறது" (anupagkiradhu). "வழிநடத்துகிறது" is a bit more formal and fits the context of routing.
        *   "incoming requests": "உள்வரும் கோரிக்கைகள்" (ulvarum korikkaigal). "கோரிக்கைகள்" (korikkaigal) is the standard word for "requests". "உள்வரும்" (ulvarum) means "incoming".
        *   "through a rate limiter": "விகிதக் கட்டுப்படுத்தி வழியாக" (varidhak kattuppaduththi vazhiyaaga). "Rate limiter" is a technical term. "விகிதக் கட்டுப்படுத்தி" is the standard, well-established Tamil equivalent. It's crucial to use this instead of trying to transliterate "rate limiter". "வழியாக" (vazhiyaaga) means "through".
        *   "before forwarding": "அனுப்புவதற்கு முன்" (anupadhukku mun). "அனுப்ப" (anupappa) is "to forward/send". The "-தற்கு முன்" (-thadharku mun) suffix means "before doing...".
        *   "them": This refers to "requests". In Tamil, this is often implied by the verb's conjugation, but can be explicitly stated as "அவற்றை" (avattrai).
        *   "to the appropriate microservice": "சரியான மைக்ரோ சர்வீஸிற்கு" (saridhana micro service-irkku). "சரியான" (saridhana) means "appropriate/correct". "மைக்ரோ சர்வீஸ்" (micro service) is a technical term. While one *could* try to create a Tamil equivalent, it's far more common and standard in the Tamil tech community to use the English term directly. The "-இற்கு" (-irkku) suffix is the dative case, indicating the destination ("to the...").

    *   **Sentence 2:** "If the circuit breaker is open, it returns a 503 Service Unavailable response."
        *   "If... is open": "எனில்... திறந்திருந்தால்" (enil... thiranthirundhal). "எனில்" (enil) is "if". "திறந்திருந்தால்" (thiranthirundhal) is "is open" (past participle + conditional).
        *   "circuit breaker": Another standard technical term. "சர்க்யூட் பிரேக்கர்" (sarikyut breaker) is the common transliteration. It's better than trying to create a literal translation like "சுற்றுப் பாதை முறிப்பான்" which would be clunky and not recognized by developers.
        *   "it returns": "அது திருப்பி அனுப்புகிறது" (adhu thiruppi anupagkiradhu) or "அது வழங்குகிறது" (adhu vazhangugiradhu). "வழங்குகிறது" (vazhangugiradhu) is a very common and professional-sounding verb for "returns" or "provides" in a technical context.
        *   "a 503 Service Unavailable response": "503 சேவை கிடைக்கவில்லை என்ற பதில்" (503 sevai kidadhikadhadhu endra badhil). Let's break this down further.
            *   "503": Keep the number as is.
            *   "Service Unavailable": This is a standard HTTP status code message. The official, universally understood translation is "சேவை கிடைக்கவில்லை" (sevai kidadhikadhadhu). Using this is critical for interoperability and clarity.
            *   "response": "பதில்" (badhil) is the correct word.
            *   Putting it together: "503 சேவை கிடைக்கவில்லை என்ற பதில்" is a good, literal translation. A more natural-sounding way might be "503 சேவை கிடைக்கவில்லை என்ற பதில் குறியீடு" (503 sevai kidadhikadhadhu endra badhil koondu - "response code"), but the prompt asks to translate the *text*, and "response" is a noun here. "பதில்" is a perfectly fine and direct translation. Let's stick with "503 சேவை கிடைக்கவில்லை என்ற பதில்". The "என்ற" (endra) part, meaning "named" or "called", connects the number and message to the word "response".

    *   **Sentence 3:** "All request metadata is logged to a distributed tracing backend for observability."
        *   "All request metadata": "அனைத்து கோரிக்கை மெட்டாடேட்டா" (anmai korikkai metatadta). "அனைத்து" (anmai) is "all". "கோரிக்கை" (korikkai) is "request". "மெட்டாடேட்டா" (metatadta) is a technical term. While there might be attempts at a Tamil equivalent, "மெட்டாடேட்டா" is universally used and understood in the Tamil tech community. It's best to preserve it.
        *   "is logged": "பதிவு செய்யப்படுகிறது" (padivu seiyappadugiradhu). This is the standard passive voice construction for "is logged". "பதிவு" (padivu) is "log/record". "செய்யப்படுகிறது" (seiyappadugiradhu) is the passive form of "to do".
        *   "to a distributed tracing backend": "பரவலாக்கப்பட்ட தடமறிதல் பின்முனைக்கு" (paravalappaduthappatta thadamarithal pinmunirkku).
            *   "distributed tracing": "பரவலாக்கப்பட்ட தடமறிதல்" (paravalappaduthappatta thadamarithal) is the standard, established Tamil term for this. "பரவலாக்கப்பட்ட" (paravalappaduthappatta) is "distributed". "தடமறிதல்" (thadamarithal) is "tracing".
            *   "backend": "பின்முனை" (pinmunai) is the standard term for "backend".
            *   "to the...": "-க்கு" (-kkku) suffix.
        *   "for observability": "கண்காணிப்பிற்காக" (kannakkuppirkkaaga). "கண்காணிப்பு" (kannakkuppu) is "observability" or "monitoring". "க்காக" (-kkaaga) is the suffix for "for the purpose of".

2.  **Assemble the Tamil Translation:** Now, I'll put the pieces together, ensuring correct grammar, flow, and punctuation.

    *   **Sentence 1:** "API gateway உள்வரும் கோரிக்கைகளை விகிதக் கட்டுப்படுத்தி வழியாக அனுப்பி, சரியான மைக்ரோ சர்வீஸிற்கு அனுப்புகிறது."
        *   Let's refine this. "வழிநடத்துகிறது" (vazhinaduthugiradhu) might be better than "அனுப்புகிறது" (anupagkiradhu) for "routes". Let's try combining the verbs. "API gateway உள்வரும் கோரிக்கைகளை விகிதக் கட்டுப்படுத்தி வழியாக அனுப்பி, சரியான மைக்ரோ சர்வீஸிற்கு வழிநடத்துகிறது." This sounds a bit clunky.
        *   How about a more direct structure? "API gateway உள்வரும் கோரிக்கைகளை விகிதக் கட்டுப்படுத்தி வழியாக அனுப்பி, பின்னர் அவற்றை சரியான மைக்ரோ சர்வீஸிற்கு அனுப்புகிறது." (API gateway sends incoming requests through the rate limiter and then sends them to the appropriate microservice.) The word "பின்னர்" (pinnal - "then") adds clarity but isn't in the original.
        *   Let's try another structure that's very common in Tamil technical writing: "API gateway உள்வரும் கோரிக்கைகளை விகிதக் கட்டுப்படுத்தி வழியாக அனுப்பி, பின்னர் சரியான மைக்ரோ சர்வீஸிற்கு அனுப்புகிறது." This is good.
        *   Let's try to be even more concise. "API gateway உள்வரும் கோரிக்கைகளை விகிதக் கட்டுப்படுத்தி வழியாக சரியான மைக்ரோ சர்வீஸிற்கு அனுப்புகிறது." This combines the two actions (routing through limiter, forwarding to service) into a single, flowing sentence. It's elegant and accurate. I'll go with this one.

    *   **Sentence 2:** "சர்க்யூட் பிரேக்கர் திறந்திருந்தால், அது 503 சேவை கிடைக்கவில்லை என்ற பதிலைத் திருப்பி அளிக்கிறது."
        *   "it returns a 503 Service Unavailable response". "அது" (adhu - it) is good. "வழங்குகிறது" (vazhangugiradhu) is also good. "திருப்பி அளிக்கிறது" (thiruppi aligiradhu) is a bit redundant ("returns back"). Let's use "வழங்குகிறது" (vazhangugiradhu) or "அனுப்புகிறது" (anupagkiradhu). "பதிலை வழங்குகிறது" (badhilai vazhangugiradhu - "provides the response") is very natural.
        *   Let's re-examine the first part: "If the circuit breaker is open". "சர்க்யூட் பிரேக்கர் திறந்திருந்தால்" is perfect.
        *   Let's combine: "சர்க்யூட் பிரேக்கர் திறந்திருந்தால், அது 503 சேவை கிடைக்கவில்லை என்ற பதிலைத் திருப்பி அளிக்கிறது." or "சர்க்யூட் பிரேக்கர் திறந்திருந்தால், அது 503 சேவை கிடைக்கவில்லை என்ற பதிலைத் திருப்பி அனுப்புகிறது." or "சர்க்யூட் பிரேக்கர் திறந்திருந்தால், அது 503 சேவை கிடைக்கவில்லை என்ற பதிலைத் திருப்பி அளிக்கிறது."
        *   The last one, "திருப்பிக் கொடுக்கிறது" (thiruppi kodukkiradhu), is also very common and natural. Let's use that. "சர்க்யூட் பிரேக்கர் திறந்திருந்தால், அது 503 சேவை கிடைக்கவில்லை என்ற பதிலைத் திருப்பி அளிக்கிறது." Wait, "திருப்பிக் கொடுக்கிறது" is better. "சர்க்யூட் பிரேக்கர் திறந்திருந்தால், அது 503 சேவை கிடைக்கவில்லை என்ற பதிலைத் திருப்பி அளிக்கிறது." Let's stick with "வழங்குகிறது" (vazhangugiradhu) as it sounds slightly more formal and technical. "சர்க்யூட் பிரேக்கர் திறந்திருந்தால், அது 503 சேவை கிடைக்கவில்லை என்ற பதிலைத் திருப்பி அளிக்கிறது." This is a bit wordy. Let's simplify. "சர்க்யூட் பிரேக்கர் திறந்திருந்தால், அது 503 சேவை கிடைக்கவில்லை என்ற பதிலைத் திருப்பி அளிக்கிறது." How about "சர்க்யூட் பிரேக்கர் திறந்திருந்தால், அது 503 சேவை கிடைக்கவில்லை என்ற பதிலைத் திருப்பி அளிக்கிறது." No, that's not it.
        *   Let's go back to basics. "it returns a response". "அது பதிலைத் திருப்பி அளிக்கிறது" (adhu badhilai thiruppi aligiradhu). This is the most direct translation. "503 சேவை கிடைக்கவில்லை என்ற பதில்" is the object. So, "சர்க்யூட் பிரேக்கர் திறந்திருந்தால், அது 503 சேவை கிடைக்கவில்லை என்ற பதிலைத் திருப்பி அளிக்கிறது." This is grammatically correct and clear. Let's use it.

    *   **Sentence 3:** "அனைத்து கோரிக்கை மெட்டாடேட்டாவும் கண்காணிப்பிற்காக பரவலாக்கப்பட்ட தடமறிதல் பின்முனையில் பதிவு செய்யப்படுகின்றன."
        *   "All request metadata": "அனைத்து கோரிக்கை மெட்டாடேட்டா" (anmai korikkai metatadta). The "ஆ" (-aa) suffix makes it the subject of the sentence.
        *   "is logged": "பதிவு செய்யப்படுகின்றன" (padivu seiyappadugindrana). Since the subject "மெட்டாடேட்டா" (metatadta) is plural (conceptually), the verb should be in the plural form "அகின்றன" (agindrana). "பதிவு செய்யப்படுகின்றன" is the correct passive voice form for a plural subject.
        *   "to a distributed tracing backend": "பரவலாக்கப்பட்ட தடமறிதல் பின்முனையில்" (paravalappaduthappatta thadamarithal pinmunil). The "-இல்" (-il) suffix indicates location ("on/in/at"). "To" can be expressed with this locative case when it means "to a place of action". "பதிவு செய்யப்படுகின்றன... பின்முனையில்" (is logged on the backend) works perfectly.
        *   "for observability": "கண்காணிப்பிற்காக" (kannakkuppirkkaaga). This is a standard adverbial phrase.
        *   Putting it all together: "அனைத்து கோரிக்கை மெட்டாடேட்டாவும் கண்காணிப்பிற்காக பரவலாக்கப்பட்ட தடமறிதல் பின்முனையில் பதிவு செய்யப்படுகின்றன." This sounds perfect. It's formal, technically accurate, and uses standard terminology.

3.  **Final Review:** Read the complete Tamil text to check for flow, consistency, and accuracy.

    *   "API gateway உள்வரும் கோரிக்கைகளை விகிதக் கட்டுப்படுத்தி வழியாக சரியான மைக்ரோ சர்வீஸிற்கு அனுப்புகிறது. சர்க்யூட் பிரேக்கர் திறந்திருந்தால், அது 503 சேவை கிடைக்கவில்லை என்ற பதிலைத் திருப்பி அளிக்கிறது. அனைத்து கோரிக்கை மெட்டாடேட்டாவும் கண்காணிப்பிற்காக பரவலாக்கப்பட்ட தடமறிதல் பின்முனையில் பதிவு செய்யப்படுகின்றன."

    *   Let's re-evaluate the second sentence one last time. "it returns a 503 Service Unavailable response". Maybe "பதிலை வழங்குகிறது" is better than "பதிலைத் திருப்பி அளிக்கிறது". "சர்க்யூட் பிரேக்கர் திறந்திருந்தால், அது 503 சேவை கிடைக்கவில்லை என்ற பதிலைத் திருப்பி அளிக்கிறது." vs "சர்க்யூட் பிரேக்கர் திறந்திருந்தால், அது 503 சேவை கிடைக்கவில்லை என்ற பதிலைத் திருப்பி அளிக்கிறது." The second one is slightly more concise and common in technical writing. Let's stick with that.

    *   Let's re-evaluate the first sentence. "API gateway உள்வரும் கோரிக்கைகளை விகிதக் கட்டுப்படுத்தி வழியாக சரியான மைக்ரோ சர்வீஸிற்கு அனுப்புகிறது." This is good. It combines the two actions smoothly.

    *   The third sentence is solid.

    *   The final output should be just the Tamil text, as requested. I'll assemble the final string.

    *   Final check on terminology:
        *   API gateway -> API gateway (Correct)
        *   rate limiter -> விகிதக் கட்டுப்படுத்தி (Correct, standard term)
        *   microservice -> மைக்ரோ சர்வீஸ் (Correct, standard usage)
        *   circuit breaker -> சர்க்யூட் பிரேக்கர் (Correct, standard transliteration)
        *   503 Service Unavailable -> 503 சேவை கிடைக்கவில்லை (Correct, standard translation for the status message)
        *   response -> பதில் (Correct)
        *   metadata -> மெட்டாடேட்டா (Correct, standard usage)
        *   distributed tracing -> பரவலாக்கப்பட்ட தடமறிதல் (Correct, standard term)
        *   backend -> பின்முனை (Correct, standard term)
        *   observability -> கண்காணிப்பு (Correct, standard term)

    *   The translation is accurate, uses appropriate technical terminology, and flows naturally in Tamil. The structure is clear. I am ready to generate the final output.
````

</details>

**Output:**

````
ஏ.பி.ஐ. கேட்வே (API gateway) உள்வரும் கோரிக்கைகளை, விகிதக் கட்டுப்படுத்தி (rate limiter) வழியாக அனுப்பி, அவற்றை உரிய மைக்ரோ சர்வீஸிற்கு (microservice) வழிநடத்துகிறது. சர்க்யூட் பிரேக்கர் (circuit breaker) திறந்திருந்தால், அது 503 சேவை கிடைக்கவில்லை (Service Unavailable) என்ற பதிலைத் திருப்பி அளிக்கிறது. அனைத்து கோரிக்கை மெட்டாடேட்டாக்களும் (metadata), கண்காணிப்பிற்காக (observability), பரவலாக்கப்பட்ட தடமறிதல் பின்முனையில் (distributed tracing backend) பதிவு செய்யப்படுகின்றன.
````

### Telugu

**Prompt:** Translate the following paragraph into Telugu, using native Telugu script. Preserve technical terms in English where no standard native equivalent exists. Output only the Telugu translation, nothing else.

Text: "The API gateway routes incoming requests through a rate limiter before forwarding them to the appropriate microservice. If the circuit breaker is open, it returns a 503 Service Unavailable response. All request metadata is logged to a distributed tracing backend for observability."

*1889 tok | 15.38s | 122.8 t/s | think: 6286 chars | finish: stop*

<details><summary>Thinking (6286 chars)</summary>

````
1.  **Deconstruct the English Text:** I'll break down the original paragraph into smaller, manageable chunks.

    *   "The API gateway routes incoming requests through a rate limiter before forwarding them to the appropriate microservice."
    *   "If the circuit breaker is open, it returns a 503 Service Unavailable response."
    *   "All request metadata is logged to a distributed tracing backend for observability."

2.  **Analyze Each Chunk for Translation:**

    *   **Chunk 1: "The API gateway routes incoming requests through a rate limiter before forwarding them to the appropriate microservice."**
        *   **"API gateway"**: This is a standard technical term. Does a standard Telugu equivalent exist? Not really. "API" is universally understood. "Gateway" can be translated as "ద్వారం" (dwāram), but "API gateway" is almost always kept as "API gateway" in technical contexts in Telugu. So, I'll use "API gateway".
        *   **"routes"**: This means directs or sends. Good Telugu words are "పంపుతుంది" (pampūtundi - sends), "మార్గం చూపుతుంది" (mārgam sūcchūtundi - shows the path), or "రూట్ చేస్తుంది" (rūṭ kārtē - routes, a common anglicism). "రూట్ చేస్తుంది" is very common in this context, so I'll go with that.
        *   **"incoming requests"**: "వచ్చే అభ్యర్థనలు" (vachchē abhyarthanalu). This is a direct and accurate translation. "వచ్చే" (vachchē) means "coming" and "అభ్యర్థనలు" (abhyarthanalu) means "requests".
        *   **"through a rate limiter"**: "రేట్ లిమిటర్ ద్వారా" (rēṭ limittar dāryā). "Rate limiter" is another technical term. While one *could* try to translate it (e.g., "రేటు నియంత్రణ యంత్రం"), it's not standard practice. The community uses "rate limiter". "Limiter" is often kept as "limiter" or translated as "నియంత్రించేది" (niyātrinchēdi - the one that controls). "రేటు లిమిటర్ ద్వారా" is the most natural and common way to express this.
        *   **"before forwarding them"**: "పంపే ముందు" (pampā āgu). This is a standard Telugu temporal clause structure. "ముందు" (āgu) means "before". "పంపే" (pampā) is the gerund form of "send".
        *   **"to the appropriate microservice"**: "సరైన మైక్రోసర్వీస్‌కు" (sarīna microsarvīsku). "Microservice" is a key technical term. Again, no standard native equivalent. It's universally used as "microservice". "సరైన" (sarīna) means "appropriate" or "correct". "కు" (-ku) is the dative case marker, indicating the destination ("to").

        *   **Putting Chunk 1 together:** "API gateway వచ్చే అభ్యర్థనలను రేట్ లిమిటర్ ద్వారా పంపి, సరైన మైక్రోసర్వీస్‌కు రూట్ చేస్తుంది." This sounds natural. The structure `... ద్వారా పంపి, ... కు రూట్ చేస్తుంది` (send through X, then route to Y) is very common in technical Telugu.

    *   **Chunk 2: "If the circuit breaker is open, it returns a 503 Service Unavailable response."**
        *   **"If the circuit breaker is open"**: "సర్క్యూట్ బ్రేకర్ ఓపెన్ గా ఉంటే" (sirkīṭ brēkar ōpēn gā iṇḍē). "Circuit breaker" is a technical term, universally used as "circuit breaker". "Open" is "ఓపెన్ గా" (ōpēn gā) or "తెరిచి ఉంది" (terichi undē). "ఓపెన్ గా ఉంటే" is a very direct and common way to say "If... is open".
        *   **"it returns"**: "అది తిరిగి ఇస్తుంది" (adī tirigi dītī). "It" is "అది" (adī). "Returns" can be "తిరిగి ఇస్తుంది" (tirigi dītī) or "సమాధానం ఇస్తుంది" (samādhānaṁ dītī). In the context of a response, "తిరిగి ఇస్తుంది" is more fitting.
        *   **"a 503 Service Unavailable response"**: "503 Service Unavailable రెస్పాన్స్ ఇస్తుంది". "503" is a number. "Service Unavailable" is a standard HTTP status phrase. It's best to keep it in English as it's the exact terminology used in the protocol. So, "503 Service Unavailable" is the correct way to write it. "రెస్పాన్స్" (response) is the standard word for "response". So, "503 Service Unavailable రెస్పాన్స్" is the perfect way to phrase this.

        *   **Putting Chunk 2 together:** "సర్క్యూట్ బ్రేకర్ ఓపెన్ గా ఉంటే, అది 503 Service Unavailable రెస్పాన్స్ ఇస్తుంది." This is a direct, accurate, and standard translation.

    *   **Chunk 3: "All request metadata is logged to a distributed tracing backend for observability."**
        *   **"All request metadata"**: "అన్ని అభ్యర్థన మెటాడేటా". "All" is "అన్ని" (annee). "Request" is "అభ్యర్థన". "Metadata" is a technical term, universally used as "metadata". The structure "అభ్యర్థన మెటాడేటా" is perfect.
        *   **"is logged"**: "లాగ్ చేయబడుతుంది" (lāgṭ kārtādi). "To log" is "లాగ్ చేయడం" (lāgṭ cēyadam). The passive voice "is logged" translates to "లాగ్ చేయబడుతుంది" (lāgṭ kārtādi).
        *   **"to a distributed tracing backend"**: "డిస్ట్రిబ్యూటెడ్ ట్రేసింగ్ బ్యాకెండ్ కు". "Distributed tracing" is a technical concept, best kept as "distributed tracing". "Backend" is also a universal tech term, "బ్యాకెండ్" (bākend). "కు" (-ku) again indicates the destination.
        *   **"for observability"**: "పరిశీలన కోసం" (parīkṣaṇaṁ kūra). "Observability" is a modern technical term. While one could try "గమనించే సామర్థ్యం" (gaṁninche sāmarthyam), the community has largely adopted "observability". Using the English term is the most precise and common practice. "పరిశీలన కోసం" is the standard way to say "for observability/examination".

        *   **Putting Chunk 3 together:** "అన్ని అభ్యర్థన మెటాడేటా పరిశీలన కోసం డిస్ట్రిబ్యూటెడ్ ట్రేసింగ్ బ్యాకెండ్ కు లాగ్ చేయబడుతుంది." The word order is natural in Telugu.

3.  **Final Review and Assembly:** Now, I'll combine the translated chunks into a single paragraph and read it to ensure it flows well and is grammatically correct.

    *   "API gateway వచ్చే అభ్యర్థనలను రేట్ లిమిటర్ ద్వారా పంపి, సరైన మైక్రోసర్వీస్‌కు రూట్ చేస్తుంది. సర్క్యూట్ బ్రేకర్ ఓపెన్ గా ఉంటే, అది 503 Service Unavailable రెస్పాన్స్ ఇస్తుంది. అన్ని అభ్యర్థన మెటాడేటా పరిశీలన కోసం డిస్ట్రిబ్యూటెడ్ ట్రేసింగ్ బ్యాకెండ్ కు లాగ్ చేయబడుతుంది."

    This looks good. The technical terms ("API gateway", "rate limiter", "microservice", "circuit breaker", "503 Service Unavailable", "metadata", "distributed tracing", "backend", "observability") are correctly preserved in English, which is the standard practice. The connecting words and grammatical structures are native Telugu. The meaning is preserved accurately. The request asks for *only* the Telugu translation, so I will output just this final text.
````

</details>

**Output:**

````
API gateway వచ్చే అభ్యర్థనలను రేట్ లిమిటర్ ద్వారా పంపి, సరైన మైక్రోసర్వీస్‌కు రూట్ చేస్తుంది. సర్క్యూట్ బ్రేకర్ ఓపెన్ గా ఉంటే, అది 503 Service Unavailable రెస్పాన్స్ ఇస్తుంది. అన్ని అభ్యర్థన మెటాడేటా పరిశీలన కోసం డిస్ట్రిబ్యూటెడ్ ట్రేసింగ్ బ్యాకెండ్ కు లాగ్ చేయబడుతుంది.
````

