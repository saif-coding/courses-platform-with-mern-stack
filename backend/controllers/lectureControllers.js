const LectureModel = require("../models/lectureModels");
const uploadCloudinary = require("../middlewares/cloudinary");

const addLecture = async (req, res) => {
  try {
    const { lectureTitle } = req.body;
    const sectionId = req.params.id;
    if (!req.file) {
      return res.status(400).json({ message: "No video file uploaded" });
    }
    const videoUrl = await uploadCloudinary(req.file.path); // Cloudinary video upload

    const newLecture = new LectureModel({
      section: sectionId,
      title: lectureTitle,
      videoUrl,
    });
    await newLecture.save();
    return res
      .status(201)
      .json({ message: "Lecture uploaded successfully", newLecture });
  } catch (error) {
    console.error("Error adding lecture:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const getAllLectures = async (req, res) => {
  try {
    const sectionId = req.params.id;
    const allLecture = await LectureModel.find({ section: sectionId });
    if (!allLecture) {
      return res.status(404).json({ message: "section not found" });
    }
    return res.status(200).json({ message: "get all lecture", allLecture });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "failed to get all lecture" });
  }
};

module.exports = { addLecture, getAllLectures };
