// jshint esversion: 7
//your function goes here
let getnumToppings = () => {
  let chckboxElems, toppings, count;
  chckboxElems = document.querySelectorAll("input[type=checkbox]");
  count = 0;

  for (let i = 0; i < chckboxElems.length; i++) {
    if (chckboxElems[i].checked) {
      ++count;
    }
  }
  return count;
};


let getToppings = () => {
  let checkboxElems, toppingsList;
  checkboxElems = document.querySelectorAll("input[type=checkbox]");
  toppingsList = "";

  for (let i = 0; i < checkboxElems.length; i++) {
    if (checkboxElems[i].checked) {
      toppingsList = toppingsList + checkboxElems[i].value + " ";

    }
  }
  toppingsList = toppingsList.substr(0, toppingsList.length - 1) + ".";
  return toppingsList;
};


let getSize = () => {
  let radioElems, pizzaSize;

  radioElems = document.querySelectorAll("input[type=radio]");

  for (let i = 0; i < radioElems.length; i++) {
    if (radioElems[i].checked) {
      pizzaSize = radioElems[i].value;
    }
  }

  return pizzaSize;
};


let getTotalCost = (size, numToppings) => {
numToppings = getnumToppings();
size = getSize();
  let costs = {
    "Small": Number(10.00),
    "Medium": Number(12.00),
    "Large": Number(14.00),
    "Extra-Large": Number(16.00),
    "Giant": Number(18.00)
  };
  return (costs[size] + (0.50 * numToppings)).toFixed(2);
};


let getNumSlices = (size) => {
size = getSize();
let numSlices = {
  "Small": 6,
  "Medium": 8,
  "Large": 10,
  "Extra-Large": 12,
  "Giant": 12,
};
return numSlices[size];
};

//Extra Credit exercise
let pizzaPSI = (cost, size) => {
  cost= getTotalCost();
  size = getSize();
   let diam = {
    "Small": 10,
    "Medium": 12,
    "Large": 14,
    "Extra-Large": 16,
    "Giant": 18,
  };
  return "\u0024" + (cost / (Math.PI * (diam[size] / 2) ** 2)).toFixed(2);
};



let controller = function() {
  let toppingsList, resultStr, pizzaSize, totalcost, costpsi;
toppingsList = getToppings();
pizzaSize = getSize();
totalcost = getTotalCost();
numberOfSlices = getNumSlices();
costperslice = (getTotalCost()/getNumSlices()).toFixed(2);
costpsi = pizzaPSI();

  resultStr = `Size: ${pizzaSize} <br> Toppings: ${toppingsList} <br> Total cost: $${totalcost} <br> Number of Slices: ${numberOfSlices} <br> Cost per Slice: $${costperslice} <br> Cost per Square Inch: ${costpsi}`;
  document.querySelector("#outputDiv").innerHTML = resultStr;
};


//Register the controller after the DOM is complete
window.addEventListener("load", function() {
  //select the button
  let button = document.querySelector("button");

  //register the click handler for the button
  button.addEventListener("click", controller);
});
