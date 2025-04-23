## Conditional Statements
JavaScript conditional statements are used to perform different actions based on different conditions.
## 1. if

## Syntax
```js
if (condition) {
    // block of code executed if condition is true
}
```
## Example

```js
let age = 18;

if (age >= 18) {
    console.log("You are eligible to vote.");
}
```

## 2. if...else
## Syntax
```js
if (condition) {
    // block executed if condition is true
} else {
    // block executed if condition is false
}
```

## Example
```js
let age = 16;

if (age >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}
```


## 3. if...else if...else
## Syntax
```js
if (condition1) {
    // block executed if condition1 is true
} else if (condition2) {
    // block executed if condition2 is true
} else {
    // block executed if none of the above conditions are true
}
```

## Example
```js
let marks = 75;

if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 75) {
    console.log("Grade B");
} else {
    console.log("Grade C");
}
```
## 4. switch
## Syntax
```js
switch(expression) {
    case value1:
        // block executed if expression === value1
        break;
    case value2:
        // block executed if expression === value2
        break;
    default:
        // block executed if no case matches
}
```

## Example
```js
let day = 3;

switch(day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid day");
}
```