const { Router } = require('express'),
  BaseHelper = require('../base-helper'),
  { validateBody } = require('./../middlewares/validate'),
  Schema = require('./../schema/api/mapping-routes-schema'),
  MappingRoutesHandler = require('./../handlers/mapping-routes-handler');

class MappingRoutes extends BaseHelper {
  constructor(dependencies, configs, context) {
    super(dependencies, configs, context)
    this.router = new Router()
    this.mappingRoutesHandler = new MappingRoutesHandler(dependencies, configs, context)
  }

  registerMappingRoutes() {
    const me = this
    me.router.post('/v1/mappings/farm-to-user',
      [
        validateBody(Schema.FarmToUser)
      ],
      async (req, res, next) => {
        return await me.mappingRoutesHandler.mapFarmToUser(req, res, next)
      }
    )
    return me.router
  }
}

module.exports = MappingRoutes