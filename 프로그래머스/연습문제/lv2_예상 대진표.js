function solution(n, a, b) {
  let answer = 1;

  let currentA = a;
  let currentB = b;

  function cal(num) {
    if (num === 1) return 1;
    return num % 2 === 0 ? Math.floor(num / 2) : Math.floor(num / 2) + 1;
  }

  for (let i = 0; i < n; i++) {
    if (currentA % 2 === 0 && currentB === currentA - 1) {
      break;
    } else if (currentB % 2 === 0 && currentA === currentB - 1) {
      break;
    }

    currentA = cal(currentA);
    currentB = cal(currentB);

    answer++;
  }

  return answer;
}
