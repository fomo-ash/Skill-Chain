import jwt from "jsonwebtoken";

export const token = (userId, res) => {
  const jwtToken = jwt.sign(
    { userId },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );

  res.cookie("jwt", jwtToken, {
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV !== "development",
    maxAge: 7 * 24 * 60 * 60 * 1000, 
  });

  return jwtToken; 
};
