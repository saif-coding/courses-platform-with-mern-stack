const CourseModel = require("../models/courseModels");
const path = require("path");
const uploadCloudinary = require("../middlewares/cloudinary");
const addCourse = async (req, res) => {
  try {
    const { title, description, category, coursePrice, offerPrice } = req.body;
    const userId = req.user.userId;
    if (!req.file) {
      return res.status(403).json({ message: "file not uploaded" });
    }
    const imageUrl = await uploadCloudinary(req.file.path);
    const course = new CourseModel({
      thumbnail: imageUrl,
      title,
      description,
      category,
      coursePrice,
      offerPrice,
      author: userId,
    });
    await course.save();
    return res.status(201).json({ message: "course add successfully".course });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "failed to upload course" });
  }
};

module.exports = { addCourse };
