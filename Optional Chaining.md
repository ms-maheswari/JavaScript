## Optional Chaining (?.)
- Optional chaining is used to **safely access deeply nested object properties without causing an error** if any property along the path is undefined or null.

- `?.` helps us to avoid runtime errors when accessing nested data.

- Useful when working with APIs, user data, or optional properties.

## Working
`object.property?.subProperty`

`If property exists → access subProperty.`

`If property doesn't exist → return undefined safely.`

### Example
```js
const person = {
  name: "Mahes",
  job: {
    title: "Developer"
  }
};

console.log(person.job?.title);  // Developer
console.log(person.job?.company); // undefined
console.log(person.hobbies?.sports); // undefined
```