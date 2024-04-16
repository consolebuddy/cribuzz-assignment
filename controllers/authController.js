const bcrypt = require('bcryptjs');
const { User } = require('../models');
const jwtUtils = require('../utils/jwtUtils');

const authController = {
    async signup(req, res) {
        try {
            const { username, email, password } = req.body;
            const hashedPassword = await bcrypt.hash(password, 10);

            const user = await User.create({
                username,
                email,
                password: hashedPassword,
                role: 'guest'  // Default role; adjust based on your requirements
            });

            res.status(201).json({ message: "User registered successfully", user });
        } catch (error) {
            res.status(500).json({ message: "Error registering user", error });
        }
    },

    async login(req, res) {
        try {
            const { username, password } = req.body;
            const user = await User.findOne({ where: { username } });

            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            const isValid = await bcrypt.compare(password, user.password);
            if (!isValid) {
                return res.status(401).json({ message: 'Invalid credentials' });
            }

            const token = jwtUtils.generateToken(user);
            res.json({ message: "Login successful", token });
        } catch (error) {
            res.status(500).json({ message: "Error logging in", error });
        }
    }
};

module.exports = authController;
