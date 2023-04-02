function solution(maps) {
  let n = maps.length;
  let m = maps[0].length;

  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  const queue = [];
  const visited = new Array(n).fill(null).map(() => new Array(m).fill(false));

  queue.push([0, 0, 1]);
  visited[0][0] = true;

  while (queue.length > 0) {
    const [x, y, dist] = queue.shift();
    if (x === n - 1 && y === m - 1) {
      return dist;
    }

    for (let i = 0; i < 4; i++) {
      const ni = x + dx[i];
      const nj = y + dy[i];

      if (
        ni >= 0 &&
        ni < n &&
        nj >= 0 &&
        nj < m &&
        maps[ni][nj] === 1 &&
        !visited[ni][nj]
      ) {
        visited[ni][nj] = true;
        queue.push([ni, nj, dist + 1]);
      }
    }
  }

  return -1;
}
