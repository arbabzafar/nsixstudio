const nodemailer = require('nodemailer');
const ejs = require('ejs');
const path = require('path');

// Create email transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD
    }
});

// Function to send contact form email
async function sendContactEmail(contact) {
    try {
        // Render email template
        const emailTemplate = await ejs.renderFile(
            path.join(__dirname, '../templates/contact-email.ejs'),
            { contact }
        );

        // Email options
        const mailOptions = {
            from: process.env.GMAIL_USER,
            to: process.env.ADMIN_EMAIL,
            subject: `New Contact Form Submission from ${contact.name}`,
            html: emailTemplate
        };

        // Send email
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent successfully:', info.messageId);
        return true;
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
}

// Function to send subscription confirmation email
async function sendSubscriptionEmail(email) {
    try {
        // Render email template
        const emailTemplate = await ejs.renderFile(
            path.join(__dirname, '../templates/subscription-email.ejs'),
            { email }
        );

        // Email options
        const mailOptions = {
            from: process.env.GMAIL_USER,
            to: email,
            subject: 'Welcome to Our Newsletter!',
            html: emailTemplate
        };

        // Send email
        const info = await transporter.sendMail(mailOptions);
        console.log('Subscription email sent successfully:', info.messageId);
        return true;
    } catch (error) {
        console.error('Error sending subscription email:', error);
        throw error;
    }
}

module.exports = {
    sendContactEmail,
    sendSubscriptionEmail
}; 