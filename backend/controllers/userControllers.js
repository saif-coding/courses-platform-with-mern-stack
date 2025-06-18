const { UserModel, registerVilidate } = require("../models/userModels");

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
    const newUser = new UserModel({
      name,
      email,
      password,
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
    if (user.password !== password) {
      return res.status(401).json({ message: "Password is incorrect" });
    }
    return res.status(200).json({ message: "user login successfully", user});
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "user login failed" });
  }
};


module.exports = { userRegister, userLogin };
