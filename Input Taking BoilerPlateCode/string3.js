function string(size, str) {
  let temp = "";
  for (let i = 0; i < size; i++) {
    temp += str[i] + " ";
  }
  console.log(temp.trim());
}

function runProgram(input) {
  input = input.split("\n");
  testcase = input[0];
  for (let i = 1; i <= testcase; i++) {
    str = input[i].split(" ");
    size = str.length;
    string(size, str);
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

// 2
// my name is ankush
// my name is rutwik
// Sample Output 1

// my name is ankush
// my name is rutwik