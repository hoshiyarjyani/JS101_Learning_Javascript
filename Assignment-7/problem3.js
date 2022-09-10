// Problem 3: Print a box pattern using *
// **********
// *        *
// *        *
// *        *
// *        *
// *        *
// *        *
// *        *
// *        *
// **********

for(let i=1; i<=10;i++){
  let beg="";
  for(let j=1;j<=10;j++){
    if(i==1 || i==10){
      beg+="*";
    }else{
      if(j==1 || j==10){
        beg+="*";
      }else{
        beg+=" ";
      }
    }
  }
  console.log(beg);
}