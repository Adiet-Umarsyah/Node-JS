import { connectDB } from "../db.js";

export const login = async (email) => {
  const db = connectDB();

  const sql = "SELECT * FROM users WHERE email = ?";
  try {
    const [rows] = await db.execute(sql, [email]);
    await db.end();
    return rows;
  } catch (error) {
    await db.end();
    return error.message;
  }
};

export const register = async (email, password) => {
  const db = connectDB();

  const sql = "INSERT INTO users (email, password) VALUES (?, ?)";
  try {
    const [result] = await db.execute(sql, [email, password]);
    await db.end();
    return result;
  } catch (error) {
    await db.end();
    return error.message;
  }
};
