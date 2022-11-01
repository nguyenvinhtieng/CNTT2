const express = require('express');
const router = express.Router()
const PostController = require('../app/controllers/PostController.js');
const upload = require('../app/middleware/multer.js')
// const validateCreatePost = require('../app/validations/PostValidation')

router.get('/:slug', PostController.get)
router.get("/", PostController.getPagination)
router.post('/',upload.single('thumbnail'), PostController.create)


module.exports = router;
