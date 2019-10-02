const joi = require('@hapi/joi');

class Friend {
  constructor({ since, user }) {
    this.since = since;
    this.user = user;
  }

  validate() {
    const User = require('./User');

    const schema = Friend.schema
      .shared(User.schema);

    return schema.validate(this);
  }
}

Friend.schema = Joi.object({
  since: joi.date(),
  user: Joi.link('#user')
})
  .id('friend');

module.exports = Friend;
