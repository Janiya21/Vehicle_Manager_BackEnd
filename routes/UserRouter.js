const express = require('express');
const router =express.Router();

const UserController = require('../controller/UserController');

router.get('/', UserController.mainPage);
router.get('/users', UserController.getAll);
router.post('/registerUser',UserController.regUser)

module.exports = router;