const { About } = require('../database/db')
const { Op } = require('sequelize')

const getAbout = async (req, res) => {
  const about = await About.findAll()
  res.json(about)
}

const addNewAbout = async (req, res) => {
  try {
    const { title, des } = req.body
    const newAbout = await About.create({ title, des })
    console.log(newAbout)
    res.json({ data: newAbout, msg: 'product added successfully' })
  } catch (err) {
    res.status(400).json({
      msg: 'something went wrong!',
      err,
    })
  }
}
const editAbout = async (req, res) => {
  try {
    const { title, des } = req.body
    console.log(title, des)
    await About.update({ title, des }, { where: req.params })
    res.json({ data: { msg: 'product edited successfully' } })
  } catch (err) {
    res.status(400).json({
      msg: 'something went wrong!',
      err,
    })
  }
}
const dstroyabout = async (req, res) => {
  try {
    await About.destroy({
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

module.exports = { getAbout, addNewAbout, dstroyabout, editAbout }
