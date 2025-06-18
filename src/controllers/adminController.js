const Booking = require('../models/bookingModel');
const User = require('../models/User');

exports.getAllBookings = async (req, res) => {
    try {
        const bookings = await Booking.find()
            .populate('user', 'name email')
            .populate('barber', 'name specialization');
        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({ message: 'Gagal ambil data booking', error: error.message });
    }
};

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find().select('-password');
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Gagal ambil data user', error: error.message });
    }
};
