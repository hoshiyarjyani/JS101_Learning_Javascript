//Enter code here

function matrix(arr, size) {
  let temp = "";
  for (let i = 0; i < size; i++) {
    temp += arr[i] + 1 + " ";
  }
  console.log(temp.trim());
}

function runProgram(input) {
  input = input.split("\n");
  line = +input[0];
  for (let i = 1; i <= line; i++) {
    arr = input[i].split(" ").map(Number);
    size = arr.length;
    matrix(arr, size);
  }
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
runProgram();
// Sample Input 1 

// 3 
// 1 2 3
// 4 5 6
// 7 8 9
// Sample Output 1

// 2 3 4
// 5 6 7
// 8 9 10