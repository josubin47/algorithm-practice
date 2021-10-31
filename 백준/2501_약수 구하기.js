// 두 개의 자연수 N과 K가 주어졌을 때,
// N의 약수들 중 K번째로 작은 수를 출력하는 프로그램을 작성하시오.

function find(n, k) {
  const divisor = [];

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      divisor.push(i);
    }
  }

  if (divisor.length >= k) {
    console.log(divisor[k - 1]);
  } else {
    console.log(0);
  }
}

const fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split(" ");

find(input[0], input[1]);
