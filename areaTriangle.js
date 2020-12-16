// jshint esversion: 7

function areaTriangle(base, height) {
  return (1 / 2) * base * height;
}

//declare variables
let area1, area2, base1, base2, height1, height2;

//Input
base1 = prompt("enter base length");
height1 = prompt("enter height length");
base2 = prompt("enter second base length");
height2 = prompt("enter second height length");

//Processing
area1 = areaTriangle(base1, height1);
area2 = areaTriangle(base2, height2);

//output
console.log(
  " base1 = " + base1 + " height1 = " + height1 + " therefore area1 = " + area1
);
alert(
  " base1 = " + base1 + " height1 = " + height1 + " therefore area1 = " + area1
);
console.log(
  " base2 = " + base2 + " height2 = " + height2 + " therefore area2 = " + area2
);
alert(
  " base2 = " + base2 + " height2 = " + height2 + " therefore area2 = " + area2
);
