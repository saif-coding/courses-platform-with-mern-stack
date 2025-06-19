const { UserModel, registerVilidate } = require("../models/userModels");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const error = registerVilidate({ name, email, password });
    if (error) {
      return res.status(400).json({ message: error.message });
    }
    const user = await UserModel.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "user already avilable" });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({
      name,
      email,
      password: hashPassword,
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
    jwt.sign({ userId: user._id }, process.env.SECRET_KEY, { expiresIn: "7d" });
    const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
      expiresIn: "7d",
    });
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "None",
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

module.exports = { userRegister, userLogin };
