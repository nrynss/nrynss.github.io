# Sarvam 30B (Q4_K_M) — Test 11: Strict table

**Category:** Instruction  
**Date:** 2026-05-27 05:12:00  

**Prompt:** List exactly 5 differences between gRPC and REST. Format as a markdown table with columns: Aspect, gRPC, REST. No preamble or conclusion — just the table.

*1787 tok | 114.22s | 15.6 t/s | think: 6201 chars | finish: stop*

<details><summary>Thinking (6201 chars)</summary>

````
1.  **Deconstruct the User's Request:**
    *   **Core Task:** List differences between gRPC and REST.
    *   **Quantity:** Exactly 5 differences.
    *   **Format:** Markdown table.
    *   **Columns:** `Aspect`, `gRPC`, `REST`.
    *   **Constraints:**
        *   No preamble.
        *   No conclusion.
        *   Just the table.

2.  **Brainstorming Differences (Aspect, gRPC, REST):**
    *   **Aspect 1: Protocol/Transport.** This is a fundamental one.
        *   gRPC: Uses HTTP/2. It's binary, uses Protobuf for serialization.
        *   REST: Typically uses HTTP/1.1. It's text-based, uses JSON, XML, or other text formats.
        *   *Decision:* This is a strong, distinct difference. I'll use it.

    *   **Aspect 2: Data Format/Serialization.** This is closely related to the protocol but distinct enough.
        *   gRPC: Uses Protocol Buffers (Protobuf). It's a binary format, efficient, strongly typed.
        *   REST: Uses text-based formats like JSON, XML, or even plain text. JSON is the most common.
        *   *Decision:* This is a good one. It's a clear contrast.

    *   **Aspect 3: API Definition/Contract.** How do you define the service?
        *   gRPC: Uses Protocol Buffer (`.proto`) files. You define services, methods, and message types in a language-agnostic way. The code is then generated.
        *   REST: There's no single, standardized way to define the API contract. It's often done with OpenAPI/Swagger (which is more for documentation) or just by looking at the HTTP endpoints, methods, and data structures in the code.
        *   *Decision:* This is a key difference in development workflow and philosophy.

    *   **Aspect 4: RPC vs. Resource-Oriented.** This is a conceptual difference.
        *   gRPC: Is Remote Procedure Call (RPC). You call a method on a service, like `UserService.GetUser(request)`. It's about invoking an action.
        *   REST: Is resource-oriented. You interact with resources using standard HTTP verbs (GET, POST, PUT, DELETE) on URLs. It's about manipulating state.
        *   *Decision:* This is a core philosophical difference. Excellent candidate.

    *   **Aspect 5: Error Handling.** How are errors communicated?
        *   gRPC: Uses a well-defined `Status` object. It has a standard set of error codes (e.g., `INVALID_ARGUMENT`, `NOT_FOUND`, `INTERNAL`) and allows for detailed, structured error details.
        *   REST: Typically uses HTTP status codes (400, 404, 500) and a JSON body with an error message. The structure is less standardized.
        *   *Decision:* This is a good, practical difference.

    *   **Aspect 6: Streaming.**
        *   gRPC: Has four types of streaming: Unary, Server, Client, and Bidirectional. This is a major feature.
        *   REST: Can simulate streaming (e.g., long-polling, chunked transfer encoding), but it's not a first-class, standardized concept in the same way.
        *   *Decision:* This is a very strong and distinct difference. I could use this instead of one of the others.

    *   **Aspect 7: Tooling/Ecosystem.**
        *   gRPC: Has a rich, language-specific tooling for code generation, testing, and reflection.
        *   REST: Has a vast ecosystem of tools, but they are more fragmented (e.g., API gateways, various client libraries, documentation tools like Swagger).
        *   *Decision:* This is a bit more subjective but still a valid point.

3.  **Selecting the Final 5:**
    *   I need to pick the 5 most distinct and important differences.
    *   **Protocol/Transport:** Essential. `HTTP/2` vs. `HTTP/1.1` (or just HTTP).
    *   **Data Format:** Essential. `Protobuf` vs. `JSON/XML`.
    *   **API Definition:** Very important for developers. `.proto` vs. implicit/OpenAPI.
    *   **Paradigm:** RPC vs. Resource-Oriented. This is a high-level, conceptual difference that's crucial.
    *   **Streaming:** A key technical feature that gRPC has and REST lacks in its standard form.

    *   Let's review this list:
        1.  Protocol/Transport
        2.  Data Format
        3.  API Definition
        4.  Paradigm (RPC vs. Resource)
        5.  Streaming

    *   This looks like a solid, well-rounded list. It covers the low-level (protocol, format), the development workflow (definition), the conceptual model (paradigm), and a key feature (streaming).

4.  **Constructing the Markdown Table:**
    *   The user specified the columns: `Aspect`, `gRPC`, `REST`.
    *   I'll create the header row: `| Aspect | gRPC | REST |`
    *   Then, I'll add the 5 rows based on my selected differences.

    *   **Row 1 (Protocol):**
        *   `Aspect`: Protocol
        *   `gRPC`: Uses HTTP/2
        *   `REST`: Typically uses HTTP/1.1

    *   **Row 2 (Data Format):**
        *   `Aspect`: Data Serialization
        *   `gRPC`: Protocol Buffers (binary)
        *   `REST`: JSON, XML, or text

    *   **Row 3 (API Definition):**
        *   `Aspect`: API Definition
        *   `gRPC`: Defined in `.proto` files
        *   `REST`: Defined by endpoints, methods, and documentation (e.g., OpenAPI)

    *   **Row 4 (Paradigm):**
        *   `Aspect`: Paradigm
        *   `gRPC`: Remote Procedure Call (RPC)
        *   `REST`: Resource-Oriented

    *   **Row 5 (Streaming):**
        *   `Aspect`: Streaming
        *   `gRPC`: Supports four types (unary, server, client, bidirectional)
        *   `REST`: No native streaming; can simulate with long-polling

5.  **Final Review:**
    *   Is it a markdown table? Yes.
    *   Does it have the correct columns? Yes: `Aspect`, `gRPC`, `REST`.
    *   Are there exactly 5 differences? Yes.
    *   Is there any preamble or conclusion? No.
    *   Is the content accurate and distinct? Yes.

    The plan is solid. I will now generate the output based on this structure. I'll make sure the text is concise and clear. For example, for "Data Serialization", I'll just say "Protocol Buffers (binary)" for gRPC and "JSON, XML, or text" for REST to keep it brief. For "API Definition", I'll use the `.proto` file vs. endpoints/methods distinction. For "Streaming", I'll list the types for gRPC and the lack of native support for REST. This keeps the table clean and easy to read.
````

</details>

**Output:**

````
| Aspect | gRPC | REST |
|---|---|---|
| Protocol | Uses HTTP/2 | Typically uses HTTP/1.1 |
| Data Format | Protocol Buffers (binary) | JSON, XML, or text |
| API Definition | Defined in `.proto` files | Defined by endpoints, methods, and documentation |
| Paradigm | Remote Procedure Call (RPC) | Resource-Oriented |
| Streaming | Supports four types (unary, server, client, bidirectional) | No native streaming; can simulate with long-polling |
````

