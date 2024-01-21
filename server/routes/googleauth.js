const express=require('express');
const GoogleAuth=express.Router();
const {getpost}=require('../controllers/Authgoogle.js')
GoogleAuth.route('/post').post(getpost);
module.exports=GoogleAuth;