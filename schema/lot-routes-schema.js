const Joi = require('joi'),
  _ = require('lodash'),
  Enum = require('../common/enum');

const CreateLot = Joi.object({
  farm_id: Joi.string().required(),
  start_date: Joi.date().required(),
  end_date: Joi.date().required()
})

const CreateLotEvent = Joi.object({
  farm_id: Joi.string().required(),
  lot_id: Joi.string().required(),
  event_type: Joi.string().required(),
  start_date: Joi.date().required(),
  end_date: Joi.date().required()
})

module.exports = {
  CreateLot,
  CreateLotEvent
}