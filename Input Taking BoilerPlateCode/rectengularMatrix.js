//Enter code here

function matrix(r, c, arr) {
  for (let i = 0; i < r; i++) {
    var temp = "";
    for (let j = 0; j < c; j++) {
      temp += arr[j] + 1 + " ";
    }
  }
  console.log(temp.trim());
}

function runProgram(input) {
  input = input.split("\n");
  line = input[0].split(" ").map(Number);
  r = +line[0];
  c = +line[1];
  for (let i = 1; i < input.length; i++) {
    arr = input[i].split(" ").map(Number);
    matrix(r, c, arr);
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
