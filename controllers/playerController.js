const { Player, PlayerStatistics } = require('../models');

const playerController = {
    async addPlayer(req, res) {
        try {
            const { name, role } = req.body;
            const { teamId } = req.params;
            const player = await Player.create({ name, role, teamId });
            res.status(201).json({ message: 'Player added successfully', player });
        } catch (error) {
            res.status(500).json({ message: 'Error adding player', error });
        }
    },

    async getPlayerStats(req, res) {
        try {
            const { playerId } = req.params;
            const stats = await PlayerStatistics.findOne({ where: { player_id: playerId } });
            if (!stats) {
                return res.status(404).json({ message: 'Player statistics not found' });
            }
            res.json({ stats });
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving player statistics', error });
        }
    }
};

module.exports = playerController;
