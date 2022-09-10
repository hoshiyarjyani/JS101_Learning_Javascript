// Problem 1 :
// Given an array find the unique items in the array

let str = [1,2,2,3,4,5,6,6,6,7];
let obj ={}

for(i=0;i<=str.length-1;i++){
  if(obj[str[i]]==undefined){
    obj[str[i]]=1;
  } else{
    obj[str[i]]++;
  }
}
  for(let j in obj){
    if(obj[j]==1){
      console.log(j);
    }
  }



