const joi = require('@hapi/joi');


class User {
  constructor({ name, friends }) {
    this.name = name;
    this.friends = friends;
  }

  validate() {
    const Friend = require('./Friend');

    const schema = User.schema
      .shared(Friend.schema);

    return schema.validate(this);
  }
}

User.schema = joi.object({
  name: joi.string().min(2),
  friends: joi.array().items(joi.link('#friend'))
})
  .id('user');

module.exports = User;
