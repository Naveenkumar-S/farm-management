const BaseHelper = require('./../base-helper'),
  FarmService = require('./../service/farm-service');
class FarmRoutesHandler extends BaseHelper {
  constructor(dependencies, configs, context) {
    super(dependencies, configs, context)
    this.farmService = new FarmService(dependencies, configs, context)
  }

  async addFarm(req, res, next) {
    const me = this
    try {
      let result = await me.farmService.addFarm(req.body)
      me.replySuccess(res, result)
    } catch (e) {
      me.replyError(res, e)
    }
  }

  async editFarm(req, res, next) {
    const me = this
    try {
      let result = await me.farmService.editFarm(req.body)
      me.replySuccess(res, result)
    } catch (e) {
      me.replyError(res, e)
    }
  }

  async getFarm(req, res, next) {
    const me = this
    try {
      let result = await me.farmService.getFarm(req.query)
      me.replySuccess(res, result)
    } catch (e) {
      me.replyError(res, e)
    }
  }
}

module.exports = FarmRoutesHandler