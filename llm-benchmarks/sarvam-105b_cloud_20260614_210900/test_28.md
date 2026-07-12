# Sarvam 30B (Q4_K_M) — Test 28: Indic numeracy (Hindi GST)

**Category:** Reasoning  
**Date:** 2026-06-14 21:49:00  

**Prompt:** निम्नलिखित का चरण-दर-चरण हल दिखाइए और प्रत्येक उत्तर ₹ में दीजिए।

एक दुकानदार एक वस्तु को 18% GST सहित ₹1,180 में बेचता है।
1. वस्तु की कर-पूर्व (base) कीमत ज्ञात कीजिए।
2. इसमें सम्मिलित GST की राशि ज्ञात कीजिए।
3. यदि उसी base कीमत पर पहले 10% की छूट दी जाए और फिर उस पर 18% GST लगाया जाए, तो ग्राहक को अंतिम रूप से कुल कितनी राशि चुकानी होगी?

*1680 tok | 13.88s | 121.0 t/s | think: 2878 chars | finish: stop*

<details><summary>Thinking (2878 chars)</summary>

````
The user asks for a step-by-step solution (चरण-दर-चरण हल) to a problem involving GST and base price (कर-पूर्व कीमत). We need to find the amount of GST (GST की राशि) and the final price after a discount (छूट) is applied.

We need to provide a step-by-step solution, with answers in rupees (₹). We need to show calculations.

We need to consider GST: 18% inclusive. So the selling price inclusive of GST is 1180. So the base price is such that base + 18% of base = 1180. So base = 1180 / (1 + 0.18) = 1180 / 1.18 = 1000. So base price is ₹1000. GST amount = 1180 - 1000 = ₹180.

Now part 3: discount of 10% on base price first, then apply GST of 18% on the discounted price. So base price = 1000. Discount = 10% of 1000 = 100. So discounted price = 1000 - 100 = 900. Then GST = 18% of 900 = 0.18 * 900 = 162. So final price = 900 + 162 = ₹1062.

Thus answers: (1) ₹1000, (2) ₹180, (3) ₹1062.

But they want step-by-step solution, with each answer in ₹.

Thus we can produce a solution with explanation.

Additionally, we might want to explain the concept: inclusive GST means the price includes GST. So we can compute base price as price/(1+GST%). Then GST = price - base.

Alternatively, we can also present the formula: base = inclusive price / (1 + GST%). Then GST = inclusive price - base.

For part 3: discount applied first: discounted price = base * (1 - discount%). Then GST = discounted price * GST%. Then final price = discounted price + GST.

We can also show a check: final price = discounted price * (1 + GST%). So final price = 900 * 1.18 = 1062.

Thus final answer: (1) ₹1000, (2) ₹180, (3) ₹1062.

We should present each step.

Now the user may want a formatted answer.

Given the instructions, we can comply.

We should not mention any policy.

Thus answer: Provide step-by-step solution.

We'll also maybe include a summary at the end.

We'll ensure the answer is clear.

We'll include rupee sign.

Thus final answer.

Now we need to consider any potential nuance: The discount is applied to the base price, not to the inclusive price. So we do base price then discount.

But sometimes the discount is applied to the selling price inclusive of GST? But the problem says "on the same base price". So we apply discount to base price.

Thus answer stands.

Thus we can produce the solution.

We might also mention that the GST is computed on the discounted price.

Thus answer.

We can also show the steps:

Step 1: Let base price be B. Then B + 0.18B = 1.18B = 1180. So B = 1180 / 1.18 = 1000.

Step 2: GST = 1180 - 1000 = 180.

Step 3: Discounted price = B - 0.10B = 0.90B = 900. GST on discounted price = 0.18 * 900 = 162. Final price = 900 + 162 = 1062.

Thus final answers: 1000, 180, 1062.

We'll present them as:

1. Base price = ₹1,000

2. GST amount = ₹180

3. Final price after discount and GST = ₹1,062

Now we need to produce final answer.

We'll do so.
````

</details>

**Output:**

````
**चरण-दर-चरण समाधान**

---

### 1. वस्तु की कर-पूर्व (आधार) कीमत ज्ञात करना

माना कि कर-पूर्व कीमत **B** है।  
GST = कर-पूर्व कीमत का 18 % → GST = 0.18 B  

चूँकि ₹1,180 की विक्रय कीमत में GST सम्मिलित है, इसलिए:

\[
\text{विक्रय कीमत} = B + 0.18B = 1.18B
\]

\[
1.18B = 1,180
\]

\[
B = \frac{1,180}{1.18}= \boxed{₹1,000}
\]

---

### 2. सम्मिलित GST की राशि ज्ञात करना

\[
\text{GST राशि} = \text{विक्रय कीमत} - \text{आधार कीमत}
\]

\[
\text{GST राशि} = 1,180 - 1,000 = \boxed{₹180}
\]

(आप इसकी जाँच कर सकते हैं: ₹1,000 का 18 % = 0.18 × 1,000 = ₹180, जो कुल योग ₹1,180 देता है।)

---

### 3. पहले 10 % छूट और फिर 18 % GST लागू करने के बाद अंतिम कीमत

1. **आधार कीमत पर 10 % छूट**  

   \[
   \text{छूट} = 10\% \times B = 0.10 \times 1,000 = ₹100
   \]

   \[
   \text{छूट के बाद कीमत} = B - \text{छूट} = 1,000 - 100 = ₹900
   \]

2. **छूट वाली कीमत पर 18 % GST**  

   \[
   \text{GST} = 18\% \times 900 = 0.18 \times 900 = ₹162
   \]

3. **ग्राहक द्वारा भुगतान की जाने वाली अंतिम राशि**  

   \[
   \text{अंतिम कीमत} = \text{छूट के बाद कीमत} + \text{GST}
   \]

   \[
   \text{अंतिम कीमत} = 900 + 162 = \boxed{₹1,062}
   \]

   (समान रूप से, अंतिम कीमत = 900 × 1.18 = ₹1,062।)

---

### उत्तरों का सारांश

| क्र.सं. | राशि | रुपये में उत्तर |
| :--- | :--- | :--- |
| 1 | आधार कीमत (कर-पूर्व) | **₹1,000** |
| 2 | सम्मिलित GST राशि | **₹180** |
| 3 | 10 % छूट और 18 % GST के बाद अंतिम कीमत | **₹1,062** |

ये वे राशियाँ हैं जो ग्राहक को वर्णित शर्तों के अंतर्गत चुकानी होंगी।
````

