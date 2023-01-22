const router = require('express').Router()
const mainCtrl = require('../controllers/main')

router.get('/main', mainCtrl.getMain)

module.exports = router
