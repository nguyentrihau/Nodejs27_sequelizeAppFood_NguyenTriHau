const express = require("express");
const {
  getLike,
  postLike,
  deleteLike,
  getAllLikeResUser,
  getAllRes,
} = require("../controllers/likeController");
const likeRoute = express.Router();
likeRoute.get("/getLike/:id", getLike);
likeRoute.post("/postLike", postLike);
likeRoute.delete("/deleteLike", deleteLike);
likeRoute.get("/getAllLikeResUser", getAllLikeResUser);
likeRoute.get("/getAllRes", getAllRes);
module.exports = likeRoute;
