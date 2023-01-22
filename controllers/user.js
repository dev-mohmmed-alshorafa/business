const { User } = require('../database/db')
const { jwtFun } = require('../middleware/jwt')
const bcrypt = require('bcryptjs')

const signIn = async (req, res) => {
  const { email, password } = req.body
  if (email === 'admin@admin' && password === 'admin123') {
    res.json({ msg: true })
  } else {
    res.json({ msg: false })
  }
}

module.exports = { signIn }
