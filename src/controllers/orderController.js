const { errorCode, successCode } = require("../config/response");
const { sequelize } = require("../models/index");
const initModels = require("../models/init-models");
const model = initModels(sequelize);

const userOrder = async (req, res) => {
  try {
    let { user_id, food_id, amount, order_code, arr_sub_id } = req.body;
    // const user = await model.users.findOne({
    //   where: {
    //     id: user_id,
    //   },
    // });
    // const food_order = await model.food_order.findOne({
    //   where: {
    //     id: food_id,
    //   },
    // });

    let datafe = {
      user_id,
      food_id,
      amount,
      order_code,
      arr_sub_id,
    };
    await model.food_order.create(datafe);
    successCode(res, null, "user order món thành công");

    // let data = await model.order.create(datafe);
    // if (data) {
    //   successCode(res, data, "order thành công");
    // }
  } catch (error) {
    console.log(error);
    errorCode(res, "Lỗi back end");
  }
};

module.exports = { userOrder };
