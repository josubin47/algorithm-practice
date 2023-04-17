function solution(bridge_length, weight, truck_weights) {
  const _truck = truck_weights;

  let time = 0;
  const queue = new Array(bridge_length).fill(0); // 다리 위에 올라간 트럭 큐
  let currentWeight = 0; // 현재 다리 하중

  time++;
  queue.shift();
  queue.push(_truck[0]);
  currentWeight = _truck.shift();

  while (currentWeight > 0) {
    time++;
    currentWeight -= queue.shift();

    // 공간과 하중에 여유가 있다면
    if (currentWeight + _truck[0] <= weight) {
      currentWeight += _truck[0];
      queue.push(_truck.shift());
    } else {
      queue.push(0);
    }
  }

  return time;
}
