// Problem 4: Print the average of even numbers from 1 to 100 (both included)
let i = 1;
let sum = 0;
while (i <= 100) {
  if (i % 2 == 0) {
    sum += i;
  }
  i++;
} let avr = sum / 50;
console.log(avr);