const express = require("express");
const varifyToken = require("../middlewares/varifyToken");
const {
  addSection,
  getAllSections,
} = require("../controllers/sectionControllers");

const sectionRoutes = express.Router();

sectionRoutes.post("/add/:id", varifyToken, addSection);
sectionRoutes.get("/getall/:id", varifyToken, getAllSections);

module.exports = sectionRoutes;
