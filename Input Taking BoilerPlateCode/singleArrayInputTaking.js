function addOne(size, arr) {
  let temp = "";
  for (let i = 0; i < size; i++) {
    let add = arr[i] + 1;
    temp += arr[i] + 1 + " ";
  }
  console.log(temp.trim());
}

function runProgram(input) {
  // Write Code Here
  input = input.split("\n");
  size = +input[0];
  arr = input[1].split(" ").map(Number);

  addOne(size, arr);
}
if (process.env.USERNAME === "") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
//  Sample Input 1

//  5
//  1 2 3 4 5
//  Sample Output 1

//  2 3 4 5 6
runProgram();
