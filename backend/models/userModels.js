const mongoose = require("mongoose");
const joi = require("joi");
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: 4,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minLength: 8,
    },
    profileImage: {
      type: String,
      default: "", // path or url
    },
  },
  { timestamps: true }
);

function registerVilidate(data) {
  const schema = joi.object({
    name: joi.string().min(4).required(),
    email: joi.string().email().required(),
    password: joi.string().min(8).required(),
  });
  const { error } = schema.validate(data);
  return error;
}

const UserModel = mongoose.model("User", userSchema);
module.exports = { UserModel, registerVilidate };
