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

const getAllCourses = async (req, res) => {
  try {
    const courses = await CourseModel.find()
      .sort({ createdAt: -1 })
      .populate("author");
    return res.status(200).json(courses);
  } catch (error) {
    console.error("failed to fatch courses", error);
    res.status(500).json({ message: "failed to fatch courses" });
  }
};

const getSingleCourse = async (req, res) => {
  try {
    const id = req.params.id;
    const singleCourse = await CourseModel.findById(id).populate("author");
    if (!singleCourse) {
      return res.status(404).json({ message: "course not found" });
    }
    return res.status(200).json(singleCourse);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "course is fetching is failed" });
  }
};
module.exports = { addCourse, getAllCourses, getSingleCourse };
