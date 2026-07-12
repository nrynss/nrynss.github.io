# Qwen3-30B-A3B (Q4_K_M) — Test 14: Debugging (find & fix the bug)

**Category:** Code  
**Date:** 2026-06-14 14:23:21  

**Prompt:** The function below groups words by their first letter. A developer reports that calling it several times in the same program gives surprising, accumulating results. Identify the bug(s), explain the root cause, and provide a corrected version.

```python
def group_by_first_letter(words, groups={}):
    for w in words:
        groups.setdefault(w[0], []).append(w)
    return groups
```

*1350 tok | 6.76s | 199.6 t/s | think: 2782 chars | finish: stop*

<details><summary>Thinking (2782 chars)</summary>

````
Okay, let's look at this Python function. The goal is to group words by their first letter. The function is called group_by_first_letter, and it takes 'words' and a 'groups' parameter which has a default value of an empty dictionary. 

The problem is that when the function is called several times in the same program, it gives accumulating results. So, the developer is surprised because each call isn't starting fresh. Hmm, I remember that in Python, default arguments are evaluated once when the function is defined, not each time the function is called. So if the default is a mutable object like a dictionary, then each call to the function without providing the 'groups' argument will reuse the same dictionary. That's probably the root cause here.

Let me think. Suppose someone calls group_by_first_letter with some words. The groups dictionary is created once. Then, if they call it again without passing groups, the same dictionary is used. So the next time, the words are added to the existing groups. That's why the results are accumulating. For example, if you first call it with ["apple", "banana"], then the groups would be {'a': ['apple'], 'b': ['banana']}. Then if you call it again with ["cherry"], the groups would be {'a': ['apple'], 'b': ['banana'], 'c': ['cherry']}. But if the user expects that each call is independent, this is a problem.

So the bug is using a mutable default argument. The fix would be to avoid using a mutable default. Instead, the function should initialize the groups dictionary inside the function, perhaps with a default of None, and then check if it's None, create a new dict. Let me check how to do that.

The corrected function would have the groups parameter default to None, and then inside the function, if groups is None, create a new empty dict. Then proceed. So the corrected code would be:

def group_by_first_letter(words, groups=None):
    if groups is None:
        groups = {}
    for w in words:
        groups.setdefault(w[0], []).append(w)
    return groups

That way, each call without the groups argument starts with a new empty dictionary. So the next time the function is called, it doesn't accumulate the previous results.

Another thing to consider: what if someone passes a groups dictionary and wants to accumulate? Well, the original code's behavior might have been intended for that, but the problem here is that the default is causing unexpected accumulation. So the fix is to make the default None and create a new dict each time.

So the root cause is the mutable default argument. The function's default groups parameter is a single dictionary that's reused across all calls, leading to accumulation. The fix is to use a non-mutable default (like None) and initialize the dictionary inside the function.
````

</details>

**Output:**

````
The issue with the provided `group_by_first_letter` function stems from a common and subtle bug in Python: **using a mutable default argument**. This behavior leads to **unexpected accumulation** of results across multiple function calls, which is not what the developer intended.

---

### 🧩 **Root Cause**

In Python, **default arguments are evaluated only once**, at the time the function is defined. If the default value is a mutable object (like a `dict`, `list`, or `set`), it is shared across all calls to the function that do not explicitly provide a value for that argument.

In the function:

```python
def group_by_first_letter(words, groups={}):
    for w in words:
        groups.setdefault(w[0], []).append(w)
    return groups
```

The `groups={}` is evaluated **once** when the function is defined. This means that **every call to the function without explicitly passing a `groups` argument will reuse the same dictionary**. As a result, the dictionary accumulates data from multiple calls, leading to the "surprising, accumulating results" behavior.

---

### 🧠 **Explanation of the Bug**

Let’s walk through an example:

```python
print(group_by_first_letter(["apple", "banana"]))
# Output: {'a': ['apple'], 'b': ['banana']}

print(group_by_first_letter(["cherry"]))
# Output: {'a': ['apple'], 'b': ['banana'], 'c': ['cherry']}
```

Even though the second call didn’t pass a `groups` argument, it **appended** to the existing dictionary from the first call. This is not the expected behavior if the developer intended to start with a fresh dictionary each time.

---

### ✅ **Corrected Version**

To fix this, we should **avoid using a mutable object as a default argument**. Instead, we can use `None` as the default and initialize the dictionary inside the function if it is `None`.

Here is the corrected version:

```python
def group_by_first_letter(words, groups=None):
    if groups is None:
        groups = {}
    for w in words:
        groups.setdefault(w[0], []).append(w)
    return groups
```

---

### 📌 **Key Improvements**

- **Avoids mutable default argument**: `groups=None` ensures that each call to the function gets a new, empty dictionary if no `groups` is provided.
- **Preserves flexibility**: If the developer *does* want to pass a pre-initialized dictionary (e.g., for cumulative results), it is still possible.
- **Maintains clarity and correctness**: The function now behaves as expected — each call is independent unless explicitly shared.

---

### 🧪 **Example Usage**

```python
print(group_by_first_letter(["apple", "banana"]))
# Output: {'a': ['apple'], 'b': ['banana']}

print(group_by_first_letter(["cherry"]))
# Output: {'c': ['cherry']}

# With explicit groups
groups = {}
print(group_by_first_letter(["apple", "banana"], groups))
# Output: {'a': ['apple'], 'b': ['banana']}
# groups now contains the same result
```

---

### 🧩 **Summary**

| Issue | Fix |
|------|-----|
| Mutable default argument (`groups={}`) | Use `groups=None` and initialize a new dictionary inside the function |
| Accumulated results across calls | Ensures each call starts with a fresh dictionary unless explicitly shared |
| Unintended side effects | Makes the function behavior predictable and consistent |

This fix resolves the bug and aligns the function's behavior with the developer's expectations.
````

