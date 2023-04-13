function solution(n) {
  let answer = 0;
  let _n = n;

  while (_n > 0) {
    if (_n % 2 == 0) {
      _n /= 2;
    } else {
      _n--;
      answer++;
    }
  }

  return answer;
}
