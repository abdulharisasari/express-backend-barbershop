const express = require('express');
const { protect, adminOnly } = require('../middlewares/authMiddleware');
const { createBarber, getAllBarbers, getBarberById, updateBarber, deleteBarber } = require('../controllers/barberController');
const barberController = require('../controllers/barberController');
const upload = require('../middlewares/uploadMiddleware');
const router = express.Router();

router.get('/', getAllBarbers);
router.get('/:id', getBarberById);
router.post('/', protect, adminOnly, createBarber);
router.put('/:id', protect, adminOnly, updateBarber);
router.delete('/:id', protect, adminOnly, deleteBarber);

module.exports = router;