import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
const app = express();

app.use(cors({
  origin: process.env.FRONTEND_URL || '*'
}));
app.use(express.json({ limit: '25mb' })); // Increase limit to allow file uploads

// Configure your email transport
// FOR PRODUCTION: Use a professional provider like Brevo, SendGrid, or Mailgun.
// This avoids Google's 2-Step Verification and rate limits.
const transporter = nodemailer.createTransport({
  host: 'smtp-relay.brevo.com', // TODO: Change this to your provider's SMTP host (e.g., smtp.sendgrid.net)
  port: 587, // Standard secure SMTP port
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER, // Set this in Render Environment Variables
    pass: process.env.SMTP_PASS  // Set this in Render Environment Variables
  }
});

app.post('/api/send-email', async (req, res) => {
  const { fullName, phone, email, serviceName, date, message, subject, attachments } = req.body;

  const mailOptions = {
    from: `konnehmohamed354@gmail.com`, // Sender address (must be verified in Brevo)
    to: 'konnehmohamed354@gmail.com', // Receiver address
    replyTo: email, // Allows you to reply directly to the customer
    subject: subject,
    attachments: attachments, // Include the files received from frontend
    text: `
      New Inquiry Received:
      
      Name: ${fullName}
      Phone: ${phone}
      Email: ${email}
      Service: ${serviceName}
      Preferred Date: ${date || 'Not specified'}
      
      Message:
      ${message || 'No message provided'}
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Failed to send email', error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
