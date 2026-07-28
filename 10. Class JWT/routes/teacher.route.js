import express from "express";
import {
  getAllStudent,
  getStudent,
  addStudent,
  updateStudent,
  deleteStudent,
} from "../controller/teacher.controller.js";
import { cookieReader } from "../middleware/middleware.js";

const router = express.Router();

router.get("/", getAllStudent);

router.get("/:id", getStudent);

router.post("/", cookieReader, addStudent);

router.put("/:id", cookieReader, updateStudent);

router.delete("/:id", cookieReader, deleteStudent);

export default router;
