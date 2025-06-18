const Booking = require('../models/bookingModel');
const sendEmail = require('../utils/emailSender');

exports.createBooking = async (req, res) => {
    try {
        // const { user, barber, service, date} = req.body;
        // const booking = await Booking.create({ user, barber, service, date});
        // await sendEmail(
        //     user.email,
        //     'Booking Berhasil!',
        //     `Halo ${user.name}, booking kamu dengan barber ${barber.name} telah dikonfirmasi.`
        // );
        // res.status(201).json(booking);
        const { user, barber, service, date } = req.body;

        // Buat booking
        const booking = await Booking.create({ user, barber, service, date });

        // Ambil detail user & barber dari DB
        const userData = await User.findById(user);
        const barberData = await Barber.findById(barber);

        // Kirim response ke client
        res.status(201).json(booking);

        // Kirim email ke user
        await sendEmail(
            userData.email,
            'Booking Berhasil!',
            `Halo ${userData.name}, booking kamu dengan barber ${barberData.name} telah dikonfirmasi.`
        );
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