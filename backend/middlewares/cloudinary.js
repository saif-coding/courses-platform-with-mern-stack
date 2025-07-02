const { v2: cloudinary } = require("cloudinary"); // ✅ Fixed
const fs = require("fs");
const path = require("path");
// Configuration
const uploadCloudinary = async (filepath) => {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET, // Click 'View API Keys' above to copy your API secret
  });
  try {
    if (!filepath) {
      return null;
    }
    // Detect file extension (e.g., .jpg, .mp4)
    const ext = path.extname(filepath).toLowerCase();

    // Decide whether it's a video or image
    const isVideo = [".mp4", ".mov", ".avi", ".webm", ".mkv"].includes(ext);
    const resourceType = isVideo ? "video" : "image";
    const result = await cloudinary.uploader.upload(filepath, {
      resource_type: resourceType,
    });
    fs.unlinkSync(filepath);
    return result.secure_url;
  } catch (error) {
    fs.unlinkSync(filepath);
    console.log("Error uploading to Cloudinary:", error);
  }
};

module.exports = uploadCloudinary;
