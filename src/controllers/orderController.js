const { errorCode, successCode } = require("../config/response");
const { sequelize } = require("../models/index");
const initModels = require("../models/init-models");
const model = initModels(sequelize);

const userOrder = async (req, res) => {
  try {
    let { user_id, food_id, amount, code, arr_sub_id } = req.body;
    let datafe = {
      user_id,
      food_id,
      amount,
      code,
      arr_sub_id,
    };
    let data = await model.order.create(datafe);
    if (data) {
      successCode(res, data, "order thành công");
    }
  } catch (error) {
    errorCode(res, "Lỗi back end");
  }
};

module.exports = { userOrder };
