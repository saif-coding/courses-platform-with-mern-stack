const { UserModel, registerVilidate } = require("../models/userModels");
const uploadCloudinary = require("../middlewares/cloudinary");
const path = require("path");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const error = registerVilidate({ name, email, password });
    if (error) {
      return res.status(400).json({ message: error.message });
    }
    if (!req.file) {
      return res.status(400).json({ message: "No image uploaded" });
    }
    const imageUrl = await uploadCloudinary(req.file.path);
    const user = await UserModel.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "user already avilable" });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({
      name,
      email,
      password: hashPassword,
      profileImage: imageUrl,
    });
    await newUser.save();
    return res
      .status(201)
      .json({ message: "user register successfully", user: newUser });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "registe is failed" });
  }
};

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "email is wrong" });
    }
    const isMatch = await bcrypt.compare(user.password, password);
    if (isMatch) {
      return res.status(401).json({ message: "password is wrong" });
    }
    const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
      expiresIn: "7d",
    });
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "Strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    return res
      .status(200)
      .json({ message: "user login successfully", token, user });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "user login failed" });
  }
};

const userLogout = async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: false,
      sameSite: "Strict",
    });
    res.status(200).json({ message: "user logout successfully " });
  } catch (error) {
    console.error("user logout failed", error);
    res.status(500).json({ message: "user logout failed" });
  }
};

const getSingleUser = async (req, res) => {
  try {
    const userId = req.user.userId;
    const user = await UserModel.findById(userId).select("-password");
    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }
    return res.status(200).json(user);
  } catch (error) {
    console.log("error of the sinlge user");
  }
};

const getALLusers = async (req, res) => {
  try {
    const users = await UserModel.find().select("-password");
    res.status(200).json(users);
  } catch (error) {
    console.error("error to fatch all users", error);
    res.status(500).json({ message: "failed to fatch all users" });
  }
};

module.exports = {
  userRegister,
  userLogin,
  userLogout,
  getSingleUser,
  getALLusers,
};
