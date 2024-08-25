import { User } from "../models/user.models";
import { ApiError } from "../utils/ApiError";
import { ApiResponse } from "../utils/apiResponse";
import { AsyncHandler } from "../utils/asyncHandler";

import bcrypt from 'bcryptjs';


// register user method post url[http://localhost:5000/user/register]

const register = AsyncHandler(async (req, res, next) => {
  const { name, email, password, lastName } = req.body;

  // Check if any of the input fields are empty
  if ([name, email, password, lastName].some((field) => !field)) {
    return next(ApiError(400, "All fields are required")); // Use 'next' to pass the error
  }

  // Check if the user already exists
  const isUserExists = await User.findOne({ email });
  if (isUserExists) {
    return next(ApiError(409, "User already registered")); // Change to 409 Conflict
  }

  // Hash the password
  const hashPassword = await bcrypt.hash(password, 10); // Await the hashing operation

  // Create a new user
  const newUser = await User.create({
    name,
    email,
    password: hashPassword,
    lastName,
  });

  return ApiResponse(201, newUser, "Register Successfully"); 
});


// login user method post url[http://localhost:5000/user/login]

const login = AsyncHandler(async (req, res , next) => {
  const { email, password } = req.body;

  // Check if any of the input fields are empty
  if ([email, password].some((field) => !field)) {
    return next(ApiError(400, "All fields are required")); 
  }
  const user = await User.findOne({ email });
  if (!user) {
    return ApiResponse(404, null, "User not found"); 
  }
  const isPasswordValid = await bcrypt.compare(password, user.password); 
  if (!isPasswordValid) {
    return ApiResponse(401, null, "Invalid password"); 
  }

  return ApiResponse(200, user, "Login Successfully"); 
});




export  {register , login}