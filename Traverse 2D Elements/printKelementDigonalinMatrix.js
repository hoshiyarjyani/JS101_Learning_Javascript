function specificDiagonals(R, C, matrix, K) {
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (matrix[i][j] == K) {
        var row = i;
        var coulmn = j;
        break;
      }
    }
  }
  let sum = row + coulmn;
  let diff = row - coulmn;
  let d1 = "";
  let d2 = "";
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (i - j == diff) {
        d1 += matrix[i][j] + " ";
      }
      if (i + j == sum) {
        d2 += matrix[i][j] + " ";
      }
    }
  }
  console.log(d1);
  console.log(d2);
}

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
specificDiagonals(3, 3, matrix, 6);
specificDiagonals(3, 3, matrix, 5);
