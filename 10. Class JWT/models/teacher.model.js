import { connectDB } from "../db.js";

export const getAllData = async () => {
  const db = await connectDB();
  try {
    const sql = "SELECT * FROM students";
    const [rows] = await db.execute(sql);
    return rows;
  } catch (error) {
    return error.message;
  } finally {
    await db.end();
  }
};

export const getData = async (name) => {
  const db = await connectDB();
  try {
    const sql = "SELECT * FROM students WHERE studentName LIKE ?";
    const [rows] = await db.execute(sql, [`%${name}%`]);
    return rows;
  } catch (error) {
    return error.message;
  } finally {
    await db.end();
  }
};

export const createData = async (name, id, status) => {
  const db = await connectDB();
  try {
    const sql =
      "INSERT INTO students (studentName, teacherID, status) VALUES (?,?,?)";
    const [result] = await db.execute(sql, [name, id, status]);
    return result;
  } catch (error) {
    return error.message;
  } finally {
    await db.end();
  }
};

export const updateData = async (id, name, status) => {
  const fields = [];
  const values = [];

  if (name != null) {
    fields.push("studentName = ?");
    values.push(name);
  }

  if (status != null) {
    fields.push("status = ?");
    values.push(status);
  }

  if (fields.length === 0) {
    throw new Error("No fields provided to update");
  }

  const sql = `UPDATE students SET ${fields.join(", ")} WHERE studentID = ?`;
  values.push(id);

  const db = await connectDB();
  try {
    const [result] = await db.execute(sql, values);
    return result;
  } catch (error) {
    return error.message;
  } finally {
    await db.end();
  }
};

export const deleteData = async (id) => {
  const db = await connectDB();
  try {
    const sql = "DELETE FROM students WHERE studentID = ?";
    const [result] = await db.execute(sql, [id]);
    return result;
  } catch (error) {
    return error.message;
  } finally {
    await db.end();
  }
};
