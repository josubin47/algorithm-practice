function solution(array, commands) {
  let answer = [];

  commands.map((item) => {
    const i = item[0];
    const j = item[1];
    const k = item[2];

    const sliceArr = array.slice(i - 1, j);

    const arr = sliceArr.sort(function (a, b) {
      return a - b;
    });

    answer.push(arr[k - 1]);
  });

  return answer;
}
