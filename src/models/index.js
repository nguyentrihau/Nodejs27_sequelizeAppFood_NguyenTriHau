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

try {
  sequelize.authenticate();
  console.log("ket noi thanh cong");
} catch (error) {
  console.log("ket noi that bai");
}

module.exports = sequelize;
