const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Register a new user
router.post('/signup', authController.signup);

// User login
router.post('/login', authController.login);

module.exports = router;
