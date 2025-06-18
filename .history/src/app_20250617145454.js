const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const userRoutes = require('./routes/userRoutes');
// const bookingRoutes = require('./routes/bookingRoutes');


const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/users', userRoutes);
// app.use('/api/bookings', bookingRoutes);
module.exports = app;
