const express = require("express");
const userController = require("../controllers/User");

const userRouter = express.Router();

userRouter.get("/getusers", userController.getUsers);
userRouter.post("/signup", userController.signup); 
userRouter.post("/login", userController.login); 
userRouter.post("/reset-password", userController.resetPassword);
 

module.exports = userRouter;
