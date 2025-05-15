## Fetch API

- The **Fetch API** is used to make network requests (like GET, POST, PUT, DELETE) from JavaScript.

- It replaces the older `XMLHttpRequest` and provides a simpler, cleaner way to work with APIs.



##  Syntax
```js
fetch(url, options)
  .then(response => response.json())
  .then(data => {
    // Handle the data
  })
  .catch(error => {
    // Handle any errors
  });
```
- `url` — the address you are requesting.

- `options` — optional settings like method, headers, body, etc.

## Basic Example — GET Request
```js
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json()) // Convert response to JSON
  .then(data => console.log(data))    // Work with the data
  .catch(error => console.error('Error:', error));
```

### Note :

- fetch is `Promise-based` — so you use .then() and .catch().

- By `default`, fetch uses the `GET` method.

- You must manually call `.json() to parse the response into JavaScript objects.`

- Always add error handling with .catch().