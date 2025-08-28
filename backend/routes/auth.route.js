import express from "express"
import { login, logout, signup } from "../controller/auth.controller.js";

const authroutes = express.Router()


authroutes.get("/signup", signup);

authroutes.get("/login", login);

authroutes.get("/logout", logout);

export default authroutes