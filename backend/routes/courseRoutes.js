const express = require("express");
const varifyToken = require("../middlewares/varifyToken");
const upload = require("../middlewares/multer");
const {
  addCourse,
  getAllCourses,
} = require("../controllers/courseControllers");
const courseRoutes = express.Router();

courseRoutes.post("/add", upload.single("thumbnail"), varifyToken, addCourse);
courseRoutes.get("/getall", varifyToken, getAllCourses);

module.exports = courseRoutes;
