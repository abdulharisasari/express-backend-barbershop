const mongoose = require('mongoose');

const barberSchema = new mongoose.Schema({
    name: { type: String, required: true },
    specialization: { type: String, required: true },
    description: String,
    rating: { type: Number, default: 0 },
    isActive: { type: Boolean, default: true},
    photo: String,
}, {timestamps: true});

module.exports = mongoose.model('Barber', barberSchema);