const express = require('express');
const router = express.Router();
const playerController = require('../controllers/playerController');
const { authenticate } = require('../middlewares/authMiddleware');

// Add a player to a team (Admin only)
router.post('/:teamId/players', authenticate, playerController.addPlayer);

// Get player statistics
router.get('/:playerId/stats', playerController.getPlayerStats);

module.exports = router;
