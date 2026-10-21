const test = require("node:test");
const assert = require("node:assert/strict");
const greet = require("../greet");

test("greets by name", () => {
  assert.equal(greet("GitHub"), "Hello, GitHub!");
});

test("falls back to stranger for empty input", () => {
  assert.equal(greet(""), "Hello, stranger!");
  assert.equal(greet(), "Hello, stranger!");
});
