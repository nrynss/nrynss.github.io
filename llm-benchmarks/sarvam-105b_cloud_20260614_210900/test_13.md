# Sarvam 30B (Q4_K_M) — Test 13: Conventional Commits

**Category:** Instruction  
**Date:** 2026-06-14 21:35:16  

**Prompt:** Write a commit message for: refactored auth middleware to use JWT instead of session cookies, updated all route handlers, added unit tests for token expiration and refresh. Follow Conventional Commits format strictly.

*2381 tok | 19.27s | 123.6 t/s | think: 9097 chars | finish: stop*

<details><summary>Thinking (9097 chars)</summary>

````
1.  **Deconstruct the Request:** I'll break down the user's prompt into key components.
    *   **Action:** "refactored auth middleware" -> This is the main change. The word "refactored" is a good starting point.
    *   **Technology Change:** "to use JWT instead of session cookies" -> This is the *how* and *what* of the refactoring. It's a significant change in authentication strategy. This is a key piece of information.
    *   **Scope of Change:** "updated all route handlers" -> This tells me the impact was widespread. It's not just one file, but potentially many. This suggests a `BREAKING CHANGE` is likely needed.
    *   **Testing:** "added unit tests for token expiration and refresh" -> This is a new feature/improvement. It's about quality and reliability.

2.  **Analyze the Conventional Commits Format:** I need to recall the structure:
    *   `<type>(<scope>): <subject>`
    *   `<body>` (optional)
    *   `<footer>` (optional)

3.  **Determine the `type`:** I'll go through the common types and see which fits best.
    *   `feat`: This is for a new *feature*. Is JWT a new feature? In a way, yes, it's a new way to authenticate. But the prompt says "refactored," which implies changing existing functionality, not just adding something new. However, the *result* is a new capability (stateless auth). This is a strong candidate.
    *   `fix`: This is for fixing a bug. The prompt doesn't mention fixing a bug. So, no.
    *   `refactor`: This is for refactoring code—improving its structure without changing its external behavior. This is a perfect fit for "refactored auth middleware." It's a direct match.
    *   `perf`: This is for performance improvements. The prompt doesn't mention performance. So, no.
    *   `docs`: This is for documentation changes. The prompt doesn't mention docs. So, no.
    *   `style`: This is for code formatting (e.g., semicolons, whitespace). Not applicable.
    *   `test`: This is for adding or updating tests. The prompt *does* mention adding tests. So, `test` is a candidate.
    *   `chore`: This is for maintenance tasks, like updating dependencies. Not the primary action here.

4.  **Choosing the Primary `type`:** I have `refactor` and `feat` as strong candidates. I also have `test`. How do I combine them?
    *   The main action is the refactor. So, `refactor` should be the primary type.
    *   The refactor introduces a new capability (JWT), which is a feature. So, `feat` is also very appropriate.
    *   The addition of tests is a separate, important action.

    Let's think about the hierarchy. The most significant change is the switch to JWT. This is a breaking change and a major feature enhancement. Therefore, `feat` seems more appropriate than `refactor` because it signals to users that the *behavior* of authentication has fundamentally changed (from stateful sessions to stateless tokens). A `refactor` shouldn't change external behavior, but this one does.

    So, I'll lead with `feat`. What about the tests? The `test` type is for *only* test changes. Since this commit does more than just add tests, I shouldn't use `test` as the primary type. I can mention the tests in the body.

    Let's try `feat`.

5.  **Determine the `scope`:** The scope indicates the part of the codebase the change affects.
    *   "auth middleware" -> `auth` is a great scope.
    *   "route handlers" -> This is broader. `api` or `routes` could work.
    *   "unit tests" -> `test` or `spec` is a common scope for tests.

    The most specific and relevant scope is `auth`. The change *starts* with the auth middleware. The route handlers are updated *because* of the auth change. So, `auth` is the best choice.

6.  **Craft the `subject`:** The subject should be a short, imperative summary of the change.
    *   "refactor auth middleware to use JWT" -> A bit long, but accurate.
    *   "feat(auth): migrate from session cookies to JWT" -> "Migrate" is a strong, active verb. "From... to..." clearly shows the change. This is excellent.
    *   "feat(auth): switch auth to JWT" -> A bit more concise. Also good.
    *   "feat(auth): implement JWT authentication" -> "Implement" could be misleading, as the old system was there. "Migrate" or "switch" is better.

    I like "feat(auth): migrate from session cookies to JWT". It's clear, concise, and follows the imperative mood.

7.  **Write the `body`:** The body should explain the "why" and "what" in more detail.
    *   Start by explaining the change: "Replaced the existing session-based authentication middleware with a stateless JWT implementation."
    *   Explain the impact: "This change requires all protected routes to now accept a `Bearer` token in the `Authorization` header, instead of relying on session cookies." This is crucial for anyone reading the commit log. It's the "how to use it now" part.
    *   Mention the breaking change explicitly. This is very important for library/API maintainers. "BREAKING CHANGE: Authentication mechanism is now token-based. Session cookies are no longer supported."
    *   Mention the new tests: "Added comprehensive unit tests to cover token expiration and refresh flows."

8.  **Write the `footer`:** The footer is for metadata, like breaking changes, deprecations, or issues.
    *   The `BREAKING CHANGE` I wrote in the body is often repeated here for tools that parse it.
    *   I can also link to an issue tracker. "Closes #123" is a common pattern. The prompt doesn't give me an issue number, so I'll omit it but keep it in mind as a best practice.

9.  **Assemble and Review:** Now I'll put all the pieces together and check it against the requirements.

    *   **Type:** `feat` (Chosen because it's a significant change in behavior/capability, not just a code cleanup).
    *   **Scope:** `auth` (Most relevant scope).
    *   **Subject:** `migrate from session cookies to JWT` (Clear, imperative).
    *   **Body:** Explains the what, why, and how. Mentions the breaking change and the new tests.
    *   **Footer:** Includes the `BREAKING CHANGE` for parsers.

    Let's assemble a few versions.

    **Version 1 (Concise):**
    ```
    feat(auth): switch from session cookies to JWT

    - Refactored auth middleware to use JWT for stateless authentication.
    - Updated all route handlers to expect a Bearer token.
    - Added unit tests for token expiration and refresh.

    BREAKING CHANGE: Authentication now requires a JWT in the Authorization header.
    ```
    This is good. It's direct and covers everything.

    **Version 2 (More detailed):**
    ```
    feat(auth): migrate from session cookies to JWT

    This commit refactors the entire authentication system to use JSON Web Tokens (JWT)
    instead of server-side session cookies.

    - The `auth` middleware now validates JWTs from the `Authorization` header.
    - All protected route handlers have been updated to work with the new middleware.
    - Comprehensive unit tests have been added to ensure the correctness of
      token expiration and refresh logic.

    BREAKING CHANGE: The previous session-based authentication is no longer
    supported. Clients must now include a valid JWT in the `Authorization: Bearer <token>`
    header for protected routes.
    ```
    This is also very good. The body is more explanatory. The breaking change is more explicit about the new header format. This is probably better for a larger project where clarity is paramount.

    **Version 3 (Combining `refactor` and `feat`):**
    Sometimes people use multiple types.
    ```
    refactor(auth): remove session-based authentication
    feat(auth): add JWT-based authentication

    - Replaced the session middleware with a JWT middleware.
    - Updated routes to use the new auth mechanism.
    - Added tests for token expiration and refresh.

    BREAKING CHANGE: Authentication is now token-based.
    ```
    This is a valid style, but the single-type approach is more common and simpler for most tools. I'll stick with the single-type approach as it's cleaner and directly addresses the prompt's main action.

    **Final Selection:** I'll go with a version similar to #2. It's the most professional and informative. It clearly separates the *what* (the summary), the *why* (the detailed body), and the *impact* (the breaking change footer). It strictly adheres to the conventional commit format.

    I will present the final, polished version as the answer. I'll make sure the wording is tight and follows the imperative mood ("Refactor...", "Update...", "Add...").

    Let's do a final check:
    - `feat(auth): migrate from session cookies to JWT` -> Yes, type, scope, subject are correct.
    - `This commit refactors the entire authentication system...` -> Explains the change.
    - `The `auth` middleware now validates...` -> Details the implementation.
    - `All protected route handlers have been updated...` -> Details the scope.
    - `Comprehensive unit tests have been added...` -> Mentions the tests.
    - `BREAKING CHANGE: ...` -> Footer for parsers.

    The plan is solid. I will now write the final output.
````

</details>

**Output:**

````
```
feat(auth): migrate from session cookies to JWT

This commit refactors the entire authentication system to use JSON Web Tokens (JWT)
instead of server-side session cookies.

- The `auth` middleware now validates JWTs from the `Authorization` header.
- All protected route handlers have been updated to work with the new middleware.
- Comprehensive unit tests have been added to ensure the correctness of
  token expiration and refresh logic.

BREAKING CHANGE: The previous session-based authentication is no longer
supported. Clients must now include a valid JWT in the `Authorization: Bearer <token>`
header for protected routes.
```
````

