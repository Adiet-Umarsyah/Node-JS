import express from "express";
import teacherRoute from "./routes/teacher.route.js";
import authRoute from "./routes/auth.route.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/auth", authRoute);

app.use("/teacher", teacherRoute);

app.listen(5000, () => {
  console.log("Server Running at localhost:5000");
});
