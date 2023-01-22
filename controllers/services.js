const { Services } = require('../database/db')
const { Op } = require('sequelize')

const getServices = async (req, res) => {
  const services = await Services.findAll()
  res.json(services)
}
const addNewServices = async (req, res) => {
  try {
    const { title, des, img } = req.body
    const newAbout = await Services.create({ title, des, img })
    res.json({ data: newAbout, msg: 'product added successfully' })
  } catch (err) {
    res.status(400).json({
      msg: 'something went wrong!',
      err,
    })
  }
}
const dstroyServices = async (req, res) => {
  try {
    await Services.destroy({
      where: { id: req.params.id },
    })

    res.json({ msg: 'product deleted successfully' })
  } catch (err) {
    res.status(400).json({
      msg: 'something went wrong!',
      err,
    })
  }
}

const editServices = async (req, res) => {
  try {
    const { title, des, img } = req.body
    console.log(title, des)
    await Services.update({ title, des, img }, { where: req.params })
    res.json({ data: { msg: 'product edited successfully' } })
  } catch (err) {
    res.status(400).json({
      msg: 'something went wrong!',
      err,
    })
  }
}
module.exports = { getServices, addNewServices, dstroyServices, editServices }
