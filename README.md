# test10212

A small Node.js project for practicing pull requests. It exports a `greet(name)` function.

## Requirements

- Node.js 20 or newer

## Usage

```bash
npm start              # Hello, stranger!
node greet.js Haiwen   # Hello, Haiwen!
```

```js
const greet = require("./greet");
greet("GitHub"); // "Hello, GitHub!"
greet("");       // "Hello, stranger!"
```

## Tests

```bash
npm test
```

GitHub Actions runs the tests on every push to `main` and on every pull request.
