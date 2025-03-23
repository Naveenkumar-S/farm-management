const { Router } = require('express'),
  BaseHelper = require('../base-helper'),
  validateRequest = require('./../middlewares/validate'),
  Schema = require('./../schema/farm-routes-schema'),
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
    me.router.post('/add-farm', validateRequest(Schema.AddFarm), async (req, res, next) => {
      return await me.farmRoutesHandler.addFarm(req, res, next)
    })
    me.router.post('/edit-farm', validateRequest(Schema.EditFarm), async (req, res, next) => {
      return await me.farmRoutesHandler.editFarm(req, res, next)
    })
    me.router.get('/get-farm', validateRequest(Schema.AddFarm), async (req, res, next) => {
      return await me.farmRoutesHandler.addFarm(req, res, next)
    })
    me.router.get('/get-all-farms', validateRequest(Schema.AddFarm), async (req, res, next) => {
      return await me.farmRoutesHandler.addFarm(req, res, next)
    })
    return me.router
  }
}

module.exports = FarmRoutes