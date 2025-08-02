const jwt = require('jsonwebtoken');

exports.authMiddleware = (req, res, next) => {
    // Get token from header
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Bearer <token>

    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    try {
        const secret = process.env.JWT_SECRET; // Use env variable in production
        const decoded = jwt.verify(token, secret);
        req.user = decoded; // Attach user payload to request
        next();
    } catch (err) {
        return res.status(403).json({ message: 'Invalid token.' });
    }
};

exports.authRoleMiddleware = (...allowedRoles) => {
    return (req, res, next) => {
        if (!req.user || !req.user.role) {
            return res.status(403).json({ message: 'Role missing in token' });
        }

        if (!allowedRoles.includes(req.user.role)) {
            return res.status(403).json({ message: 'Access denied: Insufficient role' });
        }

        next();
    };
};


