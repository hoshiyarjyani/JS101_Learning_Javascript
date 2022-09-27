// Problem 3
// Write a function to convert a character to lower case
// Use this function to convert a given word to lower case
// Use that function to convert an array of strings to array of lower case strings
// Sample Input ["MA", "SA", "I", "SCH", "OOL"]
// Sample Output ["ma", "sa", "i", "sch", "ool"]

let uprCase = [];
lowercase = (arr) => {
  var beg = "";
  for (let i = 0; i < arr.length; i++) {
    arr.charCodeAt(i) >= 65 && arr.charCodeAt(i) <= 90
      ? (beg += String.fromCharCode(arr.charCodeAt(i) + 32))
      : null;
  }
  uprCase.push(beg);
  return uprCase;
};

let Input = ["MA", "SA", "I", "SCH", "OOL"];

for (let i = 0; i < Input.length; i++) {
  var ans = lowercase(Input[i]);
}
console.log(ans);
