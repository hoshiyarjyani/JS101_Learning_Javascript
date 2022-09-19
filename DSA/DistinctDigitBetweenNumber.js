function distinctDigits(l, r) {
  //write your code over here
  let arr = [];
  for (let i = l; i <= r; i++) {
    arr.push(i);
  }
  let minimum = Infinity;
  for(let i=0; i<arr.length;i++){
      var str = arr[i].toString();
      for(let j = 0; j<1; j++){
       if (str[j]!=str[j+1] && str[j+1]!=str[j+2] && str[j]!=str[j+2]){
              if(minimum>arr[i]){
                 minimum=arr[i];
              }
          }
      }
  }
  console.log(minimum);
  
}
distinctDigits(100, 130);
