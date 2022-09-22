// Problem 2: Create a new array from the given array such that each element of the new array is raised to a power of 5.

// Output = [32, 243, 1024, 7776, 16807]

let arr = [2, 3, 4, 6, 7];

let NewArr = [];

arr.filter(function (item) {
  NewArr.push(item ** 5);
});

console.log(NewArr);
