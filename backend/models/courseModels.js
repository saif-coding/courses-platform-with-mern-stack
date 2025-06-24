const mongoos = require("mongoose");

const courseSchema = new mongoos.Schema(
  {
    thumbnail: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    coursePrice: { type: Number, required: true },
    offerPrice: { type: Number, required: true },
    author: { type: mongoos.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

const CourseModel = mongoos.model("Course", courseSchema);
module.exports = CourseModel;
