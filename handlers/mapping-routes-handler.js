const BaseHelper = require('./../base-helper'),
MappingService = require('./../service/mapping-service');

class MappingRoutesHandler extends BaseHelper {
  constructor(dependencies, configs, context) {
    super(dependencies, configs, context)
    this.mappingService = new MappingService(dependencies, configs, context)
  }

  async mapFarmToUser(req, res, next) {
    const me = this
    try {
      let result = await me.mappingService.mapFarmToUser(req.body)
      me.replySuccess(res, result)
    } catch (e) {
      me.replyError(res, e)
    }
  }
}

module.exports = MappingRoutesHandler