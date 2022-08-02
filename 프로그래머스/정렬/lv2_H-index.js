function solution(citations) {
  let answer = 0;

  citations.sort(function (a, b) {
    return a - b;
  });

  const len = citations.length;

  for (let i = 0; i < len; i++) {
    let hIndex = len - i;
    if (citations[i] >= hIndex) {
      answer = hIndex;
      break;
    }
  }
  return answer;
}
