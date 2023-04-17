function solution(k, dungeons) {
  let answer = 0;

  const visited = new Array(dungeons.length).fill(false);

  function dfs(restK, level) {
    for (let i = 0; i < dungeons.length; i++) {
      const [minNeed, need] = dungeons[i];
      if (!visited[i] && minNeed <= restK) {
        visited[i] = true;
        dfs(restK - need, level + 1);
        visited[i] = false;
      }
    }

    answer = Math.max(answer, level);
  }

  dfs(k, 0);

  return answer;
}
