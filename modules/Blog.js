const sequelize = require('../database/db/connection');
const { Model, CreationOptional, DataTypes } = require('sequelize');

class Blog extends Model {}
Blog.init(
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    } ,
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    des: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    img1: {
      type: DataTypes.STRING,
    },
    img2: {
      type: DataTypes.STRING,
    }
  },
  {
    sequelize,
  }
);

module.exports = Blog;