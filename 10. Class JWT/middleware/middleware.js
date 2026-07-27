import { getData } from "../models/auth.model.js";
import jwt from "jsonwebtoken";

export const cookieReader = async (req, res, next) => {
  const secretKey = "KzO1#@KRyh/c4]gM}hb?:]0sMuokMvuQRICgKisY{<o";
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(401).json({
        error: "Unauthorized: No Token Provided",
      });
    }

    const decoded = jwt.verify(token, secretKey);
    if (!decoded) {
      return res.status(401).json({
        error: "Unauthorized: Invalid Token",
      });
    }

    const user = await getData(decoded.name);
    if (!user) {
      return res.status(404).json({
        error: "User not found",
      });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error("Error in cookieReader middleware:", error.message);
    return res.status(500).json({
      error: "Internal server error",
    });
  }
};
