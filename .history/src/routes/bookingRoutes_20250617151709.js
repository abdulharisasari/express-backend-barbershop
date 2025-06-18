const express = require('express');
const router = express.Router();
const { createBooking, getAllBookings, getUserBookings } = require('../controllers/bookingController');
const { protect, adminOnly } = require('../middlewares/authMiddleware');



router.post('/',protect,createBooking);
router.get('/',protect, adminOnly, getAllBookings);
router.get('/user/:userId',protect, getUserBookings);

module.exports = router;
