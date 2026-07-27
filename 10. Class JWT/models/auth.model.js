import { connectDB } from "../db.js";

export const getData = async (name) => {
  const db = await connectDB();

  const sql = "SELECT * FROM teachers WHERE teacherName = ?";
  try {
    const [rows] = await db.execute(sql, [name]);
    return rows[0];
  } catch (error) {
    return error.message;
  } finally {
    await db.end();
  }
};

export const insertData = async (teacherName, password) => {
  const db = await connectDB();

  const sql = "INSERT INTO teachers (teacherName, password) VALUES (?, ?)";
  try {
    const [result] = await db.execute(sql, [teacherName, password]);
    return result;
  } catch (error) {
    return error.message;
  } finally {
    await db.end();
  }
};
