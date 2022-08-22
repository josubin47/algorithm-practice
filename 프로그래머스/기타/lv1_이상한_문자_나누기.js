function solution(s) {
  const arr = s.split(' ');
  let answer = '';
  for (let i = 0; i < arr.length; i++) {
    let temp = [...arr[i]];

    for (let j = 0; j < temp.length; j++) {
      if (j % 2 === 0) {
        answer += temp[j].toUpperCase();
      } else {
        answer += temp[j].toLowerCase();
      }
    }

    if (i != arr.length - 1) {
      answer += ' ';
    }
  }

  return answer;
}
