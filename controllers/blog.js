const { Blog } = require('../database/db')
const { Op } = require('sequelize')

const getBlog = async (req, res) => {
  const blog = await Blog.findAll()
  res.json(blog)
}

const addNewBlog = async (req, res) => {
  try {
    let img1 = req.fileUrl
    let img2 = 'https://www.mah6at.net/wp-content/uploads/2022/12/%D8%A7%D8%AD%D9%84%D9%89-%D8%B5%D9%88%D8%B1-%D8%A8%D9%86%D8%AA-%D9%81%D9%89-%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85-2023.jpg'
    let { name, title, des } = JSON.parse(req.body.data)
    const newBlog = await Blog.create({ title, des, name, img1, img2 })
    res.json({ data: newBlog, msg: 'product added successfully' })
  } catch (err) {
    res.status(400).json({
      msg: 'something went wrong!',
      err,
    })
  }
}
const editBlog = async (req, res) => {

  try {
    let img1 = req.fileUrl
    const { title, des, name } = JSON.parse(req.body.data)
    console.log(title, des)
    await Blog.update({ title, des, name, img1 }, { where: req.params })
    res.json({ data: { msg: 'product edited successfully' } })
  } catch (err) {
    res.status(400).json({
      msg: 'something went wrong!',
      err,
    })
  }
}
const dstroyBlog = async (req, res) => {
  try {
    await Blog.destroy({
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

module.exports = { getBlog, dstroyBlog, addNewBlog, editBlog }
