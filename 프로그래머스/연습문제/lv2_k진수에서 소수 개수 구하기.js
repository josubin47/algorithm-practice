function solution(n, k) {
  function isPrimeNumber(num) {
    if (num <= 1) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  const arr = n
    .toString(k)
    .split("0")
    .map((item) => Number(item));
  return arr.filter((num) => isPrimeNumber(num)).length;
}
