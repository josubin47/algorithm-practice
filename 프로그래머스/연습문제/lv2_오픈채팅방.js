function solution(record) {
  const answer = [];
  const id_name = {};

  function makeSentence(info) {
    const name = info.split(" ")[1];

    if (info.includes("Enter")) {
      answer.push(id_name[name] + "님이 들어왔습니다.");
    }

    if (info.includes("Leave")) {
      answer.push(id_name[name] + "님이 나갔습니다.");
    }
  }

  for (let i = 0; i < record.length; i++) {
    const [state, userId, name] = record[i].split(" ");

    if (state === "Leave") {
      continue;
    }

    id_name[userId] = name;
  }

  record.map((item) => makeSentence(item));

  return answer;
}
