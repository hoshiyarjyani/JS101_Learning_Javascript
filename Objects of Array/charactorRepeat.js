let x = "Hoshiyarsingh";
let obj = {};
for (let i = 0; i <x.length; i++) {
  if (obj[x[i]] == undefined) {
    obj[x[i]] = 1;
  } else {
    obj[x[i]]++;
}
console.log(obj);
