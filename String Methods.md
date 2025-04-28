## 1. `.length`

Returns the length of the string (number of characters).

### Example:
```js
let text = "Hello, world!";
console.log(text.length); // 13
```

## 2. `.toUpperCase()`
Converts all characters in the string to uppercase.

### Example:
```js
let text = "hello";
console.log(text.toUpperCase()); // "HELLO"
```

## 3. `.toLowerCase()`
Converts all characters in the string to lowercase.

### Example:
```js
let text = "HELLO";
console.log(text.toLowerCase()); // "hello"
```

## 4. `.trim()`
Removes whitespace from both ends of the string.

### Example:
```js
let text = "   Hello, world!   ";
console.log(text.trim()); // "Hello, world!"
```

## 5. `.charAt()`
Returns the character at a specified index in the string.

### Example:
```js
let text = "Hello";
console.log(text.charAt(1)); // "e"
```

## 6. `.indexOf()`
- Returns the index of the first occurrence of a specified value in the string.

- Returns -1 if the value is not found.

### Example:
```js
let text = "Hello, world!";
console.log(text.indexOf("world")); // 7
console.log(text.indexOf("JavaScript")); // -1
```

## 7. `.includes()`
- Checks if the string contains a specified substring.

- Returns true or false.

### Example:
```js
let text = "Hello, world!";
console.log(text.includes("world")); // true
console.log(text.includes("JavaScript")); // false
```

## 8. `.substring()`
- Returns a part of the string between two specified indices.

- Does not modify the original string.

### Example:
```js
let text = "Hello, world!";
console.log(text.substring(0, 5)); // "Hello"
```

## 9. `.slice()`
- Extracts a part of the string based on the specified start and end indices.

- Returns a new string, does not modify the original.

### Example:
```js
let text = "Hello, world!";
console.log(text.slice(0, 5)); // "Hello"
```

## 10. `.replace()`
- Replaces the first occurrence of a specified substring with a new substring.

- Can use regular expressions for more advanced searches.

### Example:
```js
let text = "Hello, world!";
let newText = text.replace("world", "JavaScript");
console.log(newText); // "Hello, JavaScript!"
```

## 11. `.split()`
Splits the string into an array of substrings based on a specified separator.

### Example:
```js
let text = "apple,banana,orange";
let fruits = text.split(",");
console.log(fruits); // ["apple", "banana", "orange"]
```

## 12. `.repeat()`
Repeats the string a specified number of times.

### Example:
```js
let text = "Hi! ";
console.log(text.repeat(3)); // "Hi! Hi! Hi! "
```

## 13. `.search()`
-Searches for a specified value within the string and returns the index of the first match.

- Returns -1 if the value is not found.

### Example:
```js
let text = "Hello, world!";
console.log(text.search("world")); // 7
console.log(text.search("JavaScript")); // -1
```