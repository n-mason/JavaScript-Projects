// jshint esversion: 7

function coinTotal(pennies, nickels, dimes, quarters, halfDollars) {
  return (
    pennies * 1 + nickels * 5 + dimes * 10 + quarters * 25 + halfDollars * 50
  );
}

//test the function twice
/*
let p = 1,
  n = 1,
  d = 1,
  q = 1,
  h = 1;
console.log(coinTotal(p, n, d, q, h));

let p2 = 1,
  n2 = 2,
  d2 = 3,
  q2 = 4,
  h2 = 5;
console.log(coinTotal(p2, n2, d2, q2, h2));
*/

//Coin counter with prompts
let p, n, d, q, h;

p = prompt("enter number of pennies");
n = prompt("enter number of nickels");
d = prompt("enter number of dimes");
q = prompt("enter number of quarters");
h = prompt("enter number of halfdollars");
console.log(coinTotal(p, n, d, q, h));
