import { login, register } from "../models/auth.model.js";

const userLogin = (req, res) => {
  try {
    const { email, password } = req.body;
    const data = login(email);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const userRegister = (req, res) => {
  try {
    const { email, password } = req.body;
    const data = register(email, password);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
