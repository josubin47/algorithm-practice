function solution(s) {
  let arr = [...s];

  let cnt = 0;

  for (let i = 0; i < arr.length; i++) {
    arr[i] === '(' ? cnt++ : cnt--;

    if (cnt < 0) {
      return false;
    }
  }

  return cnt === 0;
}
