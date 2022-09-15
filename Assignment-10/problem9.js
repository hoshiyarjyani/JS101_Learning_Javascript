// Problem-4
// Write code to calculate the average of an array
// If there are no items in the array it should return 0
// NOTE: Create a function to find the sum of elements in an array and use that function to find out the average

function avrArr(arr,N){
  let sum=0;
  for(let i=0;i<N;i++){
    sum+=arr[i];
  }return sum;
}
function avrage(sum,N){
   let avr = sum/N;
  return avr;
}

let a=[2,3,4,5,6,7,8];

let totel = avrArr(a,a.length);

let ans = avrage(totel,a.length);

console.log(ans);