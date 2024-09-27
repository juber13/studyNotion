import { User } from "../models/user.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import expressAsyncHandler from "express-async-handler";
import createHttpError from "http-errors";
// import token from "../utils/token.js";

import { tokengenerator } from "../utils/token.js";

// register user method post url[http://localhost:5000/user/register]
const register = asyncHandler(async (req, res, next) => {
  const { name, email, password, confirmPassword, role, lastName, phoneNumber } = req.body;

  if ([name, email, password, lastName, confirmPassword, phoneNumber, role].some((field) => field === "")) {
    return next(new ApiError(400, "All fields are required"));
  }

  if (password !== confirmPassword) {
    return next(new ApiError(400, "Password and confirm password do not match"));
  }

  if (email.indexOf("@") === -1) {
    return next(new ApiError(400, "Invalid email format"));
  }

  const isUserExists = await User.findOne({ email });
  if (isUserExists) {
    return next(new ApiError(400, "User already exists"));
  }

  const newUser = await User.create({ name, email, password, lastName, role, phoneNumber });

  return res.status(201).json(
    new ApiResponse(201, newUser, "User Registered Successfully")
  );
});


// login user method post url[http://localhost:5000/user/login]
const login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  console.log(email, password);

  // Check if any of the input fields are empty
  if ([email, password].some((field) => !field)) {
    return next(new ApiError(400, "All fields are required"));
  }

  // Find user without excluding password
  let user = await User.findOne({ email });
  if (!user) {
    return next(new ApiError(401, "Invalid Password or Email"));
  }

  // Check if the password is valid
  const isPasswordValid = user.isPasswordCorrect(password);

  if (!isPasswordValid) {
    return next(new ApiError(401, "Invalid Password or Email"));  
  }

  // const {accessToken , refreshToken} = await generateAccessAndRefreshToken(user._id);
  const token = await tokengenerator(user._id);
  const loggedInUser  = await User.findById(user._id).select("-password -refreshToken")
  console.log(token)

 const options = {
   httpOnly: true,
   secure: false, // Set to true if using HTTPS
   sameSite: "lax", // Adjust based on your needs
   maxAge: 24 * 60 * 60 * 1000, // 24 hours
 };



  return res
    .status(200)
    .cookie('token' , token , options)
    .json(new ApiResponse(200, {loggedInUser , token}, true, "Login Successfully"));
});


const logoutUser = asyncHandler(async (req, res) => {
  // delete user referesh token when ever u generate the referahe token
  return res.status(200).clearCookie("accessToken").json(
    new ApiResponse(200 , null , "User logout !")
  );
})

const editUserInfo  = asyncHandler(async(req, res) => {
    const { data } = req.body;
    console.log(data)
    
    const user = await User.findByIdAndUpdate(req.user._id , 
    {
       $set : {
          name,
          phoneNumber
       }
       
    }, {new : true , runValidators : true}
    
    ).select("-password -email -lastName")


   return res.status(200).json(
    new ApiResponse(200 , user , "User updated successfully")
   ) 

})




export  {register , login , logoutUser , editUserInfo}