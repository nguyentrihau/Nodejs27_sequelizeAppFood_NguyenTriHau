const express = require("express");
const userRoute = express.Router();

//import commonjs  Module
//import ham getUser tu thu muc controller
const {getUser, createUser} = require('../controllers/userController');
//tao api phuong thuc GET
userRoute.get("/getUser",getUser);
//tao api phuong thuc POST
userRoute.post("/createUser",createUser);
//tao api phuong thuc PUT
// userRoute.post("/updateUser",updateUser);



module.exports = userRoute;