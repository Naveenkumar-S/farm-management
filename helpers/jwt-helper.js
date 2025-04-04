const jwt = require('jsonwebtoken'),
  BaseHelper = require('./../base-helper');

class JWT extends BaseHelper {
  constructor(dependencies, configs, context) {
    super(dependencies, configs, context)
    this.secret = configs.app.jwt.secret
    this.options = {
      expiresIn: configs.app.jwt.expires_in,
      algorithm: configs.app.jwt.algorithm,
    }
  }

  sign(payload) {
    const me = this
    try {
      return jwt.sign(payload, me.secret, me.options)
    } catch (e) {
      throw e
    }
  }
}

module.exports = JWT