const { verifyToken } = require('../utils/jwtUtils');

const authenticate = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Authentication token is required' });
    }

    const token = authHeader.split(' ')[1];
    const { valid, expired, decoded } = verifyToken(token);

    if (!valid) {
        return res.status(401).json({ message: 'Invalid or expired token', expired });
    }

    req.user = decoded; // Add user data to request object
    next();
};

module.exports = { authenticate };
