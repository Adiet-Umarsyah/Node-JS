import mysql from "mysql2/promise";

try {
  const db = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "test",
  });
  console.log("Connected to the MySQL database");
  export default db;
} catch (error) {
  console.error("Error connecting to the database:", error);
}
