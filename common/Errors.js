class BaseError extends Error {
  static get error() {
    return this.name;
  }
  constructor(message) {
    super();
    this.name = this.constructor.name;
    this.message = message;
    this.error = this.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

class BaseErrorWithArgs extends BaseError {
  constructor(message, args = {}) {
    super(message);
    this.args = args;
  }
}

class Unauthorized extends BaseError {
  constructor() {
    super('Unauthorized')
    this.statusCode = 401
  }
}

class FarmNotFound extends BaseErrorWithArgs {
  constructor(args = {}) {
    super('Farm not found', args)
    this.status_code = 404
  }
}

module.exports = {
  Unauthorized,
  FarmNotFound
}