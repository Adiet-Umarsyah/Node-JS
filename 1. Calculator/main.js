import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

async function InputNumber() {
  const n1 = Number(await rl.question("Insert The First Number: "));
  const n2 = Number(await rl.question("Insert The Second Number: "));
  const o = await rl.question("Insert An Operation (+,-,*,/): ");
  Calculation(n1, n2, o);
  rl.close();
}

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
InputNumber();
