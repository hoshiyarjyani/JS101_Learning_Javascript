// Two Arrays One Product [USE HIGHER ORDER FUNCTION]

function twoArraysOneProduct(N, A, B) {
  //write code here
  let product = 1;
  A.filter(function (item) {
    product *= item;
  });
  B.filter(function (item) {
    product *= item;
  });
  console.log(product);
}

A = [1, 2, 3];
B = [2, 3, 1];
twoArraysOneProduct(3, A, B);
