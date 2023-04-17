function solution(n, times) {
  const _times = times.sort((a, b) => a - b);
  let left = 1;
  let right = _times[_times.length - 1] * n;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    let count = 0;
    _times.forEach((val) => {
      count += Math.floor(mid / val);
      if (count >= n) {
        mid = Math.floor((left + right) / 2);
        return;
      }
    });

    if (count >= n) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return left;
}
