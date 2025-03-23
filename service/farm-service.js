const uuid = require('uuid'),
  _ = require('lodash'),
  BaseHelper = require('./../base-helper'),
  Errors = require('./../common/Errors'),
  FarmsAccessor = require('./../db-accessors/farms-accessors');
class FarmService extends BaseHelper {
  constructor(dependencies, configs, context) {
    super(dependencies, configs, context)
    this.farmsAccessor = new FarmsAccessor(dependencies, configs, context)
  }

  async addFarm(requestBody) {
    const me = this
    try {
      let id = uuid.v4()
      let data = requestBody
      data.form_id = me.shortId()
      await me.farmsAccessor.insert({ id, data })
      return { form_id: data.form_id }
    } catch (e) {
      throw e
    }
  }

  async editFarm(requestBody) {
    const me = this
    try {
      let farmId = _.get(requestBody, 'farm_id')
      let farmDetails = await me.farmsAccessor.getByFarmId(farmId)
      if (_.isEmpty(farmDetails)) {
        throw new Errors.FarmNotFound({
          farm_id: farmId
        })
      }
      return {}
    } catch (e) {
      throw e
    }
  }
}

module.exports = FarmService