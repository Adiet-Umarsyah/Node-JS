import express from "express";

const app = express();

let todo = new Array();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/todo", (req, res) => {
  console.log("Your Task:");
  if (todo.length > 0) {
    for (let i = 0; i < todo.length; i++) {
      console.log(`${i + 1}. ${todo[i]}`);
    }
  } else {
    console.log("You Have No Task");
  }
});

app.post("/todo", (req, res) => {
  const task = req.body.task;
  todo.push(task);
  console.log("Task Added Successfully");
});

app.put("/todo", (req, res) => {
  const { index, task } = req.body;
  todo[index - 1] = task;
  console.log("Task Updated Successfully");
});

app.delete("/todo", (req, res) => {
  const index = req.body.index;
  todo.splice(index - 1, 1);
  console.log("Task Deleted Successfully");
});

app.listen(5000, () => {
  console.log("Server Running At localhost:5000");
});
