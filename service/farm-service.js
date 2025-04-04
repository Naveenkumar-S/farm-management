const uuid = require('uuid'),
  _ = require('lodash'),
  BaseHelper = require('./../base-helper'),
  Errors = require('../common/errors'),
  Enum = require('../common/enum'),
  FarmsAccessor = require('../db-accessors/farms-accessor');
class FarmService extends BaseHelper {
  constructor(dependencies, configs, context) {
    super(dependencies, configs, context)
    this.farmsAccessor = new FarmsAccessor(dependencies, configs, context)
  }

  async addFarm(requestBody) {
    const me = this
    try {
      let id = uuid.v4()
      let farmId = me.shortId(Enum.ShortIdPrefix.Farms)
      let data = {
        farm_id: farmId,
        ...requestBody
      }
      await me.farmsAccessor.insert({ id, data })
      return { farm_id: farmId }
    } catch (e) {
      throw e
    }
  }

  async editFarm(requestBody) {
    const me = this
    try {
      let farmDetails = await me.getFarm(requestBody)
      let farmId = _.get(farmDetails, 'farm_id')
      farmDetails = _.merge(farmDetails, requestBody)
      await me.farmsAccessor.updateByFarmId(farmId, farmDetails)
      return { message: 'Farm details updated successfully!' }
    } catch (e) {
      throw new Errors.UpdateFarmDetailsFailed()
    }
  }

  async getFarm(payload) {
    const me = this
    try {
      let farmId = _.get(payload, 'farm_id')
      let farmDetails = await me.farmsAccessor.getByFarmId(farmId)
      if (_.isEmpty(farmDetails)) {
        throw new Errors.FarmNotFound({
          farm_id: farmId
        })
      }
      farmDetails = _.first(farmDetails)
      return _.get(farmDetails, 'data')
    } catch (e) {
      throw e
    }
  }

  async checkFarmExists(payload) {
    const me = this
    try {
      let farmId = _.get(payload, 'farm_id')
      let result = await me.farmsAccessor.existsByFarmId(farmId)
      if (!_.get(result, 'exists')) {
        throw new Errors.FarmNotFound({
          farm_id: farmId
        })
      }
      return true
    } catch (e) {
      throw e
    }
  }
}

module.exports = FarmService