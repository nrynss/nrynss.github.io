# Sarvam 30B (Q4_K_M) — Test 11: Strict table

**Category:** Instruction  
**Date:** 2026-06-14 14:24:06  

**Prompt:** List exactly 5 differences between gRPC and REST. Format as a markdown table with columns: Aspect, gRPC, REST. No preamble or conclusion — just the table.

*1944 tok | 7.82s | 248.5 t/s | think: 6863 chars | finish: stop*

<details><summary>Thinking (6863 chars)</summary>

````
1.  **Deconstruct the User's Request:**

    *   **Core Task:** List differences between gRPC and REST.
    *   **Quantity:** Exactly 5 differences. This is a hard constraint. I need to be selective and pick the most distinct and important ones.
    *   **Format:** A markdown table. This means I need `|`, `-`, and `|` separators.
    *   **Columns:** `Aspect`, `gRPC`, `REST`. The user has explicitly defined the column names.
    *   **Constraints:**
        *   "List exactly 5 differences" - No more, no less.
        *   "Format as a markdown table" - Strict formatting.
        *   "No preamble or conclusion — just the table." - This is a crucial instruction. I must not add any introductory or concluding text. The output should start with the `|` and end with the last `|` of the table.

2.  **Brainstorming Potential Differences (gRPC vs. REST):**

    *   **Protocol:**
        *   gRPC: HTTP/2. This is a fundamental difference.
        *   REST: Typically HTTP/1.1 (though it *can* use HTTP/2, it's not the defining characteristic).
    *   **Data Format:**
        *   gRPC: Protocol Buffers (protobuf). It's a binary format.
        *   REST: Typically JSON, XML, or plain text. JSON is the most common.
    *   **Communication Style:**
        *   gRPC: Uses HTTP/2, which allows for multiplexing, full-duplex streaming. It's a remote procedure call (RPC) model. The client calls a method on the server as if it were a local function.
        *   REST: Uses standard HTTP verbs (GET, POST, PUT, DELETE). It's a resource-oriented model. The client sends requests to specific URLs (endpoints) and gets back representations of the resource (e.g., JSON).
    *   **API Definition:**
        *   gRPC: Uses `.proto` files to define services, methods, and message structures. This is a contract-first approach.
        *   REST: API is often implicit, defined by the URL structure and HTTP methods. It can be contract-first (OpenAPI/Swagger) or contract-last, but the `.proto` file is a very distinct, formal definition.
    *   **Streaming:**
        *   gRPC: Has first-class support for streaming (client-to-server, server-to-client, and bi-directional).
        *   REST: Streaming is possible but not a core, standardized part of the protocol. It's often implemented via long-polling or server-sent events, which are workarounds.
    *   **Error Handling:**
        *   gRPC: Uses a standardized `Status` object with a code (e.g., `INVALID_ARGUMENT`, `NOT_FOUND`) and a message. It's a gRPC-specific convention.
        *   REST: Uses HTTP status codes (4xx for client errors, 5xx for server errors). The body of the response can contain an error message in JSON. The meaning is tied to the HTTP spec.
    *   **Tooling:**
        *   gRPC: Has a rich, language-specific plugin-based code generation from `.proto` files.
        *   REST: Tooling is more diverse (Swagger/OpenAPI generators, client libraries, etc.), but the core process is often less standardized than gRPC's.
    *   **Browser/Client Support:**
        *   gRPC: Historically had less support in browsers due to HTTP/2 and the complexity of the protobuf library. This has improved with things like gRPC-Web, but it's still a point of difference.
        *   REST: Universally supported by all web browsers and HTTP clients.

3.  **Selecting the Top 5 Differences:**

    Now I need to pick the 5 most distinct and important ones from my brainstormed list. I want to cover the core aspects: protocol, data, communication, definition, and streaming.

    1.  **Protocol:** This is a fundamental, low-level difference. HTTP/2 vs. HTTP/1.1. This is a great first point. I'll phrase it as "Underlying Protocol".
    2.  **Data Format:** Binary vs. Text-based (JSON). This is another huge, clear distinction. I'll call this "Data Serialization".
    3.  **Communication Model:** RPC vs. Resource-Oriented. This gets to the heart of the paradigm difference. gRPC is about *calling* methods, REST is about *accessing* resources. I'll call this "Communication Style".
    4.  **API Definition:** Contract-first (`.proto` files) vs. implicit/URL-based. This is a key process difference. I'll call this "API Definition".
    5.  **Streaming:** First-class support in gRPC vs. not a standard in REST. This is a powerful feature of gRPC that's often missing or implemented as a workaround in REST. I'll call this "Streaming Support".

    This gives me a solid, well-rounded list of 5. They are distinct, important, and easy to explain in the table.

4.  **Constructing the Markdown Table:**

    Now I'll build the table based on my chosen 5 points and the required column structure.

    *   **Header Row:** `| Aspect | gRPC | REST |`
    *   **Separator Row:** `|---|---|---|` (This is standard markdown for tables, though not strictly required by all parsers, it's good practice).
    *   **Row 1 (Protocol):**
        *   `Aspect`: "Underlying Protocol"
        *   `gRPC`: "Uses HTTP/2"
        *   `REST`: "Typically uses HTTP/1.1"
    *   **Row 2 (Data Serialization):**
        *   `Aspect`: "Data Serialization"
        *   `gRPC`: "Protocol Buffers (binary format)"
        *   `REST`: "Typically JSON (text-based)"
    *   **Row 3 (Communication Style):**
        *   `Aspect`: "Communication Style"
        *   `gRPC`: "Remote Procedure Call (RPC)"
        *   `REST`: "Resource-oriented (HTTP verbs)"
    *   **Row 4 (API Definition):**
        *   `Aspect`: "API Definition"
        *   `gRPC`: "Contract-first using `.proto` files"
        *   `REST`: "Implicit, defined by URL and HTTP methods"
    *   **Row 5 (Streaming Support):**
        *   `Aspect`: "Streaming Support"
        *   `gRPC`: "First-class support for streaming"
        *   `REST`: "No native streaming; workarounds like long-polling"

5.  **Final Review:**

    *   **Exactly 5 differences?** Yes, I have 5 rows.
    *   **Markdown table?** Yes, the structure is correct.
    *   **Columns: `Aspect`, `gRPC`, `REST`?** Yes, the headers match.
    *   **No preamble/conclusion?** I will make sure my final output *only* contains the table. No "Here is the table you requested:" or "I hope this helps!".
    *   **Clarity and Conciseness?** The points are distinct and the descriptions are brief but accurate.

The plan is solid. I will now generate the final output based on this structure. I'll double-check the syntax for the markdown table, especially the pipes and hyphens. The final output should be exactly what's in the code block.

Let's do a final check of the content.
1. Protocol: HTTP/2 vs HTTP/1.1. Correct.
2. Data: Protobuf vs JSON. Correct.
3. Style: RPC vs Resource-oriented. Correct.
4. Definition: `.proto` vs implicit. Correct.
5. Streaming: Native vs workarounds. Correct.

The list is robust and meets all constraints. The formatting is clear. I'm ready to write the final response.
````

</details>

**Output:**

````
| Aspect | gRPC | REST |
|---|---|---|
| Underlying Protocol | Uses HTTP/2 | Typically uses HTTP/1.1 |
| Data Serialization | Protocol Buffers (binary) | Typically JSON (text-based) |
| Communication Style | Remote Procedure Call (RPC) | Resource-oriented (HTTP verbs) |
| API Definition | Contract-first using `.proto` files | Implicit, defined by URL and HTTP methods |
| Streaming Support | First-class support for streaming | No native streaming; workarounds like long-polling |
````

