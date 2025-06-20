const express = require("express");
const { userRegister, userLogin } = require("../controllers/userControllers");
const upload = require("../middlewares/multer");
const userRoutes = express.Router();

userRoutes.post("/register", upload.single("profileImage"), userRegister);
userRoutes.post("/login", userLogin);

module.exports = userRoutes;
