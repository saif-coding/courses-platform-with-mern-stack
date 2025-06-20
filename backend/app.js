const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
dotenv.config();
connectDB();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(cookieParser());

const userRoutes = require("./routes/userRoutes");
app.use("/users", userRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server is running on ${port}`));
