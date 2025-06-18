const express = require('express');
const router = express.Router();
const { createBooking, getAllBookings, getUserBookings } = require('../controllers/bookingController');

router.post('/',createBooking);
router.get('/', getAllBookings);
router.get('/user/:userId', getUserBookings);

module.exports = router;
