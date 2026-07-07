import { connectDB } from "./db.js";

export const getData = async () => {
  const db = await connectDB();
  try {
    const sql = "SELECT * FROM tasks";
    const [rows] = await db.execute(sql);
    console.log(rows);
    return rows;
  } catch (error) {
    console.error("Error in getData model:", error.message);
  }
  await db.end();
};

export const createData = async (description) => {
  const db = await connectDB();
  try {
    const sql = "INSERT INTO tasks (description) VALUES (?)";
    const [result] = await db.execute(sql, [description]);
    console.log(result);
    return result;
  } catch (error) {
    console.error("Error in createData model:", error.message);
  }
  await db.end();
};

export const updateData = async (id, description) => {
  const db = await connectDB();
  try {
    const sql = "UPDATE tasks SET description = ? WHERE id = ?";
    const [result] = await db.execute(sql, [description, id]);
    console.log(result);
    return result;
  } catch (error) {
    console.error("Error in updateData model:", error.message);
  }
  await db.end();
};

export const deleteData = async (id) => {
  const db = await connectDB();
  try {
    const sql = "DELETE FROM tasks WHERE id = ?";
    const [result] = await db.execute(sql, [id]);
    console.log(result);
    return result;
  } catch (error) {
    console.error("Error in deleteData model:", error.message);
  }
  await db.end();
};
