function solution(word) {
  const dict = [];

  for (let i = 1; i <= 5; i++) {
    dfs("", i);
  }

  function dfs(word, length) {
    const alphabet = [..."AEIOU"];
    if (length === word.length) {
      dict.push(word);
      return;
    }

    alphabet.forEach((val) => {
      dfs(word + val, length);
    });
  }

  return dict.sort().indexOf(word) + 1;
}
