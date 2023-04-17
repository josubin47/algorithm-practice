function solution(s) {
  const answer = [0, 0];

  if (s === "1") {
    return answer;
  }

  let _s = s;

  while (_s.length !== 1) {
    const prevLength = _s.length;
    _s = _s.replace(/0/g, "");

    answer[1] += prevLength - _s.length;

    _s = _s.length.toString(2);
    answer[0]++;
  }

  return answer;
}
