function solution(people, limit) {
  let answer = 0;
  people.sort((a, b) => b - a);

  for (
    let i = 0, j = people.length - 1;
    i < people.length, i <= j;
    i++, answer++
  ) {
    if (people[i] + people[j] <= limit) {
      j--;
    }
  }

  return answer;
}
