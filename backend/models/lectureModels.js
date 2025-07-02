const mongoose = require("mongoose");

const lectureSchema = new mongoose.Schema(
  {
    section: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Section",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    videoUrl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const LectureModel = mongoose.model("Lecture", lectureSchema);
module.exports = LectureModel;
