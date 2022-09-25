function specificDiagonals(R, C, matrix, K) {
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (matrix[i][j] == K) {
        r = i;
        c = j;
        break;
      }
    }
  }
  let sum = r + c;
  let diff = r - c;
  let left = "";
  let right = "";
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (i - j == diff) {
        left = left + matrix[i][j] + " ";
      }
      if (i + j == sum) {
        right = right + matrix[i][j] + " ";
      }
    }
  }
  console.log(left);
  console.log(right);
}

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
specificDiagonals(3,3,matrix,6);
specificDiagonals(3,3,matrix,5);
