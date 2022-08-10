function solution(absolutes, signs) {
  let fn = function (prev, curr, index) {
    return (
      (index === 1 ? (signs[0] ? prev : prev * -1) : prev) +
      (signs[index] ? curr : curr * -1)
    );
  };

  let result = absolutes.reduce(fn);

  return result;
}
