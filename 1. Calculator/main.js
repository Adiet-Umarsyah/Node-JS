function Calculation(number1, number2, operation) {
  let total = 0;

  if (operation == "+") {
    total = add(number1, number2);
  } else if (operation == "-") {
    total = subtract(number1, number2);
  } else if (operation == "*") {
    total = multiply(number1, number2);
  } else if (operation == "/") {
    total = divide(number1, number2);
  } else {
    console.log("Invalid Operation");
  }
  console.log(total);
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

Calculation(6, 3, "/");
