# Sarvam 30B (Q4_K_M) — Test 17: HTTP/2 spec analysis

**Category:** Synthesis  
**Date:** 2026-05-27 06:38:23  

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

*9890 tok | 1303.05s | 7.6 t/s | think: 32120 chars | finish: stop*

<details><summary>Thinking (32120 chars)</summary>

````
We need to answer three questions based on the given description of stream states and transitions in RFC 7540 Section 5.

We need to list all stream state transitions. Then identify transitions lacking explicit error paths. Then discuss any ambiguities that could cause implementation divergence.

We need to interpret the description. The description includes:

- idle: All streams start idle. HEADERS -> open. PUSH_PROMISE -> reserved (remote).

- reserved (local): Promised via PUSH_PROMISE. HEADERS -> half-closed (remote). RST_STREAM -> closed.

- reserved (remote): Remote reserved. HEADERS -> half-closed (local). RST_STREAM -> closed.

- open: Both peers send frames. END_STREAM -> half-closed. RST_STREAM -> closed.

- half-closed (local): Can't send except WINDOW_UPDATE/PRIORITY/RST_STREAM. END_STREAM/RST_STREAM -> closed.

- half-closed (remote): Remote can't send except allowed frames. END_STREAM/RST_STREAM -> closed.

- closed: Terminal. MUST NOT send frames other than PRIORITY.

We need to list all possible transitions.

We need to consider each state and the events that cause a transition.

We need to also identify transitions that lack explicit error paths. That is, if a particular event occurs in a state, does the spec define what to do (including error handling) or is it left to the implementation? For example, in idle, HEADERS -> open. That is defined. PUSH_PROMISE -> reserved (remote). That is defined.

In reserved (local): PUSH_PROMISE -> reserved (local) (maybe? Actually, reserved (local) is after PUSH_PROMISE, then HEADERS -> half-closed (remote). So PUSH_PROMISE -> reserved (local) is not defined? Actually, PUSH_PROMISE is a frame that promises a stream. The spec says: "Reserved (local): Promised via PUSH_PROMISE. HEADERS -> half-closed (remote). RST_STREAM -> closed." So PUSH_PROMISE itself is not a transition, but the state after receiving PUSH_PROMISE is reserved (local). So the transition from idle to reserved (local) via PUSH_PROMISE is defined. So the transition from reserved (local) to other states: HEADERS -> half-closed (remote), RST_STREAM -> closed.

In reserved (remote): HEADERS -> half-closed (local). RST_STREAM -> closed.

Open: Both peers send frames. END_STREAM -> half-closed. RST_STREAM -> closed.

Half-closed (local): Can't send except WINDOW_UPDATE/PRIORITY/RST_STREAM. END_STREAM/RST_STREAM -> closed. So from half-closed (local) to closed via END_STREAM or RST_STREAM. Also perhaps to open? Actually, can't send except those allowed frames, but maybe the stream can go back to open? According to spec, half-closed (local) is when remote has closed, but local can still send WINDOW_UPDATE/PRIORITY/RST_STREAM. When remote receives these, it can send them back? Actually, half-closed (local) means local can still send frames, but remote has closed. So the stream can transition to closed when local sends END_STREAM or RST_STREAM. The spec says "END_STREAM/RST_STREAM -> closed". So that is defined.

Half-closed (remote): Remote can't send except allowed frames. END_STREAM/RST_STREAM -> closed.

Closed: Terminal. MUST NOT send frames other than PRIORITY.

We also need to consider transitions from idle to reserved (local) via PUSH_PROMISE, from idle to open via HEADERS. Also maybe from idle to reserved (remote) via PUSH_PROMISE? Actually, reserved (remote) is a state for remote reserved? Wait, reserved (local) is the state where the local side has promised a stream via PUSH_PROMISE, and the remote side hasn't yet responded. reserved (remote) is the state where the remote side has promised a stream. So idle can become reserved (local) via receiving PUSH_PROMISE? Actually, the spec says: "All streams start idle. HEADERS -> open. PUSH_PROMISE -> reserved (remote)." That is ambiguous: It says PUSH_PROMISE -> reserved (remote). That suggests that receiving a PUSH_PROMISE from the remote side transitions to reserved (remote) state. But earlier, reserved (local) is "Promised via PUSH_PROMISE". So maybe the spec is describing that receiving a PUSH_PROMISE from the remote side leads to reserved (remote) state. But the phrase "PUSH_PROMISE -> reserved (remote)" suggests that the state after receiving PUSH_PROMISE is reserved (remote). However, reserved (local) is also a state after PUSH_PROMISE? Let's check RFC 7540.

In RFC 7540 Section 5, the stream states are defined as:

- idle: The stream is not yet open.

- reserved (local): The stream has been promised via PUSH_PROMISE; the remote side has not yet sent headers.

- reserved (remote): The stream has been promised via PUSH_PROMISE; the local side has not yet sent headers.

- open: Both sides have sent headers.

- half-closed (local): The remote side has closed the stream.

- half-closed (remote): The local side has closed the stream.

- closed: The stream is closed.

But the description given in the question seems to have some differences. Let's re-read the question:

"The following is from RFC 7540 Section 5 (HTTP/2 Streams and Multiplexing).

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
3. Any ambiguities that could cause implementation divergence?"

So the description is a bit simplified. We need to list all transitions.

We need to consider all possible events: HEADERS, PUSH_PROMISE, END_STREAM, RST_STREAM, WINDOW_UPDATE, PRIORITY, maybe also frames like DATA, etc.

But the description only mentions HEADERS, PUSH_PROMISE, END_STREAM, RST_STREAM, WINDOW_UPDATE, PRIORITY.

We need to list transitions based on the given description.

We need to be careful: The description says:

- idle: HEADERS -> open. PUSH_PROMISE -> reserved (remote). So from idle, receiving a PUSH_PROMISE leads to reserved (remote). But also, maybe sending a PUSH_PROMISE leads to reserved (local)? Actually, the description says "PUSH_PROMISE -> reserved (remote)". That suggests that the event is PUSH_PROMISE (presumably received) leads to reserved (remote). But also, the state reserved (local) is defined as "Promised via PUSH_PROMISE". So maybe sending a PUSH_PROMISE leads to reserved (local). But the description doesn't explicitly say that. It just says "reserved (local): Promised via PUSH_PROMISE". So maybe the transition from idle to reserved (local) is sending a PUSH_PROMISE.

But the description says "PUSH_PROMISE -> reserved (remote)". That is ambiguous: It could mean that receiving a PUSH_PROMISE leads to reserved (remote). Or it could be a generic mapping: PUSH_PROMISE is the event that leads to reserved (remote). But we need to interpret.

Given the typical HTTP/2 stream state machine, the events are:

- idle: receive PUSH_PROMISE -> reserved (local) (if local side promised) or reserved (remote) (if remote side promised). Actually, the spec: "A stream is created in the idle state. The server may send a PUSH_PROMISE for a stream, causing the stream to transition to reserved (local). The client may send a PUSH_PROMISE, causing the stream to transition to reserved (remote)." So both sides can send PUSH_PROMISE.

But the description only mentions PUSH_PROMISE -> reserved (remote). So maybe they are only considering receiving PUSH_PROMISE.

But the question likely expects us to list transitions based on the given description, not the full spec.

Thus, we need to list:

From idle:

- HEADERS -> open

- PUSH_PROMISE -> reserved (remote)

From reserved (local):

- HEADERS -> half-closed (remote)

- RST_STREAM -> closed

From reserved (remote):

- HEADERS -> half-closed (local)

- RST_STREAM -> closed

From open:

- END_STREAM -> half-closed

- RST_STREAM -> closed

From half-closed (local):

- END_STREAM -> closed

- RST_STREAM -> closed

From half-closed (remote):

- END_STREAM -> closed

- RST_STREAM -> closed

From closed:

- (no transitions)

But also, maybe from half-closed (local) we can send WINDOW_UPDATE, PRIORITY, RST_STREAM. But the description says "Can't send except WINDOW_UPDATE/PRIORITY/RST_STREAM". So maybe there are transitions for those frames? But the description doesn't list transitions for those frames. It just says they are allowed frames. So we might note that those frames are allowed but not causing state transitions? Or maybe they cause transitions to closed? Actually, sending WINDOW_UPDATE or PRIORITY while half-closed (local) may cause the stream to become closed? Or maybe they keep it half-closed? The spec says: "When a stream is half-closed (local), the local endpoint may send WINDOW_UPDATE, PRIORITY, and RST_STREAM frames. When the remote endpoint receives these, it may send back WINDOW_UPDATE, PRIORITY, or RST_STREAM. The stream remains half-closed until the remote endpoint closes it." So the state may not change until the remote endpoint closes. So the transitions for WINDOW_UPDATE and PRIORITY may not cause a state change. So we may note that.

Similarly, half-closed (remote) can receive WINDOW_UPDATE, PRIORITY, RST_STREAM.

But the description doesn't mention those.

We need to list all stream state transitions based on the given description.

Thus, we can produce a table:

State -> Event -> New State

Idle -> HEADERS -> open

Idle -> PUSH_PROMISE -> reserved (remote)

reserved (local) -> HEADERS -> half-closed (remote)

reserved (local) -> RST_STREAM -> closed

reserved (remote) -> HEADERS -> half-closed (local)

reserved (remote) -> RST_STREAM -> closed

open -> END_STREAM -> half-closed

open -> RST_STREAM -> closed

half-closed (local) -> END_STREAM -> closed

half-closed (local) -> RST_STREAM -> closed

half-closed (remote) -> END_STREAM -> closed

half-closed (remote) -> RST_STREAM -> closed

closed -> (no transitions)

Additionally, maybe from half-closed (local) we can send WINDOW_UPDATE, PRIORITY, RST_STREAM. But the description says "Can't send except WINDOW_UPDATE/PRIORITY/RST_STREAM". So we might note that these frames are allowed but do not cause state transitions.

Similarly, from half-closed (remote) we can receive WINDOW_UPDATE, PRIORITY, RST_STREAM.

But the question likely expects us to list the transitions as described.

Now, second question: Identify transitions lacking explicit error paths.

We need to identify transitions where the spec does not define what to do if an error occurs (e.g., receiving an unexpected frame, sending a frame in an illegal state, etc.). For example:

- In idle, receiving a PUSH_PROMISE leads to reserved (remote). But what if the PUSH_PROMISE is malformed? The spec may not define error handling.

- In reserved (local), receiving HEADERS leads to half-closed (remote). But what if HEADERS is sent without a prior PUSH_PROMISE? The spec may not define error handling.

- In reserved (local), receiving RST_STREAM leads to closed. That is defined.

- In reserved (remote), receiving HEADERS leads to half-closed (local). But what if HEADERS is sent without prior PUSH_PROMISE? Not defined.

- In reserved (remote), receiving RST_STREAM leads to closed.

- In open, receiving END_STREAM leads to half-closed. That is defined.

- In open, receiving RST_STREAM leads to closed.

- In half-closed (local), receiving END_STREAM or RST_STREAM leads to closed. That is defined.

- In half-closed (local), sending WINDOW_UPDATE/PRIORITY/RST_STREAM is allowed, but not defined as state transitions. So if these frames are sent in an illegal state, the spec may not define.

- In half-closed (remote), receiving END_STREAM/RST_STREAM leads to closed. That is defined.

- In half-closed (remote), receiving WINDOW_UPDATE/PRIORITY is allowed but not defined as state transition.

- In closed, no transitions.

But also, the spec may not define error paths for unexpected frames in any state. For example, receiving a DATA frame in idle, or receiving a HEADERS frame in reserved (local) without a PUSH_PROMISE, etc.

We need to identify transitions lacking explicit error paths.

Third question: Any ambiguities that could cause implementation divergence?

We need to point out ambiguities in the description, such as:

- The mapping of PUSH_PROMISE to reserved (local) vs reserved (remote) is ambiguous. The description says "PUSH_PROMISE -> reserved (remote)" but reserved (local) is also described as "Promised via PUSH_PROMISE". So which side is which? This could cause confusion.

- The description does not define transitions for WINDOW_UPDATE and PRIORITY frames. It only says they are allowed but not what state they cause. This could lead to different implementations.

- The description says "HEADERS -> half-closed (remote)" for reserved (local) and "HEADERS -> half-closed (local)" for reserved (remote). But it does not specify that the direction of the stream matters. So the same HEADERS frame could cause different transitions depending on which side is sending. This could be ambiguous.

- The description does not define what happens when a stream is in half-closed state and receives a WINDOW_UPDATE or PRIORITY from the remote side. The spec says the stream remains half-closed, but the description does not state that.

- The description does not define error handling for receiving frames in illegal states, such as receiving END_STREAM in open? Actually, that is defined.

- The description does not define the effect of sending frames in the closed state, other than PRIORITY.

- The description does not define the effect of sending RST_STREAM in half-closed (local) or half-closed (remote) beyond closing the stream.

- The description does not define the effect of sending PUSH_PROMISE in reserved (local) or reserved (remote) states.

- The description does not define what happens if a stream is in open state and receives a PUSH_PROMISE.

- The description does not define the effect of receiving a DATA frame in any state.

- The description does not define the effect of receiving a WINDOW_UPDATE in half-closed (local) on the stream state.

- The description does not define the effect of receiving a PRIORITY in half-closed (local) on the stream state.

- The description does not define the effect of receiving a RST_STREAM in half-closed (local) beyond closing.

- The description does not define the effect of receiving a RST_STREAM in half-closed (remote) beyond closing.

- The description does not define the effect of receiving a PUSH_PROMISE in reserved (local) or reserved (remote) states.

- The description does not define the effect of receiving a HEADERS frame in reserved (local) or reserved (remote) states beyond the transition.

- The description does not define the effect of receiving a HEADERS frame in open state beyond the transition.

- The description does not define the effect of receiving a HEADERS frame in half-closed states.

- The description does not define the effect of receiving a RST_STREAM in open state beyond closing.

- The description does not define the effect of receiving a RST_STREAM in reserved (local) or reserved (remote) beyond closing.

- The description does not define the effect of receiving a RST_STREAM in half-closed (local) beyond closing.

- The description does not define the effect of receiving a RST_STREAM in half-closed (remote) beyond closing.

- The description does not define the effect of receiving a DATA frame in any state.

- The description does not define the effect of receiving a WINDOW_UPDATE in half-closed (local) beyond allowed.

- The description does not define the effect of receiving a PRIORITY in half-closed (local) beyond allowed.

- The description does not define the effect of receiving a WINDOW_UPDATE in half-closed (remote) beyond allowed.

- The description does not define the effect of receiving a PRIORITY in half-closed (remote) beyond allowed.

But we need to focus on ambiguities that could cause implementation divergence.

Potential ambiguities:

1. The mapping of PUSH_PROMISE to reserved (local) vs reserved (remote) is not clearly defined. The description says "PUSH_PROMISE -> reserved (remote)" but also "reserved (local): Promised via PUSH_PROMISE". So which side sends PUSH_PROMISE? This could cause confusion.

2. The description does not specify the effect of sending PUSH_PROMISE in reserved (local) or reserved (remote) states. This could be interpreted as either a no-op or an error.

3. The description does not define the effect of receiving HEADERS in reserved (local) or reserved (remote) states beyond the transition. It says "HEADERS -> half-closed (remote)" for reserved (local) and "HEADERS -> half-closed (local)" for reserved (remote). But it does not specify that the direction matters. So an implementation might interpret HEADERS as always causing half-closed on the opposite side, but the spec might intend that HEADERS in reserved (local) is a response from the remote side, while HEADERS in reserved (remote) is a request from the local side. This could be ambiguous.

4. The description does not define the effect of receiving WINDOW_UPDATE or PRIORITY in half-closed states. It only says they are allowed. So implementations might either ignore them or treat them as no-ops, or keep the stream half-closed. This could cause divergence.

5. The description does not define the effect of receiving a RST_STREAM in half-closed (local) or half-closed (remote) beyond closing. It says "END_STREAM/RST_STREAM -> closed". So that is defined. But the effect of receiving a RST_STREAM in half-closed (local) while also sending WINDOW_UPDATE or PRIORITY might be ambiguous.

6. The description does not define the effect of receiving a RST_STREAM in open state beyond closing. It says "RST_STREAM -> closed". That is defined.

7. The description does not define the effect of receiving a RST_STREAM in reserved (local) or reserved (remote) beyond closing. It says "RST_STREAM -> closed". That is defined.

8. The description does not define the effect of receiving a HEADERS in open state beyond the transition. It says "Both peers send frames. END_STREAM -> half-closed. RST_STREAM -> closed." So HEADERS in open state is not explicitly mentioned. Actually, in open state, both peers can send frames, but HEADERS is not mentioned. So perhaps HEADERS in open state is allowed but does not change state? Or maybe it's not allowed. This could be ambiguous.

9. The description does not define the effect of receiving a PUSH_PROMISE in open state.

10. The description does not define the effect of receiving a WINDOW_UPDATE or PRIORITY in open state.

But the question likely expects us to focus on the transitions that are defined and the ones that are not.

We need to answer in a structured way.

Thus, we can produce:

1. List all stream state transitions.

We can produce a table:

State -> Event -> New State

idle -> HEADERS -> open

idle -> PUSH_PROMISE -> reserved (remote)

reserved (local) -> HEADERS -> half-closed (remote)

reserved (local) -> RST_STREAM -> closed

reserved (remote) -> HEADERS -> half-closed (local)

reserved (remote) -> RST_STREAM -> closed

open -> END_STREAM -> half-closed

open -> RST_STREAM -> closed

half-closed (local) -> END_STREAM -> closed

half-closed (local) -> RST_STREAM -> closed

half-closed (remote) -> END_STREAM -> closed

half-closed (remote) -> RST_STREAM -> closed

closed -> (no transitions)

Additionally, we can note that in half-closed (local) and half-closed (remote), the frames WINDOW_UPDATE and PRIORITY are allowed but do not cause state transitions.

2. Identify transitions lacking explicit error paths.

We can list:

- idle -> PUSH_PROMISE -> reserved (remote): No explicit error handling for malformed PUSH_PROMISE.

- reserved (local) -> HEADERS -> half-closed (remote): No explicit error handling for HEADERS without prior PUSH_PROMISE.

- reserved (remote) -> HEADERS -> half-closed (local): No explicit error handling for HEADERS without prior PUSH_PROMISE.

- open -> END_STREAM -> half-closed: No explicit error handling for END_STREAM in open state? Actually, it's defined.

- open -> RST_STREAM -> closed: No explicit error handling for RST_STREAM in open state? Actually, defined.

- half-closed (local) -> END_STREAM/RST_STREAM -> closed: No explicit error handling for receiving these frames in half-closed (local) beyond closing.

- half-closed (remote) -> END_STREAM/RST_STREAM -> closed: No explicit error handling for receiving these frames in half-closed (remote) beyond closing.

- reserved (local) -> RST_STREAM -> closed: No explicit error handling for RST_STREAM in reserved (local) beyond closing.

- reserved (remote) -> RST_STREAM -> closed: No explicit error handling for RST_STREAM in reserved (remote) beyond closing.

- closed: No transitions, but error handling for frames in closed state is not defined.

- Also, the spec does not define error handling for receiving frames in illegal states, such as receiving DATA in idle, or receiving WINDOW_UPDATE in half-closed (local) beyond allowed.

3. Ambiguities that could cause implementation divergence.

We can list:

- The mapping of PUSH_PROMISE to reserved (local) vs reserved (remote) is ambiguous.

- The effect of sending PUSH_PROMISE in reserved (local) or reserved (remote) states is not defined.

- The effect of receiving HEADERS in reserved (local) or reserved (remote) states is not fully defined: the description says "HEADERS -> half-closed (remote)" for reserved (local) and "HEADERS -> half-closed (local)" for reserved (remote), but it does not clarify that HEADERS in reserved (local) is a response from the remote side, while HEADERS in reserved (remote) is a request from the local side.

- The description does not define the effect of receiving WINDOW_UPDATE and PRIORITY in half-closed states. Implementations may ignore them, treat them as no-ops, or keep the stream half-closed.

- The description does not define the effect of receiving a RST_STREAM in half-closed (local) or half-closed (remote) beyond closing. It says "END_STREAM/RST_STREAM -> closed", but it does not specify that the stream may already be closed.

- The description does not define the effect of receiving a RST_STREAM in open state beyond closing. It says "RST_STREAM -> closed", but it does not specify that the stream may have already been closed.

- The description does not define the effect of receiving a PUSH_PROMISE in open state.

- The description does not define the effect of receiving a HEADERS in open state.

- The description does not define the effect of receiving a DATA frame in any state.

- The description does not define the effect of receiving a WINDOW_UPDATE or PRIORITY in open state.

- The description does not define the effect of receiving a RST_STREAM in reserved (local) or reserved (remote) beyond closing.

- The description does not define the effect of receiving a RST_STREAM in half-closed (local) or half-closed (remote) beyond closing.

- The description does not define the effect of receiving a RST_STREAM in open state beyond closing.

- The description does not define the effect of receiving a RST_STREAM in reserved (local) or reserved (remote) beyond closing.

- The description does not define the effect of receiving a RST_STREAM in half-closed (local) or half-closed (remote) beyond closing.

But we need to be concise.

We can also mention that the description does not define the effect of sending frames in the closed state, other than PRIORITY.

We can also mention that the description does not define the effect of receiving frames in the closed state.

We can also mention that the description does not define the effect of receiving a PUSH_PROMISE in reserved (local) or reserved (remote) states.

We can also mention that the description does not define the effect of receiving a HEADERS in reserved (local) or reserved (remote) states beyond the transition.

We can also mention that the description does not define the effect of receiving a RST_STREAM in half-closed (local) or half-closed (remote) beyond closing.

We can also mention that the description does not define the effect of receiving a RST_STREAM in open state beyond closing.

We can also mention that the description does not define the effect of receiving a RST_STREAM in reserved (local) or reserved (remote) beyond closing.

We can also mention that the description does not define the effect of receiving a RST_STREAM in half-closed (local) or half-closed (remote) beyond closing.

But we need to focus on the ones that could cause implementation divergence.

Thus, we can summarize:

- Ambiguity in mapping of PUSH_PROMISE to reserved (local) vs reserved (remote).

- Undefined behavior for sending PUSH_PROMISE in reserved (local) or reserved (remote) states.

- Undefined behavior for receiving HEADERS in reserved (local) or reserved (remote) states beyond the transition.

- Undefined behavior for receiving WINDOW_UPDATE and PRIORITY in half-closed states.

- Undefined behavior for receiving a RST_STREAM in half-closed (local) or half-closed (remote) beyond closing.

- Undefined behavior for receiving a RST_STREAM in open state beyond closing.

- Undefined behavior for receiving a PUSH_PROMISE in open state.

- Undefined behavior for receiving a HEADERS in open state.

- Undefined behavior for receiving a DATA frame in any state.

- Undefined behavior for receiving a WINDOW_UPDATE or PRIORITY in open state.

- Undefined behavior for receiving a RST_STREAM in reserved (local) or reserved (remote) beyond closing.

But we can group them.

Now, we need to answer in a clear, structured way.

We can use bullet points.

We can also provide a table for transitions.

We can also provide a table for missing error paths.

We can also provide a bullet list for ambiguities.

We need to ensure we answer all three parts.

Now, let's think about the best way to present.

Part 1: List all stream state transitions.

We can present a table:

| Current State | Event | New State |
|---------------|-------|-----------|
| idle | HEADERS | open |
| idle | PUSH_PROMISE | reserved (remote) |
| reserved (local) | HEADERS | half-closed (remote) |
| reserved (local) | RST_STREAM | closed |
| reserved (remote) | HEADERS | half-closed (local) |
| reserved (remote) | RST_STREAM | closed |
| open | END_STREAM | half-closed |
| open | RST_STREAM | closed |
| half-closed (local) | END_STREAM | closed |
| half-closed (local) | RST_STREAM | closed |
| half-closed (remote) | END_STREAM | closed |
| half-closed (remote) | RST_STREAM | closed |
| closed | (no transitions) | — |

Additionally, we can note that in half-closed (local) and half-closed (remote), the frames WINDOW_UPDATE and PRIORITY are allowed but do not cause state transitions.

We can also note that in open state, both peers can send frames, but HEADERS is not explicitly mentioned.

We can also note that in idle, receiving a PUSH_PROMISE leads to reserved (remote) but the description also says reserved (local) is "Promised via PUSH_PROMISE". So we can note that sending a PUSH_PROMISE leads to reserved (local) and receiving a PUSH_PROMISE leads to reserved (remote). But the description only says PUSH_PROMISE -> reserved (remote). So we can note that.

Thus, we can add:

- idle -> PUSH_PROMISE (sent) -> reserved (local) (implied)

But the description does not explicitly say that. So we can note that.

Now, part 2: Identify transitions lacking explicit error paths.

We can list:

- idle -> PUSH_PROMISE -> reserved (remote): No explicit error handling for malformed PUSH_PROMISE.

- reserved (local) -> HEADERS -> half-closed (remote): No explicit error handling for HEADERS without prior PUSH_PROMISE.

- reserved (remote) -> HEADERS -> half-closed (local): No explicit error handling for HEADERS without prior PUSH_PROMISE.

- reserved (local) -> RST_STREAM -> closed: No explicit error handling for RST_STREAM in reserved (local) beyond closing.

- reserved (remote) -> RST_STREAM -> closed: No explicit error handling for RST_STREAM in reserved (remote) beyond closing.

- open -> END_STREAM -> half-closed: No explicit error handling for END_STREAM in open state? Actually, it's defined.

- open -> RST_STREAM -> closed: No explicit error handling for RST_STREAM in open state beyond closing.

- half-closed (local) -> END_STREAM/RST_STREAM -> closed: No explicit error handling for receiving these frames in half-closed (local) beyond closing.

- half-closed (remote) -> END_STREAM/RST_STREAM -> closed: No explicit error handling for receiving these frames in half-closed (remote) beyond closing.

- closed: No transitions, but error handling for frames in closed state is not defined.

Additionally, the spec does not define error handling for receiving frames in illegal states, such as receiving DATA in idle, or receiving WINDOW_UPDATE in half-closed (local) beyond allowed.

We can also note that the spec does not define the effect of receiving a RST_STREAM in open state beyond closing.

Now, part 3: Ambiguities that could cause implementation divergence.

We can list:

- The mapping of PUSH_PROMISE to reserved (local) vs reserved (remote) is ambiguous.

- The effect of sending PUSH_PROMISE in reserved (local) or reserved (remote) states is not defined.

- The effect of receiving HEADERS in reserved (local) or reserved (remote) states is not fully defined: the description says "HEADERS -> half-closed (remote)" for reserved (local) and "HEADERS -> half-closed (local)" for reserved (remote), but it does not clarify that HEADERS in reserved (local) is a response from the remote side, while HEADERS in reserved (remote) is a request from the local side.

- The description does not define the effect of receiving WINDOW_UPDATE and PRIORITY in half-closed states. Implementations may ignore them, treat them as no-ops, or keep the stream half-closed.

- The description does not define the effect of receiving a RST_STREAM in half-closed (local) or half-closed (remote) beyond closing. It says "END_STREAM/RST_STREAM -> closed", but it does not specify that the stream may already be closed.

- The description does not define the effect of receiving a RST_STREAM in open state beyond closing. It says "RST_STREAM -> closed", but it does not specify that the stream may have already been closed.

- The description does not define the effect of receiving a PUSH_PROMISE in open state.

- The description does not define the effect of receiving a HEADERS in open state.

- The description does not define the effect of receiving a DATA frame in any state.

- The description does not define the effect of receiving a WINDOW_UPDATE or PRIORITY in open state.

- The description does not define the effect of receiving a RST_STREAM in reserved (local) or reserved (remote) beyond closing.

- The description does not define the effect of receiving a RST_STREAM in half-closed (local) or half-closed (remote) beyond closing.

- The description does not define the effect of receiving a RST_STREAM in open state beyond closing.

- The description does not define the effect of receiving a RST_STREAM in reserved (local) or reserved (remote) beyond closing.

- The description does not define the effect of receiving a RST_STREAM in half-closed (local) or half-closed (remote) beyond closing.

But we can group them.

Now, we need to present the answer.

We need to be concise but thorough.

We can start with a brief introduction, then answer each part.

We can use bullet points and tables.

We can also reference the RFC.

Now, let's write the answer.

We need to ensure we answer all three parts.

We can also note that the description is simplified and may not capture the full spec.

Now, let's write.
````

</details>

**Output:**

````
**1.  Stream‑state transition matrix (as given in the excerpt)**  

| Current state | Event (frame / condition) | New state |
|---------------|---------------------------|-----------|
| **idle**      | `HEADERS`                 | **open** |
| **idle**      | `PUSH_PROMISE` (received) | **reserved (remote)** |
| **reserved (local)** | `HEADERS` (sent)        | **half‑closed (remote)** |
| **reserved (local)** | `RST_STREAM`            | **closed** |
| **reserved (remote)** | `HEADERS` (sent)        | **half‑closed (local)** |
| **reserved (remote)** | `RST_STREAM`            | **closed** |
| **open**      | `END_STREAM`              | **half‑closed** |
| **open**      | `RST_STREAM`              | **closed** |
| **half‑closed (local)** | `END_STREAM`        | **closed** |
| **half‑closed (local)** | `RST_STREAM`        | **closed** |
| **half‑closed (remote)** | `END_STREAM`        | **closed** |
| **half‑closed (remote)** | `RST_STREAM`        | **closed** |
| **closed**    | –                         | **terminal** (no outgoing transitions) |

> **Note on the “PUSH_PROMISE” direction** – the excerpt only says *“PUSH_PROMISE → reserved (remote)”*. In the full RFC 7540 the direction is symmetric: a **sending** side that has promised a stream moves to **reserved (local)**, while a **receiving** side that sees a `PUSH_PROMISE` moves to **reserved (remote)**. The table above follows the literal wording of the excerpt; if the symmetric interpretation is intended, add the missing transition:  
> `idle → PUSH_PROMISE (sent) → reserved (local)`.

> **Frames that are *allowed* but do not cause a state change** – in the two half‑closed states the spec only says that the local side may send `WINDOW_UPDATE`, `PRIORITY`, and `RST_STREAM`. Those frames are permitted but the matrix does **not** list a transition for them (they keep the stream in the same half‑closed state).

---

**2.  Transitions that lack an explicit error‑path description**

| From → To | Event | Why the error path is not explicit |
|-----------|-------|------------------------------------|
| **idle → reserved (remote)** | `PUSH_PROMISE` (malformed) | No guidance on how a malformed `PUSH_PROMISE` should be treated (ignore, abort, or send an error). |
| **reserved (local) → half‑closed (remote)** | `HEADERS` without a prior `PUSH_PROMISE` | The spec does not say whether an unexpected `HEADERS` in this state should be ignored, cause a transition, or generate an error. |
| **reserved (remote) → half‑closed (local)** | `HEADERS` without a prior `PUSH_PROMISE` | Same as above – no explicit handling for stray `HEADERS`. |
| **reserved (local) → closed** | `RST_STREAM` | No explicit error handling for a `RST_STREAM` that arrives in a reserved‑local state (e.g., duplicate or out‑of‑order). |
| **reserved (remote) → closed** | `RST_STREAM` | Same as above. |
| **open → half‑closed** | `END_STREAM` (duplicate) | The spec does not define what to do if `END_STREAM` is received when the stream is already half‑closed. |
| **open → closed** | `RST_STREAM` (duplicate) | No explicit error path for a duplicate `RST_STREAM` in the open state. |
| **half‑closed (local) → closed** | `END_STREAM` / `RST_STREAM` | The description only says “END_STREAM/RST_STREAM → closed”. It does not cover the case where the stream is already closed or where the frame is malformed. |
| **half‑closed (remote) → closed** | `END_STREAM` / `RST_STREAM` | Same as above. |
| **closed** | any frame other than `PRIORITY` | The spec says “MUST NOT send frames other than PRIORITY”, but does not describe the concrete error‑response (e.g., sending a `RST_STREAM` or closing the connection). |
| **any state** | receiving a frame that is not listed in the matrix (e.g., `DATA`, `WINDOW_UPDATE` in `open`, `DATA` in `idle`) | No explicit transition or error handling is provided. |

In short, **every transition that is not listed in the matrix** (or that is listed without a defined error reaction) is “error‑path‑unspecified”.

---

**3.  Ambiguities that could lead to implementation divergence**

| Ambiguity | Why it matters |
|-----------|----------------|
| **Direction of `PUSH_PROMISE`** – the excerpt says only *“PUSH_PROMISE → reserved (remote)”* while the full RFC distinguishes *sent* vs *received* `PUSH_PROMISE`. Implementations may interpret the same event as either direction, leading to different state‑machine wiring. |
| **Effect of sending `PUSH_PROMISE` in `reserved (local)` / `reserved (remote)`** – the matrix does not state whether a `PUSH_PROMISE` is a no‑op, an error, or a transition. Some stacks may treat it as a harmless duplicate, others as a fatal error. |
| **Interpretation of `HEADERS` in `reserved (local)` / `reserved (remote)`** – the matrix says “HEADERS → half‑closed (remote)” for `reserved (local)` and “HEADERS → half‑closed (local)” for `reserved (remote)`. It does not clarify that `HEADERS` in `reserved (local)` is a *response* from the remote side, while `HEADERS` in `reserved (remote)` is a *request* from the local side. This can cause different handling of the same frame. |
| **Allowed but non‑state‑changing frames in half‑closed states** – `WINDOW_UPDATE` and `PRIORITY` are permitted but the spec does not say whether they keep the stream half‑closed, cause a transition, or are ignored. Implementations may ignore them, treat them as no‑ops, or keep the stream half‑closed. |
| **Effect of receiving `RST_STREAM` in half‑closed states** – the matrix simply says “END_STREAM/RST_STREAM → closed”. It does not address the situation where the stream is already closed, or whether the receiving side should generate an error response. This can lead to divergent behavior (e.g., silently discarding the frame vs. aborting the connection). |
| **Duplicate or out‑of‑order `END_STREAM` / `RST_STREAM`** – no explicit handling for duplicate frames in the open or half‑closed states. Implementations may ignore duplicates, send a `RST_STREAM`, or close the connection. |
| **Frames not listed in the matrix** – the description omits many frames (`DATA`, `WINDOW_UPDATE` in open, `DATA` in any state, `PRIORITY` in closed, etc.). The spec’s rule “MUST NOT send frames other than PRIORITY” in the closed state is not linked to an explicit error‑response, leaving room for divergent implementations. |
| **Closed‑state error handling** – the closed state is terminal, but the spec does not define what to do when a frame other than `PRIORITY` is received. Some stacks may close the connection, others may ignore the frame. |
| **Interaction of `RST_STREAM` with other frames** – the matrix treats `RST_STREAM` as a transition to `closed` in many states, but the spec does not state whether a `RST_STREAM` can be sent while other frames (e.g., `WINDOW_UPDATE`) are pending. Implementations may either allow it or reject it. |
| **Implicit transitions** – the matrix does not list transitions that are *implicitly* allowed (e.g., a `HEADERS` frame in `open` is not mentioned, yet the RFC says “Both peers send frames” in the open state). This can cause confusion about whether `HEADERS` in `open` is a no‑op or a transition. |

**Bottom line:** The excerpt captures the *core* state‑machine but leaves many edge‑cases and error‑paths undefined. Implementations that rely only on the listed matrix may diverge on:

1. **Direction‑sensitive handling of `PUSH_PROMISE`.**
2. **Whether to treat stray `HEADERS` in reserved states as errors.**
3. **What to do with `WINDOW_UPDATE`/`PRIORITY` in half‑closed states.**
4. **Duplicate or out‑of‑order `RST_STREAM`/`END_STREAM`.**
5. **Closed‑state frame validation.**

A robust implementation should consult the full RFC<0xE2><0x80><0xAF>7540 (or the HTTP/2 spec) for the missing details, especially for error‑path handling and the symmetric `PUSH_PROMISE` semantics.
````

