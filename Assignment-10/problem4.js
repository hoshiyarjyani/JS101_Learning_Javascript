// Problem 4: Write a function to check if the char is a small case or not.

function checkStr(str){
  let flag = false;
if(str.charCodeAt(0)>=97 && str.charCodeAt(0)<=122){
  return true;
}return false;
}


let ans = checkStr("a");
if(ans == true){
  console.log("YES");
}else{
  console.log("NO");
}