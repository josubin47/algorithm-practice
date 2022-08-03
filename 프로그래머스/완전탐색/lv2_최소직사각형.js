function solution(sizes) {
  let w = [];
  let h = [];

  let sortArr = sizes.forEach((arr) => {
    arr.sort(function (a, b) {
      return a - b;
    });

    w.push(arr[0]);
    h.push(arr[1]);
  });

  return Math.max(...w) * Math.max(...h);
}
