const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return sub_food.init(sequelize, DataTypes);
}

class sub_food extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    sub_name: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    sub_price: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    food_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'food',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'sub_food',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "food_id",
        using: "BTREE",
        fields: [
          { name: "food_id" },
        ]
      },
    ]
  });
  }
}
