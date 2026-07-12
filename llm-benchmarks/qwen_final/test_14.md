# Qwen3-30B-A3B (Q4_K_M) — Test 14: Debugging (find & fix the bug)

**Category:** Code  
**Date:** 2026-05-29 03:47:15  

**Prompt:** The function below groups words by their first letter. A developer reports that calling it several times in the same program gives surprising, accumulating results. Identify the bug(s), explain the root cause, and provide a corrected version.

```python
def group_by_first_letter(words, groups={}):
    for w in words:
        groups.setdefault(w[0], []).append(w)
    return groups
```

*1029 tok | 70.48s | 14.6 t/s | think: 2158 chars | finish: stop*

<details><summary>Thinking (2158 chars)</summary>

````
Okay, let's see. The function group_by_first_letter is supposed to group words by their first letter. But when called multiple times, it's giving unexpected, accumulating results. Hmm. So the problem is that the groups dictionary is being retained between calls, right?

Wait, the function has a default argument groups={}. Oh right! In Python, default arguments are evaluated once when the function is defined, not each time the function is called. So if someone calls the function without providing a groups argument, it uses the same dictionary every time. That means if you call the function multiple times, each time it's adding to the existing groups dictionary instead of starting fresh.

For example, if you first call group_by_first_letter(["apple", "banana"]), it would create groups with 'a' and 'b' entries. Then if you call it again with ["cherry"], the next call would add 'c' to the same dictionary. But if the user expects each call to be independent, this is a problem.

So the root cause is the mutable default argument. The groups parameter is a dictionary that's created once and reused in subsequent calls. So the bug is that the default value for groups is a mutable object (a dictionary) that's shared between all calls to the function.

To fix this, the function should not have a mutable default argument. Instead, we can set the default to None and then initialize the dictionary inside the function. Like:

def group_by_first_letter(words, groups=None):
    if groups is None:
        groups = {}
    for w in words:
        groups.setdefault(w[0], []).append(w)
    return groups

This way, each time the function is called without a groups argument, a new empty dictionary is created. So subsequent calls won't accumulate results from previous calls.

Wait, but what if someone passes a groups dictionary intentionally? Well, the function would still work as intended, because if groups is provided, it's used. But if not, it creates a new one. That should solve the problem.

So the main issue is the mutable default argument. The corrected version changes the default to None and initializes the dictionary inside the function.
````

</details>

**Output:**

````
The issue with the provided function lies in the use of a **mutable default argument** (`groups={}`), which is a common pitfall in Python. Here's a breakdown of the problem, its root cause, and the corrected version:

---

### **Problem Description**

The function `group_by_first_letter` is intended to group words by their first letter. However, when called multiple times without explicitly passing a `groups` argument, it **accumulates results** from previous calls. This is not the expected behavior.

---

### **Root Cause**

In Python, **default arguments are evaluated only once** when the function is defined. This means that the dictionary `groups={}` is created once and reused in every subsequent call to the function. As a result, each call appends to the same dictionary, leading to **unexpected accumulation** of results.

For example:

```python
group_by_first_letter(["apple", "banana"])  # returns {'a': ['apple'], 'b': ['banana']}
group_by_first_letter(["cherry"])           # returns {'a': ['apple'], 'b': ['banana'], 'c': ['cherry']}
```

The second call does not start with an empty dictionary, but continues from the previous state.

---

### **Corrected Version**

To fix this, we should **avoid using a mutable default argument**. Instead, we can initialize the dictionary inside the function if it is not provided. This ensures that each call to the function starts with a fresh dictionary.

```python
def group_by_first_letter(words, groups=None):
    if groups is None:
        groups = {}
    for w in words:
        groups.setdefault(w[0], []).append(w)
    return groups
```

---

### **Explanation of the Fix**

- **`groups=None`** as the default argument ensures that the function does not reuse a single dictionary across calls.
- **`if groups is None:`** checks whether the user provided a `groups` dictionary. If not, it initializes a new empty dictionary.
- This approach guarantees that each call to the function is independent and does not retain state from previous calls.

---

### **Example Usage**

```python
print(group_by_first_letter(["apple", "banana"]))  # {'a': ['apple'], 'b': ['banana']}
print(group_by_first_letter(["cherry"]))           # {'c': ['cherry']}
print(group_by_first_letter(["apple", "banana"]))  # {'a': ['apple'], 'b': ['banana']}
```

Each call now behaves as expected, with no accumulation of results.

---

### **Key Takeaway**

Avoid using mutable default arguments (like `[]`, `{}`) in Python functions. Instead, use `None` as the default and initialize the mutable object inside the function. This ensures predictable and correct behavior, especially when the function is called multiple times.
````

