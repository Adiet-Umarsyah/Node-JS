import express from "express";
import {
  getAllClass,
  getClassStudents,
  addClass,
  updateClass,
  deleteClass,
} from "./class.controller.js";

const router = express.Router();

router.get("/", getAllClass);

router.get("/:id", getClassStudents);

router.post("/", addClass);

router.put("/:id", updateClass);

router.delete("/:id", deleteClass);

export default router;
