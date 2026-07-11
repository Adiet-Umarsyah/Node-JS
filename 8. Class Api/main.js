import express from "express";
import studentRoute from "./routes/student.route.js";
import classRoute from "./routes/class.route.js";

const app = express();

app.use(express.json());
app.use("/students", studentRoute);
app.use("/classes", classRoute);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(5000, () => {
  console.log("Server Running At localhost:5000");
});
