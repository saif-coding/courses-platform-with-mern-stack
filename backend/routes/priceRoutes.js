const express = require("express");
const priceRoutes = express.Router();
const { enrollCourse } = require("../controllers/priceControllers");
const verifyToken = require("../middlewares/varifyToken");

priceRoutes.post("/add/:id", verifyToken, enrollCourse);

module.exports = priceRoutes;
