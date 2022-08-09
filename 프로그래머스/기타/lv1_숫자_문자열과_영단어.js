function solution(s) {
  let list = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  const key_list = Object.keys(list);

  let answer = s;

  while (isNaN(Number(answer))) {
    for (let i = 0; i < key_list.length; i++) {
      answer = answer.replace(key_list[i], String(list[key_list[i]]));
    }
  }

  return Number(answer);
}
