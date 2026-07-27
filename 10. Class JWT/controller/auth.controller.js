import { getData, insertData } from "../models/auth.model.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/token.js";

export const userLogin = async (req, res) => {
  try {
    const { name, password } = req.body;
    const data = await getData(name);
    if (!data) {
      return res.status(404).json({ error: "User not found" });
    }
    const isMatch = await bcrypt.compare(password, data.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    generateToken(data.name, res);

    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const userRegister = async (req, res) => {
  try {
    const { name, password } = req.body;
    const check = await getData(name);
    if (check) {
      return res.status(400).json({ error: "User already exists" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const data = await insertData(name, hashedPassword);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
