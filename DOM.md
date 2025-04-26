## DOM 
###  DOM = HTML control using JavaScript
- DOM stands for Document Object Model.

- It represents the ***HTML page as a tree structure.***

- Using JavaScript, you can access and change the content, structure, and style of the webpage.

-  DOM is the live copy of the webpage that JavaScript can control.


## Basic DOM Methods



| **Method** | **Purpose**                     | **Example**                            |
|--------------|-------------------------------------|----------------------------------------|
| `getElementById`          | Select element by id                            | `document.getElementById("title")`                            |
| `getElementsByClassName`          | Select elements by class name                         | `document.getElementsByClassName("items")`                            |
| `getElementsByTagName`          | Select elements by tag name                      | `document.getElementsByTagName("h1")`                           |
| `querySelector`          | Select first matching element (CSS style)                            | `document.querySelector(".btn")`                           |
| `querySelectorAll`          | Select all matching elements (NodeList)                | `document.querySelectorAll(".item")`                           |
---

## Example
```html
<h1 id="title">Welcome</h1>
<button id="btn">Click Me</button>
```

```js
// Select elements
const title = document.getElementById("title");
const button = document.getElementById("btn");

// Change text
title.innerText = "Hello Mahes!";

// Change style
title.style.color = "blue";

// Add event
button.addEventListener("click", () => {
  title.innerText = "Button Clicked!";
});
```
