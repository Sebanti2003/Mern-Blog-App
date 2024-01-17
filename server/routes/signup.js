const express=require('express');
const Signup=express.Router();
const {signup}=require('../controllers/signup.controller.js')
Signup.route('/post/signup').post(signup)
module.exports=Signup;