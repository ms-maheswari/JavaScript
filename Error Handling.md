## Error Handling

- Errors are ***unexpected issues that occur during code execution***.

- Good error handling ensures your program doesn’t crash and gives users clear messages.

## Types of Errors
1. **Syntax Errors** → Mistakes in code writing (e.g., missing brackets).

2. **Runtime Errors** → Mistakes that occur while the code is running (e.g., accessing undefined variables).

3. **Logical Errors** → The program runs but gives the wrong output.

### Example 1: 
If the code inside **`try block fails`**, it **`jumps to the catch block.`**
```js
try {
  let a = 10;
  let b = a + c; 
} catch (error) {
  console.log("An error occurred:", error.message);
}
```
### Output
```js
An error occurred: c is not defined
```
### Example 2: 
**`finally block always executes`**, whether an error occurred or not.

```js
try {
  console.log("Trying to run code...");
  throw new Error("Something went wrong!");
} catch (error) {
  console.log("Caught an error:", error.message);
} finally {
  console.log("Finally block always runs!");
}
```
### Output
```js
Trying to run code...
Caught an error: Something went wrong!
Finally block always runs!
```

## Throwing Custom Errors
throw statement allows us to **`create custom errors manually`**.
```js
function checkAge(age) {
  if (age < 18) {
    throw new Error("Age must be 18 or above!");
  }
  return "Eligible";
}

try {
  console.log(checkAge(16));
} catch (error) {
  console.log(error.message);
}
```

### Output
```js
Age must be 18 or above!
```