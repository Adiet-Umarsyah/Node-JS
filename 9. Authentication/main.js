import express, { urlencoded } from "express";
import authRoutes from "./routes/auth.route.js";

const app = express();

app.use(express.json());
app.use(urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/auth", authRoutes);

app.listen(5000, () => {
  console.log("Server Running at localhost:5000");
});
