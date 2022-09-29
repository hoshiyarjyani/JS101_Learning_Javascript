function primeAndComposite(N, M, arr) {
  //write code here
  let sum = 0;
  let composit = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      let x = arr[i][j];
      let count = 0;
      for (let k = 1; k <= x; k++) {
        if (x % k == 0) {
          count++;
        }
      }
      if (count == 2) {
        sum += x;
      } else if (x == 1) {
        continue;
      } else {
        composit += x;
      }
    }
  }
  console.log(Math.abs(composit - sum));
}
let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
primeAndComposite(3, 3, arr);
