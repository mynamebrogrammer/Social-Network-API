const connection = require('../config/connection');
const {User, Thought} = require('../models');
const {getUser, getThoughts} = require('../utils/data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('Connected to database');

  await User.deleteMany({});
  await Thought.deleteMany({});
  console.log('Deleted all users and thoughts');

  // create empty arrays to hold all users and thoughts

  const users = [];
  const thoughts = [];

// after deleting all users and thoughts, create new users and thoughts by holding them in the arrays above

  for (let i = 0; i < 5; i++) {
    const user = await User.create(getUser(i + 1));
    users.push(user);
  }

  for (let i = 0; i < 3; i++) {
    const thought = await Thought.create(getThoughts(i + 1));
    thoughts.push(thought);
  }

  console.log('Created all users and thoughts');

  // update the users with thoughts

  for (let i = 0; i < 3; i++) {
    const user = users[i];
    const thought = thoughts[i];
    user.thoughts.push(thought);
    await user.save();
  } 

  console.log('Updated all users with thoughts');

  // update the thoughts with reactions

  for (let i = 0; i < 3; i++) {
    const thought = thoughts[i];
    const user = users[i];
    thought.reactions.push({
      reactionBody: 'This is a reaction',
      username: user.username,
    });
    await thought.save();
  } 

  await User.collection.insertMany(users);
  await Thought.collection.insertMany(thoughts);

  console.log(users);
  console.log(thoughts);
  console.log('All done!');

  process.exit(0);
});

