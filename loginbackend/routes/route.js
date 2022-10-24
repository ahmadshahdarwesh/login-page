const { response } = require("express");
const express = require("express");
const router = express.Router();
const signupTeplateCopy = require("../models/Signupmodel");

router.post("/signup", (req, res) => {
  const signedUpUser = new signupTeplateCopy({
    fullName: req.body.fullName,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });
  signedUpUser.save().then((data) => {
    response.json(data);
  });
});

module.exports = router;
