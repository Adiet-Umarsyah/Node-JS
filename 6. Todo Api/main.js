import express from "express";
import taskRoute from "./route.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/todo", taskRoute);

app.listen(5000, () => {
  console.log("Server Running At localhost:5000");
});
