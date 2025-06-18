const Barber = require('../models/Barber');

exports.createBarber = async (req, res) => {
    try {
        const barber = await Barber.create(req.body);
        res.status(201).json({
            status: 'success',
            data: {barber}
        });
    } catch (error) {
        res.status(400).json({
            status: 'Gagal tambah barber', error: error.message });
    }
}

exports.getAllBarbers = async (req, res) => {
    try {
        const
    } catch (error) {
        
    }
}