const express = require("express");
const varifyToken = require("../middlewares/varifyToken");
const upload = require("../middlewares/multer");
const { addCourse } = require("../controllers/courseControllers");
const courseRoutes = express.Router();

courseRoutes.post("/add", upload.single("thumbnail"), varifyToken, addCourse);

module.exports = courseRoutes;
