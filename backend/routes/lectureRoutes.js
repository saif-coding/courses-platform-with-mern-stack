const express = require("express");
const {
  addLecture,
  getAllLectures,
} = require("../controllers/lectureControllers");
const varifyToken = require("../middlewares/varifyToken");
const upload = require("../middlewares/multer");
const lectureRoutes = express.Router();

lectureRoutes.post("/add/:id", upload.single("video"), varifyToken, addLecture);
lectureRoutes.get("/get/:id", getAllLectures);

module.exports = lectureRoutes;
