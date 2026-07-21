import { getData, insertData } from "../models/auth.model.js";
import bcrypt from "bcryptjs";

export const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const data = await getData(email);
    if (!data) {
      return res.status(404).json({ error: "User not found" });
    }
    const isMatch = await bcrypt.compare(password, data.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid credentials" });
    }
    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const userRegister = async (req, res) => {
  try {
    const { email, password } = req.body;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }
    const check = await getData(email);
    if (check) {
      return res.status(400).json({ error: "User already exists" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const data = await insertData(email, hashedPassword);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
