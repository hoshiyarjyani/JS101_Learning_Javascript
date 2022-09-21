// ### **Products Cart Object**

// - Given an input of products in the below format (Name Quantity Price)
// - Input

// ```
// ["Rice", "Dal", "Salt"]
// [2, 3, 1]
// [60, 50, 20]

// ```

// - Create an object with the key `data` which is an array of objects with the format `{name: "Rice", quantity: 2, price: 60}`
// - The object must have a method called `total` which calculates the total values of items (multiplying quantity of each with its price)
// - Sample output for the above case `290`
let object = {
  arr: [],
  details: function (name, quantity, rate) {
    let obj = {};
    obj.Name = name;
    obj.Quantity = quantity;
    obj.Rate = rate;
    this.arr.push(obj);
  },
  TotelPrice: function () {
    let totel = 0;
    for (let i = 0; i < this.arr.length; i++) {
      totel += this.arr[i].Quantity * this.arr[i].Rate;
    }
    return totel;
  },
};

object.details("Rice", 2, 60);
object.details("Dal", 3, 50);
object.details("Salt", 1, 20);

let Bill = object.TotelPrice();

console.log(object);
console.log(Bill);
