function solution(land) {
  const dp = [land[0]];
  for (let i = 1; i < land.length; i++) {
    dp.push(new Array(4).fill(0));
  }

  for (let i = 1; i < land.length; i++) {
    dp[i][0] = Math.max(dp[i - 1][1], dp[i - 1][2], dp[i - 1][3]) + land[i][0];
    dp[i][1] = Math.max(dp[i - 1][0], dp[i - 1][2], dp[i - 1][3]) + land[i][1];
    dp[i][2] = Math.max(dp[i - 1][0], dp[i - 1][1], dp[i - 1][3]) + land[i][2];
    dp[i][3] = Math.max(dp[i - 1][0], dp[i - 1][1], dp[i - 1][2]) + land[i][3];
  }

  return Math.max(...dp[dp.length - 1]);
}
