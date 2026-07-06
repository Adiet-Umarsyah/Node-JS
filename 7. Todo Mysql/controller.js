import { getData, createData, updateData, deleteData } from "./model.js";

let todo = new Array();

export const showTasks = async (req, res) => {
  try {
    const data = await getData();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error in getDatas controller:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const addTask = async (req, res) => {
  try {
    const { task } = req.body;
    const result = await createData(task);
    res.status(201).json(result);
  } catch (error) {
    console.error("Error in addTask controller:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const updateTask = async (req, res) => {
  try {
    const { id, task } = req.body;
    const result = await updateData(id, task);
    res.status(200).json(result);
  } catch (error) {
    console.error("Error in updateTask controller:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.body;
    const result = await deleteData(id);
    res.status(200).json(result);
  } catch (error) {
    console.error("Error in deleteTask controller:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
