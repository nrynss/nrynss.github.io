# Sarvam 30B (Q4_K_M) — Test 23: Competition math

**Category:** Reasoning  
**Date:** 2026-06-14 21:42:40  

### Number Theory

**Prompt:** Find the last three digits of 7^2024. Show your complete step-by-step working.

*3658 tok | 29.07s | 125.8 t/s | think: 4232 chars | finish: stop*

<details><summary>Thinking (4232 chars)</summary>

````
We need to compute 7^2024 mod 1000. Find last three digits. Compute using modular exponentiation, Carmichael function, Euler's theorem, etc.

Because 1000 = 2^3 * 5^3 = 8*125. Compute modulo 8 and modulo 125 then combine via CRT.

We need 7^2024 mod 8: Since 7 ≡ -1 mod 8, 7^2024 = (-1)^2024 = 1 mod 8.

Now mod 125. Compute 7^2024 mod 125.

We can use Euler's totient φ(125) = 125*(1-1/5) = 100. So 7^100 ≡ 1 mod 125 because gcd(7,125)=1.

Thus 7^2024 = 7^(20*100 + 24) = (7^100)^20 * 7^24 ≡ 1^20 * 7^24 ≡ 7^24 mod 125.

Now compute 7^24 mod 125.

We can compute by repeated squaring.

7^1 = 7
7^2 = 49
7^4 = 49^2 = 2401 ≡ 2401 mod 125. 125*19=2375, remainder 26. So 7^4 ≡ 26.

7^8 = 26^2 = 676 ≡ 676 - 125*5=676-625=51. So 7^8 ≡ 51.

7^16 = 51^2 = 2601 ≡ 2601 -125*20=2601-2500=101. So 7^16 ≡ 101.

Now we need 7^24 = 7^16 * 7^8. Multiply: 101 * 51 = 5151. 125*41 = 5125, remainder 26. So 7^24 ≡ 26 mod 125.

Thus 7^2024 ≡ 26 mod 125 and ≡ 1 mod 8.

Now we need x such that x ≡ 26 (mod 125) and x ≡ 1 (mod 8).

Solve via CRT.

Let x = 26 + 125k, for integer k. Need 26 + 125k ≡ 1 mod 8.

Compute 125 mod 8: 125 = 8*15 + 5, so 125 ≡ 5 mod 8.

Thus 26 + 125k ≡ 26 + 5k ≡ 1 mod 8.

26 mod 8 = 2 (since 8*3=24). So 2 + 5k ≡ 1 mod 8 => 5k ≡ -1 ≡ 7 mod 8.

Now we need inverse of 5 mod 8. 5*5 = 25 ≡ 1 mod 8, so 5 inverse is 5. Multiply both sides: k ≡ 5*7 = 35 ≡ 35 mod 8 => 35 - 8*4 = 35-32=3. So k ≡ 3 mod 8.

Thus k = 3 + 8t.

Now x = 26 + 125k = 26 + 125*3 + 125*8t = 26 + 375 + 1000 t = 401 + 1000t.

Thus smallest positive solution is 401. So the last three digits are 401.

Thus answer: 401.

But we need to show step-by-step. We'll write out.

We can also cross-check using other methods: compute 7^2024 mod 1000 directly maybe using pattern of 7^phi(125) and mod 8. Already done.

Double-check: 7^24 mod 125 = 26. Let's verify using alternative: compute 7^5 = 16807, mod 125? 125*134=16750, remainder 57. So 7^5 ≡ 57. 7^10 = (7^5)^2 ≡ 57^2 = 3249 ≡ 3249 -125*25=3249-3125=124. So 7^10 ≡ 124 ≡ -1 mod 125. That's interesting: 7^10 ≡ -1 mod125. Then 7^20 ≡ 1. Then 7^24 = 7^20 * 7^4 ≡ 1 * 7^4. We computed 7^4 ≡ 26. So indeed 7^24 ≡ 26. Good.

Thus final answer 401.

We can also verify via mod 8: 7^2024 mod 8 = 1. 401 mod 8 = 1, consistent.

Thus answer: 401.

Now produce final answer with step-by-step.

We can also discuss using Carmichael lambda function for mod 1000: λ(8)=2, λ(125)=100, λ(1000)=lcm(2,100)=100. Actually λ(2^3)=2, λ(5^3)=100, lcm=100. So 7^100 ≡ 1 mod 1000? Not necessarily because 7 and 1000 are coprime, λ(1000) = 100. So 7^100 ≡ 1 mod 1000. Then 7^2024 = 7^(20*100+24) ≡ 7^24 mod 1000. But we found 7^24 mod 1000? Let's compute to see if matches 401. Compute 7^5 = 16807 mod 1000 = 807. 7^10 = 807^2 mod 1000 =? 807^2 = (800+7)^2 = 640000 + 2*800*7 +49 = 640000 + 11200 +49 = 651249. mod 1000 = 249. So 7^10 ≡ 249. 7^20 = 249^2 = (250-1)^2 = 62500 -500 +1 = 62001. mod 1000 = 1. Indeed 7^20 ≡ 1 mod 1000? Wait 249^2 = 62001, mod 1000 = 1. So 7^20 ≡ 1 mod 1000. Then 7^24 = 7^20 * 7^4 ≡ 1 * 7^4. Compute 7^2 = 49, 7^4 = 49^2 = 2401, mod 1000 = 401. So indeed 7^24 ≡ 401 mod 1000. So we can directly compute using λ(1000) = 100 but also discovered that 7^20 ≡ 1 mod 1000 (so exponent may be 20). Actually the order of 7 modulo 1000 divides 100, and indeed appears to be 20. Let's verify: 7^20 ≡ 1 mod 1000 indeed. So we can reduce exponent modulo 20. 2024 mod 20 = 2024 - 20*101 = 2024 - 2020 = 4. So 7^2024 ≡ 7^4 ≡ 401 mod 1000. That is a simpler approach.

But careful: we need to ensure 7^20 ≡ 1 mod 1000. Let's double-check: compute 7^5 = 16807 mod 1000 = 807. 7^10 = 807^2 mod 1000 = 807*807 =? Let's compute precisely: 800*807 = 645600, plus 7*807 = 5649, sum = 651249, mod 1000 = 249. So 7^10 ≡ 249. Then 7^20 = 249^2 mod 1000 = (250 -1)^2 = 62500 - 500 +1 = 62001, mod 1000 = 1. Yes. So order divides 20. Indeed 7^20 ≡ 1 mod 1000. So 7^2024 = 7^(20*101 + 4) = (7^20)^101 * 7^4 ≡ 1*7^4 ≡ 401.

Thus answer 401.

Thus we can present both approaches: using CRT or using Carmichael/Euler.

We'll produce a thorough step-by-step solution.

We must show "complete step-by-step working".

Thus final answer: 401.

We'll also note that the last three digits of 7^2024 are 401.

Now produce final answer.
````

</details>

**Output:**

````
**Goal:** Find the last three digits of \(7^{2024}\), i.e. compute  

\[
7^{2024}\pmod{1000}.
\]

Because \(1000 = 2^{3}\cdot 5^{3}=8\cdot125\), we can work modulo 8 and modulo 125 separately and then combine the results with the Chinese Remainder Theorem (CRT).  
A shorter route is to use the Carmichael function, but the CRT method shows the reasoning explicitly.

---

## 1.  Modulo 8

\[
7\equiv -1\pmod 8\quad\Longrightarrow\quad 
7^{2024}\equiv (-1)^{2024}=1\pmod 8.
\]

So  

\[
\boxed{7^{2024}\equiv 1\pmod 8}.
\]

---

## 2.  Modulo 125

### 2.1 Reduce the exponent using Euler’s theorem  

\[
\varphi(125)=125\Bigl(1-\frac15\Bigr)=100,
\qquad\gcd(7,125)=1,
\]
hence  

\[
7^{100}\equiv 1\pmod{125}.
\]

Write the exponent \(2024\) as  

\[
2024 = 20\cdot100 + 24,
\]

so  

\[
7^{2024}=7^{20\cdot100+24}\equiv (7^{100})^{20}\cdot7^{24}\equiv 7^{24}\pmod{125}.
\]

### 2.2 Compute \(7^{24}\pmod{125}\)

Use repeated squaring:

\[
\begin{aligned}
7^1 &\equiv 7 \pmod{125},\\[2pt]
7^2 &\equiv 49 \pmod{125},\\[2pt]
7^4 &\equiv 49^2 = 2401 \equiv 26 \pmod{125},\\[2pt]
7^8 &\equiv 26^2 = 676 \equiv 51 \pmod{125},\\[2pt]
7^{16}&\equiv 51^2 = 2601 \equiv 101 \pmod{125}.
\end{aligned}
\]

Now  

\[
7^{24}=7^{16}\cdot7^{8}\equiv 101\cdot 51 = 5151 \equiv 26 \pmod{125}.
\]

Thus  

\[
\boxed{7^{2024}\equiv 26\pmod{125}}.
\]

---

## 3.  Combine the congruences (CRT)

We need \(x\) such that  

\[
\begin{cases}
x\equiv 26\pmod{125},\\[2pt]
x\equiv 1\pmod{8}.
\end{cases}
\]

Write \(x = 26 + 125k\).  
Impose the second congruence:

\[
26 + 125k \equiv 1\pmod{8}
\Longrightarrow 26 + 5k \equiv 1\pmod{8}
\Longrightarrow 5k \equiv -1 \equiv 7\pmod{8}.
\]

Since \(5^{-1}\equiv5\pmod{8}\) (because \(5\cdot5=25\equiv1\)),  

\[
k \equiv 5\cdot7 = 35 \equiv 3\pmod{8}.
\]

Take the smallest non‑negative \(k=3\). Then  

\[
x = 26 + 125\cdot3 = 26 + 375 = 401.
\]

All solutions are \(x = 401 + 1000t\) for integer \(t\); the unique residue modulo 1000 is  

\[
\boxed{401}.
\]

---

## 4.  (Optional) Quick check using the order of 7 modulo 1000  

The Carmichael function gives \(\lambda(1000)=\operatorname{lcm}(\lambda(8),\lambda(125)) = \operatorname{lcm}(2,100)=100\), so \(7^{100}\equiv1\pmod{1000}\).  
A direct computation shows that the actual order is smaller:

\[
7^{5}=16807\equiv 807\pmod{1000},\qquad
7^{10}\equiv 807^{2}\equiv 249\pmod{1000},
\]
\[
7^{20}\equiv 249^{2}\equiv 1\pmod{1000}.
\]

Hence \(7^{2024}=7^{20\cdot101+4}\equiv7^{4}\equiv401\pmod{1000}\), confirming the CRT result.

---

**Answer:** The last three digits of \(7^{2024}\) are **401**.
````

### Combinatorics

**Prompt:** In how many ways can 8 people be seated around a circular table if two specific people, A and B, must NOT sit next to each other? Show your complete working.

*1285 tok | 10.75s | 119.6 t/s | think: 2501 chars | finish: stop*

<details><summary>Thinking (2501 chars)</summary>

````
The user asks: "In how many ways can 8 people be seated around a circular table if two specific people, A and B, must NOT sit next to each other? Show your complete working."

We need to answer with a complete working. It's a standard combinatorial problem: number of arrangements of 8 distinct people around a circular table (i.e., up to rotation) where A and B are not adjacent.

We need to compute total number of circular arrangements: (8-1)! = 7! = 5040.

Now subtract arrangements where A and B are adjacent.

Treat A and B as a block (ordered). In circular arrangements, we can treat the block as one entity plus the other 6 individuals, total 7 entities. Number of ways to arrange them around a circle: (7-1)! = 6! = 720. Within the block, A and B can be in two orders: AB or BA. So total adjacent arrangements: 720 * 2 = 1440.

Thus number where they are NOT adjacent = 5040 - 1440 = 3600.

Alternatively, we could do direct counting: fix A's position, then count placements for B not adjacent.

But answer: 3600.

We need to show complete working.

We might also mention that rotations are considered identical, so we fix A at a seat to break symmetry. Then count B's possible seats: there are 8 seats, but after fixing A, B cannot be immediate left or right (2 seats), so B has 5 possible seats. Then arrange remaining 6 people in 6! ways: 5 * 6! = 5 * 720 = 3600.

Thus answer: 3600.

We can also show alternative method: total minus adjacent.

Thus answer.

We need to be thorough, show reasoning.

We need to ensure we address the fact that arrangements are considered distinct up to rotation, not reflection (i.e., orientation matters). Usually for a round table, rotations are considered identical but reflections are distinct unless the table is not oriented. So we assume standard.

Thus answer: 3600 ways.

We can also show step-by-step.

We can also discuss if we consider reflections as identical, then answer would be different: (8-1)!/2 = 7!/2 = 5040/2 = 2520 total, adjacent would be (7-1)!/2 * 2 = 360? Actually need to adjust, but not needed.

Thus answer: 3600.

We should show complete working.

We might also discuss inclusion-exclusion.

Thus final answer.

We need to show all steps.

Thus final.

We should also note that if the table is considered unlabeled and rotations considered identical, we fix one person to break symmetry.

Thus final answer: 3600.

We'll produce a nicely formatted solution.

Also we could show both methods.

Thus answer.

Now produce final.
````

</details>

**Output:**

````
**Problem**  
Eight distinct people (including two particular people \(A\) and \(B\)) are to be seated around a round table.  
Rotations of the whole seating arrangement are regarded as the same (the usual convention for circular permutations).  
We want the number of seatings in which \(A\) and \(B\) are **not** neighbours.

---

## 1. Count all possible circular arrangements

For \(n\) distinct people around a circle the number of arrangements is \((n-1)!\).  
Here \(n=8\):

\[
\text{Total arrangements}= (8-1)! = 7! = 5040 .
\]

---

## 2. Count the “bad’’ arrangements (where \(A\) and \(B\) sit together)

Treat the pair \(\{A,B\}\) as a single “block”.  
Inside the block the two people can be ordered as \(AB\) or \(BA\) – that’s \(2!\) possibilities.

Now we have:

* 1 block \(\{A,B\}\)  
* the other 6 individuals  

so **7 objects** to arrange around the circle.

Number of circular arrangements of these 7 objects:

\[
(7-1)! = 6! = 720 .
\]

Multiplying by the internal order of the block:

\[
\text{Adjacent arrangements}= 6! \times 2! = 720 \times 2 = 1440 .
\]

---

## 3. Subtract the bad arrangements

\[
\begin{aligned}
\text{Valid (non‑adjacent) arrangements}
&= \text{Total arrangements} - \text{Adjacent arrangements} \\
&= 5040 - 1440 \\
&= 3600 .
\end{aligned}
\]

---

## 4. (Alternative “direct’’ count – a quick sanity check)

Fix \(A\) at a seat to break the rotational symmetry.  
\(B\) cannot sit in the two seats immediately to the left or right of \(A\), so \(B\) has:

\[
8 - 1 - 2 = 5
\]

choices.

After placing \(A\) and \(B\), the remaining 6 people can be arranged in the remaining 6 seats in \(6!\) ways:

\[
5 \times 6! = 5 \times 720 = 3600 .
\]

Both methods give the same result.

---

\[
\boxed{3600}
\]

Thus, there are **3600** ways to seat the eight people around the circular table so that \(A\) and \(B\) are not neighbours.
````

### Probability

**Prompt:** A bag contains 5 red, 4 blue, and 3 green marbles. Four marbles are drawn at random without replacement. What is the probability that at least one marble of each color is drawn? Express your answer as a simplified fraction and show all working.

*1835 tok | 14.99s | 122.4 t/s | think: 3434 chars | finish: stop*

<details><summary>Thinking (3434 chars)</summary>

````
We have a bag with 5 red, 4 blue, 3 green marbles. Total marbles: 5+4+3=12. We draw 4 marbles without replacement. We need probability that at least one marble of each color is drawn. Since we draw 4 marbles, the only possible color composition with at least one of each color is: we need at least one red, one blue, one green, and the fourth can be any color (including possibly one of those colors). So the possible compositions: (2 red, 1 blue, 1 green), (1 red, 2 blue, 1 green), (1 red, 1 blue, 2 green). Also (1 red, 1 blue, 1 green, and the fourth could be any of the three colors, which yields those three possibilities). There's no possibility of having 3 of one color and 1 of another because that would miss the third color. So we need to count favorable outcomes: number of ways to choose 4 marbles such that each color appears at least once.

We can compute using combinatorial counting: total number of ways to draw 4 marbles from 12: C(12,4). Favorable: sum over the three possible distributions.

Case 1: 2R,1B,1G: number of ways: C(5,2)*C(4,1)*C(3,1).

Case 2: 1R,2B,1G: C(5,1)*C(4,2)*C(3,1).

Case 3: 1R,1B,2G: C(5,1)*C(4,1)*C(3,2).

Sum these.

Compute each:

C(5,2)=10, C(4,1)=4, C(3,1)=3 => 10*4*3=120.

C(5,1)=5, C(4,2)=6, C(3,1)=3 => 5*6*3=90.

C(5,1)=5, C(4,1)=4, C(3,2)=3 => 5*4*3=60.

Sum: 120+90+60 = 270.

Total ways: C(12,4) = 495 (since 12 choose 4 = (12*11*10*9)/(4*3*2*1)=11880/24=495).

Thus probability = 270/495. Simplify: divide numerator and denominator by GCD. 270 and 495 share 45? Let's check: 495/45=11, 270/45=6. So GCD is 45? 270/45=6, 495/45=11. Yes 45. So simplified fraction = 6/11.

Check if further simplification possible: 6/11 is simplest.

Thus answer: 6/11.

But we must show all working. Provide explanation.

We can also verify via complementary counting: probability that at least one color missing. But we already have direct.

Thus answer: 6/11.

But we need to show all working.

We can also show using hypergeometric distribution or inclusion-exclusion.

Thus final answer: 6/11.

We should provide step-by-step.

Thus answer: $\frac{6}{11}$.

Now, double-check: Are we sure that the favorable count is correct? Let's double-check the numbers.

Total combos: 12 choose 4 = 495.

Case 2R,1B,1G: choose 2 from 5 red = 10. Choose 1 from 4 blue = 4. Choose 1 from 3 green = 3. Multiply = 120.

Case 1R,2B,1G: choose 1 from 5 red =5. Choose 2 from 4 blue =6. Choose 1 from 3 green =3. Multiply = 90.

Case 1R,1B,2G: choose 1 from 5 red =5. Choose 1 from 4 blue =4. Choose 2 from 3 green =3. Multiply =60.

Sum = 270.

Thus probability = 270/495 = 0.54545... 6/11 = approx 0.54545. Good.

Thus answer is correct.

Thus we can present answer.

We should also mention that there are no other ways to have at least one of each color.

Thus final answer: $\frac{6}{11}$.

We can also illustrate using inclusion-exclusion:

Probability of at least one of each = 1 - P(no red) - P(no blue) - P(no green) + P(no red and no blue) + P(no red and no green) + P(no blue and no green) - P(no red, no blue, no green). But the last term is zero because we cannot have no red, no blue, no green when drawing 4 marbles. Compute each.

But the direct counting is simpler.

Thus final answer: $\frac{6}{11}$.

Now we need to present answer as simplified fraction and show all working.

Thus answer: $\frac{6}{11}$.

Will also show step-by-step.

Thus final answer: $\frac{6}{11}$.

Proceed to final.
````

</details>

**Output:**

````
**Step 1: Count the total number of possible draws**

The bag has  

\[
5\text{ red}+4\text{ blue}+3\text{ green}=12\text{ marbles.}
\]

When we draw 4 marbles without replacement, the number of equally‑likely outcomes is  

\[
\binom{12}{4}= \frac{12\cdot11\cdot10\cdot9}{4\cdot3\cdot2\cdot1}=495 .
\]

---

**Step 2: Identify the favorable colour patterns**

To have “at least one marble of each colour’’ in a sample of 4, the composition must be one of the three possibilities  

* 2 red, 1 blue, 1 green  
* 1 red, 2 blue, 1 green  
* 1 red, 1 blue, 2 green  

(Any other distribution would miss at least one colour.)

---

**Step 3: Count the ways for each pattern**

1. **2 R, 1 B, 1 G**  

   \[
   \binom{5}{2}\binom{4}{1}\binom{3}{1}=10\cdot4\cdot3=120.
   \]

2. **1 R, 2 B, 1 G**  

   \[
   \binom{5}{1}\binom{4}{2}\binom{3}{1}=5\cdot6\cdot3=90.
   \]

3. **1 R, 1 B, 2 G**  

   \[
   \binom{5}{1}\binom{4}{1}\binom{3}{2}=5\cdot4\cdot3=60.
   \]

---

**Step 4: Total number of favorable draws**

\[
120+90+60 = 270.
\]

---

**Step 5: Compute the probability**

\[
P(\text{at least one of each colour})=\frac{\text{favourable}}{\text{total}}
      =\frac{270}{495}.
\]

Simplify the fraction. Both numerator and denominator are divisible by \(45\):

\[
\frac{270\div45}{495\div45}= \frac{6}{11}.
\]

---

\[
\boxed{\dfrac{6}{11}}
\]
````

