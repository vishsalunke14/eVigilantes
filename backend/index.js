const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
// app.use(cors({
//     // origin: "https://yourdomain.com", //  your deployed frontend
//     origin: "http://localhost:5173",
//   }));
app.use(express.json());

app.post("/api/contact", async (req, res) => {
  const { name, Email, Subject, Message } = req.body;

  if (!name || !Email || !Subject || !Message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtpout.secureserver.net", // GoDaddy SMTP
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER, // e.g. contact@yourdomain.com
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: `"${name}" <${Email}>`,
      to: process.env.EMAIL_USER, // your own domain mail to receive messages
      subject: Subject,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${Email}</p>
             <p><strong>Subject:</strong> ${Subject}</p>
             <p><strong>Message:</strong></p>
             <p>${Message}</p>`
    });

    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
