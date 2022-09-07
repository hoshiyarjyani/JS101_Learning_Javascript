// Problem 2: Given an array of string count the overall total number of characters
let str = ["raju", "chunu", "Munnu", "Hoshiyar"];
let count =0;
for(let i=0;i<str.length;i++){
  count+=str[i].length;
}
console.log(count);