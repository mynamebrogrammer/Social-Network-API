const users = [
  {
    id: 1,
    username: "John",
    email: "firstuzr@email.com",
    thoughts: [],
    friends: [],
  },
  {
    id: 2,
    username: "Jane",
    email: "teach@email.com",
    thoughts: [],
    friends: [],
  },
  { id: 3, username: "Jim", email: "stu@email.com", thoughts: [], friends: [] },
  {
    id: 4,
    username: "Jack",
    email: "lernr@email.com",
    thoughts: [],
    friends: [],
  },
  {
    id: 5,
    username: "Jill",
    email: "rando@email.com",
    thoughts: [],
    friends: [],
  },
];

const thoughts = [
  { thoughtText: "Hello World", userId: 1, reactions: [] },
  { thoughtText: "Lorem ipsum", userId: 2, reactions: [] },
  { thoughtText: "I wonder if this works", userId: 3, reactions: [] },
  { thoughtText: "I am a teacher", userId: 4, reactions: [] },
  { thoughtText: "I am a student", userId: 5, reactions: [] },
];

const getUser = (id) => {
  return users.find((user) => user.id === id);
};

const getThoughts = (userId) => {
  return thoughts.filter((thought) => thought.userId === userId);

};

console.log(users, thoughts);
module.exports = {
  users,
  getUser,
  thoughts,
  getThoughts,
};
