const BaseHelper = require('./../base-helper'),
  LotService = require('./../service/lot-service');
class LotRoutesHandler extends BaseHelper {
  constructor(dependencies, configs, context) {
    super(dependencies, configs, context)
    this.lotService = new LotService(dependencies, configs, context)
  }

  async createLot() {
    const me = this
    try {
      return await me.lotService.createLot()
    } catch (e) {
      throw e
    }
  }
}

module.exports = LotRoutesHandler