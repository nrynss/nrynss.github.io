# Qwen3-30B-A3B (Q4_K_M) — Test 11: Strict table

**Category:** Instruction  
**Date:** 2026-05-27 12:45:46  

**Prompt:** List exactly 5 differences between gRPC and REST. Format as a markdown table with columns: Aspect, gRPC, REST. No preamble or conclusion — just the table.

*471 tok | 28.67s | 16.4 t/s | think: 1665 chars | finish: stop*

<details><summary>Thinking (1665 chars)</summary>

````
Okay, the user wants me to list exactly 5 differences between gRPC and REST in a markdown table. Let me start by recalling what I know about both.

First, I remember that gRPC uses Protocol Buffers for data serialization, while REST typically uses JSON or XML. That's a key difference. So the first aspect could be "Data Serialization Format".

Next, communication style. gRPC is based on HTTP/2 and uses bidirectional streaming, whereas REST is stateless and typically uses HTTP/1.1 with request-response. So maybe "Communication Style" as the second aspect.

Then, the interface definition. gRPC uses .proto files to define services and messages, which generates code, while REST relies on API endpoints and documentation. So "Interface Definition" could be the third point.

Performance is another area. Since gRPC uses binary serialization and HTTP/2, it's generally faster than REST, which uses text-based formats. So "Performance" as the fourth aspect.

Lastly, built-in features. gRPC has features like streaming, cancellation, and flow control, while REST requires custom implementations for such features. So "Built-in Features" as the fifth.

Wait, let me check if these are accurate. Data serialization is definitely a big one. Communication style: yes, gRPC's streaming vs REST's request-response. Interface definition with .proto vs endpoints. Performance due to binary and HTTP/2. Built-in features like streaming. That seems right. I need to make sure there are exactly five and no more. Also, format as a markdown table with the specified columns. No markdown in the thinking, but the final answer should be the table. Alright, that should cover it.
````

</details>

**Output:**

````
| Aspect                  | gRPC                          | REST                          |
|-------------------------|-------------------------------|-------------------------------|
| Data Serialization      | Uses Protocol Buffers (binary) | Uses JSON/XML (text-based)    |
| Communication Style     | Bidirectional streaming       | Request-response (unidirectional) |
| Interface Definition    | Defined via .proto files      | Defined via API endpoints and documentation |
| Performance             | Faster due to binary format   | Slower due to text-based format |
| Built-in Features       | Supports streaming, cancellation, and flow control | Requires custom implementations for similar features |
````

