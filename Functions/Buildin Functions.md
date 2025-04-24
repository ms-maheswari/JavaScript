## Buildin functions

## map
- Transforms each element in an array.
- Returns a new array.

## Syntax
```js
array.map(callback(element, index, array))
```
`element:` The current element being processed

`index:` The index of the current element

`array:` The original array

## Example
```js
const numbers = [1, 2, 3];
const squared = numbers.map(num => num * num);
console.log(squared); // [1, 4, 9]
```
## filter
- Filters elements based on a condition.
- Returns a new array.

## Syntax
```js
array.filter(callback(element, index, array))
```
## Example
```js
const numbers = [1, 2, 3, 4, 5];
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4]
```

## reduce
- Reduces the array to a single value.
- Useful for summing, aggregating, etc.

## Syntax
```js
array.reduce(callback(accumulator, currentValue, index, array), initialValue)
```
`accumulator:` variable to store the result

`currentValue:` The current element

`initialValue:`  Starting value of the accumulator
## Example
```js
const numbers = [1, 2, 3, 4];
const total = numbers.reduce((sum, num) => sum + num, 0);
console.log(total); // 10
```