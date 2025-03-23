const { Router } = require('express'),
  BaseHelper = require('../base-helper')
class LotRoutes extends BaseHelper {
  constructor(dependencies, configs, context) {
    super(dependencies, configs, context)
    this.router = new Router()
  }

  registerLotRoutes() {
    const me = this
    me.router.post('/create-lot', (req, res) => {
      res.send('Request to add farm')
    })
    me.router.post('/update-lot', (req, res) => {
      res.send('Request to add farm')
    })
    me.router.get('/get-lot', (req, res) => {
      res.send('Request to add farm')
    })
    me.router.get('/add-lot-history', (req, res) => {
      res.send('Request to add farm')
    })
    return me.router
  }
}

module.exports = LotRoutes