const express = require('express');
const router = express.Router();
const { protect, adminOnly } = require('../middlewares/authMiddleware');
const adminController = require('../controllers/adminController');


router.get('/bookings', protect, adminOnly, adminController.getAllBooking);
router.get('/users', protect, adminOnly, adminController.getAllUsers);

module.exports = router;