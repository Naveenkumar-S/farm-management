const uuid = require('uuid'),
  _ = require('lodash'),
  BaseHelper = require('./../base-helper'),
  FarmUserMappingsAccessor = require('../db-accessors/farm-user-mappings-accessor');

class MappingService extends BaseHelper {
  constructor(dependencies, configs, context) {
    super(dependencies, configs, context)
    this.farmUserMappingsAccessor = new FarmUserMappingsAccessor(dependencies, configs, context)
  }

  async mapFarmToUser(payload) {
    const me = this
    try {
      let dbPayload = {
        id: uuid.v4(),
        data: payload
      }
      await me.farmUserMappingsAccessor.insert(dbPayload)
    } catch (e) {
      throw e
    }
  }
}

module.exports = MappingService