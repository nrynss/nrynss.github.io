# Sarvam 30B (Q4_K_M) — Test 23: Competition math

**Category:** Reasoning  
**Date:** 2026-06-14 14:28:53  

### Number Theory

**Prompt:** Find the last three digits of 7^2024. Show your complete step-by-step working.

*4192 tok | 15.53s | 269.9 t/s | think: 4240 chars | finish: stop*

<details><summary>Thinking (4240 chars)</summary>

````
We need to compute 7^2024 mod 1000 (the last three digits). Compute 7^2024 mod 1000.

We can use Euler's theorem or Carmichael, but 1000 = 2^3 * 5^3 = 8 * 125. Since 7 and 1000 are coprime, we can compute modulo 8 and modulo 125, then combine via CRT.

Alternatively, we can directly compute using modular exponentiation.

But we need to show step-by-step.

We can also note that φ(1000) = φ(2^3) * φ(5^3) = (2^3 - 2^2) * (5^3 - 5^2) = (8-4)*(125-25) = 4*100 = 400. So 7^400 ≡ 1 mod 1000 (since gcd(7,1000)=1). So 7^2024 = 7^(400*5 + 24) = (7^400)^5 * 7^24 ≡ 1^5 * 7^24 ≡ 7^24 mod 1000.

Thus we need 7^24 mod 1000.

But we can also compute 7^24 directly.

But 7^24 is huge, but we can reduce with repeated squaring.

Alternatively, compute 7^24 mod 8 and mod 125.

But maybe easier: 7^2024 mod 1000 = 7^24 mod 1000.

Compute 7^24 mod 1000.

We can compute 7^2 = 49. 7^4 = 49^2 = 2401 ≡ 401 mod 1000. 7^8 = 401^2 mod 1000.

Compute 401^2 = (400+1)^2 = 160000 + 800 + 1 = 160801 ≡ 801 mod 1000.

7^16 = 801^2 mod 1000.

801^2 = (800+1)^2 = 640000 + 1600 + 1 = 641601 ≡ 601 mod 1000.

Now we need 7^24 = 7^(16+8) = 7^16 * 7^8 mod 1000 = 601 * 801 mod 1000.

Compute 601*801 = 601*(800+1) = 601*800 + 601 = 480800 + 601 = 481401.

481401 mod 1000 = 401.

Thus 7^24 ≡ 401 mod 1000.

But wait, earlier we found 7^4 ≡ 401. So 7^24 ≡ 401. That seems plausible.

Thus the last three digits of 7^2024 are 401.

But we need to double-check.

We need to verify that 7^2024 mod 1000 = 401.

We can also compute using CRT:

Compute 7^2024 mod 8 and mod 125.

7 mod 8 = 7. 7^2 = 49 ≡ 1 mod 8. So 7^2 ≡ 1, so 7^2024 = (7^2)^1012 ≡ 1^1012 ≡ 1 mod 8.

Thus result ≡ 1 mod 8.

Now compute mod 125.

We can use Euler's theorem: φ(125) = 100, and gcd(7,125)=1, so 7^100 ≡ 1 mod 125. So 7^2024 = 7^(100*20 + 24) = (7^100)^20 * 7^24 ≡ 7^24 mod 125.

Compute 7^24 mod 125.

We can compute 7^2 = 49. 7^4 = 49^2 = 2401 ≡ 2401 - 125*19 = 2401 - 2375 = 26.

7^8 = 26^2 = 676 ≡ 676 - 125*5 = 676 - 625 = 51.

7^16 = 51^2 = 2601 ≡ 2601 - 125*20 = 2601 - 2500 = 101.

Now 7^24 = 7^16 * 7^8 = 101 * 51 = 5151 ≡ 5151 - 125*41 = 5151 - 5125 = 26.

Thus 7^24 ≡ 26 mod 125.

Thus we need x ≡ 1 mod 8, x ≡ 26 mod 125.

Find x mod 1000.

We can solve: x = 125k + 26. Need 125k + 26 ≡ 1 mod 8.

125 mod 8 = 5 (since 8*15=120, remainder 5). So 5k + 26 ≡ 1 mod 8.

26 mod 8 = 2. So 5k + 2 ≡ 1 mod 8 => 5k ≡ -1 ≡ 7 mod 8.

Multiply both sides by inverse of 5 mod 8. 5*5=25 ≡ 1 mod 8, so inverse of 5 is 5. So k ≡ 5*7 = 35 ≡ 35 mod 8 => 35 mod 8 = 3 (since 8*4=32). So k ≡ 3 mod 8.

Thus k = 8t + 3. Then x = 125(8t+3) + 26 = 1000t + 375 + 26 = 1000t + 401.

Thus x ≡ 401 mod 1000.

Thus matches.

Thus answer: 401.

Thus the last three digits of 7^2024 are 401.

We need to show step-by-step.

We can present both methods: using Euler's theorem, or using direct modular exponentiation.

We need to show the complete step-by-step working.

Thus we can present:

- Since 7 and 1000 are coprime, φ(1000) = 400, so 7^400 ≡ 1 mod 1000.

- 2024 = 400*5 + 24, so 7^2024 ≡ 7^24 mod 1000.

- Compute 7^24 mod 1000 using repeated squaring.

- Provide table: 7^1 = 7; 7^2 = 49; 7^4 = 401; 7^8 = 801; 7^16 = 601; then 7^24 = 7^16 * 7^8 = 601*801 ≡ 401.

- Or using CRT: compute mod 8 and mod 125.

- Show mod 8: 7^2 ≡ 1, so 7^2024 ≡ 1 mod 8.

- Compute mod 125: 7^100 ≡ 1 mod 125, so 7^2024 ≡ 7^24 mod 125. Compute 7^24 mod 125 = 26.

- Solve CRT: x ≡ 1 mod 8, x ≡ 26 mod 125 => x ≡ 401 mod 1000.

Thus answer: 401.

We can also show that 7^2024 ends with 401.

Thus final answer: 401.

We can also mention that we could also compute using binomial theorem: 7 = 10 - 3, but that's more complicated.

Thus answer: 401.

Now produce final answer with step-by-step.

We need to be thorough.

We'll write in a clear manner.

We'll start with noting that we need 7^2024 mod 1000.

We'll use Euler's theorem: φ(1000) = 400.

Thus reduce exponent.

Then compute 7^24 mod 1000.

We'll show repeated squaring.

Alternatively, we can show using CRT.

We'll present both.

We'll conclude with last three digits: 401.

We'll also note that the answer is 401.

Thus final answer: 401.

We'll also maybe show verification: 7^4 ≡ 401, and 7^24 ≡ 401, consistent.

Thus answer: 401.

Now produce final answer.
````

</details>

**Output:**

````
**Goal:** Find the last three digits of \(7^{2024}\); i.e. compute  

\[
7^{2024}\pmod{1000}.
\]

Because \(1000=2^{3}\cdot5^{3}=8\cdot125\) and \(\gcd(7,1000)=1\), we can work modulo 8 and modulo 125 separately and then combine the results with the Chinese Remainder Theorem (CRT).  
Two complementary approaches are shown:

---

## 1. Using Euler’s theorem (quick reduction of the exponent)

1. **Euler’s totient for 1000**

   \[
   \varphi(1000)=\varphi(2^{3})\varphi(5^{3})=(2^{3}-2^{2})(5^{3}-5^{2})
   =(8-4)(125-25)=4\cdot100=400.
   \]

2. **Reduce the exponent**

   Since \(\gcd(7,1000)=1\),

   \[
   7^{400}\equiv1\pmod{1000}.
   \]

   Write \(2024=400\cdot5+24\). Then

   \[
   7^{2024}=7^{400\cdot5+24}\equiv (7^{400})^{5}\cdot7^{24}\equiv1^{5}\cdot7^{24}
   \equiv7^{24}\pmod{1000}.
   \]

   So we only need \(7^{24}\pmod{1000}\).

3. **Compute \(7^{24}\) by repeated squaring**

   \[
   \begin{aligned}
   7^{1} &\equiv 7 \pmod{1000},\\[2pt]
   7^{2} &\equiv 7^{2}=49 \pmod{1000},\\[2pt]
   7^{4} &\equiv 49^{2}=2401\equiv 401 \pmod{1000},\\[2pt]
   7^{8} &\equiv 401^{2}=160801\equiv 801 \pmod{1000},\\[2pt]
   7^{16}&\equiv 801^{2}=641601\equiv 601 \pmod{1000}.
   \end{aligned}
   \]

   Now \(24=16+8\), so

   \[
   7^{24}=7^{16}\cdot7^{8}\equiv 601\cdot801\pmod{1000}.
   \]

   Compute the product:

   \[
   601\cdot801=601\,(800+1)=601\cdot800+601=480\,800+601=481\,401.
   \]

   Reducing modulo 1000:

   \[
   481\,401\equiv 401\pmod{1000}.
   \]

   Hence  

   \[
   7^{2024}\equiv 7^{24}\equiv 401\pmod{1000}.
   \]

---

## 2. Using the Chinese Remainder Theorem (CRT)

### (a) Mod 8

\(7\equiv-1\pmod{8}\).  
Thus  

\[
7^{2}\equiv(-1)^{2}=1\pmod{8}\quad\Longrightarrow\quad
7^{2024}=(7^{2})^{1012}\equiv1^{1012}\equiv1\pmod{8}.
\]

So  

\[
7^{2024}\equiv1\pmod{8}. \tag{1}
\]

### (b) Mod 125

\(\varphi(125)=125\left(1-\frac15\right)=100\).  
Since \(\gcd(7,125)=1\),

\[
7^{100}\equiv1\pmod{125}.
\]

Write \(2024=100\cdot20+24\). Then

\[
7^{2024}\equiv7^{24}\pmod{125}.
\]

Compute \(7^{24}\) modulo 125:

\[
\begin{aligned}
7^{2} &\equiv 49 \pmod{125},\\
7^{4} &\equiv 49^{2}=2401\equiv 26 \pmod{125},\\
7^{8} &\equiv 26^{2}=676\equiv 51 \pmod{125},\\
7^{16}&\equiv 51^{2}=2601\equiv 101 \pmod{125}.
\end{aligned}
\]

Now  

\[
7^{24}=7^{16}\cdot7^{8}\equiv101\cdot51=5151\equiv 26\pmod{125}.
\]

Thus  

\[
7^{2024}\equiv26\pmod{125}. \tag{2}
\]

### (c) Combine (1) and (2)

We need \(x\) such that  

\[
x\equiv1\pmod{8},\qquad x\equiv26\pmod{125}.
\]

Write \(x=125k+26\). Plug into the first congruence:

\[
125k+26\equiv1\pmod{8}\;\Longrightarrow\;(125\bmod 8)k+26\bmod 8\equiv1.
\]

\(125\equiv5\pmod{8}\) and \(26\equiv2\pmod{8}\), so

\[
5k+2\equiv1\pmod{8}\;\Longrightarrow\;5k\equiv-1\equiv7\pmod{8}.
\]

The inverse of \(5\) modulo 8 is \(5\) (since \(5\cdot5=25\equiv1\pmod{8}\)).  
Multiplying by 5:

\[
k\equiv5\cdot7=35\equiv3\pmod{8}.
\]

Thus \(k=8t+3\) for some integer \(t\). Substitute back:

\[
x=125(8t+3)+26=1000t+375+26=1000t+401.
\]

Hence  

\[
x\equiv401\pmod{1000}.
\]

---

## 3. Conclusion

Both methods give the same result:

\[
\boxed{401}
\]

Therefore, the last three digits of \(7^{2024}\) are **401**.  

(One can verify: \(7^{4}\equiv401\pmod{1000}\) and \(7^{24}\equiv401\pmod{1000}\), so the exponent reduction is consistent.)

--- 

**Summary of steps**

1. \(\varphi(1000)=400\) ⇒ \(7^{400}\equiv1\pmod{1000}\).  
2. \(2024=400\cdot5+24\) ⇒ \(7^{2024}\equiv7^{24}\pmod{1000}\).  
3. Repeated squaring gives \(7^{24}\equiv401\pmod{1000}\).  
4. (Alternative) CRT: \(7^{2024}\equiv1\pmod{8}\) and \(\equiv26\pmod{125}\) ⇒ \(x\equiv401\pmod{1000}\).  

Hence the last three digits are **401**.
````

### Combinatorics

**Prompt:** In how many ways can 8 people be seated around a circular table if two specific people, A and B, must NOT sit next to each other? Show your complete working.

*2699 tok | 10.36s | 260.6 t/s | think: 5975 chars | finish: stop*

<details><summary>Thinking (5975 chars)</summary>

````
We need to answer the combinatorial problem: number of ways to seat 8 people around a circular table, with two specific people A and B not adjacent.

We need to show complete working.

We need to consider total number of circular arrangements: (8-1)! = 7! = 5040.

We need to subtract arrangements where A and B are adjacent.

Number of arrangements where A and B are adjacent: treat A and B as a single "block" (ordered, because A and B can be in two orders: AB or BA). Then we have 7 "objects" (the block + the other 6 people). For circular arrangements, (7-1)! = 6! = 720. Multiply by 2 for the internal order of the block: 720*2 = 1440.

Thus arrangements where A and B are not adjacent = total - adjacent = 5040 - 1440 = 3600.

But we need to double-check: total arrangements of 8 distinct people around a circle: (8-1)! = 5040. Adjacent arrangements: treat A and B as a block, then we have 7 objects, number of circular permutations = (7-1)! = 720. The block can be arranged in 2 ways (AB or BA). So 720*2 = 1440. So 5040-1440 = 3600.

Thus answer: 3600.

But we might need to show working: perhaps derive using inclusion-exclusion.

We can also approach by fixing A's seat (since circular) and then count positions for B not adjacent.

Fix A at some seat. Then there are 7 other seats. B cannot be in the two seats adjacent to A (the seats to left and right). So B has 7 - 2 = 5 possible seats. Then the remaining 6 people can be arranged in 6! ways. So total = 5 * 6! = 5 * 720 = 3600. That's a simpler approach.

Thus answer: 3600.

But the question: "In how many ways can 8 people be seated around a circular table if two specific people, A and B, must NOT sit next to each other? Show your complete working."

Thus answer: 3600.

But we need to show complete working. Provide steps, reasoning, maybe both methods.

We'll produce a thorough solution.

We can also mention that the answer is (8-1)! - 2*(7-1)! = 5040 - 1440 = 3600.

Alternatively, we can also use complementary counting.

We'll also discuss that circular arrangements are considered up to rotation (i.e., seatings that can be rotated to each other are considered the same). Usually we fix one person.

We'll also note that A and B are distinct.

We'll also maybe mention that if A and B are not adjacent, we can treat them as separated by at least one person.

We'll also maybe mention that the answer is 3600.

We'll also show a small check: total number of ways to seat 8 around a circle: 5040. Number where A and B are adjacent: 1440. So non-adjacent: 3600.

We'll also maybe note that if we had 8 people, we can also compute probability that A and B are not adjacent: 3600/5040 = 3/4. Actually 3600/5040 = 0.7142857 = 5/7? Let's compute: 3600/5040 = divide by 720: 5/7? 5/7 = 0.7142857, yes. So probability that they are not adjacent = 5/7.

But we only need number.

We'll also show alternative approach: fix A at a seat, then B can be in any of the 5 nonadjacent seats, and the remaining 6! ways.

We'll also perhaps include a note about the difference between labeled and unlabeled seats.

We'll also maybe mention that the answer is 3600.

Thus answer: 3600.

Now we need to produce a final answer with full working.

We'll produce a structured solution:

1. Total number of circular arrangements of 8 distinct people: (8-1)! = 5040.

2. Count arrangements where A and B are adjacent:

- Treat A and B as a single entity.

- Then we have 7 entities (the AB block + 6 other people).

- Circular arrangements of 7: (7-1)! = 720.

- The block can be arranged as AB or BA: factor 2.

- So adjacent arrangements = 720 * 2 = 1440.

3. Subtract: 5040 - 1440 = 3600.

Alternatively:

- Fix A's seat to break rotational symmetry.

- B cannot sit in the two seats adjacent to A: 5 choices.

- The remaining 6 people can be arranged in 6! = 720 ways.

- So total = 5 * 720 = 3600.

Thus answer: 3600.

We'll also maybe mention that if the problem considered seatings distinct under rotation, then we need to consider that. Usually for circular permutations, we treat rotations as identical.

Thus answer: 3600.

We'll also maybe show the working in a more formal combinatorial notation.

We'll also maybe note that if the table is not round but has distinct seats, then the answer would be different. But we assume a circular table.

We'll also maybe mention that the answer is independent of which person is A or B, as long as they are distinct.

We'll also maybe provide a check: 3600 = 5 * 6! = 5 * 720.

We'll also maybe show the inclusion-exclusion approach:

- Let total = T = (8-1)!.

- Let E = event that A and B are adjacent.

- |E| = 2 * (7-1)!.

- So number of ways with A and B not adjacent = T - |E| = (8-1)! - 2*(7-1)! = 5040 - 1440 = 3600.

Thus answer: 3600.

We'll also maybe discuss alternative: using complement.

We'll also maybe discuss the general formula: For n people around a circle, number of ways where two specific people are not adjacent = (n-1)! - 2*(n-2)!.

Check: (n-1)! - 2*(n-2)! = (n-2)![(n-1) - 2] = (n-2)!*(n-3). For n=8, (8-2)!*(8-3) = 6!*5 = 720*5 = 3600. Yes.

Thus general formula.

Thus answer: 3600.

We'll also maybe include a note that if we considered the table as having distinct seats (like numbered seats), then answer would be 8! - 2*7! = 40320 - 10080 = 30240. But we assume circular.

Thus answer: 3600.

We'll also maybe include a final statement: So there are 3600 possible seatings.

Now produce final answer.

We need to show complete working. We'll present the steps.

We'll also include explanation of why we treat rotations as identical.

We'll also include a small diagram perhaps.

We'll also maybe include a final check: 3600 < 5040, so plausible.

We'll also maybe mention that the answer is 3600.

We'll also maybe include a note about the probability: 3600/5040 = 5/7.

Thus answer: 3600.

Now produce final answer.

We'll also include the answer in a clear format.

We'll also mention that the answer is 3600.

Now produce final answer.
````

</details>

**Output:**

````
**Problem:**  
8 distinct people are to be seated around a circular table. Two particular people, A and B, must **not** sit next to each other. How many admissible seatings are there?

---

## 1.  Understand circular permutations  

When seats are arranged in a circle, rotations of the whole arrangement are considered the same (there is no “head” of the table).  
For \(n\) distinct people the number of circular seatings is  

\[
(n-1)! .
\]

(We “fix” one person to break the rotational symmetry, then arrange the remaining \(n-1\) people in a line.)

---

## 2.  Count all possible seatings (no restriction)

For \(n=8\):

\[
\text{Total} = (8-1)! = 7! = 5040 .
\]

---

## 3.  Count the “bad’’ seatings where A and B *are* adjacent  

It is easier to count the complement (the arrangements we **don’t** want) and subtract.

### 3.1  Treat A and B as a single block  

- The block can appear as **AB** or **BA** → 2 internal orders.  
- Together with the other 6 people we have \(7\) objects to arrange around the circle.

### 3.2  Circular arrangements of the 7 objects  

\[
(7-1)! = 6! = 720 .
\]

### 3.3  Multiply by the internal order of the block  

\[
|A\text{ adjacent to }B| = 2 \times 720 = 1440 .
\]

---

## 4.  Subtract to obtain the desired count  

\[
\begin{aligned}
\text{Valid seatings}
&= \text{Total} - |A\text{ adjacent to }B| \\
&= 5040 - 1440 \\
&= 3600 .
\end{aligned}
\]

---

## 5.  Alternative (direct) counting – fixing A’s seat  

1. **Fix A** at a particular seat (breaks the rotation).  
2. The two seats next to A are forbidden for B → B has \(7-2 = 5\) possible seats.  
3. The remaining 6 people can be placed in any order: \(6! = 720\) ways.

\[
5 \times 720 = 3600 .
\]

Both methods give the same result, confirming the answer.

---

## 6.  General formula (optional)

For \(n\) distinct people and two specific people that must **not** be adjacent:

\[
\boxed{(n-1)! - 2\,(n-2)!}
\]

For \(n=8\): \((8-1)! - 2\,(8-2)! = 5040 - 2\cdot720 = 3600\).

---

## 7.  Final answer  

\[
\boxed{3600}
\]

So there are **3600** ways to seat the eight people around the circular table such that A and B are not next to each other. (If the table had numbered seats, the answer would be \(8! - 2\cdot7! = 30240\); the problem, however, assumes an unlabeled circular table.)
````

### Probability

**Prompt:** A bag contains 5 red, 4 blue, and 3 green marbles. Four marbles are drawn at random without replacement. What is the probability that at least one marble of each color is drawn? Express your answer as a simplified fraction and show all working.

*2639 tok | 10.03s | 263.0 t/s | think: 5255 chars | finish: stop*

<details><summary>Thinking (5255 chars)</summary>

````
We need to solve: bag contains 5 red, 4 blue, 3 green marbles. Total marbles = 5+4+3 = 12. Draw 4 marbles without replacement. Find probability that at least one marble of each color is drawn. But we are drawing 4 marbles, and there are 3 colors. To have at least one of each color, we need at least one red, at least one blue, at least one green. Since we draw 4 marbles, the composition must be (2,1,1) in any order: one color appears twice, the other two appear once each. So we need probability that among the 4 drawn, we have exactly one color with 2 marbles, and one each of the other two colors. There is no other way to have at least one of each color because we need 4 draws, and we have 3 colors.

Thus the probability = (number of favorable draws) / (total number of ways to draw 4 marbles from 12).

Total ways: C(12,4) = 495? Let's compute: 12 choose 4 = (12*11*10*9)/(4*3*2*1) = (11880)/(24) = 495. Yes.

Now favorable draws: choose which color appears twice (3 choices). Then choose 2 marbles from that color's count, and 1 marble from each of the other two colors.

Case 1: Red appears twice. Choose 2 red from 5: C(5,2) = 10. Choose 1 blue from 4: C(4,1) = 4. Choose 1 green from 3: C(3,1) = 3. So number of draws for this case: 10 * 4 * 3 = 120.

Case 2: Blue appears twice. Choose 2 blue from 4: C(4,2) = 6. Choose 1 red from 5: 5. Choose 1 green from 3: 3. So 6*5*3 = 90.

Case 3: Green appears twice. Choose 2 green from 3: C(3,2) = 3. Choose 1 red from 5: 5. Choose 1 blue from 4: 4. So 3*5*4 = 60.

Total favorable = 120 + 90 + 60 = 270.

Probability = 270 / 495. Simplify: divide numerator and denominator by GCD. 270 and 495 share factor 45? 270/45 = 6, 495/45 = 11. So 270/495 = 6/11. Wait 45*6 = 270, 45*11 = 495. Yes.

Thus probability = 6/11.

Check if any other composition qualifies: maybe 2 of one color, 1 of another, 1 of third; that's the only way to have at least one of each color in 4 draws. So probability = 6/11.

But let's double-check the counting: The total number of ways to draw 4 marbles from 12 is C(12,4)=495. The favorable draws count: sum_{color} C(n_i,2)*C(n_j,1)*C(n_k,1) where i,j,k are distinct colors. Indeed.

Compute:

Red: C(5,2)=10, C(4,1)=4, C(3,1)=3 => 10*4*3=120.

Blue: C(4,2)=6, C(5,1)=5, C(3,1)=3 => 6*5*3=90.

Green: C(3,2)=3, C(5,1)=5, C(4,1)=4 => 3*5*4=60.

Sum=270.

Simplify: 270/495 = divide by 5? 270/5=54, 495/5=99 => 54/99 = divide by 9 => 6/11. Yes.

Thus probability = 6/11.

We can also compute via complement: probability that at least one color missing, etc. But direct counting is fine.

Thus answer: 6/11.

But the problem might want simplified fraction and show all working. So we need to present steps.

Thus final answer: 6/11.

But also verify if there is any nuance: "at least one marble of each color is drawn" with 4 draws. Indeed, at least one of each of the three colors. So the composition must be (2,1,1). So answer is correct.

We can also compute using hypergeometric distribution: probability = sum_{i=2 to 5} sum_{j=1 to 4} sum_{k=1 to 3} with i+j+k=4 and i>=1, j>=1, k>=1. That's just (2,1,1). So same.

Thus answer: 6/11.

But perhaps they'd want to see the fraction simplified: 6/11.

We can also express as 0.545454... but fraction is fine.

Thus final answer: $\frac{6}{11}$.

Now, we need to present all working.

We'll do:

- total number of ways: C(12,4)=495.

- favorable ways: choose which color appears twice (3 ways), then choose marbles.

- sum.

- simplify.

Thus answer: $\frac{6}{11}$.

But also maybe they'd want to show the calculation: 270/495 = 6/11.

Thus final answer.

Now, let's produce a thorough solution.

We can also show alternative method: using complement: probability that at least one color missing = P(no red) + P(no blue) + P(no green) - P(no red and no blue) - P(no red and no green) - P(no blue and no green) + P(no red and no blue and no green). But that's more complex.

But we can show direct.

Thus final answer: $\frac{6}{11}$.

We'll include steps.

Now, to ensure we include all working, we can also show the breakdown:

- For red appears twice: C(5,2)*C(4,1)*C(3,1) = 10*4*3 = 120.

- For blue appears twice: C(4,2)*C(5,1)*C(3,1) = 6*5*3 = 90.

- For green appears twice: C(3,2)*C(5,1)*C(4,1) = 3*5*4 = 60.

- Sum = 270.

- Probability = 270/495 = 6/11.

Thus answer.

Now, we can also note that the probability is > 0.5, which is plausible because we have many marbles and drawing 4, it's more likely to get all three colors.

Check: 6/11 ≈ 0.545.

Thus answer.

Thus final answer: $\frac{6}{11}$.

Now, we need to express answer as simplified fraction.

Thus final answer: $\frac{6}{11}$.

Now, we can also show the fraction in simplest terms.

Thus final answer.

Now, we need to produce final answer with explanation.

We'll write:

Total ways: C(12,4) = 495.

Favorable: (2 red, 1 blue, 1 green) + (1 red, 2 blue, 1 green) + (1 red, 1 blue, 2 green) = 120+90+60 = 270.

Probability = 270/495 = 6/11.

Thus answer: $\frac{6}{11}$.

Now, we can also note that we could have done: number of ways to choose 4 marbles with at least one of each color = sum_{i=2}^{5} sum_{j=1}^{4} sum_{k=1}^{3} where i+j+k=4.

But that's same.

Thus final answer.

Now, produce final answer.

We'll include all steps.

Now, answer.
````

</details>

**Output:**

````
**Step 1 – Count the total number of possible draws**

The bag has  

\[
5\text{ red}+4\text{ blue}+3\text{ green}=12\text{ marbles}.
\]

Four marbles are drawn without replacement, so the total number of unordered sets of 4 marbles is  

\[
\binom{12}{4}= \frac{12\cdot11\cdot10\cdot9}{4\cdot3\cdot2\cdot1}=495 .
\]

---

**Step 2 – Determine the composition that satisfies “at least one of each colour”**

Since we draw only 4 marbles and there are 3 colours, the only way to have at least one of each colour is to have the colour‑counts  

\[
(2,1,1)
\]

in any order.  
Thus one colour must appear twice, and the other two colours appear once each.

---

**Step 3 – Count the favourable draws**

We consider the three possible choices for the colour that appears twice.

| Colour that appears twice | Ways to pick 2 of that colour | Ways to pick 1 of each of the other two colours | Total for this case |
|---------------------------|------------------------------|---------------------------------------------------|----------------------|
| Red (5)                   | \(\binom{5}{2}=10\)          | \(\binom{4}{1}=4\) (blue)  \(\times\) \(\binom{3}{1}=3\) (green) | \(10\cdot4\cdot3=120\) |
| Blue (4)                  | \(\binom{4}{2}=6\)           | \(\binom{5}{1}=5\) (red)  \(\times\) \(\binom{3}{1}=3\) (green) | \(6\cdot5\cdot3=90\) |
| Green (3)                 | \(\binom{3}{2}=3\)           | \(\binom{5}{1}=5\) (red)  \(\times\) \(\binom{4}{1}=4\) (blue) | \(3\cdot5\cdot4=60\) |

Add the three cases:

\[
120+90+60 = 270 \text{ favourable draws}.
\]

---

**Step 4 – Compute the probability**

\[
P(\text{at least one of each colour})=\frac{\text{favourable}}{\text{total}}
=\frac{270}{495}.
\]

Simplify the fraction:

\[
\frac{270}{495}= \frac{270\div45}{495\div45}= \frac{6}{11}.
\]

---

\[
\boxed{\dfrac{6}{11}}
\]

Thus, the probability of drawing at least one marble of each colour when four marbles are drawn from the bag is \(\displaystyle \frac{6}{11}\).
````

