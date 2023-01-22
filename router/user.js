const router = require('express').Router()
const userCtrl = require('../controllers/user')

router.post('/signin', userCtrl.signIn)

module.exports = router
