export function Calculation(a, b, operation) {
  let total = 0;

  if (operation == "+") {
    total = a + b;
  } else if (operation == "-") {
    total = a - b;
  } else if (operation == "*") {
    total = a * b;
  } else if (operation == "/") {
    total = a / b;
  } else {
    console.log("Invalid Operation");
  }
  console.log(total);
}
