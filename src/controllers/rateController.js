const { errorCode, successCode } = require("../config/response");
const { sequelize } = require("../models/index");
const initModels = require("../models/init-models");
const model = initModels(sequelize);

const createRate = async (req, res) => {
  try {
    let { user_id, res_id, amount } = req.body;
    let datafe = {
      user_id,
      res_id,
      amount,
    };
    let data = await model.rate_res.create(datafe);
    if (data) {
      successCode(res, data, "Thêm rate thành công");
    }
  } catch (error) {
    errorCode(res, "Lỗi back end");
  }
};
const getRate = async (req, res) => {
  try {
    let data = await model.rate_res.findAll({
      include: ["re", "user"],
    });
    successCode(res, data, "Lấy dữ liệu thành công");
  } catch (error) {
    errorCode(res, "Lỗi back end");
  }
};

module.exports = {
  createRate,
  getRate,
};
