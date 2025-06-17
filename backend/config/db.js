const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("mongodb is connected");
  } catch (error) {
    console.log("mongodb connection is failed", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
