const express = require('express');
const { getLike } = require('../controllers/likeController');
const likeRoute = express.Router();
likeRoute.get("/getLike",getLike);

module.exports = likeRoute