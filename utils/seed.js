const connection = require("../config/connection");
const { User, Thought } = require("../models");
const { users, thoughts } = require("../utils/data");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("Connected to database");

  await User.deleteMany({});
  await Thought.deleteMany({});

  // Delete all reactions from each thought
  for (const thought of thoughts) {
    thought.reactions = [];
  }

  // Create users and thoughts
  for (const user of users) {
    const createdUser = await User.create(user);
    const userThoughts = thoughts.filter((thought) => thought.userId === user.id);
    for (const thought of userThoughts) {
      thought.username = createdUser.username;
      thought.userId = createdUser.id;
    }
    const createdThoughts = await Thought.insertMany(userThoughts);
    createdUser.thoughts = createdThoughts.map((thought) => thought.id);
    await createdUser.save();
  }

  // Update friends for each user
  for (const user of users) {
    const createdUser = await User.findOne({ username: user.username });
    const userFriends = users.find((u) => u.id === user.id).friends;
    const friends = await User.find({ username: { $in: userFriends } });
    createdUser.friends = friends.map((friend) => friend.id);
    await createdUser.save();
  }

  console.log("Done seeding database");
  process.exit(0);
});
