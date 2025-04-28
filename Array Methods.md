## 1. `.push()`

- Adds one or more elements to the end of an array.
- Returns the new length of the array.

### Example:
```js
let fruits = ['Apple', 'Banana'];
fruits.push('Orange'); // Adds 'Orange' to the end
console.log(fruits); // ["Apple", "Banana", "Orange"]
```

## 2. `.pop()`
- Removes the last element from an array.

- Returns the removed element.

### Example:
```js
let fruits = ['Apple', 'Banana', 'Orange'];
let removedFruit = fruits.pop(); // Removes 'Orange'
console.log(fruits); // ["Apple", "Banana"]
console.log(removedFruit); // "Orange"
```

## 3. `.shift()`
- Removes the first element from an array.

- Returns the removed element.

Example:
```js
let fruits = ['Apple', 'Banana', 'Orange'];
let removedFruit = fruits.shift(); // Removes 'Apple'
console.log(fruits); // ["Banana", "Orange"]
console.log(removedFruit); // "Apple"
```

## 4. `.unshift()`
- Adds one or more elements to the beginning of an array.

- Returns the new length of the array.

### Example:
```js
let fruits = ['Banana', 'Orange'];
fruits.unshift('Apple'); // Adds 'Apple' to the beginning
console.log(fruits); // ["Apple", "Banana", "Orange"]
```

## 5. `.concat()`
- Merges two or more arrays or values into a new array.

- Does not modify the original array.

### Example:
```js
let fruits = ['Apple', 'Banana'];
let vegetables = ['Carrot', 'Lettuce'];
let food = fruits.concat(vegetables);
console.log(food); // ["Apple", "Banana", "Carrot", "Lettuce"]
```

## 6. `.join()`
- Combines all elements of an array into a string, separated by a specified separator.

### Example:
```js
let fruits = ['Apple', 'Banana', 'Orange'];
let fruitString = fruits.join(', '); // Join elements with comma and space
console.log(fruitString); // "Apple, Banana, Orange"
```

## 7. `.slice()`
- Returns a shallow copy of a portion of an array into a new array.

- Does not modify the original array.

### Example:
```js
let fruits = ['Apple', 'Banana', 'Orange', 'Grapes'];
let slicedFruits = fruits.slice(1, 3); // Extracts elements from index 1 to index 2
console.log(slicedFruits); // ["Banana", "Orange"]
console.log(fruits); // ["Apple", "Banana", "Orange", "Grapes"]
```

## 8. `.splice()`
- Adds or removes elements from an array at a specific index.

- Modifies the original array.

### Example:
```js
let fruits = ['Apple', 'Banana', 'Orange'];
fruits.splice(1, 1, 'Mango'); // Removes 1 element at index 1 and adds 'Mango'
console.log(fruits); // ["Apple", "Mango", "Orange"]
```

## 9. `.forEach()`
- Executes a provided function once for each array element.

- Does not return a value.

### Example:
```js
let fruits = ['Apple', 'Banana', 'Orange'];
fruits.forEach(function(fruit) {
  console.log(fruit); // Logs each fruit
});
```

## 10. `.map()`                                         
Creates a new array populated with the results of calling a function on every element in the array.

### Example:
```js
let numbers = [1, 2, 3, 4];
let doubled = numbers.map(function(num) {
  return num * 2;
});
console.log(doubled); // [2, 4, 6, 8]
```

## 11. `.filter()`
Creates a new array with all elements that pass the test implemented by the provided function.

### Example:
```js
let numbers = [1, 2, 3, 4, 5];
let evenNumbers = numbers.filter(function(num) {
  return num % 2 === 0; // Filters out odd numbers
});
console.log(evenNumbers); // [2, 4]
```

## 12. `.reduce()`
Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

### Example:
```js
let numbers = [1, 2, 3, 4];
let sum = numbers.reduce(function(acc, num) {
  return acc + num;
}, 0);
console.log(sum); // 10
```


## 13. `.find()`
Returns the first element in the array that satisfies the provided testing function.

### Example:
```js
let numbers = [5, 10, 15, 20];
let found = numbers.find(function(num) {
  return num > 10; // Finds the first number greater than 10
});
console.log(found); // 15
```

## 14. `.findIndex()`
Returns the index of the first element in the array that satisfies the provided testing function.

## Example:
```js
let numbers = [5, 10, 15, 20];
let foundIndex = numbers.findIndex(function(num) {
  return num > 10; // Finds the index of the first number greater than 10
});
console.log(foundIndex); // 2
```

## 15. `.reverse()`
Reverses the elements of an array in place.

```js
const numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers);  // [5, 4, 3, 2, 1]
```