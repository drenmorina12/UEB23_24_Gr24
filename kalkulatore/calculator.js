const operators = document.querySelectorAll(".operator");
const numbers = document.querySelectorAll(".number");
const display = document.querySelector(".display");
const equals = document.querySelector(".equals");
const clearButton = document.querySelector(".clear");
const percent = document.querySelector(".percent");
const decimal = document.querySelector(".decimal");
const sign = document.querySelector(".sign");
const deleteButton = document.querySelector(".delete");

const MAX_LENGTH = 9;
let number1 = "";
let number2 = "";
let operator = "";
let displayText = "";
let additionalOperation = false;
let equalPressed = false;

function add(x, y) {
  return x + y;
}

function sub(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(a, b) {
  return a / b;
}

function operate(number1, number2, operator) {
  switch (operator) {
    case "+":
      return add(number1, number2);

    case "-":
      return sub(number1, number2);

    case "*":
      return multiply(number1, number2);

    case "/":
      if (number2 == 0) {
        return "SUI";
      }
      return divide(number1, number2);

    default:
  }
}

function displayResult() {
  display.textContent = displayText;
}

function clear() {
  displayText = "0";
  displayResult();
  displayText = "";
  number1 = "";
  number2 = "";
  operator = "";
  additionalOperation = false;
}

function formatResult(result) {
  let stringResult = result.toString();
  if (stringResult.length > 9) {
    stringResult = parseFloat(result).toExponential(2);
  }
  return stringResult;
}

function calculate() {
  n1 = parseFloat(number1);
  n2 = parseFloat(number2);
  let result = operate(n1, n2, operator);
  let formatedResult = formatResult(result);
  displayText = formatedResult;
  displayResult();
  number1 = formatedResult;
}

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    numberValue = number.value;
    if (operator == "") {
      if (number1.length == MAX_LENGTH) {
        return;
      }
      displayText += numberValue;
      number1 = displayText;
    } else {
      if (number2.length == MAX_LENGTH) {
        return;
      }
      displayText += numberValue;
      number2 = displayText;
    }
    displayResult();
    equalPressed = false;
  });
});

operators.forEach((op) => {
  op.addEventListener("click", () => {
    if (operator != "") {
      additionalOperation = true;
    }

    if (additionalOperation && !equalPressed) {
      calculate();
    }
    if (number1 != "") {
      operator = op.value;
    }
    displayText = "";
    number2 = "";
  });
});

equals.addEventListener("click", () => {
  calculate();
  equalPressed = true;
});

clearButton.addEventListener("click", () => {
  clear();
});

percent.addEventListener("click", () => {
  if (operator == "") {
    let n1 = parseFloat(number1) / 100;
    number1 = "" + n1;
    displayText = number1;
  } else {
    let n2 = parseFloat(number2) / 100;
    number2 = "" + n2;
    displayText = number2;
  }
  displayResult();
});

decimal.addEventListener("click", () => {
  if (operator == "" || equalPressed) {
    if (!number1.includes(decimal.value)) {
      number1 += decimal.value;
      displayText = number1;
    }
  } else if (!number2.includes(decimal.value)) {
    number2 += decimal.value;
    displayText = number2;
  }
  displayResult();
});

sign.addEventListener("click", () => {
  if (operator == "" || equalPressed) {
    let signedNumber = parseFloat(-number1);
    number1 = signedNumber.toString();
    displayText = number1;
  } else {
    let signedNumber = parseFloat(-number2);
    number2 = signedNumber.toString();
    displayText = number2;
  }
  displayResult();
});

deleteButton.addEventListener("click", () => {
  if (operator == "" || equalPressed) {
    number1 = number1.substring(0, number1.length - 1);
    displayText = number1;
  } else {
    number2 = number2.substring(0, number2.length - 1);
    displayText = number2;
  }
  displayResult();
});
