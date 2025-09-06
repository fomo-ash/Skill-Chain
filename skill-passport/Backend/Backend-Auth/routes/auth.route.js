import express from "express"
import { login, signup } from "../controller/auth.controller.js";

const router= express.Router();

router.post("/signup", signup); 

router.post("/login", login);

export const logout = (req, res) => {
  try {
    // To log a user out, you clear the cookie from their browser.
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.error("Error in logout controller: ", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

router.post("/logout", logout);

export default router;