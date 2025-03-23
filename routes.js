const BaseHelper = require('./base-helper'),
  FarmRoutes = require('./routes/farm-routes'),
  LotRoutes = require('./routes/lot-routes');
class Routes extends BaseHelper {
  constructor(dependencies, configs, context) {
    super(dependencies, configs, context)
    this.farmRoutes = new FarmRoutes(dependencies, configs, context)
    this.lotRoutes = new LotRoutes(dependencies, configs, context)
  }

  async registerRoutes() {
    const me = this
    me.dependencies.app.use(this.farmRoutes.registerFarmRoutes())
    me.dependencies.app.use(this.lotRoutes.registerLotRoutes())
  }
}

module.exports = Routes