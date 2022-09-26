// Problem 5: Given 2 numbers a and b print which is greater or "both equal".

GreaterNo = (a, b) => {
  a > b
    ? console.log(a, " is Greater No.")
    : b > a
    ? console.log(b, " is Greater No.")
    : console.log("Both are equal");
};

GreaterNo(50, 50);
