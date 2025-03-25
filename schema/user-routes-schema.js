const Joi = require('joi'),
  _ = require('lodash'),
  Enum = require('./../common/enum'),
  Constants = require('../common/constants');

const SignUp = Joi.object({
  first_name: Joi.string().min(2).max(30).required(),
  last_name: Joi.string().min(1).max(30).required(),
  email: Joi.string().email().required(),
  pwd: Joi.string().pattern(new RegExp(Constants.PwdRegex)),
  confirm_pwd: Joi.ref('pwd'),
  mobile: Joi.string().length(10).pattern(new RegExp(Constants.MobileRegex)).required(),
  role: Joi.string().valid(..._.values(Enum.Roles)).required()
})

const SignIn = Joi.object({
  email: Joi.string().email().required(),
  pwd: Joi.string().pattern(new RegExp(Constants.PwdRegex))
})

module.exports = {
  SignUp,
  SignIn
}