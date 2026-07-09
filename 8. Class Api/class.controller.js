import {
  getAllData,
  getData,
  createData,
  updateData,
  deleteData,
} from "./class.model.js";

export const getAllClass = async (req, res) => {
  try {
    const data = await getAllData();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error in getAllClass controller:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getClassStudents = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await getData(id);
    res.status(200).json(data);
  } catch (error) {
    console.error("Error in getClassStudents controller:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const addClass = async (req, res) => {
  try {
    const { name } = req.body;
    const result = await createData(name);
    res.status(201).json(result);
  } catch (error) {
    console.error("Error in addClass controller:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const updateClass = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const result = await updateData(id, name);
    res.status(200).json(result);
  } catch (error) {
    console.error("Error in updateClass controller:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteClass = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await deleteData(id);
    res.status(200).json(result);
  } catch (error) {
    console.error("Error in deleteClass controller:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
