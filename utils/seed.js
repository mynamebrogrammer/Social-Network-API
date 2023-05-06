const connection = require("../config/connection");
const { User, Thought } = require("../models");
const { users, getThoughts } = require("../utils/data");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("Connected to database");

  await User.deleteMany({});
  await Thought.deleteMany({});

  if (users.length > 0) {
    console.log("Seeding users");
    for (const user of users) {
      const currentUser = await User.create(user);
      console.log(`Created user ${currentUser.username}`);
      const thoughts = getThoughts(currentUser.id);
      for (const thought of thoughts) {
        await Thought.create(thought);
        console.log(`Created thought ${thought.thoughtText}`);
      }
    }
    console.log('Done seeding users and thoughts');
  } else {
    console.log("No users to seed");
  }

  console.log("Done seeding database s");

  process.exit(0);
});
