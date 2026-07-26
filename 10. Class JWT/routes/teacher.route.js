import express from "express";
import {
  getAllStudent,
  getStudent,
  addStudent,
  updateStudent,
  deleteStudent,
} from "../controller/teacher.controller.js";

const router = express.Router();

router.get("/", getAllStudent);

router.get("/:id", getStudent);

router.post("/", addStudent);

router.put("/:id", updateStudent);

router.delete("/:id", deleteStudent);

export default router;
