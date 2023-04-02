const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = input[0];
const bombsMap = [];
let answer = 0;

for (let i = 1; i <= N; i++) {
  bombsMap.push(input[i]);
}

if (bombsMap.length < 3) {
  console.log(answer);
  return;
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (map[i][j] === "#") {
      let bombs = 0;
      for (let dx = -1; dx <= 1; dx++) {
        for (let dy = -1; dy <= 1; dy++) {
          const ni = i + dx;
          const nj = j + dy;
          if (ni >= 0 && ni < N && nj >= 0 && nj < N && map[ni][nj] === "*") {
            bombs++;
          }
        }
      }
      answer += bombs;
    }
  }
}

console.log(answer);
