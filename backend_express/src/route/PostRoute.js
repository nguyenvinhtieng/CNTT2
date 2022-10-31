const express = require('express');
const router = express.Router()
const PostController = require('../app/controllers/PostController.js');

router.get('/:slug', PostController.get)
router.get("/", PostController.getPagination)
router.post('/', PostController.create)


module.exports = router;
