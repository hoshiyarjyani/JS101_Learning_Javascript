// Problem-1
// Write a function named addNumbers which takes two numbers as input and return their sum

// Use the function to calculate the sum of given three numbers

function addNumbers(x,y){
  return (x+y);
}
function threeNumber(a,b,c){
  return (a+b+c);
}

let sum = addNumbers(5,10);
let sumThree = threeNumber(sum,10,20);
console.log(sumThree);