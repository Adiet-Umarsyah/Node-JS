import { connectDB } from "../db.js";

export const getAllData = async () => {
  const db = await connectDB();
  try {
    const sql = "SELECT * FROM students";
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
      "SELECT class.className, students.studentName FROM students JOIN class ON students.classID = class.classID WHERE studentID = ?";
    const [rows] = await db.execute(sql, [id]);
    await db.end();
    return rows;
  } catch (error) {
    return error.message;
  }
};

export const createData = async (name, id) => {
  const db = await connectDB();
  try {
    const sql = "INSERT INTO students (studentName, classID) VALUES (?,?)";
    const [result] = await db.execute(sql, [name, id]);
    await db.end();
    return result;
  } catch (error) {
    return error.message;
  }
};

export const updateData = async (id, name, classid) => {
  const fields = [];
  const values = [];

  if (name != null) {
    fields.push("studentName = ?");
    values.push(name);
  }
  if (classid != null) {
    fields.push("classID = ?");
    values.push(classid);
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
  } finally {
    await db.end();
  }
};

export const deleteData = async (id) => {
  const db = await connectDB();
  try {
    const sql = "DELETE FROM students WHERE studentID = ?";
    const [result] = await db.execute(sql, [id]);
    await db.end();
    return result;
  } catch (error) {
    return error.message;
  }
};
