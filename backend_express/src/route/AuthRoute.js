const express = require('express');
const router = express.Router()
const AuthController = require('../app/controllers/AuthController.js');

router.post('/login', AuthController.login)
router.post('/register', AuthController.register)
router.post('/forgot-pass', AuthController.forgotPass)
router.post('/change-pass', AuthController.changePass)


module.exports = router;
