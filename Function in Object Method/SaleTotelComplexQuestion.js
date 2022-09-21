// ### Sales Total

// Write a function called `calculateSalesTotals()`
//  which returns an array with new two new keys (sale and total). The key 'sale' equals the calculated sale price based on the original price and the discount. The key 'total' equals the computed total based on stock, the original price and the discount. The default value would be 0.0.

// ```jsx

// SAMPLE INPUT :

// var sales = [
//   { item: 'PS4 Pro', stock: 3, original: 399.99 },
//   { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 },
//   { item: 'Nintendo Switch', stock: 4, original: 299.99 },
//   { item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 },
//   { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 }
// ];

// EXPECTED OUTPUT (array of objects):

// [
//   {
//     item: "PS4 Pro",
//     original: 399.99,
//     sale: 399.99,
//     stock: 3,
//     total: 1199.97
//   },
//   {
//     discount: 0.1,
//     item: "Xbox One X",
//     original: 499.99,
//     sale: 449.991,
//     stock: 1,
//     total: 449.991
//   },
//   {
//     item: "Nintendo Switch",
//     original: 299.99,
//     sale: 299.99,
//     stock: 4,
//     total: 1199.96
//   },
//   {
//     discount: 0.8,
//     item: "PS2 Console",
//     original: 299.99,
//     sale: 59.99799999999999,
//     stock: 1,
//     total: 59.99799999999999
//   },
//   {
//     discount: 0.65,
//     item: "Nintendo 64",
//     original: 199.99,
//     sale: 69.9965,
//     stock: 2,
//     total: 139.993
//   }
// ]
// ```
let arr = [];
function calculateSalesTotals(item, stock, price, discount = 0) {
  let obj = {};
  obj.discount = discount;
  obj.item = item;
  obj.original = price;
  obj.sale = obj.original * (1 - obj.discount);
  obj.stock = stock;
  obj.totel = obj.stock * obj.sale;
  arr.push(obj);
}

var sales = [
  { item: "PS4 Pro", stock: 3, original: 399.99 },
  { item: "Xbox One X", stock: 1, original: 499.99, discount: 0.1 },
  { item: "Nintendo Switch", stock: 4, original: 299.99 },
  { item: "PS2 Console", stock: 1, original: 299.99, discount: 0.8 },
  { item: "Nintendo 64", stock: 2, original: 199.99, discount: 0.65 },
];

for (let i = 0; i < sales.length; i++) {
  calculateSalesTotals(
    sales[i].item,
    sales[i].stock,
    sales[i].original,
    sales[i].discount
  );
}
console.log(arr);

// function calculateSalesTotals(sales) {
//     for(let i=0;i<sales.length;i++){
//   sales[i].sale = sales[i].original * (1 - sales[i].discount);
//   sales[i].totel = sales[i].sale * sales[i].stock;

// }
// console.log(sales);
// }

// var sales = [
//   { item: "PS4 Pro", stock: 3, original: 399.99 },
//   { item: "Xbox One X", stock: 1, original: 499.99, discount: 0.1 },
//   { item: "Nintendo Switch", stock: 4, original: 299.99 },
//   { item: "PS2 Console", stock: 1, original: 299.99, discount: 0.8 },
//   { item: "Nintendo 64", stock: 2, original: 199.99, discount: 0.65 },
// ];

// calculateSalesTotals(sales);
