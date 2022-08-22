function solution(n) {
  let answer = 0;

  for (let i = 2; i <= n; i++) {
    let flag = true;

    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        flag = false;
        break;
      }
    }

    if (flag) {
      answer++;
    }
  }
  return answer;
}
