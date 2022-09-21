// Problem 1. Write a custom function that has the same behavior of inbuilt Array Join
function myArrJoin(x, y = ",") {
  let beg = "";
  for (let i = 0; i < x.length; i++) {
    beg += x[i];
    if (i < x.length - 1) {
      beg += y;
    }
  }
  return beg;
}

let elements = ["Fire", "Air", "Water"];
let result1 = myArrJoin(elements);
console.log(result1);

let result2 = myArrJoin(elements, "-");
console.log(result2);

