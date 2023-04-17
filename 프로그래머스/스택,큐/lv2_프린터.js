function solution(priorities, location) {
  const answer = [];

  const queue = priorities.slice().map((item, index) => {
    return { doc: item, isDoc: location === index };
  });

  while (queue.length > 0) {
    const cur = queue.shift();
    let flag = queue.every((item) => cur.doc >= item.doc);

    if (!flag) {
      queue.push(cur);
    } else {
      answer.push(cur);
    }
  }

  return answer.findIndex((obj) => obj.isDoc) + 1;
}
