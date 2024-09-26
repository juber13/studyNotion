import { Router } from "express";

const userRouter = Router();
import { register , login, logoutUser , editUserInfo} from "../controllers/user.controller.js";
import authenticate from "../middlewares/authenticate.js";

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.put("/update" , authenticate , editUserInfo)
// userRouter.post('/logout' , auth , logoutUser )

export default userRouter;