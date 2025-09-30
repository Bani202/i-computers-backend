import express from "express";
import { createUser,loginUser } from "../controllers/Usercontroller.js"

const userrouter = express.Router();

userrouter.post("/",createUser)
userrouter.get("/login",loginUser)

export default userrouter;
