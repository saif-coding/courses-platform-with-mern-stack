const express = require("express");
const { userRegister, userLogin } = require("../controllers/userControllers");
const userRoutes = express.Router();

userRoutes.post("/register", userRegister);
userRoutes.post("/login", userLogin);

module.exports = userRoutes;
