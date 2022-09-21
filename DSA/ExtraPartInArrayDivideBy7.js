// You are given an arrayAwithNelements. You are allowed toremove only one element, which makes thesum of all the remaining elements exactly divisible by 7.

// Your task is to find thefirst index of smallest elementthat can be removed from array. If there is no answer print-1.

function applyBasicMaths(N, A) {
  //write code here
  let sum = 0;
  for (let i = 0; i < N; i++) {
    sum += A[i];
  }

//Sum of all element is complete.
  let extra = sum % 7;
  let flag = false;
  for (var j = 0; j < N; j++) {
    if(extra==A[j]){
      flag = true;
    }else if(extra==0 && A[j]%7==0){
        flag = true;
    }
  }
  if (fla) {
    console.log(j);
  } else {
    console.log(-1);
  }
}

A = [14, 9, 8, 2, 4];
applyBasicMaths(5, A);
