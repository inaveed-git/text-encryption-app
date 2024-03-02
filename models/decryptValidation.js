// decryptValidation.js
const Joi = require('joi');

module.exports = Joi.object({
    encryptedText: Joi.string().required()
})
