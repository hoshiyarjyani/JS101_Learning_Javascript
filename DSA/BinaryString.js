// problem - Find the totel no. of zero in subString.
function binaryString(N, str) {
  //write code here
  var count = 1;
  var number = 1;
  let flag = false;
  for (let i = 0; i < N; i++) {
    var beg = "";
    for (let j = i; j < N; j++) {
      beg += str[j];
      for (let k = 0; k < 1; k++) {
        for (let m = 1; m < beg.length; m++) {
          if (beg[k] == 0 && beg[k] == beg[m]) {
            count++;
          }else{
            break;
          }
        }
        if (count == beg.length && number < count) {
          number = count;
          count = 1;
          flag = true;
        }
      }
    }
    if (flag) {
      console.log(number);
    }
  }
}

binaryString(8, "10010001");
