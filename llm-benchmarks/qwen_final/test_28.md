# Qwen3-30B-A3B (Q4_K_M) — Test 28: Indic numeracy (Hindi GST)

**Category:** Reasoning  
**Date:** 2026-05-29 03:50:17  

**Prompt:** निम्नलिखित का चरण-दर-चरण हल दिखाइए और प्रत्येक उत्तर ₹ में दीजिए।

एक दुकानदार एक वस्तु को 18% GST सहित ₹1,180 में बेचता है।
1. वस्तु की कर-पूर्व (base) कीमत ज्ञात कीजिए।
2. इसमें सम्मिलित GST की राशि ज्ञात कीजिए।
3. यदि उसी base कीमत पर पहले 10% की छूट दी जाए और फिर उस पर 18% GST लगाया जाए, तो ग्राहक को अंतिम रूप से कुल कितनी राशि चुकानी होगी?

*1587 tok | 123.73s | 12.8 t/s | think: 2304 chars | finish: stop*

<details><summary>Thinking (2304 chars)</summary>

````
Okay, let's try to solve this problem step by step. So, the question is about a shopkeeper selling an item with 18% GST, and the total price including GST is ₹1,180. There are three parts to the question. Let me take them one by one.

First, I need to find the base price of the item before GST. Hmm, GST is 18%, so the total price is the base price plus 18% of the base price. That means the total price is 100% + 18% = 118% of the base price. So, if I let the base price be 'x', then 118% of x is ₹1,180. To find x, I can set up the equation: x * (118/100) = 1180. Then, solving for x would give me x = 1180 * (100/118). Let me calculate that. 

Wait, 1180 divided by 118 is 10, right? Because 118 * 10 = 1180. So, x = 10 * 100 = 1000. So, the base price is ₹1000. That seems straightforward. Let me check again. If the base is ₹1000, then 18% of 1000 is 180, so total is 1000 + 180 = 1180. Yes, that's correct. So part 1 is ₹1000.

Second part is to find the GST amount. Since the base is ₹1000 and GST is 18%, then GST is 1000 * 18% = 180. So, the GST is ₹180. That's simple. Let me confirm. Total price is 1180, base is 1000, so 1180 - 1000 = 180. Yep, that's right. So part 2 is ₹180.

Third part is a bit trickier. If the same base price (which is ₹1000) is first given a 10% discount, then 18% GST is applied on the discounted price. So, first, the discount. 10% of 1000 is 100, so the discounted price is 1000 - 100 = ₹900. Then, GST is 18% on 900. Let me calculate that. 18% of 900 is 0.18 * 900 = 162. So, the total amount the customer has to pay is 900 + 162 = ₹1062. 

Wait, but let me make sure I didn't make a mistake here. The base price is 1000, 10% discount makes it 900. Then 18% GST on 900. So 900 * 1.18 = 1062. Yes, that's correct. So the final amount is ₹1062. 

But wait, the original total was ₹1180. So, with the discount and then GST, it's cheaper. That makes sense. So part 3 is ₹1062.

Let me just recap all steps to ensure no errors. 

For part 1: Total price = base + GST. So, base = total / (1 + GST rate). So, 1180 / 1.18 = 1000. Correct.

Part 2: GST is 18% of base, so 1000 * 0.18 = 180. Correct.

Part 3: Apply 10% discount on base, so 1000 * 0.9 = 900. Then apply 18% GST on 900: 900 * 1.18 = 1062. Correct.

I think that's all. All steps check out. No mistakes here.
````

</details>

**Output:**

````
### चरण-दर-चरण हल:

#### 1. वस्तु की कर-पूर्व (base) कीमत ज्ञात कीजिए।  
**समाधान:**  
माना कर-पूर्व कीमत = ₹x  
18% GST के साथ कुल कीमत = ₹1,180  
इसलिए,  
$$
x + 0.18x = 1,180  
$$  
$$
1.18x = 1,180  
$$  
$$
x = \frac{1,180}{1.18} = 1,000  
$$  
**उत्तर:** ₹1,000  

---

#### 2. इसमें सम्मिलित GST की राशि ज्ञात कीजिए।  
**समाधान:**  
GST = 18% of कर-पूर्व कीमत  
$$
\text{GST} = 0.18 \times 1,000 = 180  
$$  
**उत्तर:** ₹180  

---

#### 3. यदि उसी base कीमत पर पहले 10% की छूट दी जाए और फिर उस पर 18% GST लगाया जाए, तो ग्राहक को अंतिम रूप से कुल कितनी राशि चुकानी होगी?  
**समाधान:**  
- **10% छूट के बाद कीमत:**  
$$
1,000 - (0.10 \times 1,000) = 1,000 - 100 = 900  
$$  
- **18% GST के साथ कुल कीमत:**  
$$
900 + (0.18 \times 900) = 900 + 162 = 1,062  
$$  
**उत्तर:** ₹1,062  

---

### समाप्त उत्तर:
1. कर-पूर्व कीमत: **₹1,000**  
2. GST की राशि: **₹180**  
3. अंतिम कुल राशि: **₹1,062**
````

