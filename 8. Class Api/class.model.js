import { connectDB } from "./db.js";

export const getAllData = async () => {
  const db = await connectDB();
  try {
    const sql = "SELECT * FROM class";
    const [rows] = await db.execute(sql);
    await db.end();
    return rows;
  } catch (error) {
    return error.message;
  }
};

export const getData = async (id) => {
  const db = await connectDB();
  try {
    const sql =
      "SELECT class.className, student.studentName FROM class JOIN student ON class.classID = student.classID WHERE class.classID = ?";
    const [rows] = await db.execute(sql, [id]);
    await db.end();
    return rows;
  } catch (error) {
    return error.message;
  }
};

export const createData = async (name) => {
  const db = await connectDB();
  try {
    const sql = "INSERT INTO class (className) VALUES (?)";
    const [result] = await db.execute(sql, [name]);
    await db.end();
    return result;
  } catch (error) {
    return error.message;
  }
};

export const updateData = async (id, name) => {
  const db = await connectDB();
  try {
    const sql = "UPDATE class SET className = ? WHERE classID = ?";
    const [result] = await db.execute(sql, [name, id]);
    await db.end();
    return result;
  } catch (error) {
    return error.message;
  }
};

export const deleteData = async (id) => {
  const db = await connectDB();
  try {
    const sql = "DELETE FROM class WHERE classID = ?";
    const [result] = await db.execute(sql, [id]);
    await db.end();
    return result;
  } catch (error) {
    return error.message;
  }
};
