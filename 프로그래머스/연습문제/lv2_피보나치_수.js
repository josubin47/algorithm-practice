function solution(n) {
  var answer = 0;

  const arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    const a = arr[i - 1];
    const b = arr[i - 2];
    arr[i] = (a + b) % 1234567;
  }

  return arr[n];
}
