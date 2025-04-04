const _ = require('lodash'),
  uuid = require('uuid'),
  BaseHelper = require('../base-helper');
class LotEventsAccessor extends BaseHelper {
  constructor(dependencies, configs, context) {
    super(dependencies, configs, context)
    this.pgp = dependencies.db
  }

  async insert(payload) {
    const me = this
    try {
      let id = _.get(payload, 'id', uuid.v4())
      let data = _.get(payload, 'data', {})
      return await me.pgp.one('INSERT INTO lot_events(id, data) VALUES($1, $2) RETURNING id', [id, data])
    } catch (e) {
      throw e
    }
  }

  async update(id, data) {
    const me = this
    try {
      return await me.pgp.one('UPDATE lot_events set data = $2 where id = $1 RETURNING id', [id, data])
    } catch (e) {
      throw e
    }
  }

  async getByLotId(lotId) {
    const me = this
    try {
      return await me.pgp.any(`SELECT * from lot_events where data->>'lot_id' = $1`, [lotId])
    } catch (e) {
      throw e
    }
  }

  async updateByLotId(lotId, data) {
    const me = this
    try {
      return await me.pgp.one(`UPDATE lot_events set data = $2 where data->>'lot_id' = $1 RETURNING id`, [lotId, data])
    } catch (e) {
      throw e
    }
  }

  async existsByLotIdAndFarmId(lotId, farmId) {
    const me = this
    try {
      return await me.pgp.one(`SELECT EXISTS(SELECT 1 FROM lot_events WHERE data->>'lot_id' = $1 AND data->>'farm_id' = $2)`, [lotId, farmId])
    } catch (e) {
      throw e
    }
  }
}

module.exports = LotEventsAccessor