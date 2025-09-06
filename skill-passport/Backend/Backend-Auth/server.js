import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import cors from "cors"
import authroutes from "./routes/auth.route.js"
import { connectDB } from './lib/db.js'

const app= express()

app.use(express.json())
app.use(cors())

app.use("/api/auth",authroutes);

const PORT = process.env.PORT


app.listen(PORT, ()=>{
    console.log("Port running at port")
    connectDB();
})
