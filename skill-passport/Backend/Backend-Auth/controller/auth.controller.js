import { token } from "../lib/utils.js";
import User from "../model/User.model.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
  try {
    const { fullname, password, email } = req.body;

    if (!fullname || !email || !password) {
      return res.status(400).json({ error: "Please provide all required fields." });
    }

    if (password.length < 6) {
      return res.status(400).json({ error: "Password must be at least 6 characters long." });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User with this email already exists." });
    }

    const salt = await bcrypt.genSalt(10); 
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      fullname,
      email,
      password: hashedPassword,
    });

    await newUser.save(); 


    token(newUser._id, res);

    res.status(201).json({
      _id: newUser._id,
      fullname: newUser.fullname,
      email: newUser.email,
    });

  } catch (error) {
    console.error("Error in signup controller: ", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required." });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Invalid credentials." });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid credentials." });
    }

    token(user._id, res);

    res.status(200).json({
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
    });

  } catch (error) {
    console.error("Error in login controller: ", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
