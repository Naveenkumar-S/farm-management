const _ = require('lodash'),
  uuid = require('uuid'),
  BaseHelper = require('../base-helper');
class FarmsAccessor extends BaseHelper {
  constructor(dependencies, configs, context) {
    super(dependencies, configs, context)
    this.pgp = dependencies.db
  }

  async insert(payload) {
    const me = this
    try {
      let id = _.get(payload, 'id', uuid.v4())
      let data = _.get(payload, 'data', {})
      return await me.pgp.one('INSERT INTO farms(id, data) VALUES($1, $2) RETURNING id', [id, data])
    } catch (e) {
      throw e
    }
  }

  async update(id, data) {
    const me = this
    try {
      return await me.pgp.one('UPDATE farms set data = $2 where id = $1 RETURNING id', [id, data])
    } catch (e) {
      throw e
    }
  }

  async getByFarmId(farmId) {
    const me = this
    try {
      return await me.pgp.any(`SELECT * from farms where data->>'farm_id' = $1`, [farmId])
    } catch (e) {
      throw e
    }
  }

  async updateByFarmId(farmId, data) {
    const me = this
    try {
      return await me.pgp.one(`UPDATE farms set data = $2 where data->>'farm_id' = $1 RETURNING id`, [farmId, data])
    } catch (e) {
      throw e
    }
  }

  async existsByFarmId(farmId) {
    const me = this
    try {
      return await me.pgp.one(`SELECT EXISTS(SELECT 1 FROM farms WHERE data->>'farm_id' = $1)`, [farmId])
    } catch (e) {
      throw e
    }
  }
}

module.exports = FarmsAccessor