import express from "express";

const app = express();

// For pArsing Json (don't forget to use)
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/:id", (req, res, next) => {
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
});

app.post("/calculation", (req, res) => {
  const { a, b, operation } = req.body;
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
  res.json({ total });
});

// express 5 no longer use this
// app.all("*", (req, res) => {
//   res.status(404).json({ message: "Page Not Found" });
// });
// it use this
app.use((req, res) => {
  res.status(404).json({
    message: "Page Not Found",
  });
});
app.listen(5000, () => {
  console.log("Server is running on localhost:5000");
});
