import mongoose from "mongoose";

export const connectDB = async()=>{
    try {
        const connection= await mongoose.connect(process.env.MONGODB_URI)
        console.log("Mongo Connected")
    } catch (error) {
        console.log("Mongo Db connection error: ", error)
    }
}