function solution(num) {
  if (num === 1) {
    return 0;
  }

  let temp = num;

  for (let i = 1; i <= 500; i++) {
    if (temp % 2 === 0) {
      temp /= 2;
    } else {
      temp = temp * 3 + 1;
    }

    if (temp === 1) {
      return i;
    }
  }

  return -1;
}
