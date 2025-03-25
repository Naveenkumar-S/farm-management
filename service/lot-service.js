const uuid = require('uuid'),
  _ = require('lodash'),
  moment = require('moment'),
  BaseHelper = require('./../base-helper'),
  Errors = require('../common/err'),
  Enum = require('../common/en'),
  FarmsService = require('./farm-service'),
  LotsAccessor = require('../db-accessors/lots-accessor'),
  LotEventsAccessor = require('../db-accessors/lot-events-accessor');
class LotService extends BaseHelper {
  constructor(dependencies, configs, context) {
    super(dependencies, configs, context)
    this.farmsService = new FarmsService(dependencies, configs, context)
    this.lotsAccessor = new LotsAccessor(dependencies, configs, context)
    this.lotEventsAccessor = new LotEventsAccessor(dependencies, configs, context)
  }

  async createLot(requestBody) {
    const me = this
    try {
      await me.farmsService.checkFarmExists(requestBody)
      let id = uuid.v4()
      let lotId = me.shortId(Enum.ShortIdPrefix.Lots)
      let farmId = _.get(requestBody, 'farm_id')
      let startDate = moment(_.get(requestBody, 'start_date')).toISOString()
      let endDate = moment(_.get(requestBody, 'end_date')).toISOString()
      let data = {
        lot_id: lotId,
        farm_id: farmId,
        start_date: startDate,
        end_date: endDate
      }
      await me.lotsAccessor.insert({ id, data })
      return { lot_id: lotId }
    } catch (e) {
      throw e
    }
  }

  async addLotEvent(requestBody) {
    const me = this
    try {
      await me.checkLotExists(requestBody)
      let eventId = uuid.v4()
      let farmId = _.get(requestBody, 'farm_id')
      let lotId = _.get(requestBody, 'lot_id')
      let eventType = _.get(requestBody, 'event_type')
      let startDate = moment(_.get(requestBody, 'start_date')).toISOString()
      let endDate = moment(_.get(requestBody, 'end_date')).toISOString()
      let data = {
        event_id: eventId,
        farm_id: farmId,
        lot_id: lotId,
        event_type: eventType,
        start_date: startDate,
        end_date: endDate
      }
      await me.lotEventsAccessor.insert({ eventId, data })
      return { event_id: eventId }
    } catch (e) {
      throw e
    }
  }

  async checkLotExists(payload) {
    const me = this
    try {
      let lotId = _.get(payload, 'lot_id')
      let farmId = _.get(payload, 'farm_id')
      let result = await me.lotsAccessor.existsByLotIdAndFarmId(lotId, farmId)
      if (!_.get(result, 'exists')) {
        throw new Errors.LotNotFound({
          lot_id: lotId
        })
      }
      return true
    } catch (e) {
      throw e
    }
  }
}

module.exports = LotService