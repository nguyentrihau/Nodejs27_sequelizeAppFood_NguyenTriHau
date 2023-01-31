const express = require("express");
const {
  getLike,
  postLike,
  deleteLike,
} = require("../controllers/likeController");
const likeRoute = express.Router();
likeRoute.get("/getLike", getLike);
likeRoute.post("/postLike/:id", postLike);
likeRoute.post("/postLike", postLike);
likeRoute.delete("/deleteLike", deleteLike);
module.exports = likeRoute;
