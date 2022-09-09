// Problem 2 :
// Given a string print, the number of times each character appears

let str="HoshiyarSingh";
let obj={};
for(let i=0;i<str.length;i++){
  if(obj[str[i]]==undefined){
    obj[str[i]]=1;
  }else{
    obj[str[i]]++;
  }
}console.log(obj);