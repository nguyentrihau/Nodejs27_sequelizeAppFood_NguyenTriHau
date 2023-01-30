const { successCode, errorCode, failCode } = require("../config/response");
const sequelize = require("../models/index");
const initModels = require("../models/init-models");
const model = initModels(sequelize);

//get all
const getUser = async (req, res) => {
  try {
    //select * from user
    let data = await model.user.findAll(); //=> [{}]
    // res.status(200).send(data);
    successCode(res, data, "Lấy dữ liệu thành công");
  } catch (error) {
    // res.status(500).send("Lỗi Back end");
    errorCode(res, "Lỗi back end");
  }
};

//get id
const getUserId = async (req, res) => {
  try {
    let { id } = req.params;
    //SELECT * FROM user WHERE user_id = req.params.id
    let dataOne = await model.user.findOne({
      where: {
        user_id: id,
      },
    }); //=> {}

    if (dataOne) {
      successCode(res, dataOne, "Lấy user thành công");
    } else {
      //   res.status(400).send("user không tồn tại!");
      failCode(res, dataOne, "User không tồn tại!");
    }
  } catch (error) {
    errorCode(res, "Lỗi back end");
  }
};
//xử lý thêm user
const createUser = async (req, res) => {
  try {
    //lay du lieu tu fe
    let { full_name, email, pass_word } = req.body;
    //es6 => object literal
    let model = {
      full_name,
      email,
      pass_word,
    };
    //them data vao CSDL
    let data = await model.user.create(model);
    if (data) {
      successCode(res, data, "Thêm user thành công");
    }
  } catch (error) {
    errorCode(res, "Lỗi back end");
  }
  res.send("Create User");
};

const updateUser = async (req, res) => {
  try {
    let { id } = req.params;
    let dataOne = await model.user.findOne({
      where: {
        user_id: id,
      },
    }); // {}
    if (dataOne) {
      //update user
      let { full_name, email, pass_word } = req.body;
      //ES6 => object literal
      let model = { full_name, email, pass_word };
      //UPDATE user SET email = email,... WHERE
      let data = await model.user.update(model, {
        where: {
          user_id: id,
        },
      });
      if (data[0] == 1) {
        res.status(200).send("Cập nhật user thành công");
      } else {
        res.status(200).send("Không có gì mới để cập nhật");
      }
    } else {
      res.status(400).send("user không tồn tại");
    }
  } catch (error) {
    res.status(500).send("lỗi back end");
  }
};

const deleteUser = async (req, res) => {
  try {
    let { id } = req.params;
    await model.user.destroy({
      where: {
        user_id: id,
      },
    }); // {}
  } catch (error) {
    res.status(500).send("lỗi back end");
  }
};

module.exports = {
  getUser,
  createUser,
  getUserId,
  deleteUser,
  updateUser,
};
