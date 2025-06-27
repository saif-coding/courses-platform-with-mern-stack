const express = require("express");
const varifyToken = require("../middlewares/varifyToken");
const upload = require("../middlewares/multer");
const {
  addCourse,
  getAllCourses,
  getSingleCourse,
} = require("../controllers/courseControllers");
const courseRoutes = express.Router();

courseRoutes.post("/add", upload.single("thumbnail"), varifyToken, addCourse);
courseRoutes.get("/getall", varifyToken, getAllCourses);
courseRoutes.get("/single/:id", varifyToken, getSingleCourse);

module.exports = courseRoutes;
