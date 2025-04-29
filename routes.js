const BaseHelper = require('./base-helper'),
  FarmRoutes = require('./routes/farm-routes'),
  LotRoutes = require('./routes/lot-routes'),
  UserRoutes = require('./routes/user-routes'),
  MappingRoutes = require('./routes/mapping-routes');
class Routes extends BaseHelper {
  constructor(dependencies, configs, context) {
    super(dependencies, configs, context)
    this.farmRoutes = new FarmRoutes(dependencies, configs, context)
    this.lotRoutes = new LotRoutes(dependencies, configs, context)
    this.userRoutes = new UserRoutes(dependencies, configs, context)
    this.mappingRoutes = new MappingRoutes(dependencies, configs, context)
  }

  async registerRoutes() {
    const me = this
    me.dependencies.app.use(this.farmRoutes.registerFarmRoutes())
    me.dependencies.app.use(this.lotRoutes.registerLotRoutes())
    me.dependencies.app.use(this.userRoutes.registerUserRoutes())
    me.dependencies.app.use(this.mappingRoutes.registerMappingRoutes())
  }
}

module.exports = Routes