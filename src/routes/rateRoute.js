const express = require("express");
const { getRate, createRate } = require("../controllers/rateController");
const rateRoute = express.Router();
rateRoute.get("/getRate", getRate);
rateRoute.post("/createRate", createRate);
module.exports = rateRoute;
