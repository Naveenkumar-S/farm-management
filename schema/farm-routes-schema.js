const Joi = require('joi'),
  _ = require('lodash'),
  Enum = require('../common/enum');

const AddFarm = Joi.object({
  name: Joi.string().required(),
  is_active: Joi.bool().required(),
  owner: Joi.string().required(),
  address: Joi.object({
    line_1: Joi.string().required(),
    line_2: Joi.string().optional(),
    district: Joi.string().required(),
    state: Joi.string().required(),
    country: Joi.string().valid(..._.values(Enum.Countries)).required(),
    postal_code: Joi.string().required(),
  }).required()
})

const EditFarm = Joi.object({
  farm_id: Joi.string().required(),
  name: Joi.string().optional(),
  is_active: Joi.bool().optional(),
  owner: Joi.string().optional(),
  address: Joi.object({
    line_1: Joi.string().optional(),
    line_2: Joi.string().optional(),
    district: Joi.string().optional(),
    state: Joi.string().optional(),
    country: Joi.string().valid(..._.keys(Enum.Countries)).optional(),
    postal_code: Joi.string().optional(),
  })
})

const GetFarm = Joi.object({
  farm_id: Joi.string().required()
})

module.exports = {
  AddFarm,
  EditFarm,
  GetFarm
}