import jwt from "jsonwebtoken";

export const generateToken = (name, res) => {
  const secretKey = "KzO1#@KRyh/c4]gM}hb?:]0sMuokMvuQRICgKisY{<o";

  const token = jwt.sign({ name }, secretKey, {
    expiresIn: "1h",
  });

  res.cookie("jwt", token, {
    // Cookie expiration (1 hour in milliseconds)
    maxAge: 60 * 60 * 1000,
    httpOnly: true,
    sameSite: "strict",
  });
};
