function solution(id_list, report, k) {
  let jsonList = {};
  let reportList = {};

  for (let i = 0; i < id_list.length; i++) {
    jsonList[id_list[i]] = [];
    reportList[id_list[i]] = 0;
  }

  for (let i = 0; i < report.length; i++) {
    let idArr = report[i].split(' ');
    jsonList[idArr[0]].push(idArr[1]);
  }

  let keyList = Object.keys(jsonList);

  for (let i = 0; i < keyList.length; i++) {
    const set = new Set(jsonList[keyList[i]]);
    const arr = [...set];

    arr.forEach((item) => {
      reportList[item] += 1;
    });
  }

  let reportKeyList = Object.keys(reportList);

  let result = [];

  for (let i = 0; i < reportKeyList.length; i++) {
    if (reportList[reportKeyList[i]] >= k) {
      result.push(reportKeyList[i]);
    }
  }

  let answer = [];

  for (let i = 0; i < keyList.length; i++) {
    answer.push(
      result.filter((item) => jsonList[keyList[i]].includes(item)).length
    );
  }

  return answer;
}
