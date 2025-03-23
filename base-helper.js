const { customAlphabet } = require('nanoid'),
  Enum = require('./common/Enum');

class BaseHelper {
  constructor(dependencies, configs, context) {
    this.dependencies = dependencies
    this.configs = configs
    this.context = context
  }

  shortId(length = 10) {
    const nanoid = customAlphabet(Enum.ShortIdCharacters, 10)
    return nanoid(length)
  }

  replySuccess(response, result) {
    try {
      return response.status(200).send(result)
    } catch (e) {
      throw e
    }
  }

  replyError(response, error) {
    try {
      return response.status(error.status_code || 500).send({ 
        ...error.args,
        error: error.error || 'UnexpectedError',
        message: error.message || 'Unexpected error occurred'
      })
    } catch (e) {
      throw e
    }
  }
}

module.exports = BaseHelper