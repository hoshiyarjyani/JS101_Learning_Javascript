// Problem 2: Use the above function to print the Primes from 2 to a given limit

function prime(x){
  
  let count=0;
  for(let i=1;i<=x;i++){
  if( x%i===0){
    count++;
    }
  }  
  if(count==2){
     return "prime Number";
    }else{
      return "NotPrime";
    }
}

for(let j=2;j<23;j++){
let k= prime(j);
  console.log(j,"-",k);
}
  
