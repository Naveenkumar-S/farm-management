const Joi = require('joi');

const FarmToUser = Joi.object({
  email: Joi.string().email().required(),
  farm_id: Joi.string().required()
})

module.exports = {
  FarmToUser
}