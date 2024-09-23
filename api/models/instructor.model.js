import mongoose from "mongoose";


const instructorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  lastName: {
    type: String,
    required: [true, "lastName is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },

  uplodedCourse: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
  },

},{timestamps : true});


export const Instructor = mongoose.model("Instructor" , instructorSchema)