# Sarvam 30B (Q4_K_M) — Test 27: Needle-in-haystack retrieval

**Category:** Long-context  
**Date:** 2026-06-14 14:33:51  

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

*513 tok | 3.33s | 154.1 t/s | think: 2022 chars | finish: stop*

<details><summary>Thinking (2022 chars)</summary>

````
1.  **Identify the user's core question:** The user wants to know two specific pieces of information about a project:
    *   The monthly error budget of the project owned by Priya Nair.
    *   The city where that project is deployed.
    *   The final answer format must be "only the percentage and the city."

2.  **Scan the handbook for the key identifier:** The key identifier is "Priya Nair". I'll look for this name in the provided text.

3.  **Locate the relevant section:** I find the "Service registry" section. This section lists all the projects and their owners.

4.  **Find the line for "Priya Nair":**
    *   "Project Bluefin is owned by Priya Nair."
    *   "It runs in the Singapore data center (region ap-southeast-1c), holds the tightest monthly error budget in the fleet at 0.1%, and launches in Q4."

5.  **Extract the required information from that line:**
    *   **Monthly error budget:** The text says it "holds the tightest monthly error budget in the fleet at 0.1%". So, the budget is 0.1%.
    *   **Data center (city):** The text says it "runs in the Singapore data center". The question asks for the city, which is "Singapore".

6.  **Format the answer:** The user requested "only the percentage and the city".
    *   Percentage: 0.1%
    *   City: Singapore
    *   Combine them: "0.1% Singapore"

7.  **Final check:**
    *   Does the answer directly address the question? Yes.
    *   Is the information taken directly from the provided text? Yes.
    *   Is the format correct? Yes, it's just the percentage and the city.

This process ensures I've correctly identified the relevant information, extracted it accurately, and formatted it according to the user's specific instructions. I don't need to worry about the other projects or details like release freezes, data residency, or on-call policies because the question is very specific to Priya Nair's project. The "0.1%" is explicitly linked to her project. The city is "Singapore". The format is just the two pieces of information.
````

</details>

**Output:**

````
0.1% Singapore
````

