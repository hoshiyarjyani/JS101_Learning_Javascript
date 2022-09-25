let arr =[];
for (let i = 0; i < 5; i++) {
  let beg = "";
  for (let j = 0; j < 5; j++) {
    beg += i+""+j+" ";
  }
  arr.push(beg.trim());
  beg = "";
}

console.log(arr);
