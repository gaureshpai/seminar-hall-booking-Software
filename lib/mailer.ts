import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  secure: true,  // use SSL
  port: 465,
  auth: {
    user: process.env.EMAIL_USER,  // your Gmail address (e.g. example@gmail.com)
    pass: process.env.EMAIL_PASS,  // your App Password
  },
});

