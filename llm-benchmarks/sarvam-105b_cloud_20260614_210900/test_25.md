# Sarvam 30B (Q4_K_M) — Test 25: Romanized Indic input

**Category:** Multilingual  
**Date:** 2026-06-14 21:46:19  

### Hindi

**Prompt:** Python mein decorator kya hota hai aur iska use kaise karte hain? Ek simple example de kar samjhao. Jawab Roman Hindi mein hi do.

*2439 tok | 19.67s | 124.0 t/s | think: 6182 chars | finish: stop*

<details><summary>Thinking (6182 chars)</summary>

````
1.  **Deconstruct the User's Request:**
    *   **Core Topic:** Python decorators.
    *   **Key Questions:**
        *   What is a decorator? (Definition)
        *   How is it used? (Application/Mechanism)
    *   **Constraints:**
        *   Provide a simple example.
        *   The entire answer must be in Romanized Hindi (Roman Hindi).

2.  **Initial Brainstorming & Keyword Association (Mental Map):**
    *   **Decorator:** Function, wrapper, adds functionality, doesn't change original function's code, "function as an argument," "function as a return value," `@` symbol.
    *   **Analogy:** This is crucial for a non-technical or beginner-friendly explanation. What's a good analogy?
        *   Gift wrapping: You have a gift (the function), you wrap it (the decorator), the wrapping adds presentation (new functionality) without changing the gift itself. This is a classic and effective analogy.
        *   A fancy frame for a picture: The picture is the function, the frame adds a border/protection (new functionality).
        *   Adding toppings to a pizza: The base pizza is the function, toppings are the decorator.
        *   Let's go with the gift wrapping analogy. It's very intuitive.

3.  **Structuring the Answer (in Roman Hindi):**
    *   **Introduction:** Start with a simple, high-level definition. What's the main idea? "Decorator ek special type ka function hota hai jo doosre function ko modify karta hai." (A decorator is a special type of function that modifies another function.)
    *   **The "Why":** Why use them? What's the benefit? "Yeh original function ke code ko badle bina usmein nayi functionality add karne ka ek clean aur reusable tareeka hai." (It's a clean and reusable way to add new functionality without changing the original function's code.) This emphasizes the "Don't Repeat Yourself" (DRY) principle and code organization.
    *   **The Analogy:** Introduce the gift-wrapping analogy. "Sochiye aap ek gift (original function) pack kar rahe hain. Aap usmein ek fancy wrapping paper (decorator) laga dete hain. Wrapping paper se gift ka appearance badal jaata hai (new functionality), lekin andar jo gift hai woh same hi rehta hai." (Imagine you're packing a gift (original function). You put fancy wrapping paper (decorator) on it. The wrapping paper changes the gift's appearance (new functionality), but the gift inside remains the same.) This makes the concept less abstract.
    *   **The "How" (The Mechanism):** This is the technical part. I need to explain how it works under the hood, but keep it simple.
        *   A decorator is a function that takes another function as an argument.
        *   It returns a new function (often called a "wrapper").
        *   This wrapper function usually does something before and/or after calling the original function.
        *   Mention the `@` symbol. Explain that `my_decorator` is syntactic sugar for `my_function = my_decorator(my_function)`. This is a *very* important point for understanding.
    *   **The Simple Example:** This is a core requirement.
        *   **Goal:** The example should be simple and clearly demonstrate the concept. A timer or a logging decorator is a classic choice. Let's go with a simple logging/timestamp decorator. It's easy to see the "before" and "after" behavior.
        *   **Step 1: The Decorator Function.**
            *   Define a function, say `log_execution`.
            *   It takes one argument: `func` (the function to be decorated).
            *   Inside `log_execution`, define a new function, say `wrapper`.
            *   The `wrapper` function will also take `*args` and `**kwargs` to be generic and handle any arguments passed to the original function.
            *   Inside `wrapper`, print something like "Executing function..."
            *   Call the original function: `result = func(*args, **kwargs)`
            *   Print something like "Function executed."
            *   Return the `result`.
            *   Finally, `log_execution` must `return wrapper`.
        *   **Step 2: The Original Function.**
            *   Define a simple function, say `say_hello`, that takes a `name`.
            *   Inside, it just prints "Hello, [name]!".
        *   **Step 3: Applying the Decorator.**
            *   Show the two ways:
                1.  **Using `@` (the easy way):**
                    ```python
                    @log_execution
                    def say_hello(name):
                        print(f"Hello, {name}!")
                    ```
                2.  **Without `@` (the manual way):**
                    ```python
                    def say_goodbye(name):
                        print(f"Goodbye, {name}!")

                    say_goodbye = log_execution(say_goodbye)
                    ```
            *   Explain that both achieve the same result. The `@` is just cleaner.
        *   **Step 4: Calling the Decorated Function.**
            *   Call `say_hello("Alice")`.
            *   Show the expected output, including the decorator's messages. This makes it crystal clear what's happening.
    *   **Summary/Conclusion:** Briefly recap the key benefits. "In short, decorators are a powerful feature for extending the functionality of functions in a clean, reusable, and readable way." Reiterate the main idea: "Yeh code ko DRY (Don't Repeat Yourself) banata hai aur modular banata hai." (It makes the code DRY and modular.)

4.  **Review and Refine (Language Check):**
    *   Read through the entire generated text in Roman Hindi.
    *   Is the language natural and easy to understand for someone familiar with Python but new to decorators?
    *   Are the technical terms explained simply? (e.g., "wrapper," "syntactic sugar").
    *   Is the analogy clear?
    *   Is the code example correct and well-commented (if needed)?
    *   Does it directly answer all parts of the user's question? (Yes: what, how, example, Roman Hindi).
    *   Check for any awkward phrasing or grammatical errors in Roman Hindi. For instance, ensuring verb conjugations and sentence structure are correct. The flow should be logical: What -> Why -> Analogy -> How -> Example -> Summary.
````

</details>

**Output:**

````
Of course! Python mein decorator kya hai aur uska use kaise karte hain, iske baare mein main aapko Roman Hindi mein samjhaata hun.

---

### Python mein Decorator Kya Hai?

Ek **decorator** ek special type ka function hota hai jo doosre function ko modify karta hai ya usmein nayi functionality add karta hai.

Sochiye aap ek gift (original function) pack kar rahe hain. Aap usmein ek fancy wrapping paper (decorator) laga dete hain. Wrapping paper se gift ka appearance badal jaata hai (nayi functionality), lekin andar jo gift hai woh same hi rehta hai.

Decorator ka main purpose yeh hai ki aap original function ke code ko badle bina usmein extra features add kar saken. Yeh code ko clean, reusable aur organized banata hai.

### Decorator Kaise Use Karte Hain?

Decorator use karne ke do main tareeke hain:

1.  **`@` symbol ka use karke:** Yeh sabse common aur easy tareeka hai.
2.  **Function ko manually call karke:** Yeh thoda lamba tareeka hai, jo samajhne ke liye useful hai.

**`@` Symbol kya karta hai?**

Jab aap function ke upar `@decorator_name` likhte hain, toh Python automatically us function ko decorator ke andar pass kar deta hai aur uska result vaapas assign kar deta hai.

Yeh basically iska shortcut hai:
`@my_decorator`
`def my_function():`
`    pass`

Yeh likhne ke baraabar hai:
`def my_function():`
`    pass`

`my_function = my_decorator(my_function)`

### Simple Example

Chaliye ek simple example lete hain. Hum ek decorator banayenge jo function execute hone se pehle aur baad mein ek message print karega.

#### Step 1: Decorator Function Banayein

Yeh function doosre function ko argument ke taur par lega.

```python
def simple_decorator(func):
    # Yeh wrapper function hai
    def wrapper():
        print("--- Decorator: Function execute hone wala hai. ---")
        # Original function ko call karna
        func()
        print("--- Decorator: Function execute ho chuka hai. ---")
    return wrapper
```

#### Step 2: Original Function Banayein

Yeh woh function hai jisme hum decorator add karna chahte hain.

```python
def my_function():
    print("Yeh original function ka code hai.")
```

#### Step 3: Decorator Apply Karein aur Use Karein

Ab hum `my_function` mein `simple_decorator` add karenge.

```python
# @ symbol use karke decorator apply karna
@simple_decorator
def my_function():
    print("Yeh original function ka code hai.")

# Ab function call karte hain
my_function()
```

#### Output:

Jab aap `my_function()` call karenge, toh output kuch aisa dikhega:

```
--- Decorator: Function execute hone wala hai. ---
Yeh original function ka code hai.
--- Decorator: Function execute ho chuka hai. ---
```

### Example ka Explanation

1.  **`simple_decorator(func)`**: Yeh humara decorator hai. Yeh ek argument `func` leta hai, jo ki `my_function` hai.
2.  **`wrapper()`**: Yeh decorator ke andar ek naya function hai. Ismein woh code hai jo hum add karna chahte hain (messages print karna).
3.  **`func()`**: `wrapper` ke andar, hum original function `func` ko call karte hain.
4.  **`return wrapper`**: Decorator function `wrapper` function ko return karta hai.
5.  **`@simple_decorator`**: Jab Python code run karta hai, toh yeh `my_function` ko `simple_decorator(my_function)` se replace kar deta hai. Iska matlab ab `my_function` actually `wrapper` function hi hai.

### Summary

*   **Kya hai?** Ek function jo doosre function ko modify karta hai.
*   **Kyun use karein?** Code ko clean, reusable aur modular banane ke liye. "Don't Repeat Yourself" (DRY) principle follow karne ke liye perfect hai.
*   **Kaise use karein?** `@decorator_name` syntax se ya manually function ko call karke.

Python mein decorators ek bahut hi powerful feature hain, jo frameworks aur libraries mein bahut use hote hain.
````

### Bengali

**Prompt:** Python e decorator ki ebong eta ki bhabe use kora hoy? Ekta simple example diye bojhao. Uttor Roman Bangla te dao.

*2645 tok | 21.11s | 125.3 t/s | think: 6187 chars | finish: stop*

<details><summary>Thinking (6187 chars)</summary>

````
1.  **Deconstruct the User's Request:**
    *   **Core Topic:** Python decorators.
    *   **Key Questions:**
        *   What is a decorator?
        *   How is it used?
    *   **Requirement 1:** Provide a simple example.
    *   **Requirement 2:** Answer in Romanised Bengali (Roman Bangla).

2.  **Initial Brainstorming & Keyword Association (in English first, then I'll translate):**
    *   **What is it?** Function, wrapper, modifying behavior, "meta-programming," adding functionality, function as an argument, higher-order function, `@` symbol.
    *   **How is it used?** Decorate a function, call the decorated function, the wrapper function calls the original function.
    *   **Simple Example:**
        *   A function that prints "Hello".
        *   A decorator that prints "Before the function runs" and "After the function runs".
        *   Show the "before" and "after" output to demonstrate the change.
        *   Show the code with `@decorator_name` and without it (the "manual" way) to highlight the syntactic sugar.

3.  **Structuring the Answer in Romanised Bengali:**

    *   **Introduction:** Start with a simple, high-level analogy. The "gift wrapping" or "packaging" analogy is very common and effective. It's easy to grasp. "Decorator holo ekta function-er upor onyo ekta function-er khomota bariye dewar ekta sohoj upay." (A decorator is a simple way to add extra functionality to a function).

    *   **Formal Definition:** Give a slightly more technical definition.
        *   Mention it's a "higher-order function" (higher-order function).
        *   Explain that it takes a function as an argument.
        *   It returns a new function.
        *   This new function usually does something *before* and/or *after* calling the original function.
        *   Translate these terms:
            *   Higher-order function -> Higher-order function
            *   Argument -> Argument
            *   Returns a new function -> Notun ekta function return kore
            *   Original function -> Original function

    *   **The `@` Symbol:** Explain the syntactic sugar.
        *   Explain that `@decorator_name` is just a cleaner way of writing `my_function = decorator_name(my_function)`.
        *   This is a crucial point for understanding *how* they are used in practice.
        *   Translate: "sohoj shortcut", "lekhar ekta shohoj upay".

    *   **The Simple Example (The Core of the Answer):**
        *   **Step 1: The Decorator Function.**
            *   Create a function, let's call it `my_decorator`.
            *   It needs to accept one argument, which will be the function to be decorated. Let's call this argument `func`.
            *   Inside `my_decorator`, define a *nested* function, the "wrapper". Let's call it `wrapper`.
            *   The `wrapper` function should do its own thing (e.g., print a message).
            *   Inside the `wrapper`, it must call the original function (`func()`).
            *   The `wrapper` must then return whatever the original function returned.
            *   The `my_decorator` function must return the `wrapper` function itself, not the *result* of calling it.
            *   Translate the code and comments carefully.
                *   `def my_decorator(func):` -> `def my_decorator(func):`
                *   `def wrapper():` -> `def wrapper():`
                *   `print("Something is happening before the function is called.")` -> `print("Function-ti call korar age kichu ekta hochhe.")`
                *   `func()` -> `func()`
                *   `print("Something is happening after the function is called.")` -> `print("Function-ti call korar pore kichu ekta hochhe.")`
                *   `return wrapper` -> `return wrapper`

        *   **Step 2: The Original Function.**
            *   Create a simple function to be decorated. Let's call it `say_hello`.
            *   It should do something simple, like `print("Hello!")`.
            *   Translate: `def say_hello():` -> `def say_hello():`
            *   `print("Hello!")` -> `print("Hello!")`

        *   **Step 3: Applying the Decorator (Two Ways).**
            *   **Method 1: Using the `@` symbol (The Easy Way).**
                *   Place `@my_decorator` directly above `say_hello`.
                *   Show the code block.
                *   Show the output when `say_hello()` is called. This is important to demonstrate the effect.
                *   Explain the output: "Dekhun, prothome decorator-er 'before' message, tarpor original function-er 'Hello!', ebong sheshe 'after' message."

            *   **Method 2: Manually (The "Under the Hood" Way).**
                *   This reinforces the concept of what `@` does.
                *   Comment out the `@` version.
                *   Show the manual assignment: `say_hello = my_decorator(say_hello)`.
                *   Explain that this line takes the original `say_hello` function, passes it to `my_decorator`, which returns the new `wrapper` function, and assigns this new function back to the name `say_hello`.
                *   Show that calling `say_hello()` now produces the same decorated output.

    *   **Conclusion/Summary:**
        *   Recap the key points in simple terms.
        *   Decorators are for adding functionality.
        *   They are functions that wrap other functions.
        *   The `@` symbol is just convenient syntax.
        *   Mention common use cases briefly (e.g., logging, timing, access control) to show their power. "logging, timing, ba access control-er moto kaajgulor jonyo khub kajer."

4.  **Final Review:** Read through the entire Romanised Bengali text.
    *   Does it flow naturally?
    *   Is the language clear and easy for a learner to understand? (Using words like "sohoj upay", "khub kajer", "under the hood" helps).
    *   Are the code examples correct and well-commented?
    *   Does it directly answer all parts of the user's question? (What is it? How is it used? Simple example? Romanised Bengali?). Yes.
    *   The structure is logical: Analogy -> Definition -> The `@` symbol -> Example (Decorator, Original, Application) -> Summary. This is a solid teaching pattern.
````

</details>

**Output:**

````
Oboshshoi! Python-er decorator niye ekta simple explanation niche deowa holo.

---

### Python Decorator ki?

Sohoj kothay, **decorator holo emon ekta function ja onyo ekta function-er upor extra functionality add kore.**

Eke ekta gift-wrapping-er moto bhabte paren. Apnar kachhe ekta gift (original function) achhe, aar apni seta sundor kore packaging (decorator) korchhen. Wrapping-er fole gift-tar kaaj change hoy na, kintu seta dekhte beshi attractive lage aar ekta special touch pae.

Technically bolle, decorator holo ekta **higher-order function**. Er mane holo:
1. Eta ekta function-ke argument hisabe ney.
2. Eta ekta notun function return kore.

### Eta kibhabe use kora hoy?

Apni kono function-er naam `()` parenthesis-er thik age `@` symbol aar decorator-er naam bosiye sei function-tike "decorate" korte paren.

Dekhte onekta erokom:

```python
@my_decorator
def my_function():
    # ... function code ...
    pass
```

Eta asole `my_function = my_decorator(my_function)` lekhar ekta sohoj shortcut.

---

### Ekta Simple Example

Dhorun, amra chai je kono function call korar age ekta message print hok ebong pore onyo ekta message print hok. Amra ekta decorator toiri korbo eta handle korar jonyo.

#### Step 1: Decorator Function toiri kora

Prothome amra `my_decorator` naame ekta function toiri korbo. Eta je function-tike decorate korbe, take argument hisabe nebe.

```python
def my_decorator(func):
    # Ei function-ti wrapper hisabe kaaj korbe
    def wrapper():
        print("--- Decorator: Function-ti call korar age kichhu hochhe ---")
        # Original function-tike call kora hochhe
        func()
        print("--- Decorator: Function-ti call korar pore kichhu hochhe ---")
    
    # Wrapper function-tike return kora hochhe
    return wrapper
```

**Byakhya:**
* `my_decorator` ekta function `func`-ke argument hisabe ney.
* Er bhetore `wrapper` naame arekta function define kora hoyechhe.
* `wrapper` function-ti amader notun kaajgulo kore (age ebong pore message print kora).
* `wrapper` function-ti original function `func()`-ke call kore.
* Sobseshe, `my_decorator` function-ti `wrapper`-ke return kore.

#### Step 2: Original Function toiri kora

Ekhon amra ekta simple function toiri korbo ja amra decorate korte chai.

```python
def say_hello():
    print("Hello! Welcome to the function.")
```

#### Step 3: Decorator apply kora ebong use kora

Ekhon amra `@my_decorator` use kore `say_hello` function-tike decorate korbo.

```python
# @ symbol use kore decorator apply kora hochhe
@my_decorator
def say_hello():
    print("Hello! Welcome to the function.")

# Ekhon function-ti call kora hochhe
say_hello()
```

**Output:**

```
--- Decorator: Function-ti call korar age kichhu hochhe ---
Hello! Welcome to the function.
--- Decorator: Function-ti call korar pore kichhu hochhe ---
```

Dekhun, jokhon amra `say_hello()` call korlam, tokhon decorator-er bhetorer code-tio age ebong pore execute holo. Original function-ti ekhon "wrapped" hoye gechhe.

#### `@` chhara (The "Manual" Way)

`@` symbol-ti asole ekta shortcut. Eta asole ei kaajtai kore:

```python
def say_hello():
    print("Hello! Welcome to the function.")

# Amra manually decorator apply korchhi
say_hello = my_decorator(say_hello)

# Ekhon amra function-ti call korchhi
say_hello()
```

Ei output-tao ager motoi asbe. `@` symbol-ti shudhu code-tike porishkar aar porte subidha kore dey.

### Summary

* **Eta ki:** Onyo function-er behavior modify ba extend korar ekta function.
* **Kibhabe use hoy:** Kono function-er definition-er upor `@decorator_name` bosiye.
* **Keno use hoy:** Code-ke nongra na kore logging, timing, authentication ba error handling-er moto kaajgulo jukto korte.
````

### Gujarati

**Prompt:** Python ma decorator shu chhe ane ena use kem karva? Ek simple example aapi ne samjhavo. Jawab Roman Gujarati ma apo.

*2640 tok | 21.05s | 125.4 t/s | think: 7007 chars | finish: stop*

<details><summary>Thinking (7007 chars)</summary>

````
1.  **Deconstruct the User's Request:**
    *   **Core Question:** "What is a decorator in Python and why to use it?"
    *   **Required Components:**
        *   Explanation of "what is a decorator".
        *   Explanation of "why to use it".
        *   A simple example.
    *   **Language Constraint:** "Answer in Roman Gujarati."

2.  **Initial Brainstorming & Keyword Association (English):**
    *   **What is a decorator?**
        *   Function that takes another function as an argument.
        *   Returns a new function.
        *   Modifies or enhances the behavior of the original function.
        *   Syntactic sugar (`@decorator_name`).
        *   Wraps a function.
        *   Higher-order function.
        *   Metaprogramming.
    *   **Why use it?**
        *   Don't Repeat Yourself (DRY).
        *   Separation of Concerns.
        *   Clean code.
        *   Reusable code.
        *   Logging.
        *   Timing execution.
        *   Authentication/Authorization checks.
        *   Caching/Memoization.
        *   Pre/post-processing.
    *   **Simple Example:**
        *   A decorator that prints a message before and after the original function runs.
        *   A decorator that adds a timestamp to a function's output.
        *   A decorator that counts how many times a function is called.
        *   The "before/after" one is the most classic and easiest to understand. Let's go with that.

3.  **Translate to Roman Gujarati (Mental or on a scratchpad):**
    *   **Decorator:** Decorator (same word, often used as-is) or "સજાવટ" (sajavat). Let's use "Decorator" for the technical term and explain it with "સજાવટ" or "વધારવાની રીત".
    *   **Function:** Function (same word) or "કાર્ય" (karya).
    *   **Argument:** Argument (same word) or "દલીલ" (dalil).
    *   **Returns:** Returns (same word) or "પરત કરે છે" (parat kare chhe).
    *   **Modifies/Enhances:** Modify/enhance (same words) or "બદલે છે/વધારે છે" (badhare chhe/vadhare chhe).
    *   **Behavior:** Behavior (same word) or "વર્તન" (varthan).
    *   **Why:** Kem (કેમ).
    *   **Use:** Use (વપરાશ) or "ઉપયોગ કરવો" (upyog karvo).
    *   **Simple Example:** Saral udaharan (સરળ ઉદાહરણ).
    *   **Code:** Code (કોડ).
    *   **Explanation:** Explanation (સ્પષ્ટીકરણ).
    *   **Before:** Pehla (પહેલા).
    *   **After:** Pachhi (પછી).
    *   **Original Function:** Mul function (મૂળ ફંક્શન).
    *   **New Function:** Navo function (નવું ફંક્શન).
    *   **Wrapper:** Wrapper (રેપર) or "આવરી લેતું ફંક્શન" (avri letu function).
    *   **Key phrases:**
        *   "A decorator is a function that takes another function as an argument..." -> "Decorator ek function chhe je bija function ne argument tareeke leve chhe..."
        *   "...and returns a new function." -> "...ane navo function parat kare chhe."
        *   "It's a way to modify the behavior of a function..." -> "Te function na vartann ma badlav karvano ek rasto chhe..."
        *   "...without permanently changing its source code." -> "...tena source code ne sthayi rite badlavya vagar."
        *   "The `@` symbol is just a shortcut..." -> "Jyaare `@` chihn ek shortcut chhe..."
        *   "This helps keep your code DRY (Don't Repeat Yourself)." -> "Aa tamara code ne DRY (Don't Repeat Yourself) rakhvama madad kare chhe."
        *   "It separates the main logic from the extra features." -> "Te mukhya logic ne extra features thi alag kare chhe."

4.  **Structure the Answer:**

    *   **Section 1: What is a Decorator? (Decorator shu chhe?)**
        *   Start with a simple, high-level analogy. The "gift wrapping" analogy is good. The decorator is the wrapping paper; the function is the gift. You add something (wrapping) without changing the gift itself.
        *   Provide the technical definition: A function that takes a function as an argument, does something, and returns a function.
        *   Mention the `@` syntax as the common way to use it.

    *   **Section 2: Why Use Decorators? (Decorator kem use karva?)**
        *   List the key benefits using bullet points for clarity.
        *   **DRY (Don't Repeat Yourself):** This is a huge one. Explain how you can wrap common functionality (like logging) instead of writing it in every single function.
        *   **Separation of Concerns:** The main function does its job, and the decorator handles the cross-cutting concerns (like timing, logging, auth). This makes the code cleaner and easier to read.
        *   **Readability and Reusability:** Decorators make the code more declarative. `@log_calls` is more readable than a bunch of logging code inside the function. The decorator itself is reusable.

    *   **Section 3: A Simple Example (Ek saral udaharan)**
        *   **Goal:** Create a decorator that prints a message before and after a function runs.
        *   **Step 1: The Decorator Function.**
            *   Define `simple_decorator(func)`.
            *   Inside it, define the `wrapper()` function. This is the new function that will be returned.
            *   Inside `wrapper()`, put the "before" print statement.
            *   Call the original function: `func()`.
            *   Put the "after" print statement.
            *   Return the result of `func()`.
            *   Finally, return the `wrapper` from `simple_decorator`.
        *   **Step 2: Using the Decorator.**
            *   Define a simple function, e.g., `say_hello()`, that just prints "Hello!".
            *   Show the "long way" first: `say_hello = simple_decorator(say_hello)`. This helps understand what `@` does.
            *   Show the "shortcut way" with `@`:
                ```python
                @simple_decorator
                def say_hello():
                    print("Hello!")
                ```
        *   **Step 3: The Output.**
            *   Call `say_hello()` and show the exact output.
            *   `Before the function is called.`
            *   `Hello!`
            *   `After the function is called.`
        *   **Step 4: Explanation of the Example.**
            *   Explain that when Python sees `@simple_decorator`, it's equivalent to the long way.
            *   It calls `simple_decorator(say_hello)`, which returns the `wrapper` function.
            *   It then assigns this `wrapper` back to the name `say_hello`.
            *   So, when you call `say_hello()`, you're actually calling the `wrapper`, which does the extra stuff and then calls the original `say_hello` logic.

5.  **Review and Refine (Roman Gujarati):**
    *   Read through the entire answer in Roman Gujarati.
    *   Is the language natural? Is it clear?
    *   Are the technical terms explained well? (e.g., "wrapper function" -> "wrapper function, je navo function chhe").
    *   Is the example easy to follow?
    *   Check for any grammatical errors or awkward phrasing in Roman Gujarati. For example, ensure verb conjugations are correct (e.g., `chhe`, `kare chhe`, `chhe`).
    *   Make sure the tone is helpful and encouraging.
````

</details>

**Output:**

````
ચોક્કસ! Python ma decorator shu છે અને એનો ઉપયોગ કેમ કરવો, એના વિશે Roman Gujarati માં સરળ સમજૂતી અહીં છે.

---

### Decorator શું છે?

Decorator એક એવું function છે જે બીજા function ને argument તરીકે લે છે, એમાં કંઈક extra functionality add કરે છે, અને પછી એક નવું function return કરે છે.

આને તમે gift wrap કરવા જેવું સમજો. Gift એક function છે અને wrapping paper decorator છે. તમે gift ની અંદર કંઈ જ બદલ્યા વગર એને સુંદર રીતે wrap કરી શકો છો. Decorator પણ એવું જ કરે છે: તે function ના code ને બદલ્યા વગર એની વર્તણૂક માં ફેરફાર કરે છે.

Python માં decorator વાપરવા માટે `@` symbol નો ઉપયોગ થાય છે, જે syntax ને વધુ સરળ બનાવે છે.

### Decorator કેમ વાપરવા?

Decorators વાપરવાના ત્રણ મુખ્ય ફાયદા છે:

1.  **DRY (Don't Repeat Yourself):** જો તમારે ઘણી બધી functions માં એક જ જેવું કામ કરવાનું હોય, જેમ કે logging અથવા timing, તો દરેક function માં એ code લખવા કરતા એક જ decorator બનાવીને બધા પર apply કરી શકાય છે.
2.  **Separation of Concerns:** Decorator એ વધારાની features (જેમ કે security, logging) ને function ના મુખ્ય logic થી અલગ રાખે છે. એનાથી code વધુ clean અને વાંચવા માં સરળ બને છે.
3.  **Readability અને Reusability:** Decorator વાપરવાથી code વધુ સ્પષ્ટ લાગે છે. `@log_calls` જેવું decorator વાપરવાથી ખબર પડી જાય છે કે function શું કરી રહ્યું છે, અને એ decorator ને તમે ગમે ત્યાં ફરીથી વાપરી શકો છો.

---

### એક સરળ ઉદાહરણ

ચાલો એક decorator બનાવીએ જે function call થાય એના **પહેલા** અને **પછી** message print કરે.

#### Step 1: Decorator Function બનાવો

```python
# આ આપણો decorator છે
def simple_decorator(func):
    # આ wrapper function છે જે નવું function બનશે
    def wrapper():
        print("--- Decorator: Function call થાય એની પહેલા")
        
        # Original function ને call કરો
        func()
        
        print("--- Decorator: Function call થઈ ગયું")
    
    # Wrapper function ને return કરો
    return wrapper
```

#### Step 2: Decorator નો ઉપયોગ કરો

હવે એક સાદું function બનાવીએ અને એને આપણા decorator થી decorate કરીએ.

```python
# '@' symbol નો ઉપયોગ કરીને decorator apply કરો
@simple_decorator
def say_hello():
    print("Hello! World!")

# હવે આ function ને call કરો
say_hello()
```

#### Step 3: Output જુઓ

જ્યારે તમે `say_hello()` call કરશો, ત્યારે output કંઈક આવું દેખાશે:

```
--- Decorator: Function call થાય એની પહેલા
Hello! World!
--- Decorator: Function call થઈ ગયું
```

### આ ઉદાહરણ કેવી રીતે કામ કરે છે?

1.  જ્યારે Python `@simple_decorator` જુએ છે, ત્યારે તે `say_hello` function ને `simple_decorator` માં pass કરે છે.
2.  `simple_decorator` ની અંદર, `wrapper` function બને છે અને return થાય છે.
3.  Python હવે `say_hello` ના નામ ને આ નવા `wrapper` function સાથે જોડી દે છે.
4.  જ્યારે તમે `say_hello()` call કરો છો, ત્યારે તમે ખરેખર `wrapper` function ને call કરો છો.
5.  `wrapper` function પહેલા "પહેલાનો" message print કરે છે, પછી original `say_hello` function ને call કરે છે, અને છેલ્લે "પછીનો" message print કરે છે.

આ રીતે decorator મૂળ function ને બદલ્યા વગર એની ઉપર વધારાનું કામ કરી શકે છે.
````

### Kannada

**Prompt:** Python alli decorator andre enu mattu adanna hege use madtaare? Ondu simple example kodi. Uttara Roman Kannada alli kodi.

*2569 tok | 20.54s | 125.1 t/s | think: 6491 chars | finish: stop*

<details><summary>Thinking (6491 chars)</summary>

````
1.  **Deconstruct the User's Request:**
    *   **Core Topic:** Python decorators.
    *   **Specific Questions:**
        *   "What is a decorator?" (Concept definition)
        *   "How is it used?" (Practical application)
        *   "Give a simple example." (Code demonstration)
    *   **Language Constraint:** "Roman Kannada alli kodi." (Answer in Roman Kannada script). This is the most crucial and unique constraint.

2.  **Initial Brainstorming & Keyword Association (English):**
    *   **What is it?** Function, wrapper, higher-order function, metadata, `functools.wraps`, function as an argument, function as a return value.
    *   **How is it used?** `@` symbol, syntax sugar, modifying function behavior, adding functionality, logging, timing, authentication, caching.
    *   **Simple Example:** A function that prints "Before" and "After" a function call. A timer decorator. A simple logger.

3.  **Translate Concepts to Roman Kannada:** This is the tricky part. I need to find the right words and phrasing that are both accurate and natural-sounding in Roman Kannada.

    *   **Decorator:** The word "decorator" itself is often used, but I should provide a Kannada equivalent. "ಅಲಂಕಾರಿಕ" (Alankarak) is the literal translation. "ಅಲಂಕಾರ" (Alankara) is also good. I'll use "ಅಲಂಕಾರಿಕ" as it's more descriptive of the *thing* that decorates.
    *   **Function:** "ಕಾರ್ಯ" (Karya) or "ಫಂಕ್ಷನ್" (Function). "ಕಾರ್ಯ" is the pure Kannada word. "ಫಂಕ್ಷನ್" is the common loanword. I'll use "ಕಾರ್ಯ" for the main explanation and maybe "ಫಂಕ್ಷನ್" in the code context for clarity, as programmers often use the English term.
    *   **To decorate:** "ಅಲಂಕರಿಸಲು" (Alankarisalu).
    *   **Higher-order function:** "ಉನ್ನತ ಮಟ್ಟದ ಕಾರ್ಯ" (Uchchha mattadha karya). This is a direct translation.
    *   **Wrapper function:** "ಆವರಣ ಕಾರ್ಯ" (Aavaran karya) or "ಸುತ್ತಲಿನ ಕಾರ್ಯ" (Sutarin karya). "ಆವರಣ ಕಾರ್ಯ" is more technical and precise.
    *   **To add functionality:** "ಕಾರ್ಯಕ್ಷಮತೆಯನ್ನು ಸೇರಿಸಲು" (Karyakshamatheyannu sErisalu).
    *   **To modify behavior:** "ನಡವಳಿಕೆಯನ್ನು ಬದಲಾಯಿಸಲು" (Nadavalikeyannu badalisalu).
    *   **Syntax sugar:** "ಸಂಕ್ಷಿಪ್ತ ರೂಪ" (Sankshiptha roopa) or "ಸರಳ ರೂಪ" (Sarala roopa). "ಸಂಕ್ಷಿಪ್ತ ರೂಪ" is a good fit.
    *   **`@` symbol:** This is a symbol, so it doesn't need translation, but I need to explain what it does. "ಈ ಚಿಹ್ನೆಯನ್ನು ಬಳಸಿ" (Ee chihnadhannu use maadi).
    *   **Example:** "ಉದಾಹರಣೆ" (Udaharane).

4.  **Structure the Answer (in Roman Kannada):** I'll follow the user's request structure:
    *   **Part 1: What is a decorator? (ಅಲಂಕಾರಿಕ ಅಂದ್ರೆ ಏನು?)**
        *   Start with a simple, high-level definition. A decorator is a special kind of function.
        *   Explain its purpose: It takes another function as an argument, adds some new functionality, and then returns the modified function.
        *   Use an analogy. This is key for understanding. A good analogy is wrapping a gift. The gift is the original function. The wrapping paper, ribbon, and card are the decorator. You're not changing the gift itself, just how it's presented or what it comes with.
        *   Mention the technical term: "ಉನ್ನತ ಮಟ್ಟದ ಕಾರ್ಯ" (higher-order function).

    *   **Part 2: How is it used? (ಅಲಂಕಾರಿಕ ಹೇಗೆ ಬಳಸುತ್ತಾರೆ?)**
        *   Explain the two main ways:
            1.  Directly: `new_function = my_decorator(old_function)`
            2.  Using the `@` symbol (syntax sugar): `@my_decorator` placed above the function definition. Explain that this is just a cleaner, more common way to do the first method.
        *   List common use cases in simple terms:
            *   ಕಾರ್ಯದ ಮೊದಲು ಮತ್ತು ನಂತರ ಏನಾದರೂ ಮಾಡಲು (e.g., logging, timing).
            *   ದೋಷಗಳನ್ನು ಹಿಡಿಯಲು (e.g., error handling).
            *   ಬಳಕೆದಾರರ ಅನುಮತಿ ಪರೀಕ್ಷಿಸಲು (e.g., authentication).

    *   **Part 3: A Simple Example (ಒಂದು ಸರಳ ಉದಾಹರಣೆ).**
        *   Choose the simplest, most illustrative example: A decorator that prints messages before and after a function runs.
        *   **Step 1: The Decorator Function.**
            *   Define the decorator, let's call it `simple_decorator`.
            *   It takes one argument, which is the function to be decorated (`func`).
            *   Inside `simple_decorator`, define a `wrapper` function (or `inner_function`). This is the "ಆವರಣ ಕಾರ್ಯ" (wrapper function).
            *   The `wrapper` function will contain the new logic (e.g., `print("ಕಾರ್ಯ ಶುರು ಆಯ್ತು")`) and then call the original function (`func()`).
            *   After the call, it will contain the rest of the new logic (e.g., `print("ಕಾರ್ಯ ಮುಗಿಯಿತು")`).
            *   The `wrapper` function must `return` the result of `func()`.
            *   Finally, `simple_decorator` must `return` the `wrapper` function.
        *   **Step 2: The Original Function.**
            *   Define a simple function, e.g., `say_hello()`.
            *   This function just prints a message.
        *   **Step 3: Applying the Decorator.**
            *   Show the `@` syntax: `@simple_decorator` above `say_hello()`.
        *   **Step 4: Calling the Decorated Function.**
            *   Call `say_hello()`.
            *   Show the expected output, which will include the "before" and "after" messages from the decorator.

5.  **Review and Refine (Roman Kannada):**
    *   Read through the entire Roman Kannada text.
    *   Is the language natural? Does it flow well?
    *   Are the technical terms translated correctly and consistently? (e.g., consistently using "ಕಾರ್ಯ" for function, "ಅಲಂಕಾರಿಕ" for decorator).
    *   Is the explanation clear for someone who might not be a Python expert but knows the basics?
    *   The analogy of gift wrapping is good. Let's make sure that's explained clearly. "ನೀವು ಒಂದು ಉಡುಗೊರೆಯನ್ನು ನೀಡಿದಾಗ, ಅದನ್ನು ಸುಂದರವಾದ ಪೇಪರ್‌ನಲ್ಲಿ ಸುತ್ತಿ ನೀಡುತ್ತೀರಿ. ಆ ಪೇಪರ್ ಮತ್ತು ರಿಬ್ಬನ್ ಅಲಂಕಾರಿಕ ತರಹ. ಕಾರ್ಯವು ಉಡುಗೊರೆ, ಅಲಂಕಾರಿಕ ಪೇಪರ್." (When you give a gift, you wrap it in beautiful paper. The paper and ribbon are like a decorator. The function is the gift, the decorator is the wrapping paper.)
    *   Check the code example. Are the comments clear? Is the output explained? The code itself is in English, which is standard, but the surrounding explanation is in Roman Kannada. This is a good hybrid approach.
    *   Final check on the constraint: "Roman Kannada alli kodi." The entire response, including explanations and code comments, should be in Roman script. I'll make sure the code comments are also in Roman Kannada for full compliance.
````

</details>

**Output:**

````
ಖಂಡಿತ, Python-ನಲ್ಲಿ ಅಲಂಕಾರಿಕ ಅಂದ್ರೆ decorator ಬಗ್ಗೆ Roman Kannada-ದಲ್ಲಿ ವಿವರಣೆ ಇಲ್ಲಿದೆ.

---

### **ಅಲಂಕಾರಿಕ ಅಂದ್ರೆ ಏನು?**

Python-ನಲ್ಲಿ **ಅಲಂಕಾರಿಕ** (decorator) ಅಂದ್ರೆ ಒಂದು ವಿಶೇಷವಾದ ಕಾರ್ಯ (function). ಇದು ಇನ್ನೊಂದು ಕಾರ್ಯವನ್ನು (function) ತನ್ನಲ್ಲಿ ಸೇರಿಸಿಕೊಂಡು, ಅದಕ್ಕೆ ಹೊಸ ಗುಣಗಳನ್ನು ಅಥವಾ ಕಾರ್ಯಗಳನ್ನು ಸೇರಿಸುತ್ತದೆ.

ಅಂದ್ರೆ, ನಿಮ್ಮ ಹತ್ತಿರ ಒಂದು ಕಾರ್ಯ ಇದೆ ಅಂದುಕೊಳ್ಳಿ. ಅದಕ್ಕೆ ನೀವು ಕೆಲವು ಹೊಸ ಕೆಲಸಗಳನ್ನು ಸೇರಿಸಬೇಕು, ಆದ್ರೆ ಆ ಹಳೆಯ ಕಾರ್ಯದ ಮೂಲ ಕೋಡ್ ಅನ್ನು ಬದಲಾಯಿಸಬಾರದು ಅಂತ ಅಂದುಕೊಂಡರೆ, ಆಗ ನೀವು ಅಲಂಕಾರಿಕವನ್ನು ಬಳಸಬಹುದು.

ಒಂದು ಉದಾಹರಣೆ ನೋಡೋಣ: ನೀವು ಒಂದು ಉಡುಗೊರೆಯನ್ನು ನೀಡಿದಾಗ, ಅದನ್ನು ಸುಂದರವಾದ ಪೇಪರ್‌ನಲ್ಲಿ ಸುತ್ತಿ ನೀಡುತ್ತೀರಿ. ಆ ಪೇಪರ್ ಮತ್ತು ರಿಬ್ಬನ್ ಅಲಂಕಾರಿಕ ತರಹ. ಆ ಉಡುಗೊರೆ ಮೂಲ ಕಾರ್ಯ, ಪೇಪರ್ ಅಲಂಕಾರಿಕ. ಪೇಪರ್ ಉಡುಗೊರೆಯನ್ನು ಬದಲಾಯಿಸುವುದಿಲ್ಲ, ಆದ್ರೆ ಅದನ್ನು ನೋಡಲು ಚೆನ್ನಾಗಿ ಕಾಣುವಂತೆ ಮಾಡುತ್ತದೆ.

ಅಲಂಕಾರಿಕ ಕೂಡ ಹಾಗೆಯೇ. ಇದು ಮೂಲ ಕಾರ್ಯದ ನಡವಳಿಕೆಯನ್ನು ಬದಲಾಯಿಸದೆ, ಅದಕ್ಕೆ ಹೊಸ ಕೆಲಸಗಳನ್ನು ಸೇರಿಸುತ್ತದೆ.

### **ಅಲಂಕಾರಿಕವನ್ನು ಹೇಗೆ ಬಳಸುತ್ತಾರೆ?**

ಅಲಂಕಾರಿಕವನ್ನು ಬಳಸಲು ಎರಡು ಮುಖ್ಯ ದಾರಿಗಳಿವೆ:

1.  **ನೇರವಾಗಿ (Directly):** ಒಂದು ಕಾರ್ಯವನ್ನು ಇನ್ನೊಂದಕ್ಕೆ ಕಳುಹಿಸುವ ಮೂಲಕ.
    ```python
    ಹೊಸ_ಕಾರ್ಯ = ಹಳೆಯ_ಕಾರ್ಯದ_ಅಲಂಕಾರಿಕ(ಹಳೆಯ_ಕಾರ್ಯ)
    ```
2.  **ಚಿಹ್ನೆಯ ಮೂಲಕ (`@`):** ಇದು ಹೆಚ್ಚು ಸುಲಭವಾದ ಮತ್ತು ಬಳಸುವ ದಾರಿ. ಒಂದು ಕಾರ್ಯದ ಮೇಲೆ `@` ಚಿಹ್ನೆ ಮತ್ತು ಅಲಂಕಾರಿಕದ ಹೆಸರನ್ನು ಹಾಕಿದರೆ ಸಾಕು, ಆ ಕಾರ್ಯವು ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಅಲಂಕಾರಿಕದಿಂದ ಅಲಂಕರಿಸಲ್ಪಡುತ್ತದೆ.

**ಅಲಂಕಾರಿಕದ ಉಪಯೋಗಗಳು:**
*   **ಸಮಯವನ್ನು ಅಳೆಯಲು:** ಒಂದು ಕಾರ್ಯ ಎಷ್ಟು ಸಮಯ ತೆಗೆದುಕೊಳ್ಳುತ್ತದೆ ಅಂತ ತಿಳಿಯಲು.
*   **ದಾಖಲೆ ಮಾಡಲು (Logging):** ಕಾರ್ಯ ಯಾವಾಗ ಶುರುವಾಯಿತು, ಯಾವಾಗ ಮುಗಿಯಿತು ಅಂತ ಬರೆಯಲು.
*   **ದೋಷಗಳನ್ನು ಹಿಡಿಯಲು:** ಕಾರ್ಯದಲ್ಲಿ ಏನಾದರೂ ತಪ್ಪಾದಾಗ ಅದನ್ನು ಸರಿಯಾಗಿ ನಿಭಾಯಿಸಲು.
*   **ಬಳಕೆದಾರರ ಅನುಮತಿ ಪರೀಕ್ಷಿಸಲು:** ಒಬ್ಬ ಬಳಕೆದಾರನಿಗೆ ಆ ಕಾರ್ಯವನ್ನು ಮಾಡಲು ಹಕ್ಕಿದೆಯೇ ಎಂದು ಪರೀಕ್ಷಿಸಲು.

---

### **ಒಂದು ಸರಳ ಉದಾಹರಣೆ**

ಇಲ್ಲಿ ನಾವು ಒಂದು ಸರಳ ಅಲಂಕಾರಿಕವನ್ನು ಮಾಡೋಣ. ಈ ಅಲಂಕಾರಿಕವು ಒಂದು ಕಾರ್ಯವನ್ನು ಕರೆಯುವ ಮೊದಲು "ಕಾರ್ಯ ಶುರು ಆಯ್ತು" ಮತ್ತು ಕಾರ್ಯ ಮುಗಿದ ನಂತರ "ಕಾರ್ಯ ಮುಗಿಯಿತು" ಅಂತ ಹೇಳುತ್ತದೆ.

#### **ಹಂತ 1: ಅಲಂಕಾರಿಕ ಕಾರ್ಯವನ್ನು ಬರೆಯುವುದು**

```python
# ಇದು ನಮ್ಮ ಅಲಂಕಾರಿಕ ಕಾರ್ಯ
def simple_decorator(func):
    # ಈ ಒಳಗಿನ ಕಾರ್ಯವು ಮೂಲ ಕಾರ್ಯದ ಜಾಗದಲ್ಲಿ ಕೆಲಸ ಮಾಡುತ್ತದೆ
    def wrapper():
        print("ಕಾರ್ಯ ಶುರು ಆಯ್ತು")
        # ಈಗ ಮೂಲ ಕಾರ್ಯವನ್ನು ಕರೆಯಿರಿ
        func()
        print("ಕಾರ್ಯ ಮುಗಿಯಿತು")
    return wrapper
```

#### **ಹಂತ 2: ಅಲಂಕಾರಿಕವನ್ನು ಬಳಸುವುದು**

ಈಗ ನಾವು ನಮ್ಮ ಅಲಂಕಾರಿಕವನ್ನು ಒಂದು ಕಾರ್ಯಕ್ಕೆ ಬಳಸೋಣ.

```python
# ನಮ್ಮ ಅಲಂಕಾರಿಕವನ್ನು ಬಳಸಿ
@simple_decorator
def say_hello():
    print("ನಮಸ್ಕಾರ, ಪ್ರಪಂಚ!")

# ಈಗ ಈ ಕಾರ್ಯವನ್ನು ಕರೆದಾಗ, ಅಲಂಕಾರಿಕದ ಮಾತುಗಳು ಮೊದಲು ಬರುತ್ತವೆ
say_hello()
```

#### **ಹಂತ 3: ಫಲಿತಾಂಶ**

ನಾವು `say_hello()` ಎಂದು ಕರೆದಾಗ, ಈ ಕೆಳಗಿನ ಫಲಿತಾಂಶ ಬರುತ್ತದೆ:

```
ಕಾರ್ಯ ಶುರು ಆಯ್ತು
ನಮಸ್ಕಾರ, ಪ್ರಪಂಚ!
ಕಾರ್ಯ ಮುಗಿಯಿತು
```

ಇಲ್ಲಿ ನೋಡಿ, `say_hello()` ಕಾರ್ಯದ ಒಳಗೆ ನಾವು "ನಮಸ್ಕಾರ" ಎಂದು ಬರೆದಿದ್ದರೂ, ಹೊರಗಿನಿಂದ "ಕಾರ್ಯ ಶುರು ಆಯ್ತು" ಮತ್ತು "ಕಾರ್ಯ ಮುಗಿಯಿತು" ಎಂಬ ಮಾತುಗಳು ಹೇಗೆ ಬಂದವು ಅಂತ. ಇದು ಅಲಂಕಾರಿಕದ ಕೆಲಸ. ಅಂದ್ರೆ ನಾವು ಮೂಲ ಕಾರ್ಯವನ್ನು ಬದಲಾಯಿಸದೆಯೇ ಅದಕ್ಕೆ ಹೊಸ ಕೆಲಸಗಳನ್ನು ಸೇರಿಸಿದ್ದೇವೆ.
````

### Malayalam

**Prompt:** Python il decorator entha anu, athu engane use cheyyum? Oru simple example tharumo. Maaripadi Roman Malayalam il thanne ezhuthuka.

*842 tok | 7.38s | 114.1 t/s | think: 880 chars | finish: stop*

<details><summary>Thinking (880 chars)</summary>

````
The user is asking about Python decorators in Romanised Malayalam. I need to explain what decorators are and how they work, provide a simple example, and write the entire response in Romanised Malayalam.

Let me structure my response:

1. Introduction to decorators - what they are and why they're useful
2. How decorators work - the concept of functions as first-class objects
3. Basic syntax of decorators
4. A simple example with explanation
5. Maybe a slightly more complex example

I'll write everything in Romanised Malayalam as requested.

Let me draft the response:

"Python il decorator entha anu, athu engane use cheyyum? Oru simple example tharumo. Maaripadi Roman Malayalam il thanne ezhuthu."

Translation: "What is a decorator in Python and how is it used? Give a simple example. Write in Romanised Malayalam."

Now, let me write the response in Romanised Malayalam:
````

</details>

**Output:**

````
Python-il Decorator enna oru powerful feature undu. Oru function-ne modify cheyyunna oru function aanu decorator. Ithu function-nte code-il maattam varuthathe thanne athinte behavior maattaan sahaayikkum.

### Decorator enthaanu?

Decorator enna oru special function aanu. Ithinu mattoru function-ne argument aayi edukkaanum, puthiya behavior add cheythu aa function-ne thirike nalkaanum kazhiyum. Ithu "function as first-class objects" enna concept-ne base cheythittullathaanu.

### Decorator engane use cheyyum?

1. Aadyam oru decorator function create cheyyuka
2. Athu oru function-lekk apply cheyyuka
3. Aa function call cheyyumpool decorator-nte logic execute aakum

### Simple Example:

```python
# Decorator function
def my_decorator(func):
    def wrapper():
        print("Before the function call")
        func()
        print("After the function call")
    return wrapper

# Function with decorator
@my_decorator
def say_hello():
    print("Hello, World!")

# Call the function
say_hello()
```

**Output:**
```
Before the function call
Hello, World!
After the function call
```

### Explanation:

1. `my_decorator` enna function `func` enna oru argument sweekarikkunnu
2. `wrapper` enna function-nullil original function-ne call cheyyunnathinu munpum sheshavum extra code add cheythittundu
3. `@my_decorator` enna syntax vazhi `say_hello` function-lekk decorator apply cheyyunnu
4. `say_hello()` call cheyyumpool, athu nerittu execute aakunnathinu pakaram `wrapper` function aanu execute aakunnath

### Advanced Example:

```python
import time

def timer_decorator(func):
    def wrapper(*args, **kwargs):
        start_time = time.time()
        result = func(*args, **kwargs)
        end_time = time.time()
        print(f"{func.__name__} executed in {end_time - start_time:.4f} seconds")
        return result
    return wrapper

@timer_decorator
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

# Test the decorated function
print(fibonacci(10))
```

Decorators upayogikkunnath vazhi code-nte readability koodukayum, repetitive code kurayukayum cheyyum. Logging, authentication, timing thudangiya kaaryangalkk ithu valare useful aanu.
````

### Marathi

**Prompt:** Python madhye decorator mhanje kay aani tyacha vapar kasa kartat? Ek simple example dyaa. Uttar Roman Marathi madhe dyaa.

*2402 tok | 19.3s | 124.5 t/s | think: 5999 chars | finish: stop*

<details><summary>Thinking (5999 chars)</summary>

````
1.  **Deconstruct the User's Request:**
    *   **Core Topic:** Python Decorators.
    *   **Key Questions:**
        *   "What is a decorator in Python?" (Definition)
        *   "How do you use it?" (Mechanism/Syntax)
        *   "Provide a simple example." (Practical demonstration)
    *   **Language Constraint:** "Provide the answer in Romanised Marathi." (This is the most important constraint. I need to translate all the technical concepts accurately and naturally into Marathi, using Roman script.)

2.  **Initial Brainstorming & Keyword Association (English):**
    *   **What is it?** Function wrapper, higher-order function, modifies function, adds functionality, metadata, clean code, DRY (Don't Repeat Yourself).
    *   **How to use?** `@` symbol, function definition, passing a function as an argument, returning a function.
    *   **Simple Example:** `logging`, `timing`, `authentication`, `uppercase`. The `uppercase` or `timing` example is the most classic and easy to understand. Let's go with a simple logging/timing decorator. A "timer" is a great example because it clearly shows something *before* and *after* the original function's logic.

3.  **Translate Concepts to Romanised Marathi:** This is the tricky part. I need to find the right words or create clear, understandable phrases.

    *   **Decorator:** "डेकोरेटर" (Dekoretar) is a direct and common transliteration. It's the standard term used in the Marathi Python community.
    *   **Function:** "फंक्शन" (Funshen).
    *   **Higher-Order Function:** "हायर-ऑर्डर फंक्शन" (Haier-order funshen). This is also a standard transliteration. I should explain what it means: a function that takes another function as an argument or returns a function.
    *   **Wrapper Function:** "रॅपर फंक्शन" (Rapper funshen). Again, a standard term.
    *   **Modify/Enhance/Add Functionality:** "सुधारणे," "नवीन कार्यक्षमता जोडणे," "वाढवणे." I'll use a mix of these for variety and clarity. "नवीन कार्यक्षमता जोडणे" is very descriptive.
    *   **Syntax:** "सिंटॅक्स."
    *   **The `@` symbol:** "ॲट (@) चिन्ह."
    *   **Pass a function as an argument:** "दुसरे फंक्शन एक आर्ग्युमेंट म्हणून पाठवणे."
    *   **Return a function:** "फंक्शन परत करणे."
    *   **Example:** "उदाहरण."
    *   **Timer:** "टायमर" (Timer).
    *   **Print:** "प्रिंट करणे."
    *   **Time:** "वेळ."

4.  **Structure the Answer:** I'll follow the user's question structure.

    *   **Part 1: What is a Decorator? (डेकोरेटर म्हणजे काय?)**
        *   Start with a simple, high-level definition. "A decorator is a special function..."
        *   Explain its purpose: "...that takes another function as an argument, adds some functionality, and then returns the modified function."
        *   Introduce the concept of a "wrapper function" (रॅपर फंक्शन). Explain that the decorator *is* a wrapper.
        *   Mention the benefit: "This helps you keep your code clean and organized (स्वच्छ आणि सुटसुटीत ठेवण्यास मदत करते)." This is a key selling point of decorators.
        *   Use the analogy: "Think of it like wrapping a gift (भेटवस्तू गुंडाळणे). The original function is the gift, and the decorator is the wrapping paper. The wrapping adds to the gift's appearance without changing the gift itself." This analogy is very effective for learners.

    *   **Part 2: How to Use It? (त्याचा वापर कसा करावा?)**
        *   Explain the two main ways:
            1.  **Directly calling it:** `my_new_function = my_decorator(my_old_function)`
            2.  **Using the `@` syntax (the easier way):** `@my_decorator` above the function definition.
        *   Emphasize that the `@` syntax is more common and readable. "हे अधिक सोपे आणि वाचनीय आहे."

    *   **Part 3: Simple Example (एक सोपे उदाहरण).**
        *   Choose the timer example. It's perfect.
        *   **Step 1: The Decorator Function.**
            *   Name it something clear, like `timer_decorator`.
            *   Inside it, define the `wrapper` function. This is the core logic.
            *   Import the `time` module.
            *   Inside the `wrapper`:
                *   Print "Starting the timer..."
                *   Record `start_time`.
                *   Call the original function (`func()`). This is crucial.
                *   Record `end_time`.
                *   Calculate and print the elapsed time.
                *   `return` the result of the original function call.
            *   The `timer_decorator` must `return` the `wrapper` function.
        *   **Step 2: Applying the Decorator.**
            *   Create a simple function to be decorated, like `say_hello`. It should take some time, maybe with a `time.sleep()`.
            *   Add the `@timer_decorator` syntax right above its definition. This is the key demonstration.
        *   **Step 3: Calling the Decorated Function.**
            *   Show how to call `say_hello()`.
            *   Show the expected output, which will include the "Starting..." and "Function finished..." messages, demonstrating that the decorator's logic ran.

5.  **Review and Refine (Marathi Language Check):**
    *   Read through the entire Romanised Marathi text.
    *   Is the language natural? Does it flow well?
    *   Are the technical terms translated or transliterated correctly and consistently? (e.g., using "फंक्शन" consistently).
    *   Is the explanation clear for someone who might be new to programming concepts? The analogy helps a lot here.
    *   The code comments should also be in Marathi or clear English. I'll stick to English for the code itself, as that's the standard, but the comments can be bilingual or just clear. Let's make the comments in English but the surrounding text in Marathi. This is a common and practical approach.
    *   Final check on the user's request: "What," "How," "Example," "Romanised Marathi." All points are covered. The structure is logical. The example is simple and effective. The explanation is clear. The language constraint is met. The answer is ready.
````

</details>

**Output:**

````
नक्कीच! Python मध्ये decorator म्हणजे काय आणि त्याचा वापर कसा करायचा, हे Romanised Marathi मध्ये सविस्तर समजून घेऊया.

### Decorator म्हणजे काय? (What is a Decorator?)

**Decorator** (डेकोरेटर) म्हणजे एक खास प्रकारचे function आहे, जे दुसऱ्या function ला एक argument म्हणून घेते, त्यामध्ये काही नवीन functionality जोडते आणि मग ते सुधारित function परत (return) करते.

सोप्या भाषेत सांगायचे तर, हे एका gift ला wrapping paper लावण्यासारखे आहे. मूळ function म्हणजे ते gift आहे आणि decorator म्हणजे ते wrapping paper आहे. Wrapping मुळे gift चा मूळ स्वभाव न बदलता त्याची शोभा वाढते.

Python मध्ये decorator वापरण्याचा मुख्य फायदा म्हणजे तुमचा code स्वच्छ, सुटसुटीत आणि reusable (पुन्हा वापरण्यायोग्य) राहतो. तुम्हाला वारंवार सारखाच code लिहिण्याची गरज पडत नाही.

### त्याचा वापर कसा करावा? (How to Use It?)

Decorator वापरण्याचे दोन मुख्य मार्ग आहेत:

1.  **Directly function call करून:** तुम्ही decorator ला मूळ function पाठवू शकता आणि नवीन function एका variable मध्ये store करू शकता.
    ```python
    my_new_function = my_decorator(my_old_function)
    ```

2.  **`@` चिन्ह वापरून (सोपा आणि लोकप्रिय मार्ग):** तुम्ही ज्या function मध्ये बदल करायचा आहे, त्याच्या definition च्या वर `@decorator_name` असे लिहू शकता. हे Python ला सांगते की, "हे function run करण्यापूर्वी आधी decorator apply कर."

### एक सोपे उदाहरण (Simple Example)

चला, एक simple decorator तयार करूया जो function किती वेळ घेते हे मोजेल.

#### Step 1: Decorator Function तयार करा

```python
import time

# हे आपला decorator आहे
def timer_decorator(func):
    # हे "wrapper" function आहे
    def wrapper():
        print("Timer started...")
        start_time = time.time()
        
        # मूळ function run करा
        func()
        
        end_time = time.time()
        print(f"Timer finished! Total time taken: {end_time - start_time:.4f} seconds")
    
    return wrapper
```

**समजणी:**
*   `timer_decorator(func)`: हे एक function आहे जे दुसऱ्या function ला (`func`) argument म्हणून घेते.
*   `wrapper()`: हे एक inner function आहे. येथे आपण आपला नवीन logic (timer सुरू करणे, मूळ function चालवणे, आणि वेळ मोजणे) लिहिला आहे.
*   `return wrapper`: Decorator ने मूळ function ऐवजी हे नवीन `wrapper` function परत केले आहे.

#### Step 2: Decorator Apply करा

आता आपण हे `timer_decorator` एका साध्या function ला लावूया.

```python
@timer_decorator
def say_hello():
    print("Hello! My name is Alex.")
    time.sleep(2) # 2 सेकंदांचा उशीर
    print("Nice to meet you!")

# आता आपण हे function call करूया
say_hello()
```

#### Step 3: Output पहा

जेव्हा तुम्ही `say_hello()` call कराल, तेव्हा तुम्हाला खालील output मिळेल:

```
Timer started...
Hello! My name is Alex.
Nice to meet you!
Timer finished! Total time taken: 2.0012 seconds
```

**येथे काय झाले?**
*   Python ने `say_hello` function पाहिल्यावर त्याच्या वर `@timer_decorator` पाहिले.
*   त्यामुळे त्याने `say_hello` ऐवजी `timer_decorator(say_hello)` call केले, जे `wrapper` function परत करते.
*   जेव्हा तुम्ही `say_hello()` call केले, तेव्हा प्रत्यक्षात `wrapper()` function execute झाले.
*   `wrapper` मध्ये आपण timer सुरू केला, `say_hello()` मधील मूळ code चालवला आणि शेवटी वेळ मोजून print केली.

यावरून समजते की decorator ने `say_hello` function ला न बदलता त्यामध्ये नवीन functionality (timer) जोडली आहे.
````

### Odia

**Prompt:** Python re decorator kana au ethar use kemiti karanti? Gote simple example dei bujhao. Uttar Roman Odia re diantu.

*1152 tok | 9.71s | 118.6 t/s | think: 3227 chars | finish: stop*

<details><summary>Thinking (3227 chars)</summary>

````
The user is asking about decorators in Python, with an example, and wants the response in Romanised Odia. Let me explain decorators in Python and provide a simple example.

## What are decorators in Python?

In Python, a decorator is a design pattern that allows a programmer to modify the behavior of a function or class without permanently changing its source code. Decorators are essentially functions that take another function as an argument, add some functionality, and then return the modified function.

## How to use decorators?

1. Define a decorator function that takes a function as an argument
2. Inside the decorator, define a wrapper function that adds the desired functionality
3. Call the original function inside the wrapper
4. Return the wrapper function
5. Apply the decorator to the target function using the `@` symbol

## Simple Example

Let's create a simple decorator that adds logging functionality to a function:

```python
# Define the decorator function
def simple_logger(func):
    def wrapper():
        print(f"Calling function: {func.__name__}")
        result = func()
        print(f"Function {func.__name__} executed")
        return result
    return wrapper

# Apply the decorator to a function
@simple_logger
def say_hello():
    print("Hello, World!")

# Call the decorated function
say_hello()
```

When we run this code, the output will be:
```
Calling function: say_hello
Hello, World!
Function say_hello executed
```

This shows that the decorator added logging functionality before and after the original function executed.

Let me now translate this explanation into Romanised Odia.

## Romanised Odia Translation

Python re decorator kana?

Python re decorator eka design pattern jaha programmer-ku kaunasi function kimba class-ra source code-ku sthayi bhabare change nakari ta'ra behavior modify karibaku allow kare. Decorators mukhyatah emiti function jaha anya eka function-ku argument bhabare nie, kichi functionality add kare, ebang ta'pare modified function-ku return kare.

Decorator kemiti use karibe?

1. Eka decorator function define karantu jaha eka function-ku argument bhabare nie
2. Decorator bhitare, eka wrapper function define karantu jaha desired functionality add kare
3. Wrapper bhitare original function-ku call karantu
4. Wrapper function-ku return karantu
5. `@` symbol use kari target function-re decorator apply karantu

Eka simple example:

```python
# Decorator function define karantu
def simple_logger(func):
    def wrapper():
        print(f"Calling function: {func.__name__}")
        result = func()
        print(f"Function {func.__name__} executed")
        return result
    return wrapper

# Eka function-re decorator apply karantu
@simple_logger
def say_hello():
    print("Hello, World!")

# Decorated function-ku call karantu
say_hello()
```

Jetebele ame ehi code run karibu, output emiti heba:
```
Calling function: say_hello
Hello, World!
Function say_hello executed
```

Eha darshae je decorator original function execute heba purbaru ebang pare logging functionality add karichi.

I think this is a good explanation of decorators in Python with a simple example, translated into Romanised Odia. Let me provide this as the final answer.
````

</details>

**Output:**

````
# Python re Decorators

Python re decorator eka special function jaha anya function-ku argument bhabare nie, taku modify kare ebang enhanced function-tiku return kare. Eha apananku original function-ra source code change nakari sethire functionality add karibaku allow kare.

## Decorators kemiti use karibe?

1. Eka decorator function define karantu jaha eka function-ku parameter bhabare nie
2. Decorator bhitare, eka wrapper function define karantu
3. Wrapper function-re, original function-ku call kariba purbaru functionality add karantu
4. Original function-ku call karantu ebang ta'pare pare functionality add karantu
5. Wrapper function-ku return karantu
6. Target function-re decorator apply kariba paine `@` symbol use karantu

## Simple Example

```python
# Decorator define karantu
def simple_decorator(func):
    def wrapper():
        print("Before function call")
        func()
        print("After function call")
    return wrapper

# Decorator apply karantu
@simple_decorator
def say_hello():
    print("Hello, World!")

# Function call karantu
say_hello()
```

Output:
```
Before function call
Hello, World!
After function call
```

Ehi example-re, `simple_decorator` function-ti `say_hello` function-ra behavior modify karuchi. Eha original function execute heba purbaru ebang pare messages add karuchi. `@simple_decorator` syntax-ti `say_hello = simple_decorator(say_hello)` sahita samana.

Decorators mukhyatah logging, timing, authentication, ebang error handling paine use karajae.
````

### Punjabi

**Prompt:** Python vich decorator ki hunda hai te isda use ki tarike naal karde haan? Ik simple example de ke samjhao. Jawab Roman Punjabi vich deo.

*2666 tok | 21.28s | 125.3 t/s | think: 6810 chars | finish: stop*

<details><summary>Thinking (6810 chars)</summary>

````
1.  **Deconstruct the User's Request:**
    *   **Core Topic:** Python decorators.
    *   **Key Questions:**
        *   What is a decorator in Python? (Definition)
        *   How is it used? (Application/Purpose)
    *   **Required Format:**
        *   Provide a simple example.
        *   The entire response must be in Romanised Punjabi.

2.  **Initial Brainstorming & Keyword Association (English):**
    *   **What is it?**
        *   A function that takes another function as an argument.
        *   It wraps another function.
        *   It extends the behavior of a function without modifying its source code.
        *   Syntactic sugar (`@decorator_name`).
        *   Higher-order function.
        *   Metaprogramming.
    *   **How is it used?**
        *   Logging.
        *   Timing execution.
        *   Access control (authentication/authorization).
        *   Caching/Memoization.
        *   Input validation.
        *   Registering functions (e.g., in web frameworks).
    *   **Simple Example:**
        *   A "timer" decorator is a classic. It's easy to understand: you wrap a function, and it prints how long the function took to run.
        *   A "logging" decorator is also good. It prints a message before and after the function runs.
        *   Let's go with a simple "logging" or "message" decorator. It's the most straightforward. Something like `print("Something is happening before the function is called.")`.

3.  **Structuring the Answer (in English first, then translate):**

    *   **Section 1: What is a Decorator? (What hai?)**
        *   Start with a simple, high-level definition. "A decorator is a special kind of function."
        *   Explain its core purpose: it takes another function as input, adds some functionality, and then returns the modified function.
        *   Emphasize the key benefit: you can change or enhance a function's behavior *without* changing the function's code itself. This is the "why it's useful" part.
        *   Mention the "syntactic sugar" part: the `@decorator_name` syntax. Explain that `my_function = decorator_name(my_function)` is what `@decorator_name` does behind the scenes. This is crucial for understanding.

    *   **Section 2: How is it Used? (Isda Use ki tarike naal karde haan?)**
        *   List the common use cases brainstormed earlier.
        *   Use bullet points for clarity.
        *   Examples: Logging, Timing, Authentication, Caching.
        *   For each, give a one-sentence explanation. E.g., "Timing: To measure how long a function takes to execute."

    *   **Section 3: A Simple Example (Ikk Simple Example).**
        *   This needs to be very clear and well-commented.
        *   **Step 1: The Decorator Function.**
            *   Define a function, let's call it `simple_decorator`.
            *   It needs to accept a function as an argument. Let's call the parameter `func`.
            *   Inside `simple_decorator`, define a *new* function, often called `wrapper` or `inner_function`. This wrapper will contain the new logic.
            *   The wrapper function should accept `*args` and `**kwargs` to be generic and pass along any arguments to the original function.
            *   Inside the wrapper, print the "before" message.
            *   Call the original function (`func(*args, **kwargs)`) and store its result.
            *   Print the "after" message.
            *   Return the result of the original function call.
            *   Finally, the `simple_decorator` function must `return` this `wrapper` function.
        *   **Step 2: The Original Function.**
            *   Define a simple function, e.g., `say_hello`.
            *   It should just print a message.
        *   **Step 3: Applying the Decorator.**
            *   Show the `@` syntax: `@simple_decorator`.
            *   Place it directly above the `say_hello` function definition.
        *   **Step 4: Calling the Decorated Function.**
            *   Show the call: `say_hello()`.
        *   **Step 5: Show the Expected Output.**
            *   This is critical for the user to see what's happening.
            *   `Something is happening before the function is called.`
            *   `Hello!`
            *   `Something is happening after the function is called.`
        *   **Step 6: Explain the Output.**
            *   Walk through what happened: `say_hello` was decorated. When `say_hello()` was called, it was actually the `wrapper` function from the decorator that ran. The wrapper printed the "before" message, then called the original `say_hello`, which printed "Hello!", and finally the wrapper printed the "after" message.

4.  **Translating to Romanised Punjabi:**

    *   Now, I'll go through the structured English text and translate it, keeping the technical terms in English where appropriate (e.g., "decorator," "function," "argument," "syntax") but using Romanised Punjabi for the explanatory text. This is a common and effective practice.
    *   **"What is a Decorator?"** -> **"Decorator ki hai?"**
    *   "A special kind of function" -> "Ik khaas tarah da function"
    *   "takes another function as an argument" -> "duje function nu argument de roop vich lainda hai"
    *   "adds some functionality" -> "kujh functionality add karda hai"
    *   "without modifying its source code" -> "isde source code nu badle bina"
    *   "syntactic sugar" -> "syntactic sugar" (keep the English term, it's a standard concept)
    *   "behind the scenes" -> "piche"
    *   **"How is it used?"** -> **"Isda use ki tarike naal karde haan?"**
    *   "Logging" -> "Logging" (keep)
    *   "Timing" -> "Timing" (keep)
    *   "Authentication" -> "Authentication" (keep)
    *   "Caching" -> "Caching" (keep)
    *   **"A Simple Example"** -> **"Ikk Simple Example"**
    *   Translate the code comments and the surrounding text.
    *   "This is our decorator" -> "Eh saara decorator hai"
    *   "This is the original function" -> "Eh original function hai"
    *   "Now, let's use the decorator" -> "Hun, decorator use karde haan"
    *   "When we call this function..." -> "Jislai asein is function nu call karde haan..."
    *   "Expected Output" -> "Expected Output"
    *   "Explanation" -> "Explanation"

5.  **Final Review:**
    *   Read through the complete Romanised Punjabi answer.
    *   Does it flow well?
    *   Is the technical explanation clear despite the language?
    *   Is the example simple enough for a beginner?
    *   Does it directly answer all parts of the user's question? (What, How, Example, Romanised Punjabi). Yes.
    *   The structure is logical: Definition -> Use Cases -> Concrete Example -> Explanation. This is a good teaching progression. The translation is accurate and maintains the technical meaning. The response is ready.
````

</details>

**Output:**

````
Bilkul, ithe decorator ki hai, eh kiwein use hunda hai, ate ikk simple example Romanised Punjabi vich ditta gea hai.

### Decorator ki hai?

Decorator ikk khaas tarah da function hai jo dooje function nu ikk argument de roop vich lainda hai, os vich kujh functionality add karda hai, ate pher modified function nu waapas kar dinda hai.

Saukhe shabdaan vich, eh ikk wrapper waang hai jo tusi kise function utte paunde ho taan jo osde source code nu badle bina osde behavior nu wadhaya ja sake.

Isda main point eh hai ke tusi function de code nu chhede bina os vich nawiyaan features (jiwein logging, timing, etc.) add kar sakde ho.

### Isda use ki tarike naal karde haan?

Decorators bahut useful hunde han. Kujh common use cases eh han:

*   **Logging:** Function kadon call hoya ate ki result aaya, isnu log karna.
*   **Timing:** Eh check karna ke function nu execute hon vich kinna time laggya.
*   **Authentication/Authorization:** Function run karan toh pehla check karna ke user kol permission hai ja nahi.
*   **Caching/Memoization:** Function da result store karna taan jo agge waali call te same result lai dobara compute na karna pawe.
*   **Input Validation:** Function run hon toh pehla check karna ke inputs valid han ja nahi.

---

### Ikk Simple Example

Dekhde haan ke ikk simple decorator kiwein kamm karda hai. Ithe ikk decorator banawange jo function call hon toh pehla ate baad vich ikk message print karega.

#### Step 1: Decorator Function banao

Pehla, ikk function `simple_decorator` define karde haan. Eh function dooje function nu argument de roop vich lawega.

```python
# Eh saara decorator hai
def simple_decorator(func):
    # Wrapper function jo saari logic rakkhega
    def wrapper():
        print("Something is happening before the function is called.")
        func()  # Original function nu call karna
        print("Something is happening after the function is called.")
    return wrapper
```

#### Step 2: Original Function banao

Hun, ikk simple function `say_hello` banawange jisnu asi decorate karna chaunde haan.

```python
# Eh original function hai
def say_hello():
    print("Hello!")
```

#### Step 3: Decorator apply karo

Hun, `@` symbol use karke `say_hello` function utte decorator apply karde haan.

```python
@simple_decorator
def say_hello():
    print("Hello!")
```

#### Step 4: Decorated Function nu call karo

Hun, jadon asi `say_hello()` call karange, taan asal vich decorator da wrapper function run howega.

```python
# Decorator apply karan toh baad function call karna
say_hello()
```

#### Expected Output

Jadon tusi code run karoge, taan output eh awega:

```
Something is happening before the function is called.
Hello!
Something is happening after the function is called.
```

#### Explanation

1. Jadon Python `@simple_decorator` dekhda hai, taan eh `say_hello` nu directly define nahi karda.
2. Isdi bajaaye, eh `say_hello` function nu `simple_decorator` kol bhej dinda hai.
3. `simple_decorator` de andar, original `say_hello` nu `wrapper` function vich pass kita janda hai.
4. Pher `simple_decorator` is `wrapper` function nu waapas kar dinda hai.
5. Python is waapas kite hoye `wrapper` nu `say_hello` de naam naal assign kar dinda hai.
6. Is lai, jadon tusi `say_hello()` call karde ho, taan `wrapper` function execute hunda hai, jo "before" message print karda hai, pher original `say_hello` nu call karda hai, ate akhir vich "after" message print karda hai.
````

### Tamil

**Prompt:** Python la decorator enna, adha eppadi use pannuvom? Oru simple example kudunga. Badhil Roman Tamil la ezhudhunga.

*2865 tok | 22.83s | 125.5 t/s | think: 8630 chars | finish: stop*

<details><summary>Thinking (8630 chars)</summary>

````
1.  **Deconstruct the User's Request:**
    *   **Core Topic:** Python decorator.
    *   **Required Elements:**
        *   What is a decorator? (Definition/Concept)
        *   How to use it? (Mechanism/Syntax)
        *   A simple example.
        *   **Crucial Constraint:** Answer in Roman Tamil.

2.  **Initial Brainstorming & Keyword Association (in English first, then translate):**
    *   **What is it?** A function that takes another function as an argument, adds some functionality, and returns another function. It's a design pattern. It's like a wrapper. Keywords: `function`, `argument`, `return`, `wrapper`, `enhancement`, `modification`.
    *   **How to use it?**
        *   Define a decorator function.
        *   Inside the decorator, define a `wrapper` function.
        *   The `wrapper` calls the original function.
        *   The decorator returns the `wrapper`.
        *   Use the `@decorator_name` syntax above the function you want to decorate.
        *   Or, use `function_name = decorator_name(function_name)`.
    *   **Simple Example:**
        *   Something easy to understand.
        *   A "timer" decorator is a classic. It shows the "before" and "after" execution.
        *   A "logging" decorator is also good. It prints a message before and after the function runs.
        *   Let's go with a simple logging/greeting decorator. It's very clear.
        *   Example structure:
            ```python
            def my_decorator(func):
                def wrapper():
                    print("Before the function is called.")
                    func()
                    print("After the function is called.")
                return wrapper

            @my_decorator
            def say_hello():
                print("Hello!")

            say_hello()
            ```
    *   **Roman Tamil Translation Strategy:**
        *   This is the main challenge. I need to translate technical concepts accurately and naturally into Roman Tamil.
        *   **Decorator:** "Decorator" is a loanword. It's common in the Tamil programming community. I should use it.
        *   **Function:** "Function" is also a loanword. Use it.
        *   **Argument:** "Argument" is a loanword. Use it.
        *   **Wrapper:** "Wrapper" is a loanword. Use it.
        *   **Syntax:** "Syntax" is a loanword. Use it.
        *   **Example:** "Example" is a loanword. Use it.
        *   **Concept:** "Concept" -> "கருத்து" (Karuththu).
        *   **Enhancement/Modification:** "Enhancement" -> "மேம்படுத்துதல்" (Mempaduththal), "Modification" -> "மாற்றம்" (Maatram). I'll use "மேம்படுத்துதல்" as it fits the idea of adding functionality.
        *   **How to use it?** -> "எப்படி பயன்படுத்துவது?" (Eppadi payanpaduthuvathu?).
        *   **Simple:** "Simple" -> "எளிமையான" (Eliyamana).
        *   **Explanation:** "Explanation" -> "விளக்கம்" (Vilakkam).
        *   **Let's structure the Roman Tamil text:**
            *   Start with a clear heading: "Python Decorator என்றால் என்ன?" (What is a Python Decorator?).
            *   Explain the concept simply. Use analogies if possible. "ஒரு function-அ எடுத்து, அதோட மேல் சில வேலைகளை சேர்த்து, அப்புறம் அந்த புது function-அ கொடுக்கறது தான் decorator." (A decorator is a function that takes another function, adds some work to it, and then returns that new function.)
            *   Move to "எப்படி பயன்படுத்துவது?" (How to use it?).
            *   Explain the `@` symbol. It's called "at symbol" or "குறியீடு" (Kuriyeedu).
            *   Provide the example code. The code itself remains in English/Python, as that's the standard.
            *   After the code, explain what's happening step-by-step in Roman Tamil.
            *   Explain the output. "இதோட வெளியீடு எப்படி இருக்கும்?" (What will the output look like?).
            *   Conclude with a summary of why decorators are useful. "ஏன் இது பயனுள்ளது?" (Why is it useful?).

3.  **Drafting the Response (in Roman Tamil):**

    *   **Title:** Python Decorator என்றால் என்ன? (What is a Python Decorator?)

    *   **Concept Explanation:**
        *   "Python-ல decorator-ங்கறது ஒரு function-அ எடுத்து, அதோட மேல் சில வேலைகளை சேர்த்து, அப்புறம் அந்த புது function-அ கொடுக்கற ஒரு விஷயம்." (In Python, a decorator is a thing that takes a function, adds some work on top of it, and then returns that new function.)
        *   "இத ஒரு gift-ஓட மேல வச்சிருக்கற paper மாதிரி நெனைச்சுக்கோங்க. Gift-அ (original function) எடுத்து, paper-அ (decorator) சுத்திட்டு, அப்புறம் குடுக்குறது தான் decorator." (Think of it like the paper on a gift. You take the gift (original function), wrap it with paper (decorator), and then give it. This is a decorator.) - *This analogy is good for clarity.*

    *   **How to Use It:**
        *   "Decorator-அ உபயோகிக்க ரெண்டு வழி இருக்கு." (There are two ways to use a decorator.)
        *   "1. `@decorator_name` சின்னத்த உபயோகிச்சு." (1. Using the `@decorator_name` symbol.)
        *   "2. சாதாரண function மாதிரி உபயோகிச்சு: `my_function = decorator_name(my_function)`." (2. Using it like a normal function: `my_function = decorator_name(my_function)`.)
        *   "ஆனா `@` சின்னத்த தான் எல்லாரும் அதிகமா உபயோகிப்பாங்க." (But everyone uses the `@` symbol more.)

    *   **Simple Example:**
        *   "இப்போ ஒரு சின்ன example பாப்போம். ஒரு function-க்கு முன்னாடியும் பின்னாடியும் சில message-அ print பண்ற மாதிரி ஒரு decorator உருவாக்குவோம்." (Now let's see a simple example. Let's create a decorator that prints some messages before and after a function.)
        *   **Code Block:**
            ```python
            # இதுதான் நம்ம decorator
            def my_decorator(func):
                def wrapper():
                    print("--- Decorator-ல இருந்து message ---")
                    func() # இதுதான் original function-அ கூப்பிடும்
                    print("--- Decorator-ல இருந்து message ---")
                return wrapper

            # @ சின்னம் decorator-அ function-க்கு apply பண்ணுது
            @my_decorator
            def say_hello():
                print("Hello! இதுதான் original function.")

            # இந்த function-அ கூப்பிடும்போது decorator-ம் வேலை செய்யும்
            say_hello()
            ```

    *   **Explanation of the Example:**
        *   "இந்த code-அ பாருங்க:" (Look at this code:)
        *   "1. `my_decorator` - இதுதான் நம்ம decorator function. இது ஒரு function-அ argument-ஆ எடுத்துக்கும்." (1. `my_decorator` - This is our decorator function. It takes one function as an argument.)
        *   "2. `wrapper` - இது decorator-க்குள்ள இருக்குற ஒரு புது function. இதுதான் original function-அ கூப்பிடும்." (2. `wrapper` - This is a new function inside the decorator. It's the one that calls the original function.)
        *   "3. `@my_decorator` - இதுதான் முக்கியமான பகுதி. இது `say_hello` function-அ decorate பண்ணுது. அதாவது, `say_hello` function-க்கு பதிலா `my_decorator` குடுத்த `wrapper` function-அ உபயோகிக்க சொல்லுது." (3. `@my_decorator` - This is the main part. It decorates the `say_hello` function. That is, it tells to use the `wrapper` function given by `my_decorator` instead of the `say_hello` function.)
        *   "4. `say_hello()` - இப்போ இத கூப்பிடும்போது, முதல்ல `wrapper` function ஓடும். அது message print பண்ணிட்டு, அப்புறம் `say_hello`-அ கூப்பிடும். அப்புறம் திரும்பவும் message print பண்ணும்." (4. `say_hello()` - Now when we call it, the `wrapper` function will run first. It will print the message, then call `say_hello`. Then it will print the message again.)

    *   **Output:**
        *   "இதோட output இப்படித்தான் இருக்கும்:" (The output will look like this:)
        ```
        --- Decorator-ல இருந்து message ---
        Hello! இதுதான் original function.
        --- Decorator-ல இருந்து message ---
        ```

    *   **Conclusion/Summary:**
        *   "இதனால உங்களுக்கு தெரியுதுல, decorator மூலமா ஒரு function-அ சுத்தி சில கூடுதல் வேலைகளை (logging, timing, security மாதிரி) சுலபமா சேர்த்துக்கலாம். Code-அ clean-ஆ வச்சுக்க இது ரொம்ப உதவியா இருக்கும்." (You now understand that with a decorator, you can easily add some extra work (like logging, timing, security) around a function. It is very helpful to keep the code clean.)

4.  **Final Review:** Read through the complete Roman Tamil text. Check for clarity, flow, and grammatical correctness in Roman Tamil. Ensure the technical terms are used correctly. The structure is logical: What -> How -> Example -> Explanation -> Output -> Why. The language is simple and direct. The analogy helps. The example is minimal and effective. The explanation is clear. The response is complete and fulfills all parts of the user's request.
````

</details>

**Output:**

````
Python decorator-ன்னா என்ன?

Python-ல decorator-ங்கறது ஒரு function-அ எடுத்து, அதோட மேல் சில வேலைகளை சேர்த்து, அப்புறம் அந்த புது function-அ கொடுக்கற ஒரு விஷயம். இத ஒரு gift-ஓட மேல வச்சிருக்கற paper மாதிரி நெனைச்சுக்கோங்க. Gift-அ (original function) எடுத்து, paper-அ (decorator) சுத்திட்டு, அப்புறம் குடுக்குறது தான் decorator.

இதனால ஒரு function-அ சுத்தி சில கூடுதல் வேலைகளை (logging, timing, security மாதிரி) சுலபமா சேர்த்துக்கலாம்.

---

### எப்படி பயன்படுத்துறது?

Decorator-அ உபயோகிக்க ரெண்டு வழி இருக்கு:

1.  `@decorator_name` சின்னத்த உபயோகிச்சு.
2.  சாதாரண function மாதிரி உபயோகிச்சு: `my_function = decorator_name(my_function)`.

ஆனா `@` சின்னத்த தான் எல்லாரும் அதிகமா உபயோகிப்பாங்க.

---

### ஒரு சின்ன example

இப்போ ஒரு சின்ன example பாப்போம். ஒரு function-க்கு முன்னாடியும் பின்னாடியும் சில message-அ print பண்ற மாதிரி ஒரு decorator உருவாக்குவோம்.

```python
# இதுதான் நம்ம decorator
def my_decorator(func):
    def wrapper():
        print("--- Decorator-ல இருந்து message ---")
        func() # இதுதான் original function-அ கூப்பிடும்
        print("--- Decorator-ல இருந்து message ---")
    return wrapper

# @ சின்னம் decorator-அ function-க்கு apply பண்ணுது
@my_decorator
def say_hello():
    print("Hello! இதுதான் original function.")

# இந்த function-அ கூப்பிடும்போது decorator-ம் வேலை செய்யும்
say_hello()
```

---

### இந்த example-க்கான விளக்கம்

இந்த code-அ பாருங்க:

1.  `my_decorator` - இதுதான் நம்ம decorator function. இது ஒரு function-அ argument-ஆ எடுத்துக்கும்.
2.  `wrapper` - இது decorator-க்குள்ள இருக்குற ஒரு புது function. இதுதான் original function-அ கூப்பிடும்.
3.  `@my_decorator` - இதுதான் முக்கியமான பகுதி. இது `say_hello` function-அ decorate பண்ணுது. அதாவது, `say_hello` function-க்கு பதிலா `my_decorator` குடுத்த `wrapper` function-அ உபயோகிக்க சொல்லுது.
4.  `say_hello()` - இப்போ இத கூப்பிடும்போது, முதல்ல `wrapper` function ஓடும். அது message print பண்ணிட்டு, அப்புறம் `say_hello`-அ கூப்பிடும். அப்புறம் திரும்பவும் message print பண்ணும்.

---

### இதோட output

இதோட output இப்படித்தான் இருக்கும்:

```
--- Decorator-ல இருந்து message ---
Hello! இதுதான் original function.
--- Decorator-ல இருந்து message ---
```

இதனால உங்களுக்கு தெரியுதுல, decorator மூலமா ஒரு function-அ சுத்தி சில கூடுதல் வேலைகளை (logging, timing, security மாதிரி) சுலபமா சேர்த்துக்கலாம். Code-அ clean-ஆ வச்சுக்க இது ரொம்ப உதவியா இருக்கும்.
````

### Telugu

**Prompt:** Python lo decorator ante enti mariyu daanni ela vadataru? Oka simple example ivvandi. Samadhanam Roman Telugu lo ivvandi.

*1224 tok | 10.26s | 119.3 t/s | think: 3458 chars | finish: stop*

<details><summary>Thinking (3458 chars)</summary>

````
The user is asking about Python decorators in Romanized Telugu. I need to explain what a decorator is and how to use it, along with a simple example, all in Romanized Telugu.

Let me plan my response:

1. Explain what a decorator is in Python
2. Explain how to use decorators
3. Provide a simple example
4. Make sure everything is in Romanized Telugu

Let me start by explaining what a decorator is:

A decorator in Python is a design pattern that allows a user to add new functionality to an existing object without modifying its structure. It's a function that takes another function as an argument, adds some functionality, and then returns another function without altering the original function's source code.

Now, how to use decorators:
- Using the @ symbol followed by the decorator name right above the function definition
- Or by explicitly passing the function to the decorator

For a simple example, I'll use a decorator that prints a message before and after executing the decorated function.

Now, let me translate all of this into Romanized Telugu:

"Python lo decorator ante enti" - What is a decorator in Python

"Python lo oka function ki kotta functionality add cheyadaniki upayogapadutundi. Idi oka function ni teesukoni, daaniki kotta features add chesi, malli return chestundi. Original function ni modify cheyalsina avasaram undadu."

"Decorator ni ela vadataru" - How to use decorators

"1. @ symbol ni upayoginchi:
```python
@decorator_name
def function_name():
    # function code
```

2. Direct ga function ni pass chesi:
```python
function_name = decorator_name(function_name)
```"

"Simple example" - Simple example

"Ikkada oka simple example chuddam. Oka decorator create chestunnam, adi function execute cheyadaniki mundu inkaa tharvatha messages print chestundi."

```python
def my_decorator(func):
    def wrapper():
        print("Function execute avvadaniki mundu")
        func()
        print("Function execute ayipoyindi")
    return wrapper

@my_decorator
def say_hello():
    print("Hello!")

say_hello()
```

"Output:
```
Function execute avvadaniki mundu
Hello!
Function execute ayipoyindi
```"

Let me make sure my Romanized Telugu is accurate and natural:

- "Python lo" - In Python
- "decorator ante enti" - What is a decorator
- "kotta functionality add cheyadaniki" - To add new functionality
- "upayogapadutundi" - It is useful
- "function ni teesukoni" - Taking a function
- "daaniki kotta features add chesi" - Adding new features to it
- "malli return chestundi" - And returns it again
- "Original function ni modify cheyalsina avasaram undadu" - There is no need to modify the original function
- "decorator ni ela vadataru" - How to use decorators
- "symbol ni upayoginchi" - Using the symbol
- "Direct ga function ni pass chesi" - Passing the function directly
- "simple example chuddam" - Let's see a simple example
- "decorator create chestunnam" - We are creating a decorator
- "execute cheyadaniki mundu" - Before execution
- "execute ayipoyindi" - Has executed
- "Output" - Output

I think the Romanized Telugu looks good. Let me now finalize my response.

Actually, let me check if there are any other important aspects of decorators I should mention:

1. Decorators with parameters
2. Built-in decorators like @property, @staticmethod, etc.
3. Class decorators

For this response, I'll keep it simple and focus on the basic concept and a simple example as requested.

Let me finalize my response:
````

</details>

**Output:**

````
Python lo decorator ante enti?

Python lo decorator anedi oka design pattern. Idi oka function ki kotta functionality add cheyadaniki help chestundi. Idi oka function ni teesukoni, daaniki kotta features add chesi, malli return chestundi. Original function ni modify cheyalsina avasaram undadu.

Decorator ni ela vadataru?

Python lo decorators use cheyadaniki rendu ways unnay:

1. @ symbol ni upayoginchi:
```python
@decorator_name
def function_name():
    # function code
```

2. Direct ga function ni pass chesi:
```python
function_name = decorator_name(function_name)
```

Simple example:

Ikkada oka simple example chuddam. Oka decorator create chestunnam, adi function execute cheyadaniki mundu inkaa tharvatha messages print chestundi.

```python
def my_decorator(func):
    def wrapper():
        print("Function execute avvadaniki mundu")
        func()
        print("Function execute ayipoyindi")
    return wrapper

@my_decorator
def say_hello():
    print("Hello!")

say_hello()
```

Output:
```
Function execute avvadaniki mundu
Hello!
Function execute ayipoyindi
```

Ee example lo, `my_decorator` anedi oka function ni teesukoni, daaniki mundu inkaa tharvatha messages print chese oka wrapper function ni return chestundi. `@my_decorator` symbol tho manam ee decorator ni `say_hello` function ki apply chestunnam.
````

