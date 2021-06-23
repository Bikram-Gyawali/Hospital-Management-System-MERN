const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDb = require("./config/db");

const app = express();

const hospitalRoutes = require("./routes/hospitalRoutes");
const userRoutes = require("./routes/userRoutes");

dotenv.config();

//middlewares
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use("/api/hospitals", hospitalRoutes);
app.use("/api/user", userRoutes);
//database
connectDb();

app.listen(process.env.PORT, () => {
  console.log("SERVER UP AND RUNNING".bold.cyan);
});
