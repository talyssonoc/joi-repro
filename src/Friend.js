const Joi = require('@hapi/joi');


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
    since: Joi.date(),
    user: Joi.link('#user-base')
})
    .id('friend-base');


module.exports = Friend;
