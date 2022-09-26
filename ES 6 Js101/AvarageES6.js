// PROBLEM 2
// Write code to calculate the average of an array
// If there are no items in the array it should return 0
// NOTE: Create a function to find the sum of elements in an array and use that function to find out the average
// Do this Problem using Arrow Function

Avarage = (arr) => {
  let sum = 0;

  arr.forEach((elem) => {
    sum += elem;
  });

  let Avr = sum / arr.length;
  return Avr;
};

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let ans = Avarage(arr);
console.log(ans);
