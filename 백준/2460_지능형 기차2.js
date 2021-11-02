const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let start = Number(input[0].split(" ")[1]); //출발역 시작 인원

let max = start;
let current = start;

for (let i = 1; i <= 8; i++) {
  current =
    current + Number(input[i].split(" ")[1]) - Number(input[i].split(" ")[0]);

  if (max < current) {
    max = current;
  }
}

console.log(max);

var a = 0;
console.log(
  require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map(function (e) {
      return e.split(" ").map(function (e) {
        return parseInt(e);
      });
    })
    .map(function (e) {
      a = a - e[0] + e[1];
      return a;
    })
    .sort(function (a, b) {
      return b - a;
    })[0]
);
