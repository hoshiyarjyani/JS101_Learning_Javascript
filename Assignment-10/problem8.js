// Problem-3
// Write a function isOdd which returns a boolean value based on the number is odd or not
// Use this function to print the odd numbers from 0 to a given limit(included)

function isOdd(x){
  let flag =false;
  if(x%2==1){
    return true;
  }
}

for(let x=0;x<15;x++){
  let ans = isOdd(x);
  if(ans==true){
  console.log(x,"odd");
}
}