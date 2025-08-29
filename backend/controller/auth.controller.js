import { User } from "../models/user.model.js";
import bcryptjs from "bcryptjs";


export const signup = async (req,res) => {
    try {
        const { email, password, username } = req.body

        if(!email || !password || !username ){
            return res
            .status(400)
            .json({success : false, message: "All fields are required"})
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex){
            return res
              .status(400)
              .json({ success: false, message: "Invalid Email" });
        }

        if(password.length < 8){
            return res
              .status(400)
              .json({ success: false, message: "Password must be atleast 8 characters" });
        }

        const existingUSerByEmail = await User.findOne({ email: email });

        if(existingUSerByEmail){
            return res
              .status(400)
              .json({success: false, message: "Email aLready exists"});
        }

        const existingUSerByUsername = await User.findOne({ username: username });

        if (existingUSerByUsername) {
          return res
            .status(400)
            .json({ success: false, message: "Username aLready exists" });
        }

        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        const PROFILE_PICS = ["/avatar1.png", "/avatar2.png", "/avatar3.png"];

        const image = PROFILE_PICS[Math.floor(Math.random() * PROFILE_PICS.length)];

        const newUser = new User({
            email: email,
            password: hashedPassword,
            username: username,
            image : image
        })

        await newUser.save()

        res.status(201).json({ success: true, user : {
            ...newUser._doc,
            password: ""
        } })

    } catch (error) {
        console.log("Error in signup controller", error.message);
        return res
          .status(500)
          .json({ success: false, message: "Internal server error" });
    }
}

export const login = async (req,res) => {
    res.send("login route")
}

export const logout = async (req,res) => {
    res.send("logout route")
}
