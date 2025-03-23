const Joi = require('joi'),
  _ = require('lodash'),
  Enum = require('./../common/Enum');

const AddFarm = Joi.object({
  name: Joi.string().required(),
  is_active: Joi.bool().required(),
  owner: Joi.string().required(),
  address: Joi.object({
    line_1: Joi.string().required(),
    line_2: Joi.string().required(),
    district: Joi.string().required(),
    state: Joi.string().required(),
    country: Joi.string().valid(..._.keys(Enum.Countries)).required(),
    postal_code: Joi.string().required(),
  })
})

const EditFarm = Joi.object({
  farm_id: Joi.string().required()
}).unknown(true)

module.exports = {
  AddFarm,
  EditFarm
}

// const userSignupSchema = Joi.object({
//   firstName: Joi.string().required(),
//   middleName: Joi.string(),
//   lastName: Joi.string().required(),
//   userName: Joi.string().alphanum().min(3).max(30).required(),
//   email: Joi.string().email().required(),
//   age: Joi.number().required().min(0).max(100),
//   DOB: Joi.date().greater(new Date("1940-01-01")).required(),
//   address: {
//     addressLine: Joi.string().max(50).required(),
//     state: Joi.string().max(15).required(),
//     country: Joi.string().max(20).required(),
//     zipCode: Joi.string().max(7).required(),
//   },
//   phoneNumber: Joi.string()
//     .length(10)
//     .pattern(/[6-9]{1}[0-9]{9}/)
//     .required(),
//   password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9@]{3,30}$")),
//   confirmPassword: Joi.ref("password"),
// });