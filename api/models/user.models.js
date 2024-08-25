import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name : {
        type :  String,
        required : [true , "Name is required"]
    },
    lastName : {
        type :  String,
        required : [true , "lastName is required"]
    },
    email : {
        type :  String,
        required : [true , "Email is required"]
    },
    password : {
        type :  String,
        required : [true , "Password is required"]
    },

    enrolledCourses : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Course"
    }

    
},{timestamps : true});

export const User = mongoose.model("User" , userSchema)