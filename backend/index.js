const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDb = require("./config/db");
const path = require("path");
const multer = require("multer");
const helmet = require("helmet");
const morgan = require("morgan");
const webpush = require("web-push");
const bodyParser = require("body-parser");
const app = express();

const { notFound, errorHandler } = require("./middleware/errorHandlers");

// routes
const hospitalRoutes = require("./routes/hospitalRoutes");
const userRoutes = require("./routes/userRoutes");
const userReports = require("./routes/reports");
const appointmentRoutes = require("./routes/appointmentRoutes");
const doctorRoutes = require("./routes/doctorRoutes");
const reports = require("./routes/reports");
const medicRoutes = require("./routes/medicRoutes");

dotenv.config();

//middlewares
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("common"));
app.use(express.urlencoded({ extended: false }));

// app.use("/images", express.static(path.join(__dirname, "/public/images")));

// // multer implementation for uploading files/images
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "public/images");
//   },
//   filename: (req, file, cb) => {
//     cb(null, req.body.name);
//   },
// });

// const upload = multer({ storage });
// app.post("/api/upload", upload.single("file"), (req, res) => {
//   try {
//     return res.status(200).json("File Uploaded Successfully");
//   } catch (err) {
//     console.log(err);
//   }
// });

const publicVapidKey =
  "BNMkYgI5rG1OR8cZNo9yZEXfdlcIlY7egBEwpUyoDXWhT0hraIwQbuzCHlo7rqwaAHgJtXvaVs8tjhw8_8wpQ_w";
const privateVapidKey = "_GiZvcjF-FSmPULiqCxaPZcdalmVnClT69aX2lX0Vko";

app.use("/api/hospitals", hospitalRoutes);
app.use("/api/user", userRoutes);
app.use("/api/userAppointment", appointmentRoutes);
app.use("/api/reports", userReports);
app.use("/api/doctor", doctorRoutes);
app.use("/api/medic", medicRoutes);
//database
connectDb();

app.use(notFound);
app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log("SERVER UP AND RUNNING".bold.cyan);
});
