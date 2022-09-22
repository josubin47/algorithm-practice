function solution(s, n) {
  let arr = [...s];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ' ') {
      continue;
    }

    let num = arr[i].charCodeAt(0);
    let val = num + n;

    if (arr[i] === arr[i].toUpperCase()) {
      if (val > 90) {
        val = 65 + (val - 90) - 1;
      }
    } else {
      if (val > 122) {
        val = 97 + (val - 122) - 1;
      }
    }

    arr[i] = String.fromCharCode(val);
  }

  return arr.join('');
}
