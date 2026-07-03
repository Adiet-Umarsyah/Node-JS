export const getCustomer = (req, res, next) => {
  const id = Number(req.params.id);

  if (Number.isNaN(id)) {
    return next(); // Continue to the 404 handler
  }

  switch (id) {
    case 1:
      res.send("You Are Customer Number 1");
      break;
    case 2:
      res.send("You Are Customer Number 2");
      break;
    case 3:
      res.send("You Are Customer Number 3");
      break;
    default:
      res.send("You Are Not Customer");
      break;
  }
};

export const calculateBody = (req, res) => {
  const { a, b, operation } = req.body;
  let total = calculation(a, b, operation);
  res.json({ total });
};

export const calculateQuery = (req, res) => {
  let { a, b, operation } = req.query;
  a = Number(a);
  b = Number(b);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    res.send("Please Enter A Valid Number");
    return;
  }
  let total = calculation(a, b, operation);

  res.json({ total });
};

function calculation(a, b, operation) {
  let total = 0;
  // on query you can't put + because express will parse it as a blank space, you need to put it's url encoding which is %2B so that express will translate it back into +
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
  return total;
}
