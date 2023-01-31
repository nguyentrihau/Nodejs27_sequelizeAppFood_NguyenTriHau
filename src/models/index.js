//ket noi CSDL
const { Sequelize } = require("sequelize");
const config = require("../config/index");
const sequelize = new Sequelize(
  config.dbDatabase,
  config.dbUser,
  config.dbPass,
  {
    host: config.dbHost,
    port: config.dbPort,
    dialect: config.dbDialect, //he co so du lieu su dung
  }
);

const mysql = require("mysql2");

const conn = mysql.createConnection({
  host: config.dbHost,
  user: config.dbUser,
  password: config.dbPass,
  port: config.dbPort,
  database: config.dbDatabase,
});

module.exports = { sequelize, conn };
