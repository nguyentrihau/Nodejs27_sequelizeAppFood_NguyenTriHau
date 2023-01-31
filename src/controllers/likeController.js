const { successCode, errorCode } = require("../config/response");
const { sequelize, conn } = require("../models");
const initModels = require("../models/init-models");
const model = initModels(sequelize);
const getLike = async (req, res) => {
  try {
    let data = await model.like_res.findAll({
      include: ["re", "user"],
    });
    successCode(res, data, "Lấy dữ liệu thành công");
  } catch (error) {
    // console.log(error);
    errorCode(res, "Lỗi back end");
  }
};
//tim like theo id

const postLike = async (req, res) => {
  // try {
  //   const { user_id, res_id } = req.body;
  //   const user_name = await model.users.findOne({
  //     where: {
  //       user_id: id,
  //     },
  //   });
  //   const res_name = await model.restaurant.findOne({
  //     where: {
  //       res_id: id,
  //     },
  //   });
  //   const checkLiked = `SELECT * FROM like_res WHERE user_id =${user_id} AND res_id=${res_id} LIMIT 1`;
  //   conn.query(checkLiked, async (err, result) => {
  //     if (result.length === 0) {
  //       const addNewLike = `INSERT INTO like_res(user_id,res_id,date_like) VALUES (${user_id},${res_id},"2003-03-02 14:22:44")`;
  //       await conn.promise().query(addNewLike);
  //       res
  //         .status(200)
  //         .send(
  //           `${user_name.full_name} đã like ${res_name.res_name} thành công!`
  //         );
  //     } else {
  //       res
  //         .status(400)
  //         .send(`${user_name.full_name} đã like ${res_name.res_name} rồi!`);
  //     }
  //   });
  // } catch (error) {
  //   console.log(error);
  //   errorCode(res, "Lỗi back end");
  // }
  // try {
  //   const { id } = req.params;
  //   const ifUserExist = await model.users.findOne({
  //     where: {
  //       user_id: id,
  //     },
  //   });
  //   if (ifUserExist) {
  //     const sql = `SELECT restaurant.res_id, restaurant.res_name FROM restaurant, like_res WHERE restaurant.res_id = like_res.res_id AND user_id = ${id}`;
  //     const data = await conn.promise().query(sql); // [[], []]
  //     if (data[0].length === 0) res.status(400).send("Chưa like nhà hàng nào!");
  //     else res.status(200).send(data[0]);
  //   } else {
  //     res.status(400).send("Không có user này!");
  //   }
  // } catch (error) {
  //   errorCode(res, "Lỗi back end");
  // }
};
const deleteLike = (req, res) => {
  try {
    res.send("a");
  } catch (error) {
    errorCode(res, "Lỗi back end");
  }
};
module.exports = {
  getLike,
  postLike,
  deleteLike,
};
