## Asynchronous JavaScript

- JavaScript is **single-threaded** and executes code **synchronously** by default — it processes **one task at a time**.

- To handle tasks like API calls, timers, or file reading without blocking the main thread, asynchronous programming is used.

- Functions running in parallel with other functions are called asynchronous.

## What is Asynchronous Programming?
Asynchronous programming in JavaScript allows the code to perform **multiple tasks simultaneously** without waiting for one to finish before starting another. It enables non-blocking behavior, which is crucial for performance in web apps.

## Why Use Asynchronous Programming?
- Prevents the browser/page from freezing while waiting (e.g., for server data).

- Keeps the app responsive to user interactions.

- Improves overall performance and user experience.

## Key Concepts of Asynchronous Programming
1. Callbacks – Functions passed as arguments and executed after a task completes.

2. Promises – Objects representing eventual completion (or failure) of an async operation.

3. Async/Await – Syntactic sugar over Promises, making async code look synchronous.

4. Event Loop – Manages the execution of multiple pieces of code over time.