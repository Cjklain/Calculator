const numButtons = document.querySelectorAll(".number");
const displayDiv = document.querySelector(".display");
const opeButtons = document.querySelectorAll(".operator");
const eqButton = document.querySelector(".equal");
const inputNumber = [];
const passToCount = [];
let lastOperator;
let total = 0;

function displayValue(e) {
  inputNumber.push(e.target.innerText);
  const numberToDisplay = inputNumber.join("");
  displayDiv.innerText = numberToDisplay;
}

function saveValue() {
  const prepareToCount = parseInt(inputNumber.join(""), 10);
  passToCount.push(prepareToCount);
  inputNumber.length = 0;
}

function count() {
  const operatorOptions = {
    "+": function (a, b) {
      return a + b;
    },
    "-": function (a, b) {
      return a - b;
    },
    "*": function (a, b) {
      return a * b;
    },
    "/": function (a, b) {
      return a / b;
    },
  };

  passToCount.reduce(function (prev, current) {
    total = operatorOptions[lastOperator](prev, current);
    passToCount.length = 0;
    passToCount.push(total);
    return total;
  });
  console.log(total);
}

function handleOperator(e) {
  saveValue();
  if (passToCount.length === 2) {
    count();
  }
  lastOperator = e.target.innerText;
  //   displayDiv.innerText = total;
  console.log(passToCount);
}

function handleEqual() {
  saveValue();
  count();
  displayDiv.innerText = total;
  console.log(total);
}

numButtons.forEach((button) => button.addEventListener("click", displayValue));
opeButtons.forEach((button) =>
  button.addEventListener("click", handleOperator)
);
eqButton.addEventListener("click", handleEqual);
