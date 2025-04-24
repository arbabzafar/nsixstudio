const express = require('express');
const router = express.Router();
const Subscription = require('../models/subscription.model');
const subscriptionValidation = require('../validation/subscription.validation');
const { sendSubscriptionEmail } = require('../services/email.service');

// Subscribe to newsletter
router.post('/', async (req, res) => {
  try {
    // Validate request body
    const { error } = subscriptionValidation.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    // Check if email already exists
    const existingSubscription = await Subscription.findOne({ email: req.body.email });
    if (existingSubscription) {
      return res.status(400).json({ message: 'Email already subscribed' });
    }

    // Create new subscription
    const subscription = new Subscription({ email: req.body.email });
    await subscription.save();

    // Send confirmation email
    try {
      await sendSubscriptionEmail(subscription.email);
    } catch (emailError) {
      console.error('Failed to send subscription confirmation email:', emailError);
      // Continue with the response even if email fails
    }

    res.status(201).json({ message: 'Successfully subscribed to newsletter' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router; 