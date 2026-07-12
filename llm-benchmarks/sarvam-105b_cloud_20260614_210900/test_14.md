# Sarvam 30B (Q4_K_M) — Test 14: Debugging (find & fix the bug)

**Category:** Code  
**Date:** 2026-06-14 21:35:29  

**Prompt:** The function below groups words by their first letter. A developer reports that calling it several times in the same program gives surprising, accumulating results. Identify the bug(s), explain the root cause, and provide a corrected version.

```python
def group_by_first_letter(words, groups={}):
    for w in words:
        groups.setdefault(w[0], []).append(w)
    return groups
```

*1548 tok | 12.75s | 121.4 t/s | think: 2862 chars | finish: stop*

<details><summary>Thinking (2862 chars)</summary>

````
We need to answer: identify bug(s), explain root cause, and provide corrected version. The function groups words by first letter. The bug is the default mutable argument groups={} which is shared across calls. The function modifies the dictionary and returns it. So subsequent calls accumulate results from previous calls. Also potential issues: w[0] may cause IndexError if empty string; also using default argument leads to shared state across calls; also maybe the function modifies the passed-in dictionary unexpectedly; also returning groups may cause external code to rely on same dict across calls. So bug: mutable default argument.\n\nExplain root cause: default arguments are evaluated only once at function definition time, not each call; the dictionary persists across calls; using mutable default leads to shared state.\n\nProvide corrected version: either remove default argument or use None and initialize inside; also optionally handle empty strings; also maybe avoid mutating passed-in groups unless needed.\n\nExamples:\n\ndef group_by_first_letter(words, groups=None):\n    if groups is None:\n        groups = {}\n    for w in words:\n        if not w:  # skip empty strings\n            continue\n        groups.setdefault(w[0], []).append(w)\n    return groups\n\nAlternatively, if we want to preserve original behavior of always returning a fresh dict, we can set default to None.\n\nWe also need to mention that if you pass a dict, it will be mutated; perhaps that\'s okay but could be surprising.\n\nBetter to rename function maybe group_by_first_letter.\n\nPotential other bug: using groups.setdefault(w[0], []).append(w) works but can cause side effects if groups is passed externally; but that\'s not the main bug.\n\nAlso mention that the function returns groups, which may be the same dict across calls if default is used; but with corrected version, it returns a new dict each call.\n\nTesting: call group_by_first_letter([\'apple\',\'banana\']) returns {\'a\': [\'apple\'], \'b\': [\'banana\']}; call again with [\'avocado\',\'blueberry\'] returns {\'a\': [\'avocado\'], \'b\': [\'blueberry\']}. Not accumulating.\n\nAlso mention that you could use collections.defaultdict for cleaner code.\n\nPotential improvements: use defaultdict(list). But the bug is the mutable default.\n\nThus answer: bug is mutable default argument; root cause: default arguments are evaluated once; corrected version: groups=None; then create new dict inside.\n\nAlso discuss that using default argument for caching may be intentional but here it\'s bug.\n\nAlso note that returning groups modifies the dict; better to return a copy.\n\nBut the main fix: groups=None.\n\nThus answer: identify bug(s) (mutable default argument, potential empty string error, side-effect on passed dict). Explanation. Provide corrected version.\n\nNow produce final answer.
````

</details>

**Output:**

````
**Bug(s)**  

1. **Mutable default argument (`groups={}`)** – the dictionary is created once when the function is defined and is reused on every call.  
2. **Side‑effect on a passed‑in dictionary** – if the caller supplies a `groups` value, the function mutates it in‑place, which can be surprising.  
3. **No guard against empty strings** – `w[0]` will raise an `IndexError` for `''`.  

**Root cause**  

In Python, default arguments are evaluated **only once**, at function definition time. The literal `{}` therefore becomes a single dictionary object that lives for the lifetime of the program. Every call that omits the `groups` argument receives the *same* object, so the `append` operations performed in earlier calls accumulate in later calls. This is the classic “mutable default argument” pitfall.

**Corrected version**  

The fix is to replace the mutable default with an immutable sentinel (`None`) and create a fresh dictionary inside the function. We also add a small guard for empty strings and avoid mutating a caller‑provided dictionary unless that is explicitly desired.

```python
from collections import defaultdict
from typing import List, Dict, Optional

def group_by_first_letter(
    words: List[str],
    groups: Optional[Dict[str, List[str]]] = None
) -> Dict[str, List[str]]:
    """
    Group the words in ``words`` by their first character.

    Parameters
    ----------
    words : list of str
        The words to be grouped.
    groups : dict, optional
        A dictionary to reuse for the grouping.  If omitted, a new
        dictionary is created for this call.

    Returns
    -------
    dict
        Mapping from first character → list of words that start with it.
    """
    # Use a fresh dict unless the caller explicitly passes one.
    if groups is None:
        groups = defaultdict(list)   # or {} if you prefer a plain dict

    for w in words:
        # Skip empty strings (or raise an error, depending on requirements)
        if not w:
            continue
        groups[w[0]].append(w)

    # Convert defaultdict back to a plain dict for a cleaner return value
    return dict(groups)
```

**Why this works**

* `groups=None` means the default is evaluated each call; the `if groups is None:` block creates a brand‑new dictionary (`defaultdict(list)` in this version).  
* Using `defaultdict(list)` removes the need for `setdefault` and makes the intent clearer.  
* The guard `if not w: continue` prevents an `IndexError` on empty strings.  
* Returning `dict(groups)` gives the caller a plain `dict` rather than a `defaultdict`, which is usually what you want when you’re just returning the result.

**Usage examples**

```python
>>> group_by_first_letter(['apple', 'banana', 'avocado'])
{'a': ['apple', 'avocado'], 'b': ['banana']}

>>> group_by_first_letter(['cat', 'dog'])
{'c': ['cat'], 'd': ['dog']}

# No accumulation across calls:
>>> group_by_first_letter(['apple'])
{'a': ['apple']}
>>> group_by_first_letter(['banana'])
{'b': ['banana']}
```

If you *do* want to reuse a dictionary across calls (e.g., for caching), you can pass it explicitly:

```python
shared = {}
group_by_first_letter(['apple'], groups=shared)
group_by_first_letter(['banana'], groups=shared)
print(shared)   # {'a': ['apple'], 'b': ['banana']}
```

But for the typical “group‑by‑first‑letter” use‑case, the corrected function returns a fresh result each time, eliminating the surprising accumulating behavior.
````

