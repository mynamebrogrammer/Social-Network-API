const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Mario' },
  { id: 4, name: 'Kate' },
  { id: 5, name: 'Alex' },
];

const thoughts = [
  { id: 1, text: 'Hello World', userId: 1 },
  { id: 2, text: 'Lorem ipsum', userId: 2 },
  { id: 3, text: 'I wonder if this works', userId: 3 },
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