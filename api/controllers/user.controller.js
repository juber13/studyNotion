import { User } from "../models/user.models";
import { ApiError } from "../utils/ApiError";
import { ApiResponse } from "../utils/apiResponse";
import { AsyncHandler } from "../utils/asyncHandler";

import bcrypt from 'bcryptjs';


// register user method post url[http://localhost:5000/user/register]

const register = AsyncHandler(async (req, res) => {
    const {name , email , password , lastName} = req.body;

    // check all if any of input field is empty
    if([name , email , password , lastName].some(field => {
        if(!field) ApiError(404 , "All fields are required" )
    }));

    const isUserExits = await User.findOne({email});
    if(!isUserExits) return ApiResponse(201 , null , "User already register");

    const hashPassword = bcrypt.hash(password , 10);

    const newUser = await User.create({name , email , password : hashPassword , lastName})

    return ApiResponse(200 , newUser , "Register Successfully")
});


// login user method post url[http://localhost:5000/user/login]

const login = AsyncHandler(async (req, res) => {
  const {email, password } = req.body;

  // check all if any of input field is empty
  if ([email, password].some((field) => {
      if (!field) ApiError(404, "All fields are required");
    })
  );

  const isUserExits = await User.findOne({ email });
  if (!isUserExits) return ApiResponse(404, null, "User not found");

  const hashPassword = bcrypt.compare(password);
  
   if(hashPassword == password){
     return ApiResponse(200,isUserExits , "Login Successfully");
  }

});




export  {register}