import {
  getAllData,
  getData,
  createData,
  updateData,
  deleteData,
} from "../models/teacher.model.js";

export const getAllStudent = async (req, res) => {
  try {
    const data = await getAllData();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error in getAllStudent controller:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getStudent = async (req, res) => {
  try {
    const { name } = req.params;
    const data = await getData(name);
    res.status(200).json(data);
  } catch (error) {
    console.error("Error in getStudent controller:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const addStudent = async (req, res) => {
  try {
    const { name, id, status } = req.body;
    const result = await createData(name, id, status);
    res.status(201).json(result);
  } catch (error) {
    console.error("Error in addStudent controller:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, status } = req.body;
    const result = await updateData(id, name, status);
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
