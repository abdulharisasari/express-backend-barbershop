const Barber = require('../models/Barber');

exports.createBarber = async (req, res) => {
    try {
        const barber = await Barber.create(req)
    } catch (error) {
        
    }
}