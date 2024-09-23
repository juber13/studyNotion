import cloudinary from 'cloudinary'
import fs from 'fs'

cloudinary.v2.config({
  api_key: process.env.apiKey,
  api_secret: process.env.apiSecret,
  cloud_name: process.env.cloudName,
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