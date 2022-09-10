let x = [1, 2, 4, 4, 5, 5, 6, 7, 8, 8, 8, 9];
let obj = {};
for (let i = 0; i < x.length; i++) {
  if (obj[x[i]] == undefined) {
    obj[x[i]] = 1;
  } else {
    obj[x[i]]++;
  }
}
for (let j in obj) {
  console.log(j);
}
