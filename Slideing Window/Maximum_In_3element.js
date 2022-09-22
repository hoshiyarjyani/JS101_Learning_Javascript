// My approch for Sliding window

let arr =[5,6,2,8,4,9,3];
let SlideingArr = [];
let k = 3;
let n = 7;
let max = -Infinity;

for (let i = 0; i < 5; i++) {
    for (let j = i; j < i+3; j++) {
        if(max<arr[j]){
           max=arr[j];
        }
    }
    SlideingArr.push(max);
    max=-Infinity;
}
console.log(SlideingArr);