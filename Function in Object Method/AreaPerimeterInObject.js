// Problem-1 Rectangle Object

// Create a rectangle object with length and width properties
// Create two methods area and perimeter, that will return the area and perimeter of the rectangle

let obj = {
  arr: [],
  area: function (l, b) {
    let result;
    result = l * b;
    this.arr.push(result);
    console.log(result);
  },
  perimeter: function (l, b) {
    let result;
    result = 2 * (l + b);
    this.arr.push(result);
    console.log(result);
  },
};

obj.area(5, 10);
obj.perimeter(10, 20);
console.log(obj);
