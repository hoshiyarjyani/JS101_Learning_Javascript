// Problem
// Create an object with the following functionality

// Ability to add 3 students details and their marks in 3 subjects
// Method to find the student with the least total.
// Method to find the student with the highest total.

let object = {
  arr: [],
  details: function (name, math, sci, eng) {
    let obj = {};
    (obj.Name = name),
      (obj.maths = math),
      (obj.science = sci),
      (obj.english = eng),
      this.arr.push(obj);
  },
  leastTotel: function () {
    let least = Infinity;
    let LeastStuName;
    for (let i = 0; i < this.arr.length; i++) {
      let sum = this.arr[i].maths + this.arr[i].science + this.arr[i].english;
      if (least > sum) {
        least = sum;
        LeastStuName = this.arr[i].Name;
      }
    }
    console.log(least, LeastStuName);
  },
  highestTotel: function () {
    let highest = -Infinity;
    let highestStuName;
    for (let i = 0; i < this.arr.length; i++) {
      let sum = this.arr[i].maths + this.arr[i].science + this.arr[i].english;
      if (highest < sum) {
        highest = sum;
        highestStuName = this.arr[i].Name;
      }
    }
    console.log(highest, highestStuName);
  },
};

object.details("Hoshiyar", 65, 64, 63);
object.details("Chunnu", 53, 54, 50);
object.details("Abhishek", 40, 39, 41);

object.leastTotel();
object.highestTotel();
console.log(object);
