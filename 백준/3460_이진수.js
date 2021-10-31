// 양의 정수 n이 주어졌을 때, 이를 이진수로 나타냈을 때
// 1의 위치를 모두 찾는 프로그램을 작성하시오.
// 최하위 비트(least significant bit, lsb)의 위치는 0이다.

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let t = input[0];

while (t !== 0) {
  let result = "";
  let count = 0;
  let temp = input[1];

  while (parseInt(temp / 2) !== 0) {
    if (temp % 2 !== 0) {
      result += count + " ";
    }
    temp = parseInt(temp / 2);
    count++;
  }
  result += count;
  console.log(result + "\n");

  t--;
}
