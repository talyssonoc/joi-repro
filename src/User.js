const Joi = require('@hapi/joi');


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


User.schema = Joi.object({
    name: Joi.string().min(2),
    friends: Joi.array().items(Joi.link('#friend-base'))
})
    .id('user-base');


module.exports = User;
