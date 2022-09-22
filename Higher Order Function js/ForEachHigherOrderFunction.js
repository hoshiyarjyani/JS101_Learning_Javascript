// Problem 3: Taking the following array into consideration get the output as given below:
// Output ==> 3 - 5 - 7
// Hint: You have to use forEach and conditional statement over here.

let arr = [3, 4, 5, 6, 7];
let NewArr = [];
arr.forEach(function (item, index) {
  if (index % 2 == 0) {
    NewArr.push(item);
  }
});
console.log(NewArr.join(" - "));
