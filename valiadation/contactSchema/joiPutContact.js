const Joi = require("joi");

const joiPutContact = Joi.object({
  name: Joi.string(),
  email: Joi.string(),
  phone: Joi.string(),
});

module.exports = joiPutContact;
