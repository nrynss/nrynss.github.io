# Sarvam 30B (Q4_K_M) — Test 27: Needle-in-haystack retrieval

**Category:** Long-context  
**Date:** 2026-06-14 21:48:45  

**Prompt:** You are given an excerpt from Helios Systems' internal Engineering Reliability Handbook. Read it carefully and then answer the question at the very end.

=== BEGIN HANDBOOK EXCERPT ===

1. Purpose
This handbook documents the reliability commitments, ownership, and deployment topology for all production services at Helios Systems. Every service is assigned a single accountable owner, a home data center, a monthly error budget (the maximum fraction of requests that may fail before a release freeze is triggered), and a target launch quarter. Error budgets are reviewed quarterly by the SRE council.

2. On-call policy
All owners must maintain a primary and secondary on-call rotation. A page that is unacknowledged for 10 minutes escalates to the secondary on-call, and after a further 15 minutes to the engineering director. Routine maintenance windows are scheduled on the first Sunday of each month between 02:00 and 04:00 local data-center time. Owners are expected to publish a postmortem within five business days of any Sev-1 incident.

3. Service registry
Project Tanager is owned by Arjun Mehta. It is deployed in the Mumbai data center (region ap-south-1a), carries a monthly error budget of 0.5%, and is targeted for launch in Q2.
Project Kestrel is owned by Sara Lee, deployed in the Frankfurt data center (region eu-central-1b), with a monthly error budget of 0.3% and a Q1 launch.
Project Bluefin is owned by Priya Nair. It runs in the Singapore data center (region ap-southeast-1c), holds the tightest monthly error budget in the fleet at 0.1%, and launches in Q4.
Project Marlin is owned by Rohan Das, deployed in the Mumbai data center (region ap-south-1a), with a 0.25% monthly error budget and a Q3 launch.
Project Condor is owned by Priya Menon, deployed in the Virginia data center (region us-east-1d), with a 0.2% monthly error budget and a Q2 launch.
Project Albatross is owned by Wei Chen, deployed in the Tokyo data center (region ap-northeast-1a), with a 0.4% monthly error budget and a Q4 launch.

4. Release freeze rules
When a service exhausts its monthly error budget, an automatic release freeze is applied to that service only; shared infrastructure components are exempt unless two or more dependent services are simultaneously frozen. Freezes lift at the start of the next calendar month. A service may request a one-time budget waiver from the SRE council, which requires sign-off from two directors.

5. Data residency
Services deployed in the Frankfurt data center must keep all personally identifiable information within the EU. Services in the Mumbai data center follow Indian data-localization requirements. Cross-region replication is permitted only for non-PII telemetry, and all replication links must be encrypted in transit.

=== END HANDBOOK EXCERPT ===

Question: According to the handbook, what is the monthly error budget of the project owned by Priya Nair, and in which data center (city) is it deployed? Answer with only the percentage and the city.

*674 tok | 6.13s | 109.9 t/s | think: 2569 chars | finish: stop*

<details><summary>Thinking (2569 chars)</summary>

````
1.  **Analyze the User's Request:** The user wants me to find two specific pieces of information from the provided text:
    *   The monthly error budget for the project owned by "Priya Nair".
    *   The data center (city) where that project is deployed.
    *   The final answer must be *only* the percentage and the city. No extra words, no full sentences, just "X%" and "Y".

2.  **Scan the Text for the Key Entity:** I need to find "Priya Nair". I'll read through the handbook excerpt, specifically looking for that name.

3.  **Locate the Relevant Section:**
    *   Section 1 (Purpose): No mention of Priya Nair.
    *   Section 2 (On-call policy): No mention of Priya Nair.
    *   Section 3 (Service registry): This section lists projects, owners, data centers, error budgets, and launch quarters. This is the most likely place to find the information. I'll read it carefully.
        *   "Project Tanager is owned by Arjun Mehta..." - Not Priya Nair.
        *   "Project Kestrel is owned by Sara Lee..." - Not Priya Nair.
        *   "Project Bluefin is owned by **Priya Nair**." - Found it! Now I need to extract the other details for this project.
        *   The text continues: "It runs in the **Singapore** data center (region ap-southeast-1c), holds the tightest monthly error budget in the fleet at **0.1%**, and launches in Q4."
    *   Section 4 (Release freeze rules): No mention of Priya Nair.
    *   Section 5 (Data residency): No mention of Priya Nair.

4.  **Extract the Required Information:**
    *   **Owner:** Priya Nair (confirmed).
    *   **Project Name:** Project Bluefin.
    *   **Monthly Error Budget:** 0.1%.
    *   **Data Center:** Singapore data center. The user asked for the "city". The text says "Singapore data center". So the city is Singapore.

5.  **Format the Final Answer:** The user's instruction is very specific: "Answer with only the percentage and the city."

    *   Percentage: 0.1%
    *   City: Singapore

    So, the final output should be: `0.1% Singapore`

6.  **Final Review:**
    *   Did I find the owner? Yes, Priya Nair.
    *   Did I find the error budget? Yes, 0.1%.
    *   Did I find the data center city? Yes, Singapore.
    *   Is the answer formatted *exactly* as requested? Yes, just the percentage and the city, separated by a space. No extra words like "The project's error budget is..." or "It is deployed in...". The formatting is crucial.

This process ensures I've correctly identified the information, extracted it accurately, and formatted it according to the user's strict constraints.
````

</details>

**Output:**

````
0.1% Singapore
````

