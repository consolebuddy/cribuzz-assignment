const jwt = require('jsonwebtoken');
const config = require('../config/config');

// Function to generate a new JWT for a user
const generateToken = (user) => {
    const payload = {
        id: user.user_id, // Ensure that you use a unique identifier from the user object
        username: user.username
    };
    
    const options = {
        expiresIn: config.jwt.expiresIn // e.g., '2h' as defined in your config file
    };
    
    const token = jwt.sign(payload, config.jwt.secret, options);
    return token;
};

// Function to verify a JWT and extract the payload
const verifyToken = (token) => {
    try {
        const decoded = jwt.verify(token, config.jwt.secret);
        return {
            valid: true,
            expired: false,
            decoded
        };
    } catch (error) {
        return {
            valid: false,
            expired: error.message === 'jwt expired',
            decoded: null
        };
    }
};

module.exports = {
    generateToken,
    verifyToken
};
