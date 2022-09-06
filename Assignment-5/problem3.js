// Problem 3: Given an array of numbers find the average of all the even numbers.
let sum=0;
let arr= [80,90,70,60,100];
for(let i=0;i<arr.length;i++){
  sum += arr[i];
}
let avr=sum/arr.length;
console.log(avr);
