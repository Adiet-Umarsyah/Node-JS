import mysql from "mysql2/promise";

export async function connectDB() {
  try {
    const db = await mysql.createConnection({
      host: "localhost",
      user: "root",
      database: "test",
    });

    console.log("Connected to MySQL");

    return db;
  } catch (error) {
    console.error("Database connection failed:", error.message);
    throw error;
  }
}
