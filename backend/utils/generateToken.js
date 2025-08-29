import jwt from "jsonwebtoken"
import { ENV_VARS } from "../config/envVariables.js"

export const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({userId},ENV_VARS.JWT_SECRET,{expiresIn: "15d"})

    res.cookie("jwt-netflix", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        samesite: "strict",
        secure : false
    })
    return token
}