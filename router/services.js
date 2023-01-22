const router = require('express').Router()
const services = require('../controllers/services')

router.get('/services', services.getServices)
router.post('/services', services.addNewServices)
router.delete('/services/:id', services.dstroyServices)
router.put('/services/:id', services.editServices)

module.exports = router
