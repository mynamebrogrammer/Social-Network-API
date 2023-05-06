const users = [
  { id: 1, username: 'John', email: 'rando@email.com' },
  { id: 2, username: 'Jane', email: 'lern@email.com' },
  { id: 3, username: 'Mario', email: 'user@email.com' },
  { id: 4, username: 'Kate', email: 'teach@email.com' },
  { id: 5, username: 'Alex', email: 'lerner@email.com' },
];

const thoughts = [
  { id: 1, thoughtText: 'Hello World', userId: 1 },
  { id: 2, thoughtText: 'Lorem ipsum', userId: 2 },
  { id: 3, thoughtText: 'I wonder if this works', userId: 3 },
  { id: 4, thoughtText: 'I am a teacher', userId: 4 },
  { id: 5, thoughtText: 'I am a student', userId: 5 },
  { id: 6, thoughtText: 'I am a student', userId: 5 },
  { id: 7, thoughtText: 'I am a student', userId: 5 },
];

const getUser = (id) => {
  return users.find((user) => user.id === id);
}; 

const getThoughts = (userId) => {
  return thoughts.filter((thought) => thought.userId === userId);
};


module.exports = {
  users,
  getUser,
  thoughts,
  getThoughts,
};