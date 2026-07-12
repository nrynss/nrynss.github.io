# Sarvam 30B (Q4_K_M) — Test 14: Debugging (find & fix the bug)

**Category:** Code  
**Date:** 2026-06-14 14:25:28  

**Prompt:** The function below groups words by their first letter. A developer reports that calling it several times in the same program gives surprising, accumulating results. Identify the bug(s), explain the root cause, and provide a corrected version.

```python
def group_by_first_letter(words, groups={}):
    for w in words:
        groups.setdefault(w[0], []).append(w)
    return groups
```

*2645 tok | 10.12s | 261.4 t/s | think: 6794 chars | finish: stop*

<details><summary>Thinking (6794 chars)</summary>

````
We need to answer: Identify bug(s), explain root cause, and provide corrected version. The function uses default mutable argument groups={} which is a known Python pitfall: the dictionary is created once at function definition time, not each call, so subsequent calls will accumulate previous groups. Also, if you want to return a new dict each call, you should not use mutable default argument; use groups=None and then groups = {} inside function, or copy the passed groups.\n\nAlso, maybe the function returns groups but the caller might modify the returned dict, causing further accumulation. But the primary bug is mutable default argument.\n\nPotential bug: Not copying the groups, but the root cause is that default argument is shared across calls. Also, if you call with a custom groups dict, it will still be shared with default? Actually, if you pass a groups dict, it\'s used, but the default argument is only used when groups is not passed. So the bug is that if you call without passing groups, it uses the same dict across calls, causing accumulation. Also, even if you pass a dict, if you modify it, you might get unexpected results.\n\nAdditionally, the function returns groups but doesn\'t copy; if the caller mutates the result, subsequent calls may be affected. But the main bug is the mutable default.\n\nAlso, note that the function returns groups but the caller might expect a fresh dictionary each time. So the corrected version should use groups=None and then groups = {} inside.\n\nAlso, if you want to preserve the original groups, you could return a copy: return dict(groups) or copy.deepcopy.\n\nBut the typical fix: def group_by_first_letter(words, groups=None): if groups is None: groups = {} else: groups = dict(groups) to avoid side effects.\n\nAlternatively, use collections.defaultdict.\n\nThus answer: bug: using mutable default argument; root cause: default argument is evaluated only once at function definition, not each call; subsequent calls share the same dict, causing accumulation. Also, the function mutates the dict in-place, causing side effects. Provide corrected version:\n\n```python\ndef group_by_first_letter(words, groups=None):\n    if groups is None:\n        groups = {}\n    else:\n        # optional: copy to avoid mutating caller\'s dict\n        groups = dict(groups)\n    for w in words:\n        groups.setdefault(w[0], []).append(w)\n    return groups\n```\n\nAlternatively, using collections.defaultdict:\n\n```python\nfrom collections import defaultdict\n\ndef group_by_first_letter(words):\n    groups = defaultdict(list)\n    for w in words:\n        groups[w[0]].append(w)\n    return dict(groups)\n```\n\nIf you want to preserve original groups, you could return a new dict.\n\nAlso, mention that the function should not rely on mutable default argument; the root cause is the shared state.\n\nAlso, maybe mention that the function is not pure; it\'s side-effectful.\n\nThus answer: bug(s): mutable default argument; also possibly that the function returns the same dict across calls, causing accumulation. Root cause: default argument is evaluated once. Provide corrected version.\n\nAlso, if you want to call with groups, you should copy it, else the caller might see modifications.\n\nThus answer: The bug is that groups is a mutable default argument; the root cause is that default arguments are created once at function definition; each call uses the same dict, so groups accumulates across calls. The corrected version: use groups=None, initialize inside, optionally copy.\n\nNow, we need to produce a thorough answer: Identify bug(s), explain root cause, and provide corrected version. Also, mention that using default argument is a known anti-pattern, and the best practice is to use None.\n\nAlso, mention that the function\'s name suggests grouping, but it\'s not pure; it\'s better to return a new dict.\n\nAlso, maybe mention that if you want to group by first letter, you could use a dictionary comprehension, but the main bug is the mutable default.\n\nThus answer: The bug is that groups is a mutable default argument; root cause: default arguments are evaluated once at function definition, not each call; subsequent calls share the same dict; also, the function mutates the dict, causing side effects.\n\nCorrected version: Use groups=None and then groups = {} inside; optionally copy passed groups; return a copy; optionally use collections.defaultdict.\n\nNow, let\'s write a detailed answer.\n\nWe need to include code, explanation, root cause, and corrected version.\n\nWe can also mention that if you want to preserve the original groups, you could return a new dict.\n\nAlso, note that if you want to group words, you could use a dictionary comprehension: {letter: [w for w in words if w[0] == letter] for letter in set(w[0] for w in words)}.\n\nBut the main fix is to avoid mutable default.\n\nThus answer: The bug is that the default argument groups is a mutable dict, causing accumulation; root cause: Python\'s default argument evaluation is done once; corrected version: use groups=None, then groups = {} inside.\n\nNow, we can also mention that the function should be pure: no side effects; you could use a default dict.\n\nThus answer: The bug is that the function uses a mutable default argument; root cause: default arguments are created only once; each call shares the same dict; corrected version: use None and initialize inside; optionally copy; return a new dict.\n\nNow, let\'s produce the answer.\n\nWe can also add a test to demonstrate the bug: call group_by_first_letter([\'apple\',\'banana\']) -> {\'a\':[\'apple\'], \'b\':[\'banana\']}; then call again with [\'cherry\',\'date\'] -> {\'a\':[\'apple\'], \'b\':[\'banana\'], \'c\':[\'cherry\'], \'d\':[\'date\']} but the \'a\' and \'b\' entries are still there, causing accumulation.\n\nNow, we can also mention that if you pass a custom groups dict, it will be reused, but if you pass None, you get a fresh dict.\n\nThus answer: The bug is that the default argument groups is mutable; root cause: default arguments are evaluated once; corrected version: groups=None and then groups = {} inside.\n\nNow, let\'s write a final answer.\n\nWe\'ll include:\n\n- Explanation of bug(s): mutable default argument, shared state, side-effect.\n\n- Root cause: Python\'s default argument evaluation.\n\n- Corrected version: use groups=None, initialize inside, optionally copy, return new dict.\n\n- Provide code.\n\n- Also, mention best practice: avoid mutable default, use default dict, or use collections.defaultdict.\n\nNow, we can also mention that the function could be improved by using collections.defaultdict, which automatically creates a list for each new key.\n\nThus answer: Provide corrected version.\n\nNow, let\'s write the answer.
````

</details>

**Output:**

````
**Bug(s)**  

1. **Mutable default argument** – `groups={}` is a dictionary that is created once, at function‑definition time.  
2. **Shared state across calls** – because the same dictionary is reused on every call, any words added in a previous call stay in the result.  
3. **Side‑effects** – the function mutates the `groups` dict in‑place and returns that same object, so callers that keep a reference to the returned value will see the “accumulated” data even if they passed a fresh dict.

**Root cause**  

In Python, default arguments are evaluated **once** when the function is defined, not each time it is called. The expression `groups={}` therefore creates a single, persistent dictionary that is shared by all invocations that omit the `groups` argument. When the function does `groups.setdefault(...).append(...)` it is mutating that shared dictionary, which explains the “surprising, accumulating results”.

**Corrected version**  

The idiomatic way to avoid this pitfall is to use `None` as the default and create a new dictionary inside the function (or copy the caller‑provided one).  
Below are two common patterns:

---

### 1. Minimal fix – use `None` and create a fresh dict

```python
def group_by_first_letter(words, groups=None):
    """
    Group words by their first letter.

    Parameters
    ----------
    words : iterable of str
        The words to group.
    groups : dict, optional
        If supplied, the function will copy it so the caller's
        dictionary is not mutated.  If omitted, a new dict is created.

    Returns
    -------
    dict
        Mapping from first‑letter → list of words.
    """
    # Start with a fresh dict unless the caller gave one.
    if groups is None:
        groups = {}
    else:
        # Defensive copy: the caller may still hold a reference to the
        # original dict and we don't want to surprise them.
        groups = dict(groups)

    for w in words:
        groups.setdefault(w[0], []).append(w)

    return groups
```

*Why this works*  

- `groups=None` means the function always gets a fresh dictionary when the caller omits the argument.  
- When a custom dictionary is passed we copy it (`dict(groups)`) so the function’s internal work doesn’t affect the caller’s object.  
- The returned dict is a brand‑new object on each call, eliminating the accumulation.

---

### 2. “Pythonic” version – use `collections.defaultdict`

```python
from collections import defaultdict

def group_by_first_letter(words):
    """
    Group words by their first letter using a defaultdict.
    """
    groups = defaultdict(list)          # each new key gets an empty list automatically
    for w in words:
        groups[w[0]].append(w)
    # Convert to a plain dict if you want a regular dict in the result
    return dict(groups)
```

*Why this works*  

- `defaultdict(list)` creates a fresh dictionary each time the function is called.  
- No mutable default argument is involved, so there’s no shared state.  
- The function is pure (aside from the input `words`), which makes its behavior predictable.

---

**What to avoid**  

- Never use a mutable object (e.g., `{}`, `[]`, `set()`) as a default argument.  
- If you need to preserve a caller‑provided dictionary, copy it before mutating.  
- Prefer immutable‑style APIs or explicit copies to keep side‑effects transparent.

**Quick demonstration of the bug**

```python
>>> group_by_first_letter(['apple', 'banana'])
{'a': ['apple'], 'b': ['banana']}

>>> group_by_first_letter(['cherry', 'date'])
{'a': ['apple'], 'b': ['banana'], 'c': ['cherry'], 'd': ['date']}
```

The `'a'` and `'b'` entries from the first call are still present, which is the accumulation bug.

**Conclusion**  

The surprising accumulation is caused by the mutable default argument `groups={}`. By switching to `groups=None` (or by using `defaultdict`), each call gets its own independent dictionary, and the function behaves as expected. The corrected version above eliminates the bug and follows Python best practices.
````

