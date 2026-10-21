// greet.js
// 这是一个用于 PR 练习的示例文件

function greet(name) {
  if (!name) {
    return "Hello, stranger!";
  }
  return `Hello, ${name}!`;
}

if (require.main === module) {
  console.log(greet(process.argv[2]));
}

module.exports = greet;
