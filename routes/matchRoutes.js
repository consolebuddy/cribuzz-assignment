const express = require('express');
const router = express.Router();
const matchController = require('../controllers/matchController');
const { authenticate } = require('../middlewares/authMiddleware');

// Create a new match (Admin only)
router.post('/', authenticate, matchController.createMatch);

// Get all matches
router.get('/', matchController.getAllMatches);

// Get a specific match by ID
router.get('/:matchId', matchController.getMatchDetails);

module.exports = router;
