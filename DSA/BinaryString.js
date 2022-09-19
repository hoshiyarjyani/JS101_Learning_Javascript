// problem - Find the totel no. of zero in subString.
function binaryString(N, str) {
  //write code here
  var count = 0;
  var number = 0;
  for (let i = 0; i < N; i++) {
    var beg = "";
    for (let j = i; j < N; j++) {
      beg += str[j];
      console.log(beg);
      for (let k = 0; k < beg.length; k++) {
        for (let m = 0; m < beg.length; m++) {
          if (beg[k] == beg[m] && beg[m]==0) {
            count++;
          }else{
              break;
          }
        }
    }
      if (number < count) {
        number = count;
        count = 0;
      }
    }
  }
  console.log(number);
}

binaryString(5,"1000100");