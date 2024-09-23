import { Course } from "../models/course.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

// const uploadCourse = asyncHandler(async (req, res) => {
//     const {courseName , description} = req.body;
//     // const {videoPath} = req.file;
//     const videoPath = req.file?.path;
   
//     if([courseName , description , videoPath].some(field => !field)){
//         throw new ApiError(400 , "All fields are required");
//     }

//     const isCourseAlreadyAdded = await Course.findOne({courseName});
//     if(isCourseAlreadyAdded) {
//         throw new ApiError(400, "Course is already added");
//     }

//     const newCourse = await Course.create({
//       courseName,
//       description,
//       videoUrl: videoPath,
//       uploadedBy: req.user._id,
//     });

//     return res
//       .status(201)
//       .json(ApiResponse(201, newCourse, true, "Course uploaded successfully"));
    
// });


// const patientRegister = async(req, res ) { 

// }


// export {
//     uploadCourse
// }