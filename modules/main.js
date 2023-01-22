const sequelize = require('../database/db/connection');
const { Model, CreationOptional, DataTypes } = require('sequelize');

class Main extends Model {}
Main.init(
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
    },
    link: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    img: {
      type: DataTypes.STRING,
    }
  },
  {
    sequelize,
  }
);

module.exports = Main;