import express from "express";
import { showTasks, addTask, updateTask, deleteTask } from "./controller.js";

const router = express.Router();

router.get("/", showTasks);

router.post("/", addTask);

router.put("/", updateTask);

router.delete("/", deleteTask);

export default router;
