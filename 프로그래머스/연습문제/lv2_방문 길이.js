function solution(dirs) {
  const command = {
    U: [0, 1],
    D: [0, -1],
    R: [1, 0],
    L: [-1, 0],
  };

  const routes = new Set();
  let current = [0, 0];
  for (let i = 0; i < dirs.length; i++) {
    const nextX = current[0] + command[dirs[i]][0];
    const nextY = current[1] + command[dirs[i]][1];

    if (nextX > 5 || nextX < -5 || nextY > 5 || nextY < -5) {
      continue;
    }

    routes.add("" + current[0] + current[1] + nextX + nextY);
    routes.add("" + nextX + nextY + current[0] + current[1]);

    current = [nextX, nextY];
  }

  return routes.size / 2;
}
