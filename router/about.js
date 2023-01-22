const router = require('express').Router()
const aboutCtrl = require('../controllers/about')

router.get('/about', aboutCtrl.getAbout)
router.post('/about', aboutCtrl.addNewAbout)
router.delete('/about/:id', aboutCtrl.dstroyabout)
router.put('/about/:id', aboutCtrl.editAbout)

module.exports = router
