const express = require("express");
const foodRoute = require("./foodRoute");
const likeRoute = require("./likeRoute");
const orderRoute = require("./orderRoute");
const rateRoute = require("./rateRoute");
const userRoute = require("./userRoute");
const rootRoute = express.Router();

//su dung middleware cua express
rootRoute.use("/user", userRoute);
//like
rootRoute.use("/like", likeRoute);

//rate
rootRoute.use("/rate", rateRoute);
//order
rootRoute.use("/order", orderRoute);
rootRoute.use("/res", likeRoute);
rootRoute.use("/food", foodRoute);
module.exports = rootRoute;
