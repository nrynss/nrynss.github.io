# Sarvam 30B (Q4_K_M) — Test 8: Log parser (Python + Rust)

**Category:** Code  
**Date:** 2026-06-14 14:22:40  

**Prompt:** Part A (Python): Write a Python function that takes a list of log line strings in the format '[TIMESTAMP] [LEVEL] message' and returns a dict grouping messages by level. Handle malformed lines under a 'MALFORMED' key. Include a runnable if __name__ == '__main__' block with test data.

Part B (Rust): Write the equivalent in Rust with a main() function and test data.

*4772 tok | 18.24s | 261.6 t/s | think: 9548 chars | finish: stop*

<details><summary>Thinking (9548 chars)</summary>

````
We need to answer: Provide a Python function that takes a list of log line strings in the format \'[TIMESTAMP] [LEVEL] message\' and returns a dict grouping messages by level. Also handle malformed lines under a \'MALFORMED\' key. Include a runnable if __name__ == \'__main__\' block with test data.\n\nPart B: Equivalent in Rust with a main() function and test data.\n\nWe need to produce code for both Python and Rust. Also explanation? The prompt says "Part A (Python): Write a Python function... Part B (Rust): Write the equivalent in Rust with a main() function and test data." So we need to provide both code blocks.\n\nWe need to ensure the Python function returns a dict grouping messages by level, with a key \'MALFORMED\' for any lines that don\'t match the expected format. Also, test data includes both valid and malformed lines. The function should parse each line: expected format: "[TIMESTAMP] [LEVEL] message". So the line starts with \'[\' then a timestamp string (maybe any characters except \']\'), then \']\', then a space, then \'[\' then a level string (maybe any characters except \']\'), then \']\', then a space, then the message (any characters). So we can parse using regex: r\'^\\[(?P<timestamp>[^\\]]+)\\] \\[(?P<level>[^\\]]+)\\] (?P<message>.*)$\'.\n\nIf the line matches, we group by level: dict[level].append(message). If not, we add to dict[\'MALFORMED\'] (list of malformed lines). Or maybe just count? The prompt says "Handle malformed lines under a \'MALFORMED\' key." It could be a list of malformed lines. We\'ll assume a list.\n\nWe\'ll produce a function: group_logs_by_level(log_lines: List[str]) -> Dict[str, List[str]].\n\nWe\'ll include a test in __main__ that defines a list of log lines, calls the function, prints the result.\n\nNow for Rust: Equivalent. We\'ll write a function group_logs_by_level(log_lines: &[&str]) -> HashMap<String, Vec<String>>. Or maybe use Vec<&str> for messages. We\'ll parse each line using regex. Rust\'s regex crate is external; we can either use std::regex::Regex (available in Rust\'s std). However, std::regex is not stable? Actually, Rust\'s regex crate is external, but there is std::regex in nightly? For stable, we can use regex crate. But we can also implement manual parsing: find the first \']\', then second \']\', etc. But for simplicity, we can use regex crate. Since the problem is about "equivalent", we can use regex crate. But we need to provide Cargo.toml? Probably not; just provide code that can be compiled with Rust with regex crate added.\n\nBetter to implement without external crates, just using split and find. But the regex approach is straightforward.\n\nWe\'ll write:\n\nuse std::collections::HashMap;\nuse regex::Regex;\n\nfn group_logs_by_level(log_lines: &[&str]) -> HashMap<String, Vec<String>> { ... }\n\nWe\'ll define regex: let re = Regex::new(r"^\\[(?P<timestamp>[^\\]]+)\\] \\[(?P<level>[^\\]]+)\\] (?P<message>.*)$").unwrap();\n\nThen iterate lines, if re.is_match(line), extract groups: level = ...; message = ...; push to map. Else, add to malformed list: map.entry(String::from("MALFORMED")).or_insert_with(Vec::new).push(line.to_string()).\n\nBut the map type: HashMap<String, Vec<String>>. For malformed, we need a key "MALFORMED". So we need to have a map entry for that key. So we can start with an empty HashMap, and if we encounter malformed, we get entry or insert and push.\n\nAlternatively, we can use BTreeMap, but not needed.\n\nWe\'ll also include a main() function that defines test data as a Vec<&\'static str> or Vec<String> and calls group_logs_by_level, prints result.\n\nWe need to ensure the code is self-contained: for Python, just code; for Rust, we need to import regex crate. Provide instructions: add regex = "1" to Cargo.toml.\n\nWe also need to include test data: include valid lines like "[2023-07-01 12:00:00] [INFO] System started", "[2023-07-01 12:01:00] [ERROR] Disk failure", "[2023-07-01 12:02:00] [DEBUG] Value: 42". Also malformed lines like "Invalid line", "[2023-07-01 12:03:00] [WARN] Missing message", or missing level, etc.\n\nWe\'ll show output.\n\nNow, the answer should be in code blocks, labeled Python and Rust. Also maybe include brief explanation. The prompt: "Part A (Python): Write a Python function... Part B (Rust): Write the equivalent in Rust with a main() function and test data." So we can provide both code blocks.\n\nWe need to ensure the Python code is correct and includes a test block. Also the Rust code includes main and test data.\n\nWe need to ensure the Python function returns a dict grouping messages by level. The dict should have keys: "INFO", "ERROR", "DEBUG", and "MALFORMED". The values are lists of messages. The order of messages should be preserved.\n\nWe also need to handle malformed lines under a \'MALFORMED\' key. So we need to include a key \'MALFORMED\' in the dict. That\'s what we will do.\n\nNow, let\'s design the Python function:\n\ndef group_logs_by_level(log_lines):\n    """\n    Groups log messages by level.\n\n    Parameters\n    ----------\n    log_lines : List[str]\n        List of log line strings in the format \'[TIMESTAMP] [LEVEL] message\'.\n\n    Returns\n    -------\n    dict\n        Dictionary where keys are log levels (e.g., \'INFO\', \'ERROR\') and values are\n        lists of messages. Malformed lines are stored under the key \'MALFORMED\'.\n    """\n    import re\n    pattern = re.compile(r\'^\\[(?P<timestamp>[^\\]]+)\\] \\[(?P<level>[^\\]]+)\\] (?P<message>.*)$\')\n    grouped = {}\n    for line in log_lines:\n        m = pattern.match(line)\n        if m:\n            level = m.group(\'level\')\n            message = m.group(\'message\')\n            grouped.setdefault(level, []).append(message)\n        else:\n            grouped.setdefault(\'MALFORMED\', []).append(line)\n    return grouped\n\nThen in __main__, we define:\n\nif __name__ == \'__main__\':\n    log_lines = [\n        "[2023-07-01 12:00:00] [INFO] System started",\n        "[2023-07-01 12:01:00] [ERROR] Disk failure",\n        "[2023-07-01 12:02:00] [DEBUG] Value: 42",\n        "Invalid line without proper brackets",\n        "[2023-07-01 12:03:00] [WARN] Missing message",\n        "[2023-07-01 12:04:00] [INFO] User login",\n    ]\n    result = group_logs_by_level(log_lines)\n    import pprint\n    pprint.pprint(result)\n\nWe can also include a test function.\n\nNow, for Rust:\n\nWe\'ll create a function:\n\nuse std::collections::HashMap;\nuse regex::Regex;\n\nfn group_logs_by_level(log_lines: &[&str]) -> HashMap<String, Vec<String>> {\n    let re = Regex::new(r"^\\[(?P<timestamp>[^\\]]+)\\] \\[(?P<level>[^\\]]+)\\] (?P<message>.*)$").unwrap();\n    let mut grouped: HashMap<String, Vec<String>> = HashMap::new();\n    for line in log_lines {\n        if let Some(caps) = re.captures(line) {\n            let level = caps.name("level").unwrap().as_str().to_string();\n            let message = caps.name("message").unwrap().as_str().to_string();\n            grouped.entry(level).or_insert_with(Vec::new).push(message);\n        } else {\n            // malformed\n            grouped.entry("MALFORMED".to_string()).or_insert_with(Vec::new).push(line.to_string());\n        }\n    }\n    grouped\n}\n\nWe\'ll also have main:\n\nfn main() {\n    let log_lines = vec![\n        "[2023-07-01 12:00:00] [INFO] System started",\n        "[2023-07-01 12:01:00] [ERROR] Disk failure",\n        "[2023-07-01 12:02:00] [DEBUG] Value: 42",\n        "Invalid line without proper brackets",\n        "[2023-07-01 12:03:00] [WARN] Missing message",\n        "[2023-07-01 12:04:00] [INFO] User login",\n    ];\n    let grouped = group_logs_by_level(&log_lines);\n    // Print the grouped map\n    use std::fmt::Debug;\n    println!("{:#?}", grouped);\n}\n\nWe need to include a comment that the regex crate is required.\n\nNow, the answer: Provide the code for both.\n\nWe should also note that the Python code uses re and returns dict with \'MALFORMED\'.\n\nWe can also include a test using assert.\n\nNow, the answer should be in a clear format: maybe two separate code blocks, with labels.\n\nWe need to ensure the code is correct. For Python, the pattern uses raw string with double backslashes for the regex. Actually, we need to escape the backslashes: r\'^\\[(?P<timestamp>[^\\]]+)\\] \\[(?P<level>[^\\]]+)\\] (?P<message>.*)$\'. That\'s fine.\n\nNow, for Rust, the regex pattern: r"^\\[(?P<timestamp>[^\\]]+)\\] \\[(?P<level>[^\\]]+)\\] (?P<message>.*)$". The raw string with double backslashes is needed: r"^\\[(?P<timestamp>[^\\]]+)\\] \\[(?P<level>[^\\]]+)\\] (?P<message>.*)$". That works.\n\nNow, we need to ensure that the regex crate is imported. The code will be:\n\nuse regex::Regex;\n\nNow, the code is ready.\n\nWe also need to mention that for Rust, you need to add regex = "1" to Cargo.toml.\n\nNow, we can produce the answer.\n\nWe should also include a brief explanation before the code, but the prompt didn\'t ask for explanation, just the code. However, it\'s helpful to provide some context.\n\nThus, we will output:\n\n**Part A (Python)**\n\n```python\n# code\n```\n\n**Part B (Rust)**\n\n```rust\n// code\n```\n\nWe can also include the test data and output.\n\nNow, we need to ensure that the Python code includes a test block. We\'ll include __main__.\n\nNow, we need to ensure that the Rust code includes main and test data.\n\nNow, we can produce the answer.\n\nWe\'ll also mention that the Python function returns a dict with \'MALFORMED\' key for malformed lines.\n\nNow, we can produce the final answer.
````

</details>

**Output:**

````
**Part A – Python**

```python
#!/usr/bin/env python3
"""
Group log messages by their level.

Each log line is expected to be in the form:
    [TIMESTAMP] [LEVEL] message

Lines that do not match this pattern are collected under the key
'MALFORMED'.
"""

import re
from typing import List, Dict


def group_logs_by_level(log_lines: List[str]) -> Dict[str, List[str]]:
    """
    Group messages by log level.

    Parameters
    ----------
    log_lines : List[str]
        List of log line strings.

    Returns
    -------
    Dict[str, List[str]]
        Mapping from level (e.g. "INFO", "ERROR") to a list of messages.
        Malformed lines are stored under the key "MALFORMED".
    """
    # Compile a regex that captures the three parts we care about.
    pattern = re.compile(
        r'^\['          # opening '['
        r'(?P<timestamp>[^\]]+)'  # everything up to the next ']'
        r'\]\s+'         # closing ']' and at least one space
        r'\[(?P<level>[^\]]+)'    # level inside its own brackets
        r'\]\s+'         # closing ']' and at least one space
        r'(?P<message>.*)'  # the rest of the line is the message
        r'$'
    )

    grouped: Dict[str, List[str]] = {}

    for line in log_lines:
        m = pattern.match(line)
        if m:
            level = m.group('level')
            message = m.group('message')
            grouped.setdefault(level, []).append(message)
        else:
            # Keep the original malformed line (including the raw string)
            grouped.setdefault('MALFORMED', []).append(line)

    return grouped


if __name__ == '__main__':
    # ------------------------------------------------------------------
    # Test data – a mix of valid and malformed log lines.
    # ------------------------------------------------------------------
    test_log_lines = [
        "[2023-07-01 12:00:00] [INFO] System started",
        "[2023-07-01 12:01:00] [ERROR] Disk failure",
        "[2023-07-01 12:02:00] [DEBUG] Value: 42",
        "Invalid line without proper brackets",
        "[2023-07-01 12:03:00] [WARN] Missing message",
        "[2023-07-01 12:04:00] [INFO] User login",
        "[2023-07-01 12:05:00] [FATAL] Something went terribly wrong",
        "Another malformed line",
    ]

    result = group_logs_by_level(test_log_lines)

    # Pretty‑print the result so you can see the grouping.
    import pprint
    pprint.pprint(result)

    # Simple sanity‑check (optional)
    assert 'INFO' in result
    assert 'ERROR' in result
    assert 'DEBUG' in result
    assert 'WARN' in result
    assert 'FATAL' in result
    assert 'MALFORMED' in result
    assert len(result['MALFORMED']) == 3  # three malformed lines in the test data
    print("\nAll assertions passed.")
```

**Part B – Rust**

```rust
// Cargo.toml ---------------------------------------------------------
// [dependencies]
// regex = "1"
// ---------------------------------------------------------------------

use std::collections::HashMap;
use regex::Regex;

/// Group log messages by their level.
///
/// Each line must match the pattern:
///   [TIMESTAMP] [LEVEL] message
///
/// Malformed lines are stored under the key "MALFORMED".
fn group_logs_by_level(log_lines: &[&str]) -> HashMap<String, Vec<String>> {
    // Regex that captures the three components.
    let re = Regex::new(
        r"^\[(?P<timestamp>[^\]]+)\]\s+\[(?P<level>[^\]]+)\]\s+(?P<message>.*)$",
    )
    .expect("Invalid regex");

    let mut grouped: HashMap<String, Vec<String>> = HashMap::new();

    for line in log_lines {
        if let Some(caps) = re.captures(line) {
            // Extract the level and the message.
            let level = caps.name("level").unwrap().as_str().to_string();
            let message = caps.name("message").unwrap().as_str().to_string();

            // Insert the message into the appropriate level bucket.
            grouped.entry(level).or_insert_with(Vec::new).push(message);
        } else {
            // Keep the original malformed line.
            grouped.entry("MALFORMED".to_string())
                .or_insert_with(Vec::new)
                .push(line.to_string());
        }
    }

    grouped
}

fn main() {
    // ------------------------------------------------------------------
    // Test data – a mix of valid and malformed log lines.
    // ------------------------------------------------------------------
    let log_lines = vec![
        "[2023-07-01 12:00:00] [INFO] System started",
        "[2023-07-01 12:01:00] [ERROR] Disk failure",
        "[2023-07-01 12:02:00] [DEBUG] Value: 42",
        "Invalid line without proper brackets",
        "[2023-07-01 12:03:00] [WARN] Missing message",
        "[2023-07-01 12:04:00] [INFO] User login",
        "[2023-07-01 12:05:00] [FATAL] Something went terribly wrong",
        "Another malformed line",
    ];

    let grouped = group_logs_by_level(&log_lines);

    // Pretty‑print the resulting map.
    use std::fmt::Debug;
    println!("{:#?}", grouped);

    // Simple sanity‑check (optional)
    assert!(grouped.contains_key("INFO"));
    assert!(grouped.contains_key("ERROR"));
    assert!(grouped.contains_key("DEBUG"));
    assert!(grouped.contains_key("WARN"));
    assert!(grouped.contains_key("FATAL"));
    assert!(grouped.contains_key("MALFORMED"));
    assert_eq!(grouped["MALFORMED"].len(), 2); // two malformed lines in the test data
    println!("\nAll assertions passed.");
}
```

**How to run**

* **Python** – Save the script as `group_logs.py` and run:

```bash
python3 group_logs.py
```

You’ll see a dictionary with keys `INFO`, `ERROR`, `DEBUG`, `WARN`, `FATAL`, and `MALFORMED`, each containing the appropriate list of messages.

* **Rust** – Add `regex = "1"` to your `Cargo.toml`, then:

```bash
cargo run
```

The program prints a `HashMap` where each level maps to a `Vec<String>` of messages, and malformed lines are stored under the `"MALFORMED"` key. The optional assertions verify the expected structure.
````

