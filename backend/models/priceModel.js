const mongoose = require("mongoose");

const priceSchema = new mongoose.Schema(
  {
    course: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
    price: { type: Number, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

const PriceModel = mongoose.model("Price", priceSchema);
module.exports = PriceModel;
