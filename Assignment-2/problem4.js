// Problem 4: Given stored username and password and input username and password, Print if the user can login or not.
let realEmail= "hsj@gmail";
let realPass = 12345;

let inputEmail= "hsj@gmail";
let inputPass = 12345;

if(realEmail==inputEmail){
  if(realPass==inputPass){
    console.log("Login Sucessfull");
  }else{
    console.log("Wrong Password");
  }
}else{
  console.log("Email is incorrect... try again");
}

