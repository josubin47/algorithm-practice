function solution(s) {
  let answer = "";
  const temp = [...s];
  const arr = [];

  let flag = true;

  for (let i = 0; i < temp.length; i++) {
    if (temp[i] === " ") {
      flag = true;
      answer += " ";
      continue;
    }

    if (flag) {
      answer += temp[i].toUpperCase();
      flag = false;
    } else {
      answer += temp[i].toLowerCase();
      flag = false;
    }
  }

  return answer;
}
