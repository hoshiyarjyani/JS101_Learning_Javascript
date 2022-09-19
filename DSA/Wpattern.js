function patternW(N) {
  // Write code here
  for (let i = 0; i < N; i++) {
    let beg = "";
    for (let j = 0; j < 4 * N; j++) {
      if (j == i || j == 2 * N + i) {
        beg += "\\";
      }
      if (j == 2 * N - 1 - i || j == 4 * N - 1 - i) {
        beg += "/";
      } else {
        beg += " ";
      }
    }
    console.log(beg);
  }
}
patternW(4);
