const Joi = require('joi');

const contactValidation = Joi.object({
  name: Joi.string().required().min(2).max(100),
  email: Joi.string().required().email(),
  phone: Joi.string().required().pattern(/^\+?[\d\s-]+$/).min(10).max(20),
  company: Joi.string().required().min(2).max(100),
  message: Joi.string().required().min(10).max(1000)
});

module.exports = contactValidation; 