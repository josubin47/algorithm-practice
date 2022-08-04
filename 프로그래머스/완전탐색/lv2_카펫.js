function solution(brown, yellow) {
  let total = brown + yellow;

  for (let i = 3; i <= total / 3; i++) {
    for (let j = 3; j <= total / 3; j++) {
      if (i * j === total) {
        if ((i - 2) * (j - 2) === yellow) {
          return [i, j].sort(function (a, b) {
            return b - a;
          });
        }
      }
    }
  }
}
