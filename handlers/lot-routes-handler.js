const BaseHelper = require('./../base-helper'),
  LotService = require('./../service/lot-service');
class LotRoutesHandler extends BaseHelper {
  constructor(dependencies, configs, context) {
    super(dependencies, configs, context)
    this.lotService = new LotService(dependencies, configs, context)
  }

  async createLot(req, res, next) {
    const me = this
    try {
      let result = await me.lotService.createLot(req.body)
      me.replySuccess(res, result)
    } catch (e) {
      me.replyError(res, e)
    }
  }

  async addLotEvent(req, res, next) {
    const me = this
    try {
      let result = await me.lotService.addLotEvent(req.body)
      me.replySuccess(res, result)
    } catch (e) {
      me.replyError(res, e)
    }
  }
}

module.exports = LotRoutesHandler