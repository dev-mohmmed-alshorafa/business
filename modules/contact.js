const sequelize = require('../database/db/connection')
const { Model, CreationOptional, DataTypes } = require('sequelize')

class Contact extends Model {}
Contact.init(
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contact: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Schedule: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
  },
)

module.exports = Contact
