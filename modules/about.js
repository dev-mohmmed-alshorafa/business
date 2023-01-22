const sequelize = require('../database/db/connection');
const { Model, CreationOptional, DataTypes } = require('sequelize');

class About extends Model {}
About.init(
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    des: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
  }
);

module.exports = About;