var arr = [1, 1, 1];
longestRepeatedOdd(arr.length, arr);
function longestRepeatedOdd(N, array) {
  let count = 1;
  let previous = 0;
  let j = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    j += 1;
    if (arr[i] == arr[j] && arr[i] % 2 == 1) {
        count++; 
    } else if(arr[i] % 2 == 1 && previous < count) {
        previous = count;
        count = 0;
    }
  }

  if(previous < count) {
    previous = count;
  }

  console.log(previous);
}
