function zTraversal(N, arr) {
  //write code here
  let temp = "";
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (i == 0 || i == N - 1) {
        temp += arr[i][j] + " ";
      } else if (i + j == N - 1) {
        temp += arr[i][j] + " ";
      }
    }
  }
  console.log(temp);
}

let arr = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];
zTraversal(4,arr);