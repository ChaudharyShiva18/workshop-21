const express = require("express");
const router = express.Router();
const User = require("../model/Schema");
require("../db/conn");

router.post("/register", async (req, res) => {
  const { name, email, phone, password, cpassword } = req.body;
  var validator = require("email-validator");
  let emailValidate = validator.validate(email);
  let numberValidate = phone.length;
  console.log(numberValidate);

  if (!name || !email || !phone || !password || !cpassword) {
    return res.status(204).json({ error: "Plz filled the field properly" });
  }
  if (!emailValidate) {
    return res.status(406).json({ error: "Plz filled email properly" });
  }
  if (!(numberValidate == 10)) {
    return res.status(411).json({ error: "Plz filled 10 digit number" });
  }

  var paswd = /^(?.=*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
  var passwordCheck = password.match(paswd);
  if (!passwordCheck) {
    return res.status(499).json({ error: "Invalid Password" });
  }

  if (!(password === cpassword)) {
    return res.status(498).json({ error: "Plz filled 10 digit number" });
  }

  try {
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(208).json({ error: "Email already exist" });
    }

    const user = new User({ name, email, phone, password, cpassword });
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.log(err);
  }
});

router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Fill form correctly" });
    }
    const userLogin = await User.findOne({
      email: email,
    });
    if (password === userLogin.password) {
      return res.status(200).json({ message: "login successfull" });
    } else {
      return res.status(400).json({ error: "Invalid data" });
    }
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
