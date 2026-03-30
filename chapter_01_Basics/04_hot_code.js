console.log("Hello, world!");
function add(x, y) {
  return x + y;
}
let result;
for (let i = 0; i < 1000; i++) {
  result = add(i, i + 1);
}   
console.log("After 10000 calls:", result);