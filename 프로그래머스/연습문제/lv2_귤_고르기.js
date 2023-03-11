function solution(k, tangerine) {
  var answer = 0;

  const dict = {};

  tangerine.forEach((item) => {
    if (dict[item]) {
      dict[item] += 1;
    } else {
      dict[item] = 1;
    }
  });

  const kind = Object.values(dict).sort((a, b) => b - a);

  let sum = 0;

  for (let num of kind) {
    answer++;
    sum += num;

    if (sum >= k) break;
  }

  return answer;
}
