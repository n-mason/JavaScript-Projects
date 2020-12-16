// jshint esversion: 7

function toEuros(dollars) {
  return dollars * 0.9;
}

let d1, d2, euros1, euros2;
d1 = Number(prompt("Enter number of dollars"));
euros1 = toEuros(d1);
d2 = Number(prompt("Enter second number of dollars"));
euros2 = toEuros(d2);

alert("\u0024" + d1.toFixed(2) + " = " + "\u20AC" + euros1.toFixed(2));
console.log("\u0024" + d1.toFixed(2) + " = " + "\u20AC" + euros1.toFixed(2));

alert("\u0024" + d2.toFixed(2) + " = " + "\u20AC" + euros2.toFixed(2));
console.log("\u0024" + d2.toFixed(2) + " = " + "\u20AC" + euros2.toFixed(2));
