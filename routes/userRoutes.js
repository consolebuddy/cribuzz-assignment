const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { authenticate } = require('../middlewares/authMiddleware');

// Get user profile (Protected)
router.get('/profile', authenticate, userController.getUserProfile);

// Update user profile (Protected)
router.put('/profile', authenticate, userController.updateUserProfile);

module.exports = router;
