const express = require('express');
const router =express.Router();

const AuthController = require('../controller/AuthController');

router.post('/register', AuthController.register);
router.post('/login', AuthController.login);
router.get('/allUsers', AuthController.getAllUsers);
/*router.delete('/deleteUser', AuthController.deleteUser);
router.get('/getUserById', AuthController.getUserByID);*/

module.exports = router;