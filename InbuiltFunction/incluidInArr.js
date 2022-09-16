// Problem 5
// Write a custom function that has the same behavior of inbuilt Array Includes Function

function incluidFunctionArr(arr,x){
  for ( let i = 0; i < arr.length; i++ ){
    if(arr[i]==x){
      return true;
    }
  }
  return false;
}

let arr = [1, 2, 3];

let result1 = incluidFunctionArr(arr,1);
console.log(result1);

let result2 = incluidFunctionArr(arr,7);
console.log(result2);

let result3 = incluidFunctionArr(arr,2);
console.log(result3);

let pets = ['cat', 'dog', 'bat'];

let result4 = incluidFunctionArr(pets,'dog');
console.log(result4);

let result5 = incluidFunctionArr(pets,'at');
console.log(result5);