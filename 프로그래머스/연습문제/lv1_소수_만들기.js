function solution(nums) {
  let answer = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        let sum = nums[i] + nums[j] + nums[k];
        let flag = true;

        for (let z = 2; z < sum; z++) {
          if (sum % z === 0) {
            flag = false;
            break;
          }
        }
        if (flag) {
          answer++;
        }
      }
    }
  }

  return answer;
}
