const sequelize = require('../database/db/connection');
const { Model, CreationOptional, DataTypes } = require('sequelize');

class Services extends Model {}
Services.init(
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
   
    img: {
      type: DataTypes.STRING,
    }
  },
  {
    sequelize,
  }
);

module.exports = Services;