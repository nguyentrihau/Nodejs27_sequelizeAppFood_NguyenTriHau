const { successCode, errorCode } = require("../config/response");
const sequelize = require("../models/index");
const initModels = require("../models/init-models");
const model = initModels(sequelize);

const getLike = async (req, res) => {
  try {
    let data = await model.like_res.findAll({
      include: ["re", "user"],
    });
    successCode(res, data, "Lấy dữ liệu thành công");
  } catch (error) {
    errorCode(res, "Lỗi back end");
  }
};
//tim like theo id

const postLike = (req, res) => {
  res.send("");
};
const deleteLike = (req, res) => {
  res.send("");
};
module.exports = {
  getLike,
  postLike,
  deleteLike,
};
