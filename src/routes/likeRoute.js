const express = require("express");
const {
  getLike,
  postLike,
  deleteLike,
  getAllLikeResUser,
} = require("../controllers/likeController");
const likeRoute = express.Router();
likeRoute.get("/getLike/:id", getLike);
likeRoute.post("/postLike", postLike);
likeRoute.delete("/deleteLike", deleteLike);
likeRoute.get("/getAllLikeResUser", getAllLikeResUser);
module.exports = likeRoute;
