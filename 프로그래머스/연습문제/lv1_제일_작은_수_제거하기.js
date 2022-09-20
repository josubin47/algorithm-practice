function solution(arr) {
  if (arr.length <= 1) {
    return [-1];
  }

  const num = Math.min(...arr);

  return arr.filter((element) => element != num);
}
