const Joi = require('joi');

const subscriptionValidation = Joi.object({
  email: Joi.string().required().email()
});

module.exports = subscriptionValidation; 