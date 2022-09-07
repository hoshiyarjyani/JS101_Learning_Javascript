// Problem 1: Given a string count the number of words in that string
let Str = "Hoshiyar Singh Jyani";
let count=0;
if(Str.length>0){
for(let i =0;i<Str.length;i++){
  if(Str[i]==" "){
    count++;
  }
}console.log(count+1);}
else{console.log(0);}