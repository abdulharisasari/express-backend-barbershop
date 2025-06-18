require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');

const app = require('./app');

// connect to db
connectDB();

// run server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
