const { Router } = require('express'),
  BaseHelper = require('../base-helper'),
  { validateBody, validateQuery } = require('./../middlewares/validate'),
  Schema = require('./../schema/api/lot-routes-schema'),
  LotRoutesHandler = require('./../handlers/lot-routes-handler');
class LotRoutes extends BaseHelper {
  constructor(dependencies, configs, context) {
    super(dependencies, configs, context)
    this.router = new Router()
    this.lotRoutesHandler = new LotRoutesHandler(dependencies, configs, context)
  }

  registerLotRoutes() {
    const me = this
    me.router.post('/v1/lots/create',
      [
        validateBody(Schema.CreateLot)
      ],
      async (req, res, next) => {
        return await me.lotRoutesHandler.createLot(req, res, next)
      }
    )
    me.router.post('/v1/lots/events',
      [
        validateBody(Schema.CreateLotEvent)
      ],
      async (req, res, next) => {
        return await me.lotRoutesHandler.addLotEvent(req, res, next)
      }
    )
    return me.router
  }
}

module.exports = LotRoutes