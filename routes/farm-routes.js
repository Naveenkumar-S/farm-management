const { Router } = require('express'),
  BaseHelper = require('../base-helper'),
  { validateBody, validateQuery } = require('./../middlewares/validate'),
  { authenticate } = require('../middlewares/authenticate'),
  { authorize } = require('../middlewares/authorize'),
  Schema = require('./../schema/api/farm-routes-schema'),
  Enum = require('../common/enum'),
  FarmRoutesHandler = require('./../handlers/farm-routes-handler');

// https://www.bacancytechnology.com/blog/joi-validation-in-nodejs-and-express
class FarmRoutes extends BaseHelper {
  constructor(dependencies, configs, context) {
    super(dependencies, configs, context)
    this.router = new Router()
    this.farmRoutesHandler = new FarmRoutesHandler(dependencies, configs, context)
  }

  registerFarmRoutes() {
    const me = this
    me.router.post('/v1/farms/add',
      [
        validateBody(Schema.AddFarm)
      ],
      async (req, res, next) => {
        return await me.farmRoutesHandler.addFarm(req, res, next)
      }
    )
    me.router.post('/v1/farms/edit',
      [
        validateBody(Schema.EditFarm)
      ],
      async (req, res, next) => {
        return await me.farmRoutesHandler.editFarm(req, res, next)
      }
    )
    me.router.get('/v1/farms/fetch',
      [
        validateQuery(Schema.GetFarm),
        // authenticate(me.configs.app.jwt)
      ],
      async (req, res, next) => {
        return await me.farmRoutesHandler.getFarm(req, res, next)
      }
    )
    return me.router
  }
}

module.exports = FarmRoutes