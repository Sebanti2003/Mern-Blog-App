const express=require('express');
const Signinrouter=express.Router();
const {postdatasignin}=require('../controllers/signin.controller.js')
Signinrouter.route('/post/signin').post(postdatasignin);
module.exports=Signinrouter;