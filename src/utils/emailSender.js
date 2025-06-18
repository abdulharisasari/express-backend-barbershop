const nodemailer = require('nodemailer');

const sendEmail = async (to, subject, text) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_FROM,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: process.env.EMAIL_FROM,
            to,
            subject,
            text,
        });

        console.log('✅ Email berhasil dikirim ke', to);
    } catch (error) {
        console.error('❌ Gagal kirim email:', error.message);
    }
};

module.exports = sendEmail;
