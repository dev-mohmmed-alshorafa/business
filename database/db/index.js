const sequelize = require('./connection');
const {Main,About,User,Services,Blog,Contact} = require('../../modules');



module.exports = {
  sequelize,
  User,Main,About,Services,Blog,Contact
};
