

const Joi = require('joi');

module.exports = Joi.object({
    originalText: Joi.string().required()
});
