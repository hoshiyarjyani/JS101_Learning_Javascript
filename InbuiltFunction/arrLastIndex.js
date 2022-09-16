// Problem 2
// Write a custom function that has the same behavior of inbuilt Array Last Index Of Function
function  arrLastIndex(x,y){
  for (let i = 0; i < x.length; i++){
    if ( y == x[x.length-1-i] ){
      return  x.length-1-i;
    }
  }
}
let animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

let result1 = arrLastIndex(animals,'Dodo');
console.log(result1);

let result2 = arrLastIndex(animals,'Penguin');
console.log(result2);  