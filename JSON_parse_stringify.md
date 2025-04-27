## JSON.parse() and JSON.stringify()

In JavaScript, **JSON** (JavaScript Object Notation) is used to **`send and receive data between a server and a client`**.

---

##  JSON.stringify()

- Converts a **`JavaScript object or array into a JSON string`**.
- Used when `sending data` to a server (like in POST requests).

### Example
```javascript
const user = {
  name: "Mahes",
  age: 22
};

const jsonString = JSON.stringify(user);
console.log(jsonString); 
// Output: '{"name":"Mahes","age":22}'
```

## JSON.parse()
- Converts a **`JSON string into a JavaScript object`.**
- Used when `receiving data` from a server.

### Example
```js
const jsonData = '{"name":"Mahes","age":22}';

const userObject = JSON.parse(jsonData);
console.log(userObject.name); 
// Output: Mahes
```

### Note :
- JSON data `must be in double quotes ("")`, not single quotes.

- `JSON.stringify() — Object ➔ JSON String`

- `JSON.parse() — JSON String ➔ Object`

## .json()

- **`.json()`** is a method used with the **Fetch API** response.
- It **parses the response body** as **JSON** and returns the result as a **JavaScript object.**


```javascript
fetch('https://api.example.com/user')
  .then(response => response.json())  // Converts the response to a JavaScript object
  .then(data => {
    console.log(data); // Now you can access the data as an object
  })
  .catch(error => {
    console.log("Error:", error);
  });
```

---

### Key Differences:

| `.json()` | `JSON.parse()` | `JSON.stringify()` |
|:----------|:---------------|:-------------------|
| Used to convert the response body of a **fetch() request** into a JavaScript object. | Converts a **JSON string** into a JavaScript object. | Converts a JavaScript object into a **JSON string**. |
| Returns a **Promise**, so it is asynchronous. | Works synchronously. | Works synchronously. |
| Automatically parses the response as JSON. | You must manually call `JSON.parse()` on a JSON string. | You must manually call `JSON.stringify()` on a JavaScript object. |

---
