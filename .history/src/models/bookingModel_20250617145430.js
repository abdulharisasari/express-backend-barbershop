// const mongoose = require('mongoose');
// const bookingSchema = new mongoose.Schema({
//     user: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User',
//         required: true
//     },
//     barber: {
//         type: String,
//         required: true
//     },
//     service: {
//         type: String,
//         required: true
//     },
//     date: {
//         type: Date,
//         required: true
//     },
//     status: {
//         type: String,
//         enum: ['pending', 'confirmed', 'completed', 'done'],
//         default: 'pending'
//     },

// },
// {
//     timestamps: true
// });

// module.exports = mongoose.model('Booking', bookingSchema);