function solution(n) {
  let answer = "";

  let _n = n;
  const mod = ["4", "1", "2"];

  while (_n / 3) {
    answer = mod[_n % 3] + answer;
    _n = Math.floor((_n - 1) / 3);
  }

  return answer;
}
