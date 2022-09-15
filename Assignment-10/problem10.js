// Problem-5
// Write a function to convert a character to lower case
// Use this function to convert a given word to lower case
// Use that function to convert an array of strings to array of lower case strings
// Sample Input ["MA", "SA", "I", "SCH", "OOL"]
// Sample Output ["ma", "sa", "i", "sch", "ool"]

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
// one char print in lower
let a = "H";
let result1 = lwrCase(a,a.length);
console.log(result1);

//string convert into lower
let ab = "HOSHIYARJYANI";
let result2 = lwrCase(ab,ab.length);
console.log(result2);

//array convert in lower
let z =[];
let abc = ["MA", "SA", "I", "SCH", "OOL"];
for (let j = 0; j < abc.length; j++){
let result3 = lwrCase(abc[j], abc[j].length);
z.push(result3);
}console.log(z);
