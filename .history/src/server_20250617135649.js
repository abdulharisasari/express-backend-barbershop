require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const app = require('./app');

const PORT = process.env.PORT || 5000;

const startServer = async () => {
    await connectDB(); // Tunggu koneksi DB sebelum jalanin server
    app.listen(PORT, () => {
        console.log(`🚀 Server berjalan di http://localhost:${PORT}`);
    });
};

startServer();
