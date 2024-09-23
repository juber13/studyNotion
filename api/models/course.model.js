import mongoose, { model } from "mongoose";

const courseSchema = new mongoose.Schema({
    courseName: {
      type: String,
      required: [true, "courseName is required"],
      unique : [true , "courseName should be unique"]
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      maxLength : 100
    },

    whatYouWillLearn : {
      type : String,
    },

    ratingAndReview : {
      type : mongoose.Schema.Types.ObjectId,
      ref : "Rating"
    },

    instructor : {
      type : mongoose.Schema.Types.ObjectId,
      ref : "User",
    },

    courseContent : {
      type : String,
      required : true,
    },

    price : {
      type : String,
      required : true,
    },

    thumbnail : {
      type : String,
    },

    tag : {
      type : String,
    },

    uploadedBy: {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Instructor",
        required : [true , "Instructor detail is required"]
    },

    studentEnrolled : {
      type : mongoose.Schema.Types.ObjectId,
      ref : "User"
    }

  },{timestamps : true});

  export const Course = mongoose.model('Course' , courseSchema)


