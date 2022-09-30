function addOne(size, arr) {
  let temp = "";
  for (let i = 0; i < size; i++) {
    temp += arr[i] + 1 + " ";
  }
  console.log(temp.trim());
}

function runProgram(input) {
  // Write Code Here
  input = input.split("\n");

  for (let i = 1; i <= input[0] * 2; i++) {
    size = +input[i];
    i++;
    arr = input[i].split(" ").map(Number);
    addOne(size, arr);
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
// Sample Input 1 

// 2
// 5
// 1 2 3 4 5
// 4
// 1 2 3 4
// Sample Output 1

// 2 3 4 5 6
// 2 3 4 5
runProgram();
