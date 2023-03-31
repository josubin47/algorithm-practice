function solution(n, arr1, arr2) {
  const answer = [];

  for (let i = 0; i < n; i++) {
    const temp = [...(arr1[i] | arr2[i]).toString(2)];

    let str = "";
    for (let j = temp.length - n; j < temp.length; j++) {
      if (temp[j] === "1") {
        str += "#";
      } else {
        str += " ";
      }
    }
    answer.push(str);
  }

  return answer;
}
