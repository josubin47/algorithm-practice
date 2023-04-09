function solution(genres, plays) {
  const answer = [];

  const dataObj = genres.reduce((obj, genre, i) => {
    if (!obj[genre]) {
      obj[genre] = { count: plays[i], songList: [] };
    } else {
      obj[genre].count += plays[i];
    }

    obj[genre].songList.push([i, plays[i]]);
    return obj;
  }, {});

  const sorted = Object.values(dataObj).sort((a, b) => b.count - a.count);

  for (let i = 0; i < sorted.length; i++) {
    sorted[i].songList.sort((a, b) => b[1] - a[1]);
    answer.push(sorted[i].songList[0][0]);

    if (sorted[i].songList.length > 1) {
      answer.push(sorted[i].songList[1][0]);
    }
  }

  return answer;
}
