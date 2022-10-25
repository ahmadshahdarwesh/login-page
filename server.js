const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const routesUrls = require("./routes/route.js");
const cors = require("cors");
app.use(express.json());
app.use(cors());
app.use("/app", routesUrls);
dotenv.config();
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}`
  )
  .then(() => {
    console.log("Database connected! :smiley:");
  })
  .catch((error) => {
    console.log(error.message);
    console.log(":face_with_raised_eyebrow:");
  });

app.listen(4000, () => console.log("server is open at port 4000"));
