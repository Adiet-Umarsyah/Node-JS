import express from "express";
import teacherRoute from "./routes/teacher.route.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/teacher", teacherRoute);

app.listen(5000, () => {
  console.log("Server Running at localhost:5000");
});
