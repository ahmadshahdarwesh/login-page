const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
mongoose.connect(process.env.DB_USER, () => console.log("database connected"));

app.listen(4000, () => console.log("server is open at port 4000"));
