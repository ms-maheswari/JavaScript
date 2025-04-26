## Short-Circuiting (|| and &&)

Short-circuiting means that JavaScript **stops evaluating expressions as soon as the result is determined.**

## 1. Logical OR (||)

- Returns the **first truthy value**.

- If the first value is truthy, it immediately returns that value without checking the next.

### Example
```js
console.log(0 || 'Hello');      // 'Hello' (0 is falsy)
console.log('Mahes' || 'Hello'); // 'Mahes' (truthy)
```
## 2. Logical AND (&&)

- Returns the **first falsy value**.

- If the first value is falsy, it immediately returns that value.

- If all are truthy, returns the last value.

### Example
```js
console.log(1 && 'Hello');   // 'Hello' (1 is truthy)
console.log(0 && 'Hello');   // 0 (falsy)
```
