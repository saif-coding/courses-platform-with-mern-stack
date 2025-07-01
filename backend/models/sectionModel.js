// models/Section.js
const mongoose = require("mongoose");

const sectionSchema = new mongoose.Schema(
  {
    courseId: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
    name: { type: String, required: true },
  },
  { timestamps: true }
);

const SectionModel = mongoose.model("Section", sectionSchema);
module.exports = SectionModel;
