const User = require('./User');
const Friend = require('./Friend');


const userA = new User({ name: 'The A', friends: [] });
const userB = new User({ name: 'The B', friends: [] });


const friend = new Friend({
    since: new Date(),
    user: userB
});

userA.friends.push(friend);


console.log(userA.validate());
