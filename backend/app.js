const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/userRoutes");
const courseRoutes = require("./routes/courseRoutes");
const priceRoutes = require("./routes/priceRoutes");
const sectionRoutes = require("./routes/sectionRoutes");
const lectureRoutes = require("./routes/lectureRoutes");
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

app.use("/users", userRoutes);
app.use("/courses", courseRoutes);
app.use("/enrolls", priceRoutes);
app.use("/sections", sectionRoutes);
app.use("/lectures", lectureRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server is running on ${port}`));
