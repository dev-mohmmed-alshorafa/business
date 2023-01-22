const {Main}=require('../database/db')
const { Op } = require('sequelize');

const getMain=async (req,res) => {
  const main=await Main.findAll()
 res.json(main);
}
module.exports= {getMain}