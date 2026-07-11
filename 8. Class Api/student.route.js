import express from "express";
import {
  getAllStudent,
  getStudentClass,
  addStudent,
  updateStudent,
  deleteStudent,
} from "./student.controller.js";

const router = express.Router();

router.get("/", getAllStudent);

router.get("/:id", getStudentClass);

router.post("/", addStudent);

router.put("/:id", updateStudent);

router.delete("/:id", deleteStudent);

export default router;
