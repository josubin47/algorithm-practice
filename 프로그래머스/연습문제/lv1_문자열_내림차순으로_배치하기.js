function solution(s) {
  const arr = [...s]
    .map((str) => str.charCodeAt(0))
    .sort(function (a, b) {
      return b - a;
    })
    .map((str) => String.fromCharCode(str));

  return arr.join('');
}
