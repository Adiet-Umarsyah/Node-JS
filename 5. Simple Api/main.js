import express from "express";

const app = express();

// For pArsing Json (don't forget to use)
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
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
  console.log(total);
  res.json({ total });
});

app.all("*", (req, res) => {
  res.status(404).send("Page Not Found");
});

app.listen(5000, () => {
  console.log("Server is running on localhost:5000");
});
