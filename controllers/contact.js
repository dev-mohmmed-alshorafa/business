const {Contact}=require('../database/db')
const { Op } = require('sequelize');

const getContact=async (req,res) => {
  const contact=await Contact.findAll()
 res.json(contact);
}
const editContact = async (req, res) => {
  console.log(11);
  try {
    const { address, contact,Schedule } = req.body
    await Contact.update({ address, contact,Schedule }, { where: req.params })
    res.json({ data: { msg: 'product edited successfully' } })
  } catch (err) {
    res.status(400).json({
      msg: 'something went wrong!',
      err,
    })
  }
}
module.exports= {getContact,editContact}