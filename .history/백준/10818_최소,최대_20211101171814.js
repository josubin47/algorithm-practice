const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let count = input[0];
const num = input[1].split(" ");

let min;
let max;

num.forEach((item) => {
  if (item < min) {
    min = item;
  }
  if (item > max) {
    max = item;
  }
});

console.log(max + " " + min);
