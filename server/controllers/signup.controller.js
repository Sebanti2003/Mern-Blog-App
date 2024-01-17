const express = require("express");
const mongoose = require("mongoose");
const User = require("../models/user.model.js");
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);
exports.signup = async (req, res) => {
  try {
    const body = req.body;
    const { username, email, password } = body;
    if (
      !username ||
      !email ||
      !password ||
      username === "" ||
      email === "" ||
      password === ""
    ) {
      return res
        .status(400)
        .json({
          Outcome: "Failed",
          Status: 400,
          message: "All credentials are required",
        });
    }
    const hashedpassword=bcrypt.hashSync(password,salt);
    const newuser = await User.create({username,email,password:hashedpassword});
    if(newuser){
        console.log("Done creating the user!!!!!");
        return res.status(200).json({ Message: "Success", status: 200, newuser });
    }
    
  } catch (error) {
    res.status(404).json({status:404,error})
  }
};
