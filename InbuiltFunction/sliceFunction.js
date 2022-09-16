// Problem 3
// Write a custom function that has the same behavior of inbuilt Array Slice Function

function sliceOfArr(arr,x=0,y=arr.length){
  let newArr = [];
  for ( let i = x; i < y; i++ ){
    newArr.push(arr[i]);
  }
  return newArr;
}

let animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
let result1 = sliceOfArr(animals,2,4);
console.log(result1);

let result2 = sliceOfArr(animals,1,4);
console.log(result2);

let result3 = sliceOfArr(animals,3,5);
console.log(result3);