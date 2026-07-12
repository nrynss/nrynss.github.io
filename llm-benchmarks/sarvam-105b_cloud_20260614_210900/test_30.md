# Sarvam 30B (Q4_K_M) — Test 30: Structured field extraction

**Category:** Extraction  
**Date:** 2026-06-14 21:49:08  

**Prompt:** Extract information from the customer message below into a single JSON object with EXACTLY these keys: `name` (string), `phone` (string, digits only), `pincode` (string), `order_id` (string), `amount_inr` (number), `issue_type` (one of: 'delivery', 'refund', 'damage', 'other'). If a field is not present, use null. Respond with only the raw JSON object — no markdown fencing, no explanation.

Message:
Namaste, this is Rajesh Kumar. My order #IND-48823 worth Rs. 2,499 was supposed to reach Indiranagar 560038 but the courier delivered a broken item yesterday. Please reach me on 98450-12345. I want a replacement or my money back.

*406 tok | 4.1s | 99.1 t/s | think: 883 chars | finish: stop*

<details><summary>Thinking (883 chars)</summary>

````
Let me extract the information from the customer message:

1. `name`: "Rajesh Kumar"
2. `phone`: "9845012345" (digits only, removing the hyphen)
3. `pincode`: "560038"
4. `order_id`: "IND-48823"
5. `amount_inr`: 2499 (number, removing the Rs. and comma)
6. `issue_type`: "damage" (since the item was broken)

Now I'll create the JSON object with these fields:

```json
{
  "name": "Rajesh Kumar",
  "phone": "9845012345",
  "pincode": "560038",
  "order_id": "IND-48823",
  "amount_inr": 2499,
  "issue_type": "damage"
}
```

Let me double-check:
- All required keys are present
- `phone` contains only digits
- `amount_inr` is a number
- `issue_type` is one of the allowed values ('delivery', 'refund', 'damage', 'other')
- The values match what was in the message

Everything looks correct. I'll provide this JSON object as my response, without any markdown fencing or explanation.
````

</details>

**Output:**

````
{
  "name": "Rajesh Kumar",
  "phone": "9845012345",
  "pincode": "560038",
  "order_id": "IND-48823",
  "amount_inr": 2499,
  "issue_type": "damage"
}
````

