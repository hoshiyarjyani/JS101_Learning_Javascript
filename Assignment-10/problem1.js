// Problem 1: Create a function to check if a number is Prime or Not

function prime(x){
  
  let count=0;
  for(let i=1;i<=x;i++){
  if( x%i===0){
    count++;
    }
  }  
  if(count==2){
     console.log("PrimeNo");
    }else{
      console.log("NotPrime");
    }
}
  prime(17);


