import { Router } from "express";

const userRouter = Router();
import { register , login, logoutUser } from "../controllers/user.controller.js";
import auth from "../middlewares/auth.js";

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.post('/logout' , auth , logoutUser )

export default userRouter;