import mongoose, { model } from "mongoose";

const courseSchema = new mongoose.Schema({
    CourseName: {
      type: String,
      required: [true, "courseName is required"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      maxLength : 100
    },

    email: {
      type: String,
      required: [true, "Email is required"],
    },
    
    instructorDetails : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Instructor",
        required : [true , "Instructor detail is required"]
    },

  },{timestamps : true});

  export const Course = mongoose.model('Course' , courseSchema)


