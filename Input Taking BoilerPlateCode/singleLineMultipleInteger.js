function addone(input) {
  for (let i = 0; i < input.length; i++) {
    let add = input[i] + 1;
    console.log(add);
  }
}

function runProgram(input) {
  // Write Code Here

  input = input.split(" ").map(Number);

  addone(input);
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

// 1 2 3 4
// Sample Output 1

// 2
// 3
// 4
// 5
runProgram();