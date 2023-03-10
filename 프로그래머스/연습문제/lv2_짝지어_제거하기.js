function solution(s) {
  const arr = [...s];

  if (arr.length % 2 !== 0) return 0;

  const stack = [];

  for (let i = 0; i < arr.length; i++) {
    if (stack.length === 0 || arr[i] !== stack[stack.length - 1]) {
      stack.push(arr[i]);
    } else {
      stack.pop();
    }
  }

  return stack.length === 0 ? 1 : 0;
}
