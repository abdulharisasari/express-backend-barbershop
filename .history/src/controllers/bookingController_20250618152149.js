const Booking = require('../models/bookingModel');
const sendEmail = require('../utils/emailSender');

exports.createBooking = async (req, res) => {
    try {
        const { user, barber, service, date} = req.body;
        const booking = await Booking.create({ user, barber, service, date});
        res.status(201).json(booking);
    } catch (error) {
        res.status(500).json({message: 'Gagal membuat booking', error: error.message});
    }
};

exports.getAllBookings = async (req, res) => {
    try {
        const booking = await Booking.find().populate('user','name email');
        res.status(200).json(booking);
    } catch (error) {
        res.status(500).json({ message: 'Gagal ambil data booking', error: error.message});
    }
};

exports.getUserBookings = async (req, res) => {
    try {
        const { userId } = req.params;
        const booking = await Booking.find({ user: userId});
        res.status(200).json(booking);
    } catch (error) {
        res.status(500).json({ message:'Gagal ambil data booking user', error: error.message});
    }
};