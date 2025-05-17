# JavaScript Hoisting

**Hoisting** is a JavaScript mechanism where variables and function declarations are **moved to the top of their scope** before code execution.

In simple terms, **you can use variables and functions before you declare them** in your code.

---

##  Function Hoisting

Function declarations are hoisted **completely**, which means you can call a function even before it is defined in the code.

### Example:
```js
greet();

function greet() {
  console.log("Hello from hoisted function!");
}
```

### Variable Hoisting
1. var is hoisted but undefined until its assignment.

```js
console.log(a); // undefined
var a = 5;
```

2. let and const are hoisted too, but not initialized — they stay in a temporal dead zone (TDZ) until they are declared.
```js
console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 10;
```

3. Function Expressions Are NOT Hoisted
When a function is assigned to a variable using var, it is not hoisted as a function.

```javascript
sayHi(); // TypeError: sayHi is not a function

var sayHi = function () {
  console.log("Hi!");
};
```