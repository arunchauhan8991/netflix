import express from "express"
import { login, logout, signup } from "../controller/auth.controller.js";

const authroutes = express.Router()


authroutes.post("/signup", signup);

authroutes.post("/login", login);

authroutes.post("/logout", logout);

export default authroutes