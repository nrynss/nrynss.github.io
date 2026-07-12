# Qwen3-30B-A3B (Q4_K_M) — Test 9: Async fetcher (Python)

**Category:** Code  
**Date:** 2026-06-14 14:22:37  

**Prompt:** Write a Python async function using aiohttp that fetches 10 URLs concurrently with a semaphore limiting concurrency to 3. Return a dict of URL -> status code. Handle timeouts and connection errors. Include a runnable __main__ block testing against httpbin.org endpoints (mix of /status/200, /status/404, /delay/5, /get, etc).

*5167 tok | 23.97s | 215.6 t/s | think: 18447 chars | finish: stop*

<details><summary>Thinking (18447 chars)</summary>

````
Okay, I need to write a Python async function using aiohttp that fetches 10 URLs concurrently, but limits the concurrency to 3 using a semaphore. Then, return a dictionary mapping URLs to their status codes. Also, handle timeouts and connection errors. Plus, include a main block that tests it with some httpbin.org endpoints.

First, I should recall how aiohttp works. The basic idea is to create a session, and then use async with to handle the requests. But since I need to limit concurrency, a semaphore is necessary. So I'll need to use asyncio.Semaphore.

Let me outline the steps:

1. Import necessary modules: aiohttp, asyncio, and maybe some others like sys for main.

2. Create an async function, maybe called fetch_urls, that takes a list of URLs. But the problem says to fetch 10 URLs, but maybe the function should accept a list. But the main block will generate 10 URLs.

Wait, the user says "fetches 10 URLs concurrently". So perhaps the function is supposed to handle 10 URLs, but the main block will generate them. But the function itself should take the list of URLs. So the function will take a list of URLs, and process them with concurrency limited by a semaphore.

So the function will be something like:

async def fetch_urls(urls, max_concurrent=3):

But the user says to limit to 3, so maybe the function can have that as a parameter, but the main block will pass 3.

But the problem says to "limit concurrency to 3", so the function should use a semaphore with 3.

Now, for each URL, we need to make a request. But since we want to do them concurrently, but not more than 3 at a time.

So the approach is to create a semaphore, and for each URL, acquire the semaphore before making the request, then release it after.

But how to structure the tasks. Maybe using asyncio.gather with a list of tasks, but with the semaphore in place.

Alternatively, using a task queue with a semaphore.

Another approach is to create a task for each URL, but each task will first acquire the semaphore. But since the semaphore is a context manager, perhaps using async with.

So for each URL, create a task that does:

async with semaphore:

   do the request

But how to manage that. Let me think.

The code structure would be:

async def fetch_urls(urls, max_concurrent=3):

    semaphore = asyncio.Semaphore(max_concurrent)

    tasks = []

    for url in urls:

        task = asyncio.create_task(fetch_url(url, semaphore))

        tasks.append(task)

    results = await asyncio.gather(*tasks)

    # then, collect the results into a dict.

But wait, the fetch_url function would need to take the semaphore. But maybe the semaphore is part of the function's parameters.

Alternatively, the fetch_url function is a helper that uses the semaphore.

But perhaps better to have the fetch_url function be inside the fetch_urls function, or have the semaphore passed in.

Alternatively, the fetch_url function could be a separate function that uses the semaphore.

But in any case, the key is that each request is wrapped in a semaphore.

But how to handle the actual request. So for each URL, we need to make a GET request, and get the status code.

But also handle timeouts and connection errors.

So for each request, we need to use a try-except block. Also, set a timeout.

So for the aiohttp client, we can set a timeout parameter. Also, handle exceptions like ClientError, TimeoutError, etc.

So the fetch_url function would be something like:

async def fetch_url(url, semaphore):

    async with semaphore:

        async with aiohttp.ClientSession() as session:

            try:

                async with session.get(url, timeout=10) as response:

                    return (url, response.status)

            except (aiohttp.ClientError, asyncio.TimeoutError) as e:

                return (url, str(e))

But wait, the semaphore is for limiting the number of concurrent requests. So each time a task enters the semaphore, it's allowed to proceed. So the semaphore is acquired before making the request.

But in this code, the semaphore is acquired, then the session is created. But creating a session inside the semaphore? Well, the semaphore is for controlling the number of concurrent requests. So each time a task is allowed to proceed (acquired the semaphore), it creates a session and makes a request.

But creating a session inside the semaphore might not be the best approach. Because each task is creating its own session. But maybe that's okay. However, it's more efficient to create a single session and reuse it. But in this case, since the semaphore is for limiting the number of concurrent requests, perhaps the session is created per task.

But perhaps better to create the session once, and then have the tasks use it. But in the code above, the session is created inside the fetch_url function. Which would create a new session for each URL. But that's not efficient. So maybe the session should be created once, and passed to the fetch_url function.

But how to structure that. Let me think.

In the fetch_urls function, create a session once, then pass it to each fetch_url task.

But then, the semaphore is for controlling the number of concurrent requests. So the code would be:

async def fetch_urls(urls, max_concurrent=3, timeout=10):

    semaphore = asyncio.Semaphore(max_concurrent)

    async with aiohttp.ClientSession() as session:

        tasks = []

        for url in urls:

            task = asyncio.create_task(fetch_url(url, session, semaphore, timeout))

            tasks.append(task)

        results = await asyncio.gather(*tasks)

        # process results into a dict

But then the fetch_url function would be:

async def fetch_url(url, session, semaphore, timeout):

    async with semaphore:

        try:

            async with session.get(url, timeout=timeout) as response:

                return (url, response.status)

        except (aiohttp.ClientError, asyncio.TimeoutError) as e:

            return (url, str(e))

But then, the session is created once, and passed to each task. That's better.

But then, the problem is that the session is created in the fetch_urls function, and then passed to each fetch_url task. That makes sense.

But then, the main function would generate the list of URLs, and call fetch_urls.

Now, the main block needs to test against httpbin.org endpoints. So for example, URLs like 'https://httpbin.org/status/200', 'https://httpbin.org/status/404', 'https://httpbin.org/delay/5', 'https://httpbin.org/get', etc.

So the main block would generate a list of 10 URLs, perhaps mixing these.

But how to generate them. For example, maybe:

urls = [
    'https://httpbin.org/status/200',
    'https://httpbin.org/status/404',
    'https://httpbin.org/delay/5',
    'https://httpbin.org/get',
    'https://httpbin.org/status/200',
    'https://httpbin.org/status/404',
    'https://httpbin.org/delay/5',
    'https://httpbin.org/get',
    'https://httpbin.org/status/200',
    'https://httpbin.org/status/404',
]

But maybe more varied. But the exact URLs aren't important as long as they are valid.

Now, the function needs to return a dict of URL -> status code. But in the case of errors, perhaps the value is the error message. But the problem says "return a dict of URL -> status code". However, in case of errors, the status code might not be available. So perhaps the function should return the status code if successful, else some indication. But the problem says to handle timeouts and connection errors. So maybe in the case of error, the value is the error message, but the problem says "status code". Hmm.

But the user says "return a dict of URL -> status code". But if there's an error, perhaps the status code is not available. So maybe in that case, the value is the error message. But the problem says to handle timeouts and connection errors, so the function should capture those.

So in the code, when there's an error, the value is the error message, but the problem says to return the status code. But maybe the user expects that in case of error, the status code is not present, but perhaps the function should return the error message as the value. So the dict would have entries like 'https://httpbin.org/status/404': 404, or 'https://httpbin.org/status/404': 'Connection error'.

But the problem says to "return a dict of URL -> status code". So perhaps in case of error, the status code is not available, but maybe the function should return the error message as the value. But the user might expect that the value is the status code, but in case of error, perhaps the status code is None or something else. However, the problem says to handle timeouts and connection errors, so the function should capture those.

So perhaps in the code, when there's an error, the value is the error message, but the problem says to return the status code. So maybe the function should return the status code if the request was successful, else some indication. But the problem statement isn't clear. However, the example in the main block would have some URLs that return 200, 404, etc. So perhaps the function returns the status code as an integer, and for errors, maybe the value is None or the error message. But the problem says to handle timeouts and connection errors, so perhaps the function should capture those and return them as part of the dict.

But the user says to return a dict of URL -> status code. So perhaps the function should return the status code (int) if successful, else maybe the error message as a string. But the problem says to handle the errors, so the function should not crash but return the error info.

So in the code, when the request is successful, return the status code. When there's an error, return the error message as a string.

But how to represent that in the dict. For example, for a URL that returns 200, the value is 200. For a URL that times out, the value is a string like 'TimeoutError'.

So in the code, the fetch_url function returns (url, response.status) on success, and (url, str(e)) on error.

Then, the results from asyncio.gather would be a list of tuples, which can be converted into a dict.

So in the fetch_urls function, after gathering the results, we can create a dict by iterating through the results.

So:

results = await asyncio.gather(*tasks)

result_dict = {url: code for url, code in results}

But wait, the results are tuples of (url, code), so that's correct.

Now, putting it all together.

Now, the code:

Import aiohttp, asyncio.

Then, define the fetch_urls function.

But in the code, the fetch_url function is a helper inside the fetch_urls function, or a separate function.

But for code structure, perhaps define the helper function inside.

But in Python, functions can be nested.

Alternatively, define the helper function outside.

But for the purpose of the code, perhaps better to have the helper function inside.

But for the code, perhaps:

async def fetch_urls(urls, max_concurrent=3, timeout=10):

    semaphore = asyncio.Semaphore(max_concurrent)

    async with aiohttp.ClientSession() as session:

        tasks = []

        for url in urls:

            task = asyncio.create_task(fetch_url(url, session, semaphore, timeout))

            tasks.append(task)

        results = await asyncio.gather(*tasks)

        return {url: code for url, code in results}

But then the fetch_url function:

async def fetch_url(url, session, semaphore, timeout):

    async with semaphore:

        try:

            async with session.get(url, timeout=timeout) as response:

                return (url, response.status)

        except (aiohttp.ClientError, asyncio.TimeoutError) as e:

            return (url, str(e))

But wait, the session is created in the fetch_urls function, and passed to fetch_url. So that's okay.

But what about the timeout? The session.get has a timeout parameter. So in the code, the timeout is set to 10 seconds. But the user might want to have a specific timeout. But the problem says to handle timeouts, so setting a timeout is necessary.

Now, the main block. The user says to include a runnable __main__ block testing against httpbin.org endpoints.

So in the main block, we can generate a list of 10 URLs, then call fetch_urls and print the result.

But how to generate the list. For example:

if __name__ == '__main__':

    import asyncio

    urls = [

        'https://httpbin.org/status/200',

        'https://httpbin.org/status/404',

        'https://httpbin.org/delay/5',

        'https://httpbin.org/get',

        'https://httpbin.org/status/200',

        'https://httpbin.org/status/404',

        'https://httpbin.org/delay/5',

        'https://httpbin.org/get',

        'https://httpbin.org/status/200',

        'https://httpbin.org/status/404',

    ]

    results = asyncio.run(fetch_urls(urls))

    print(results)

But wait, the fetch_urls function is async, so in the main block, we need to run it with asyncio.run.

But the code for the main block would need to be inside the __main__ block.

But also, the code needs to have the functions defined.

Putting it all together.

But also, need to handle the case where the timeout occurs. For example, the /delay/5 endpoint will take 5 seconds. But if the timeout is set to 10 seconds, then it's okay. But if the timeout is set to, say, 3 seconds, then it would time out. But in the example, the user says to include /delay/5, so perhaps the timeout is set to a higher value.

But the problem says to handle timeouts, so the code should have a timeout set.

Now, possible issues:

- The semaphore is acquired before making the request. So the number of concurrent requests is limited to 3.

But in the code above, each fetch_url task acquires the semaphore, which allows up to max_concurrent tasks to run at the same time.

Yes, that should work.

Another thing: the aiohttp.ClientSession should be properly closed. But since we're using async with, it's handled.

Now, testing the code.

But what about the /delay/5 endpoint? It will take 5 seconds. But the code's timeout is set to 10, so it should be okay. But if the timeout is set to 3, then it would time out. But in the code, the timeout is set to 10. But the user didn't specify, so perhaps the code should have a reasonable timeout.

But the problem says to handle timeouts, so the code should have a timeout set.

Now, code:

But in the code above, the fetch_url function has a timeout parameter. So in the fetch_urls function, when creating the task, the timeout is passed.

But in the code, the timeout is set to 10 seconds.

But the user may want to adjust that. However, the problem doesn't specify, so it's up to us.

Now, code:

But the code may need to import aiohttp and asyncio.

Now, the full code:

import aiohttp
import asyncio

async def fetch_urls(urls, max_concurrent=3, timeout=10):
    semaphore = asyncio.Semaphore(max_concurrent)
    async with aiohttp.ClientSession() as session:
        tasks = []
        for url in urls:
            task = asyncio.create_task(fetch_url(url, session, semaphore, timeout))
            tasks.append(task)
        results = await asyncio.gather(*tasks)
        return {url: code for url, code in results}

async def fetch_url(url, session, semaphore, timeout):
    async with semaphore:
        try:
            async with session.get(url, timeout=timeout) as response:
                return (url, response.status)
        except (aiohttp.ClientError, asyncio.TimeoutError) as e:
            return (url, str(e))

if __name__ == '__main__':
    urls = [
        'https://httpbin.org/status/200',
        'https://httpbin.org/status/404',
        'https://httpbin.org/delay/5',
        'https://httpbin.org/get',
        'https://httpbin.org/status/200',
        'https://httpbin.org/status/404',
        'https://httpbin.org/delay/5',
        'https://httpbin.org/get',
        'https://httpbin.org/status/200',
        'https://httpbin.org/status/404',
    ]
    results = asyncio.run(fetch_urls(urls))
    print(results)

Wait, but in the code, the fetch_urls function is called with the urls list. But the main block is using asyncio.run, which is correct.

But what about the timeout for the /delay/5? Let's say the timeout is 10, which is more than 5, so it should be okay. But if the timeout is too short, then it would fail. But the code is set to 10 seconds.

But in the code, the timeout is set to 10. So that's okay.

But what about the error handling? For example, if a URL is invalid, or the server is down, the code catches aiohttp.ClientError.

But what about other exceptions? Well, the code catches ClientError and TimeoutError.

But perhaps also other exceptions, but the problem says to handle timeouts and connection errors, so this should be sufficient.

Now, testing this code. When run, it should print a dictionary with the URLs as keys and their status codes or error messages as values.

But for the /delay/5, the response will take 5 seconds. Since the semaphore is 3, and there are 10 URLs, the code will process 3 at a time. But since the delay is 5 seconds, the first three requests will take 5 seconds, then the next three, etc. But since the timeout is 10, it's okay.

But in practice, the code should work.

Potential issues:

- The fetch_url function is called with the session, semaphore, and timeout. But the code is correct.

Another thing: the semaphore is created with max_concurrent, which is 3. So the code should limit to 3 concurrent requests.

Another thing: the code uses asyncio.gather, which waits for all tasks to complete.

But what if some tasks take longer than others? The gather will wait for all.

Now, possible edge cases:

- URLs that take longer than the timeout. For example, if the timeout is 3, and a URL takes 5 seconds, then it would time out.

But in the example, the timeout is 10, so the /delay/5 is okay.

Another thing: the code returns the error message as a string. So for example, if a URL times out, the value is a string like 'TimeoutError'.

But the problem says to return a dict of URL -> status code. But in case of error, the value is not a status code. However, the problem says to handle timeouts and connection errors, so this is acceptable.

So the code should be correct.

But perhaps the user expects that the status code is an integer, and in case of error, it's something else. But the code as written does that.

So this should be the correct code.
````

</details>

**Output:**

````
Here's a well-structured and robust Python solution using `aiohttp` and `asyncio` to fetch 10 URLs concurrently with a limit of 3 concurrent requests, while handling timeouts and connection errors. The solution also includes a `__main__` block that tests the function against various endpoints on `httpbin.org`.

---

### ✅ Key Features

- **Concurrency Control**: Uses `asyncio.Semaphore` to limit the number of concurrent requests to 3.
- **Error Handling**: Catches `aiohttp.ClientError` and `asyncio.TimeoutError` to gracefully handle network issues.
- **Timeouts**: Sets a 10-second timeout for each request.
- **Result Formatting**: Returns a dictionary mapping URLs to either their HTTP status code or an error message.

---

### 📦 Required Libraries

Make sure you have the following installed:

```bash
pip install aiohttp
```

---

### 🧠 Code Implementation

```python
import aiohttp
import asyncio

async def fetch_urls(urls, max_concurrent=3, timeout=10):
    """
    Fetches a list of URLs concurrently with a semaphore limiting the number of
    concurrent requests to `max_concurrent`. Returns a dictionary of URL -> status code or error message.
    """
    semaphore = asyncio.Semaphore(max_concurrent)

    async with aiohttp.ClientSession() as session:
        tasks = [
            asyncio.create_task(fetch_url(url, session, semaphore, timeout))
            for url in urls
        ]

        results = await asyncio.gather(*tasks)
        return {url: code for url, code in results}

async def fetch_url(url, session, semaphore, timeout):
    """
    Helper function to fetch a single URL with the given session, semaphore, and timeout.
    Returns a tuple of (url, status_code or error message).
    """
    async with semaphore:
        try:
            async with session.get(url, timeout=timeout) as response:
                return (url, response.status)
        except (aiohttp.ClientError, asyncio.TimeoutError) as e:
            return (url, str(e))

if __name__ == '__main__':
    # Test URLs from httpbin.org
    urls = [
        'https://httpbin.org/status/200',
        'https://httpbin.org/status/404',
        'https://httpbin.org/delay/5',
        'https://httpbin.org/get',
        'https://httpbin.org/status/200',
        'https://httpbin.org/status/404',
        'https://httpbin.org/delay/5',
        'https://httpbin.org/get',
        'https://httpbin.org/status/200',
        'https://httpbin.org/status/404',
    ]

    # Run the async function
    results = asyncio.run(fetch_urls(urls))

    # Print the results
    for url, result in results.items():
        print(f"{url}: {result}")
```

---

### 🧪 Example Output

When you run the script, you might see output similar to:

```
https://httpbin.org/status/200: 200
https://httpbin.org/status/404: 404
https://httpbin.org/delay/5: 200
https://httpbin.org/get: 200
https://httpbin.org/status/200: 200
https://httpbin.org/status/404: 404
https://httpbin.org/delay/5: 200
https://httpbin.org/get: 200
https://httpbin.org/status/200: 200
https://httpbin.org/status/404: 404
```

Note: The `/delay/5` endpoint will return 200 after 5 seconds, and since the timeout is set to 10 seconds, it will succeed.

---

### 🧩 Notes

- The `aiohttp.ClientSession` is created once and reused across all requests for efficiency.
- The `semaphore` ensures that no more than 3 requests are made at the same time.
- The `timeout` is applied to each individual request to prevent hanging indefinitely.

---

This implementation is clean, efficient, and robust, suitable for real-world applications that need to handle large numbers of concurrent HTTP requests.
````

