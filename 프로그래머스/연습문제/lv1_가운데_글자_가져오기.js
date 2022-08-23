function solution(s) {
  var answer = '';
  let arr = [...s];

  if (arr.length === 1) {
    return s;
  }

  const num = parseInt(arr.length / 2);

  if (arr.length % 2 === 0) {
    answer = arr[num - 1] + arr[num];
  } else {
    answer = arr[num];
  }

  return answer;
}
