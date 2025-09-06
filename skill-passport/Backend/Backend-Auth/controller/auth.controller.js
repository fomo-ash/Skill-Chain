import { token } from "../lib/utils.js";
import User from "../model/User.model.js";
import bcrypt from "bcryptjs"


export const signup = async (req,res)=>{
  const { fullname, password, email}= req.body;

  try {
    if(!fullname || !email){
        return res.status(400).json({message:"Input The Credentials"})
    }

    if(password.length <6){
        return res.status(400).json({message:"Password must be greater than 6 letters"})
    }

    const user= await User.findOne({ email })

    if(user) return res.status(400).json({message:"User exists already"})

    const salt= await bcrypt.genSalt(12);
    const hashed= await bcrypt.hash(password,salt);

     const newUser = new User({
        fullname, email, password: hashed
      })

      if (newUser){
        token(newUser._id, res)
        await newUser.save()

        res.status(201).json({
            _id: newUser._id,
            fullname: newUser.fullname,
            email:newUser.email,
            token
        })
      }
      else{
        res.status(400).json({
            message:"Doesn't exist"
        })
      }


  } catch (error) {
    console.error("Error is ", error.message)
    res.status(500).json({message:"Internal error"})
  }
}

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // check if body is missing
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Invalid Credentials (user not found)" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid Credentials (wrong password)" });
    }


    return res.status(200).json({
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
    });

  } catch (error) {
    console.error("Error in login controller", error.message);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

