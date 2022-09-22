function solution(arr) {
  const s = arr.reduce(function (sum, cv) {
    return sum + cv;
  }, 0);

  return s / arr.length;
}
