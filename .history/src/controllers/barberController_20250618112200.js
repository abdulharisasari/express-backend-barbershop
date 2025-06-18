const Barber = require('../models/Barber');

exports.createBarber = async (req, res) => {
    try {
        const barber = await Barber.create(req.body);
        res.status(201).json(barber);
    } catch (error) {
        res.status(400).json({message: 'Gagal tambah barber', error: error.message });
    }
};

exports.getAllBarbers = async (req, res) => {
    try {
        const barbers = await Barber.find();
        res.status(200).json(barbers);
    } catch (error) {
        res.status(500).json({ message: 'Gagal ambil data barber', error: error.message });
    }
};

exports.getBarberById = async (req, res) => {
    try {
        const barber = await Barber.findById(req.params.id);
        if(!barber) return res.status(404).json({ message: 'Barber tidak ditemukan'});
        res.status(200).json(barber);
    } catch (error) {
        res.status(500).json({ message: 'Gagal ambil data barber', error: error.message });
    }
};

exports.updateBarber = async (req, res) => {
    try {
        await Barber.findByIdAndUpdate(req.params.id, req.body, { new: true});
        res.status(200).json({ message: 'Barber berhasil diperbarui' });
    } catch (error) {
        res.status(400).json({ message: 'Gagal Update barber', error: error.message });
    }
};

exports.deleteBarber = async (req, res) => {
    try {
        await Barber.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Barber berhasil dihapus' });
    } catch (error) {
        res.status(500).json({ message: 'Gagal menghapus barber', error: error.message });
    }
};