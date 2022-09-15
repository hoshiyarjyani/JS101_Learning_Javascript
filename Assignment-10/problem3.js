// Problem 3: Use the same function to print Non-Primes from 2 to a given limit

function prime(x){
  let flag =false;
  let count=0;
  for(let i=1;i<=x;i++){
  if( x%i===0){
    count++;
    }
  }  
  
  if(count==2){
     return true;
    }
  return false;
}


for(let j=2;j<23;j++){
let k= prime(j);
  if(k==false){
    console.log(j,"Not Prime");
}
}
  