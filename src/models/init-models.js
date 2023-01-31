const DataTypes = require("sequelize").DataTypes;
const _food = require("./food");
const _food_order = require("./food_order");
const _food_type = require("./food_type");
const _like_res = require("./like_res");
const _rate_res = require("./rate_res");
const _restaurant = require("./restaurant");
const _sub_food = require("./sub_food");
const _users = require("./users");

function initModels(sequelize) {
  const food = _food(sequelize, DataTypes);
  const food_order = _food_order(sequelize, DataTypes);
  const food_type = _food_type(sequelize, DataTypes);
  const like_res = _like_res(sequelize, DataTypes);
  const rate_res = _rate_res(sequelize, DataTypes);
  const restaurant = _restaurant(sequelize, DataTypes);
  const sub_food = _sub_food(sequelize, DataTypes);
  const users = _users(sequelize, DataTypes);

  food_order.belongsTo(food, { as: "food", foreignKey: "food_id"});
  food.hasMany(food_order, { as: "food_orders", foreignKey: "food_id"});
  sub_food.belongsTo(food, { as: "food", foreignKey: "food_id"});
  food.hasMany(sub_food, { as: "sub_foods", foreignKey: "food_id"});
  food.belongsTo(food_type, { as: "type", foreignKey: "type_id"});
  food_type.hasMany(food, { as: "foods", foreignKey: "type_id"});
  like_res.belongsTo(restaurant, { as: "re", foreignKey: "res_id"});
  restaurant.hasMany(like_res, { as: "like_res", foreignKey: "res_id"});
  rate_res.belongsTo(restaurant, { as: "re", foreignKey: "res_id"});
  restaurant.hasMany(rate_res, { as: "rate_res", foreignKey: "res_id"});
  food_order.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(food_order, { as: "food_orders", foreignKey: "user_id"});
  like_res.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(like_res, { as: "like_res", foreignKey: "user_id"});
  rate_res.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(rate_res, { as: "rate_res", foreignKey: "user_id"});

  return {
    food,
    food_order,
    food_type,
    like_res,
    rate_res,
    restaurant,
    sub_food,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
