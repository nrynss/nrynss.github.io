# Sarvam 30B (Q4_K_M) — Test 17: HTTP/2 spec analysis

**Category:** Synthesis  
**Date:** 2026-06-14 21:36:37  

**Prompt:** The following is from RFC 7540 Section 5 (HTTP/2 Streams and Multiplexing).

Stream States:
idle: All streams start idle. HEADERS -> open. PUSH_PROMISE -> reserved (remote).
reserved (local): Promised via PUSH_PROMISE. HEADERS -> half-closed (remote). RST_STREAM -> closed.
reserved (remote): Remote reserved. HEADERS -> half-closed (local). RST_STREAM -> closed.
open: Both peers send frames. END_STREAM -> half-closed. RST_STREAM -> closed.
half-closed (local): Can't send except WINDOW_UPDATE/PRIORITY/RST_STREAM. END_STREAM/RST_STREAM -> closed.
half-closed (remote): Remote can't send except allowed frames. END_STREAM/RST_STREAM -> closed.
closed: Terminal. MUST NOT send frames other than PRIORITY.

Based on this:
1. List all stream state transitions.
2. Identify transitions lacking explicit error paths.
3. Any ambiguities that could cause implementation divergence?

*3995 tok | 37.28s | 107.2 t/s | think: 9560 chars | finish: stop*

<details><summary>Thinking (9560 chars)</summary>

````
1.  **Deconstruct the User's Request:** I'll first break down the user's prompt into its core components.
    *   **Source Material:** The user provides a table of HTTP/2 Stream States from RFC 7540, Section 5. This is my ground truth. I must *only* use this information.
    *   **Task 1: List all stream state transitions.** This is a direct request. I need to go through the table and extract every possible transition. The table is structured as `From State: [Frame] -> To State`. I need to be systematic.
    *   **Task 2: Identify transitions lacking explicit error paths.** This is an analytical task. "Explicit error paths" in the context of the RFC table means a transition like `X -> closed` triggered by an `RST_STREAM` frame. I need to look for transitions where a frame is received that *isn't* listed in the "From State" column's possible frames. The table doesn't explicitly say "if you receive Y in state X, you go to closed," but it's implied by the structure. The prompt is asking me to find the *gaps*.
    *   **Task 3: Identify ambiguities that could cause implementation divergence.** This is the most complex and interpretive task. I need to think beyond the literal text. What's unclear? What could be interpreted differently by different developers? I should consider edge cases, the interaction between states, and the *purpose* of the states. The user is asking for potential bugs or interoperability issues, so I should think like an engineer debugging a protocol implementation.

2.  **Execution - Task 1: List all state transitions.**
    *   I'll create a mental (or actual) list, going row by row through the provided table.
    *   `idle`:
        *   `HEADERS -> open`
        *   `PUSH_PROMISE -> reserved (remote)`
    *   `reserved (local)`:
        *   `HEADERS -> half-closed (remote)`
        *   `RST_STREAM -> closed`
    *   `reserved (remote)`:
        *   `HEADERS -> half-closed (local)`
        *   `RST_STREAM -> closed`
    *   `open`:
        *   `END_STREAM -> half-closed (local)`
        *   `RST_STREAM -> closed`
    *   `half-closed (local)`:
        *   `END_STREAM -> closed`
        *   `RST_STREAM -> closed`
    *   `half-closed (remote)`:
        *   `END_STREAM -> closed`
        *   `RST_STREAM -> closed`
    *   `closed`:
        *   `PRIORITY -> closed` (This is a bit weird, the prompt says "MUST NOT send frames other than PRIORITY", but the table shows a transition. I'll note this as a potential ambiguity for Task 3).
    *   Okay, I have a complete list. I'll format this clearly for the final answer, probably using a `From -> [Frame] -> To` format for readability.

3.  **Execution - Task 2: Identify transitions lacking explicit error paths.**
    *   The core idea here is: "What happens if I receive a frame in a given state that *isn't* listed in the table for that state?"
    *   Let's go state by state.
    *   `idle`: Allowed frames are `HEADERS` and `PUSH_PROMISE`. What if I get `DATA`, `RST_STREAM`, `WINDOW_UPDATE`? The RFC doesn't say. The logical conclusion is an error, so the stream should go to `closed`. The prompt asks for transitions *lacking explicit error paths*. So, `idle -> closed` on `DATA` is an implicit path, not an explicit one.
    *   `reserved (local)`: Allowed frames are `HEADERS` and `RST_STREAM`. What if I get `DATA`, `END_STREAM`, `WINDOW_UPDATE`? Again, implicit `-> closed`.
    *   `reserved (remote)`: Allowed frames are `HEADERS` and `RST_STREAM`. Same as above.
    *   `open`: Allowed frames are `HEADERS`, `DATA`, `END_STREAM`, `RST_STREAM`. What about `PRIORITY`, `WINDOW_UPDATE`, `PUSH_PROMISE`, `PING`? The RFC is clear that `PRIORITY`, `WINDOW_UPDATE`, `PING` are "control frames" that can be sent on any stream, including `open`. But what about `PUSH_PROMISE`? A stream can't be pushed if it's already `open`. This is a key point. So `open -> closed` on `PUSH_PROMISE` is an implicit error path. `DATA` frames are expected, but what if they violate flow control? That's another layer, but at the state machine level, receiving a `DATA` frame is fine. The prompt is about state transitions.
    *   `half-closed (local)`: Allowed frames are `WINDOW_UPDATE`, `PRIORITY`, `RST_STREAM`. What about `HEADERS`, `DATA`, `END_STREAM` (except for the explicit `END_STREAM -> closed`)? What about `PUSH_PROMISE`? What about `PING`? The RFC says control frames can be sent on any stream, but the *state machine* is more restrictive. The table is the source of truth for the state machine. So, receiving `HEADERS` or `DATA` in this state is an implicit error.
    *   `half-closed (remote)`: Similar to `half-closed (local)`. The remote can't send `DATA`. What if it does? Implicit `-> closed`.
    *   `closed`: The table says "MUST NOT send frames other than PRIORITY." This implies receiving *any other* frame is an error. So, `closed -> closed` on `DATA`, `HEADERS`, etc., is an implicit error path.
    *   Now I need to synthesize this into a clear list. I'll group them by the "erroneous" frame received. For example, "Receiving a `PUSH_PROMISE` on any state other than `idle`." This is a strong, clear point. "Receiving `DATA` on `half-closed` states." Another good one. "Receiving `HEADERS` on any state other than `idle`, `reserved (local)`, or `reserved (remote)`." This is a great summary. I'll structure my answer around these implicit error conditions.

4.  **Execution - Task 3: Identify ambiguities.**
    *   This requires deeper thinking. I'll re-read the state definitions and the transitions I just listed.
    *   **Ambiguity 1: The `PRIORITY` frame on a `closed` stream.** The table says `closed: MUST NOT send frames other than PRIORITY`. The transition list shows `PRIORITY -> closed`. This is contradictory. Does it mean you *can* send `PRIORITY` on a closed stream, and it just stays closed? Or is it saying that if you *do* send `PRIORITY`, it's the only non-error frame you can send, and it results in the same `closed` state? The latter seems more likely, but it's poorly worded. This is a perfect example of an ambiguity.
    *   **Ambiguity 2: Control frames on restricted states.** The table is very specific about what frames a state *can send* (`HEADERS`, `END_STREAM`, etc.). But what about control frames like `PING`, `WINDOW_UPDATE`, `PRIORITY`? The RFC text *outside* the table (which I have to recall or infer) says these can be sent on any stream. However, the *state machine table itself* doesn't list them as transitions for states like `reserved (local)` or `half-closed (local)`. Does this mean the state machine *ignores* them? No, that can't be right. They are control frames and must be processed. The most logical interpretation is that receiving a valid control frame on these states doesn't change the stream state, but it *is* a valid action. The ambiguity lies in the table's silence. An implementation might incorrectly treat receiving a `PING` on a `half-closed` stream as an error and close it, whereas another might correctly process the `PING` and leave the state unchanged. This is a classic implementation divergence point.
    *   **Ambiguity 3: The `PUSH_PROMISE` state.** The state is `reserved (remote)`. The definition is "Promised via PUSH_PROMISE." The transition is `PUSH_PROMISE -> reserved (remote)`. What happens next? The peer sends `HEADERS` to transition to `half-closed (local)`. But what if the peer *never* sends `HEADERS`? The stream sits in `reserved (remote)` indefinitely. The RFC doesn't specify a timeout. This could lead to resource exhaustion on the server if it keeps promises open. This is a significant ambiguity for a robust implementation.
    *   **Ambiguity 4: `END_STREAM` on `half-closed (remote)`.** The transition is `END_STREAM -> closed` from `half-closed (remote)`. But wait, the definition of `half-closed (remote)` is "Remote can't send except allowed frames." What are the "allowed frames"? The table doesn't say. The definition of `half-closed (local)` is "Can't send except WINDOW_UPDATE/PRIORITY/RST_STREAM". It's reasonable to assume `half-closed (remote)` has a symmetric definition, but it's not explicitly stated. Is `END_STREAM` an "allowed frame" for the remote in this state? The table shows `END_STREAM -> closed` as a transition, which implies it *is* allowed. But the *definition* of the state is slightly vague. This is a subtle but important point.
    *   **Ambiguity 5: `RST_STREAM` on `idle`.** The table doesn't list a transition for `RST_STREAM` on the `idle` state. Logically, it must be an error, so `idle -> closed`. But it's not *explicitly* stated in the table like it is for other states. This is similar to the "implicit error paths" from Task 2, but it's worth calling out as an ambiguity in the table's completeness.

5.  **Final Review and Formatting:**
    *   I'll assemble my findings into a clear, structured response.
    *   I'll use headings for each of the three questions.
    *   For Task 1, I'll use a clear list format.
    *   For Task 2, I'll list the implicit error conditions, explaining *why* they are errors.
    *   For Task 3, I'll list each ambiguity with a clear title (e.g., "PRIORITY on a Closed Stream") and a detailed explanation of the problem and potential divergent implementations.
    *   I'll add a concluding sentence to summarize the importance of careful implementation.
    *   I'll double-check that my answer is based *only* on the provided text and general knowledge of the RFC, as requested. The prompt is self-contained. The analysis is derived from the provided snippet.
````

</details>

**Output:**

````
Excellent questions. This requires a careful reading of the RFC's state machine definition. Based on the provided text from RFC 7540, here is a detailed analysis.

---

### 1. List all stream state transitions

Here are all the explicit state transitions defined in the table.

*   **idle:**
    *   `HEADERS` -> `open`
    *   `PUSH_PROMISE` -> `reserved (remote)`

*   **reserved (local):**
    *   `HEADERS` -> `half-closed (remote)`
    *   `RST_STREAM` -> `closed`

*   **reserved (remote):**
    *   `HEADERS` -> `half-closed (local)`
    *   `RST_STREAM` -> `closed`

*   **open:**
    *   `END_STREAM` -> `half-closed (local)`
    *   `RST_STREAM` -> `closed`

*   **half-closed (local):**
    *   `END_STREAM` -> `closed`
    *   `RST_STREAM` -> `closed`

*   **half-closed (remote):**
    *   `END_STREAM` -> `closed`
    *   `RST_STREAM` -> `closed`

*   **closed:**
    *   `PRIORITY` -> `closed` (This transition is implicit in the "MUST NOT send" rule, but the state remains `closed`).

---

### 2. Identify transitions lacking explicit error paths

The state machine table only lists the *valid* transitions for each state. Any other frame received in a given state constitutes an error and should result in the stream transitioning to the `closed` state. The transitions lacking explicit error paths are therefore all the invalid frame receptions.

The most significant implicit error paths are:

*   **Receiving `PUSH_PROMISE` on any state other than `idle`:**
    *   A `PUSH_PROMISE` can only be sent when a stream is in the `idle` state. Receiving one on any other stream (`open`, `half-closed`, `reserved`, `closed`) is an error that should close the stream.

*   **Receiving `HEADERS` on any state other than `idle`, `reserved (local)`, or `reserved (remote)`:**
    *   `HEADERS` frames are only valid for streams in `idle`, `reserved (local)`, or `reserved (remote)` states. Receiving one on an `open`, `half-closed`, or `closed` stream is an error.

*   **Receiving `DATA` on any state other than `open`:**
    *   The `open` state is the only one where `DATA` frames can be sent and received. Receiving a `DATA` frame on `reserved`, `half-closed`, or `closed` streams is an error.

*   **Receiving `END_STREAM` on any state other than `open` or `half-closed (local)`:**
    *   While `END_STREAM` is allowed on `open` and `half-closed (local)`, receiving it on `reserved`, `half-closed (remote)`, or `closed` streams is an error.

*   **Receiving `RST_STREAM` on the `idle` state:**
    *   The table does not list a valid transition for `RST_STREAM` from `idle`. While logically it must be an error, it is not explicitly stated in the table, unlike for other states.

---

### 3. Any ambiguities that could cause implementation divergence?

Yes, there are several ambiguities in this table that could lead to different implementations behaving differently.

1.  **Control Frames on Restricted States:**
    *   **Ambiguity:** The table is very specific about which frames cause state transitions. However, it is silent on frames that *do not* cause a transition, such as `PING`, `WINDOW_UPDATE`, and `PRIORITY`. The RFC text outside the table states these are "control frames" that can be sent on any stream.
    *   **Potential Divergence:** An implementation might incorrectly interpret the table's silence as meaning these frames are invalid on states like `reserved (local)` or `half-closed (local)`. It might close the stream upon receiving a `PING` on a `half-closed` stream. A correct implementation would process the `PING` (e.g., send a `PING` reply) but leave the stream's state unchanged.

2.  **`PRIORITY` on a `closed` Stream:**
    *   **Ambiguity:** The `closed` state definition says, "MUST NOT send frames other than `PRIORITY`." The transition list for `closed` shows `PRIORITY -> closed`. This is contradictory. Does it mean you *can* send `PRIORITY` and the stream remains `closed`? Or is it saying that `PRIORITY` is the only non-error frame you can send, but it still results in the `closed` state?
    *   **Potential Divergence:** An implementation might reject a `PRIORITY` frame on a closed stream as an error. Another might accept it, process it, and correctly leave the stream in the `closed` state. While the practical impact is low, it represents a divergence in protocol compliance.

3.  **The `reserved (remote)` State and Timeouts:**
    *   **Ambiguity:** A stream enters the `reserved (remote)` state after a `PUSH_PROMISE`. The only transition out of this state is `HEADERS -> half-closed (local)`. The RFC provides no guidance on what happens if the peer never sends the `HEADERS` frame.
    *   **Potential Divergence:** This could lead to a resource leak on the server. One implementation might keep the `reserved (remote)` stream open indefinitely. A more robust implementation might implement its own timeout to close the stream if the peer fails to send `HEADERS` within a reasonable period, preventing resource exhaustion. The lack of a specified timeout is a significant ambiguity for production-grade software.

4.  **The Definition of `half-closed (remote)`:**
    *   **Ambiguity:** The state `half-closed (local)` is defined as: "Can't send except WINDOW_UPDATE/PRIORITY/RST_STREAM." The state `half-closed (remote)` is defined as: "Remote can't send except allowed frames." The definition of the remote state is less specific. What are the "allowed frames"?
    *   **Potential Divergence:** While the transition table implies that `END_STREAM` and `RST_STREAM` are the only valid frames (as they cause transitions), the vague definition could lead to confusion. An implementation might incorrectly allow `DATA` frames from the remote peer in this state, violating the protocol's flow control logic. The asymmetry in the definitions is a subtle but important point of ambiguity.
````

