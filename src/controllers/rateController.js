const { errorCode, successCode, failCode } = require("../config/response");
const { sequelize } = require("../models/index");
const initModels = require("../models/init-models");
const model = initModels(sequelize);

let date = new Date();

const createRate = async (req, res) => {
  try {
    let { user_id, res_id, amount } = req.body;
    const user = await model.users.findOne({
      where: {
        id: user_id,
      },
    });
    const restaurant = await model.restaurant.findOne({
      where: {
        id: res_id,
      },
    });
    if (user && restaurant) {
      // const CheckIfRated = await model.rate_res.findOne({
      //   where: {
      //     user_id,
      //     res_id,
      //   },
      // });
      // let datafe = {
      //   user_id,
      //   res_id,
      //   amount,
      //   date_rate: "2022-12-03 00:00:00",
      // };
      // if (!CheckIfRated) {
      //   await model.rate_res.create(datafe);
      //   successCode(res, null, "Thêm rate thành công");
      // } else {
      //   // await model.rate_res.update(datafe);
      //   successCode(res, null, "rate lại thành công");
      // }

      //xóa luôn dòng đó
      await model.rate_res.destroy({
        where: {
          user_id,
        },
      });
      //thêm luôn dòng mới vào
      const datafe = {
        user_id,
        res_id,
        amount,
        date_rate: new Date(),
      };
      await model.rate_res.create(datafe);
      successCode(res, null, "Đánh giá thành công");
    } else {
      failCode(res, null, "Không tìm thấy user hoặc nhà hàng");
    }
  } catch (error) {
    console.log(error);
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
const getAllRateParam = async (req, res) => {
  const { id } = req.params;
  try {
    let data = await model.restaurant.findAll({
      include: [
        {
          model: model.rate_res,
          as: "rate_res",
          where: {
            user_id: id,
          },
        },
      ],
    });
    successCode(res, data, "Lấy dữ liệu thành công");
  } catch (error) {
    console.log(error);
    errorCode(res, "Lỗi back end");
  }
};
module.exports = {
  createRate,
  getRate,
  getAllRateParam,
};
