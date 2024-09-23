import jwt from 'jsonwebtoken'
import { ApiError } from '../utils/ApiError.js';
import { User } from '../models/user.model.js';

const auth = async(req, _, next) => {
    try {
    const token = req.cookies?.token || req.header("Authorization")?.replace("Bearer " , "");
    if(!token) return next(ApiError(400 , "You are not authenticated"));

    const verifyToken = jwt.verify(token, process.env.tokenKey); // Verify the token
    const user = await User.findById(verifyToken._id);
    
    if(!user) return next(ApiError(400 , "token Access invalid"));
    
       req.user = user; 
       next(); 
     } catch (error) {
       return next(ApiError(401, "Token is invalid")); 
     }
}

export default auth;