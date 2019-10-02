const joi = require('@hapi/joi');

class Friend {
  constructor({ since, user }) {
    this.since = since;
    this.user = user;
  }

  validate() {
    const User = require('./User');

    const schema = joi.object().keys({
      ...Friend.schema,

      // This won't work, the explanation is in User.js
      user: User.schema
    })

    return schema.validate(this);
  }
}

Friend.schema = {
  since: joi.date()
};

module.exports = Friend;
