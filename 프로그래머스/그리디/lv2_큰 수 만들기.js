function solution(number, k) {
  const arr = [];
  let _k = k;
  for (let i = 0; i < number.length; i++) {
    while (arr.length > 0 && arr[arr.length - 1] < number[i] && _k > 0) {
      _k--;
      arr.pop();
    }

    arr.push(number[i]);
  }

  if (_k > 0) {
    arr.splice(number.length - _k, _k);
  }

  return arr.join("");
}
