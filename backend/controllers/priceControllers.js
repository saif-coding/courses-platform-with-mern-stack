const PriceModel = require("../models/priceModel");

const enrollCourse = async (req, res) => {
  try {
    const { coursePrice } = req.body;
    const userId = req.user.userId; // from token
    const courseId = req.params.id;

    // Check if already enrolled
    const alreadyEnrolled = await PriceModel.findOne({
      user: userId,
      course: courseId,
    });
    if (alreadyEnrolled) {
      return res
        .status(400)
        .json({ message: "Already enrolled in this course" });
    }

    const newEnroll = new PriceModel({
      course: courseId,
      price: coursePrice,
      user: userId,
    });

    await newEnroll.save();

    res
      .status(201)
      .json({ message: "Enrollment successful", enroll: newEnroll });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Enrollment failed" });
  }
};

const getUserEnrollments = async (req, res) => {
  try {
    const userId = req.user.userId;
    const enrollments = await PriceModel.find({
      user: userId,
    }).populate("course");

    res.status(200).json(enrollments);
  } catch (error) {
    res.status(500).json({ message: "Failed to get enrolled courses" });
  }
};



module.exports = { enrollCourse, getUserEnrollments };
