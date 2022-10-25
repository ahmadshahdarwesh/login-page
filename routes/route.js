const { response } = require("express");
const express = require("express");
const router = express.Router();
const user = require("../models/Signupmodel.js");

router.post("/signup", async (req, res) => {
  try {
    const signedUpUser = await user.create({
      fullName: req.body.fullName,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    return res
      .status(200)
      .json({ message: "Signed up successfully", signedUpUser });
  } catch (error) {
    return res.status(500).json({ message: "Error happened" });
  }
});

module.exports = router;
