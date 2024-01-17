const express=require('express');
const TestRouter=express.Router();
const {testget}=require('../controllers/test.controllers.js')
TestRouter.route('/').get(testget);
module.exports=TestRouter;