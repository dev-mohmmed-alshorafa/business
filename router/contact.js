const router = require('express').Router()
const contactCtrl = require('../controllers/contact')

router.get('/contact', contactCtrl.getContact)
router.put('/contact/:id', contactCtrl.editContact)

module.exports = router
