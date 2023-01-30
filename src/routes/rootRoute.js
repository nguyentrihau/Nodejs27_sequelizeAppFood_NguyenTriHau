const express = require("express");
const likeRoute = require("./likeRoute");
const userRoute = require("./userRoute");
const rootRoute = express.Router();

//su dung middleware cua express
rootRoute.use("/user",userRoute);

//product
rootRoute.use("/like",likeRoute);

//food
// rootRoute.use("/food",foodRoute);


module.exports = rootRoute;