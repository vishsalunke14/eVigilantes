require('dotenv').config();
const nodemailer = require("nodemailer");

async function sendTestEmail() {
  const transporter = nodemailer.createTransport({
    host: "smtpout.secureserver.net",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  try {
    let info = await transporter.sendMail({
      from: `"Test Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "Test Email",
      text: "This is a test email from Node.js using GoDaddy SMTP.",
    });
    console.log("✅ Email sent:", info.messageId);
  } catch (err) {
    console.error("❌ Error sending:", err);
  }
}

sendTestEmail();
