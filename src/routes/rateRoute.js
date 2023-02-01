const express = require("express");
const {
  getRate,
  createRate,
  getAllRateParam,
} = require("../controllers/rateController");
const rateRoute = express.Router();
rateRoute.get("/getRate", getRate);
rateRoute.post("/createRate", createRate);
rateRoute.get("/getAllRateParam/:id", getAllRateParam);
module.exports = rateRoute;
