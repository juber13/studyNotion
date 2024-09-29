import cloudinary from 'cloudinary'
import fs from 'fs'

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadImage = async (localPath) => {
    try {
    
    if (!localPath) return null;
    const response  = await cloudinary.uploader.upload(localPath , {
        resource_type: "auto"
    });

    // file upload successfully completed
    fs.unlinkSync(localPath)
    return response;
    } catch (error) {
        fs.unlinkSync(localPath);
        return null;
    }
}


export default uploadImage;