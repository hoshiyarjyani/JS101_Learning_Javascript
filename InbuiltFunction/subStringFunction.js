// Problem 4
// Write a custom function that has the same behavior of inbuilt String Substring Function


function subStringFunction(str,x=0,y=str.length){
  let newStr = "";
  for ( let i = x; i < y; i++ ){
    newStr+=str[i];
  }
  return newStr;
}

let str = 'Mozilla';
let result1 = subStringFunction(str,2,4);
console.log(result1);

let result2 = subStringFunction(str,1,3);
console.log(result2);

let result3 = subStringFunction(str,2);
console.log(result3);

