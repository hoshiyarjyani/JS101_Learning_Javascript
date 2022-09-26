// Problem 4
// Given a string swap the case and print the output
// Sample Input - Test
// Sample Output - tEST
// NOTE: Use multiple functions to achieve the result, NOT one single code block

var beg = "";
Swapping = (str) => {
  for (let i = 0; i < str.length; i++) {
    str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90
      ? (beg += String.fromCharCode(str.charCodeAt(i) + 32))
      : (beg += String.fromCharCode(str.charCodeAt(i) - 32));
  }
  return beg;
};
let str = "Test";
let result = Swapping(str);
console.log(result);
