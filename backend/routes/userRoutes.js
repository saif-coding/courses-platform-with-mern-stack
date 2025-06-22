const express = require("express");
const varifyToken = require("../middlewares/varifyToken");
const {
  userRegister,
  userLogin,
  getSingleUser,
  getALLusers,
  userLogout,
} = require("../controllers/userControllers");
const upload = require("../middlewares/multer");
const userRoutes = express.Router();

userRoutes.post("/register", upload.single("profileImage"), userRegister);
userRoutes.post("/login", userLogin);
userRoutes.post("/logout", varifyToken, userLogout);
userRoutes.get("/profile", varifyToken, getSingleUser);
userRoutes.get("/allusers", varifyToken, getALLusers);

module.exports = userRoutes;
