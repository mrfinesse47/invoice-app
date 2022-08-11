const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: process.env.MAILER_SERVICE_PROVIDER,
  auth: { user: process.env.MAILER_USER, pass: process.env.MAILER_PW },
});

module.exports = { transporter };
