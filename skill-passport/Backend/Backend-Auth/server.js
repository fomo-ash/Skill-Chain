import express from "express";
import dotenv from "dotenv";
import cors from "cors"; // 1. Import cors
import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());
app.use(cors()); // 2. Use cors middleware

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Port running at port ${PORT}`);
  connectDB();
});
