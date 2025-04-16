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

class UpdateFarmDetailsFailed extends BaseError {
  constructor(args = {}) {
    super('Failed to update farm details')
    this.status_code = 500
  }
}

class LotNotFound extends BaseErrorWithArgs {
  constructor(args = {}) {
    super('Lot not found', args)
    this.status_code = 404
  }
}

class UserNotFound extends BaseError {
  constructor(args = {}) {
    super('User not found')
    this.status_code = 404
  }
}

class InvalidPassword extends BaseError {
  constructor(args = {}) {
    super('Invalid password')
    this.status_code = 400
  }
}

class UserAlreadyRegistered extends BaseError {
  constructor(args = {}) {
    super('User already registered')
    this.status_code = 500
  }
}

class FailedToSendToQueue extends BaseError {
  constructor(args = {}) {
    super('Failed to send message to queue')
    this.status_code = 500
  }
}

class FailedToPublish extends BaseError {
  constructor(args = {}) {
    super('Failed to publish message to exchange')
    this.status_code = 500
  }
}

module.exports = {
  Unauthorized,
  FarmNotFound,
  UpdateFarmDetailsFailed,
  LotNotFound,
  UserNotFound,
  InvalidPassword,
  UserAlreadyRegistered,
  FailedToSendToQueue,
  FailedToPublish
}