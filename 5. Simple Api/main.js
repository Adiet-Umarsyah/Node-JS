import express from "express";
import { getCustomer, calculateBody, calculateQuery } from "./controller.js";

const app = express();

// For pArsing Json (don't forget to use)
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/:id", getCustomer);

app.post("/calculation", calculateBody);

app.get("/calculation", calculateQuery);

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
