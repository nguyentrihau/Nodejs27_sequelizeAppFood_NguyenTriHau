const express = require("express");
const { userOrder } = require("../controllers/orderController");
const orderRoute = express.Router();

orderRoute.post("/userOder", userOrder);

module.exports = orderRoute;
