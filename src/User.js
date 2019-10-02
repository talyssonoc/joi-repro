const joi = require('@hapi/joi');


class User {
  constructor({ name, friends }) {
    this.name = name;
    this.friends = friends;
  }

  validate() {
    const Friend = require('./Friend');

    const schema = joi.object().keys({
      ...User.schema,

      /*

        I don't know how to make the friends schema here
        in a way that it also validates the friends inside
        the user of one of the friends (I know it sounds confusing)
        example scenario: I wanna be able to validate this:

        {
          name: 'ABC',
          friends: [
            {
              since: new Date(),
              user: {
                name: 'CBA',
                friends: [
                  {
                    since: new Date(),
                    user: {
                      name: 'AAA',
                      friends: []
                    }
                  }
                ]
              }
            }
          ]
        }

      */
      friends: joi.array().items(Friend.schema)
    });

    return schema.validate(this);
  }
}

User.schema = {
  name: joi.string().min(2)
};

module.exports = User;
