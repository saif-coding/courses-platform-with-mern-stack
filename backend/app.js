const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
dotenv.config();
connectDB();
app.use(express.json());
app.use(cors());
app.use(cookieParser());




const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server is running on ${port}`));
