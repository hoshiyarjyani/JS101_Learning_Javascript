// Problem-6
// Given a string swap the case and print the output
// Sample Input - Test
// Sample Output - tEST
// NOTE: Use multiple functions to achieve the result, NOT one single code block

function lwrCase(str, N) {
  let s = "";
  for (let i = 0; i < N; i++) {
    let x = str.charCodeAt(i);
    if (x >= 65 && x <= 90) {
      s += String.fromCharCode(x + 32);
    }
  }
  return s;
}

function UprCase(str, N) {
  let s = "";
  for (let i = 0; i < N; i++) {
    let x = str.charCodeAt(i);
    if (x >= 97 && x <= 122) {
      s += String.fromCharCode(x - 32);
    }
  }
  return s;
}

//string convert into lower
let a = "Test";
let result = lwrCase(a,a.length);


let ab = "Test";
let result2 = UprCase(ab,ab.length);

let str = result+result2;
console.log(str);