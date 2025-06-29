const express = require("express");
const priceRoutes = express.Router();
const { enrollCourse , getUserEnrollments} = require("../controllers/priceControllers");
const verifyToken = require("../middlewares/varifyToken");

priceRoutes.post("/add/:id", verifyToken, enrollCourse);
priceRoutes.get("/my-courses", verifyToken, getUserEnrollments);

module.exports = priceRoutes;
