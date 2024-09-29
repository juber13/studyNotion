import { Router } from "express";

const userRouter = Router();
import { register , login, logoutUser , editUserInfo} from "../controllers/user.controller.js";
import authenticate from "../middlewares/authenticate.js";


// const { upload } from '../middlewares/multer.js'
import { upload } from "../middlewares/multer.js";

userRouter.post("/register", upload.single("avatarImage"), register);

userRouter.post("/login", login);
userRouter.put("/update" , authenticate , editUserInfo)
// userRouter.post('/logout' , auth , logoutUser )

export default userRouter;