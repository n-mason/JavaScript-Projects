// jshint esversion: 7

// declarations
function square(n) {
  return n * n;
}

//test the function
let x, y;
x = prompt("Give me a value to square (x).");
y = prompt("Give me a value to square (y).");

x = Number(x);
y = Number(y);

alert(
  "The square of x is: " + square(x) + " and the square of y is: " + square(y)
);
