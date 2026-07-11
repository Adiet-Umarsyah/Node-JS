import {
  getAllData,
  getData,
  createData,
  updateData,
  deleteData,
} from "../models/student.model.js";

export const getAllStudent = async (req, res) => {
  try {
    const data = await getAllData();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error in getAllStudent controller:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getStudentClass = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await getData(id);
    res.status(200).json(data);
  } catch (error) {
    console.error("Error in getStudentClass controller:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const addStudent = async (req, res) => {
  try {
    const { name, id } = req.body;
    const result = await createData(name, id);
    res.status(201).json(result);
  } catch (error) {
    console.error("Error in addStudent controller:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, classid } = req.body;
    const result = await updateData(id, name, classid);
    res.status(200).json(result);
  } catch (error) {
    console.error("Error in updateStudent controller:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await deleteData(id);
    res.status(200).json(result);
  } catch (error) {
    console.error("Error in deleteStudent controller:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
