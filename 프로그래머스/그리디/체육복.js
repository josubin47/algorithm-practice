function solution(n, lost, reserve) {
  let realLostL = lost
    .sort((a, b) => a - b)
    .filter((item) => !reserve.includes(item));
  let realReserveL = reserve
    .sort((a, b) => a - b)
    .filter((item) => !lost.includes(item));

  let answerL = n - realLostL.length;

  let countL = 0;
  while (countL <= realLostL.length) {
    if (realReserveL.length < 0) {
      return;
    }

    if (realReserveL.includes(realLostL[countL] + 1)) {
      answerL++;
      realReserveL = realReserveL.filter((r) => r !== realLostL[countL] + 1);
    } else if (realReserveL.includes(realLostL[countL] - 1)) {
      answerL++;
      realReserveL = realReserveL.filter((r) => r !== realLostL[countL] - 1);
    }
    countL++;
  }

  let realLostR = lost
    .sort((a, b) => b - a)
    .filter((item) => !reserve.includes(item));
  let realReserveR = reserve
    .sort((a, b) => b - a)
    .filter((item) => !lost.includes(item));

  let answerR = n - realLostR.length;

  let countR = 0;
  while (countR <= realLostR.length) {
    if (realReserveR.length < 0) {
      return;
    }

    if (realReserveR.includes(realLostR[countR] + 1)) {
      answerR++;
      realReserveR = realReserveR.filter((r) => r !== realLostR[countR] + 1);
    } else if (realReserveR.includes(realLostR[countR] - 1)) {
      answerR++;
      realReserveR = realReserveR.filter((r) => r !== realLostR[countR] - 1);
    }
    countR++;
  }

  return Math.max(answerL, answerR);
}
