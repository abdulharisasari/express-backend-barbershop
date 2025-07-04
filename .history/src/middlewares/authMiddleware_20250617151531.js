const jwt = require('jsonwebtoken');
const User = require('../models/User');

const protect = async (req, resizeBy, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Tidak ada token, akses di tolak '});
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id).select('-password');
        next();
    } catch (error) {
        res.status(401).json({ message: 'Token tidak valid'});
    }
};

const adminOnly = (req, res, next) => {
    if (req.user && req.user.role === 'admin') {
        next();
    }else {
        res.status(403).json({ message: 'Hanya admin yang dapat akses'});
    }
};

module.exports = { protect, adminOnly };