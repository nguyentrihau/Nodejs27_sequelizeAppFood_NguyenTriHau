const express = require("express");
const likeRoute = require("./likeRoute");
const rateRoute = require("./rateRoute");
const userRoute = require("./userRoute");
const rootRoute = express.Router();

//su dung middleware cua express
rootRoute.use("/user", userRoute);
//like
rootRoute.use("/like", likeRoute);

//rate
rootRoute.use("/rate", rateRoute);

module.exports = rootRoute;
