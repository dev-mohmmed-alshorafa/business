const router = require('express').Router()
const blogCtrl = require('../controllers/blog')
const {
  uploadFile,
  reduceSize,
  cloudUpload,
} = require('../middleware/upbloudImg')
router.get('/blog', blogCtrl.getBlog)
router.post(
  '/blog',
  uploadFile().single('file'),
  reduceSize,
  cloudUpload,
  blogCtrl.addNewBlog,
)
router.put(
  '/blog/:id',
  uploadFile().single('file'),
  reduceSize,
  cloudUpload,
  blogCtrl.editBlog,
)
router.delete('/blog/:id', blogCtrl.dstroyBlog)

module.exports = router
