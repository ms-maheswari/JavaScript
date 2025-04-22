## Loops
JavaScript provides several types of loops to execute a block of code repeatedly.

## 1. for
It iterates through the block of code, when the **number of iterations is known**.

### Syntax
```js
for(initialization; condition; increment / decrement){
    // block of code
}
```

### Example
```js
for(int i = 0; i < 5; i++){
    console.log(i);
}
```

## 2. while
It **depends on the condition** and iterates through the block of code.

### Syntax

```js
while(condition){
    //block of code
}
```

### Example
```js
let i= 1;
while(i < 5){
    console.log(i);
    i++;
}
```
## 3. do...while
It is similar to while but **execute atleast once**, even if the condition is false.

### Syntax
```js
do{
    //block of code
}while(condition);
```

### Example
```js
let i= 1;
do{
    console.log(i);
    i++;
}while(i<5);
```

## 4. for...in

It is used to iterate over **properties of an objects**.

### Syntax
```js
for(let key in object){
    //block of code
}
```

### Example
```js
const person = {name: "Mahes", age: 21, city: "Tirunelveli"};
for(let key in person){
    console.log(key, ":", person[key]);
}
```

Output
```js
name : Mahes
age : 21
city : Tirunelveli
```

## 5. for...of
It is used to **iterate over iterable objects** like arrays, strings or sets

### Syntax
```js
for(let value of iterable){
    //block of code
}
```

### Example
```js
const fruits = ["Apple", "Banana", "Cherry"];
for(let fruit of fruits){
    console.log(fruit);
}
```

Output
```js
Apple
Banana
Cherry
```