const { Match } = require('../models');

const matchController = {
    async createMatch(req, res) {
        try {
            const { team_1, team_2, date, venue } = req.body;
            const match = await Match.create({ team_1, team_2, date, venue });
            res.status(201).json({ message: 'Match created successfully', match });
        } catch (error) {
            res.status(500).json({ message: 'Error creating match', error });
        }
    },

    async getAllMatches(req, res) {
        try {
            const matches = await Match.findAll();
            res.json({ matches });
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving matches', error });
        }
    },

    async getMatchDetails(req, res) {
        try {
            const { matchId } = req.params;
            const match = await Match.findByPk(matchId);
            if (!match) {
                return res.status(404).json({ message: 'Match not found' });
            }
            res.json({ match });
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving match details', error });
        }
    }
};

module.exports = matchController;
