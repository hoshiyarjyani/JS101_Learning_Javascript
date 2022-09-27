// Problem 1
// Write a function isOdd which returns a boolean value based on the number is odd or not
// Use this function to print the odd numbers from 0 to a given limit(included)
// Do this using Arrow Function

isOdd = (num) => {
  let odd = false;
  num % 2 == 1 ? (odd = true) : (odd = false);
  return odd;
};

for (let i = 0; i <= 10; i++) {
  let result = isOdd(i);
  console.log(i, result);
}
