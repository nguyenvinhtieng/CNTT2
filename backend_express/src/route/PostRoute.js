const express = require('express');
const router = express.Router();

const PostController = require('../app/controllers/PostController.js');
const checkLogin = require('../app/middleware/checkLogin.js')

router.get('/:slug', PostController.get);
router.get("/", PostController.getPagination);
router.post('/', checkLogin, PostController.create)
router.delete('/:slug',checkLogin,PostController.delete)
router.put('/:slug',checkLogin,PostController.edit)

module.exports = router;