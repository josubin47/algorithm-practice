function solution(skill, skill_trees) {
  let answer = skill_trees.length;

  const _skill_trees = skill_trees.map((item) =>
    [...item].filter((ele) => skill.includes(ele))
  );

  for (let i = 0; i < _skill_trees.length; i++) {
    for (let j = 0; j < _skill_trees[i].length; j++) {
      if (skill[j] !== _skill_trees[i][j]) {
        answer--;
        break;
      }
    }
  }

  return answer;
}
