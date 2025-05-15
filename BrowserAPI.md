## Browser APIs

- Browser APIs are built-in features provided by the browser to ***interact with the browser***, user device, or environment.

- JavaScript uses these APIs to perform tasks like **timing**, **storing data**, **detecting location**, and more.

---

##  Common Browser APIs

| **API Name**         | **Purpose**                                   | **Example**                                           |
|----------------------|------------------------------------------------|-------------------------------------------------------|
| `setTimeout()`        | Runs code after a delay.                      | `setTimeout(() => { console.log('Hello'); }, 1000);`   |
| `setInterval()`       | Runs code repeatedly after intervals.         | `setInterval(() => { console.log('Tick'); }, 1000);`   |
| `localStorage`        | Stores data permanently in the browser.       | `localStorage.setItem('name', 'Mahes');`               |
| `sessionStorage`      | Stores data till the browser tab is open.     | `sessionStorage.setItem('name', 'Mahes');`             |
| `Geolocation API`     | Gets user's physical location.                | `navigator.geolocation.getCurrentPosition(successCallback);` |
| `Fetch API`           | Used to make network requests (like GET/POST). | `fetch('https://api.example.com')`                     |

---


### Note :

- `localStorage` data **persists** even after the browser is closed.
- `sessionStorage` data **clears** when the tab/browser is closed.
- `Geolocation API` usually asks the user for **permission** to access location.
- `setTimeout` and `setInterval` are **timers** used to control code execution timing.


