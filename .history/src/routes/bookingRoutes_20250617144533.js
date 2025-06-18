const express = require('express');
const router = express.Router();
const { createBookings, getAllBookings, getUserBookings } = require('../controllers/bookingController');

route.post('/',createBookings);
