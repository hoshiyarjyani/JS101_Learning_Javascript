// Problem 5: Write a function to replace spaces in a given string with - .

function replaceSpace(x){
  let ans ="";
  for(let i=0;i<x.length;i++){
    if(x[i]==" "){
      ans+="-";
    }else{
      ans+=x[i];
    }
  }console.log(ans);
}

replaceSpace("Hoshiyar Singh Jyani");