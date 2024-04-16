const { User } = require('../models');

const userController = {
    async getUserProfile(req, res) {
        try {
            const userId = req.user.id; // Assuming this is set by authentication middleware
            const user = await User.findByPk(userId);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.json({ user });
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving user profile', error });
        }
    },

    async updateUserProfile(req, res) {
        try {
            const userId = req.user.id;
            const { email, username } = req.body;
            const updated = await User.update({ email, username }, { where: { user_id: userId } });
            if (updated) {
                res.json({ message: 'User profile updated successfully' });
            } else {
                res.status(404).json({ message: 'User not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error updating user profile', error });
        }
    }
};

module.exports = userController;
