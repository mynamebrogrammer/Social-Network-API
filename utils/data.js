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
  {
    id: 6,
    username: "Jenny",
    email: "cor@email.com",
    thoughts: [],
    friends: [],
  }
];

const thoughts = [
  {
    username: 'John' ,
    thoughtText: "Hello World", 
    userId: 1, 
    reactions: [
      {
        reactionBody: "Nice dude!",
        username: "Jane",
      },
    ] 
  },
  {
    username: 'Jane' ,
    thoughtText: "Hello World",
    userId: 2,
    reactions: [
      {
        reactionBody: "Hellloooo!",
        username: "John",
      },
    ]
  },
  {
    username: 'Jim' ,
    thoughtText: "I wonder what my friends are up to?",
    userId: 3,
    reactions: [
      {
        reactionBody: "Nothing really!",
        username: "John",
      },
    ]
  },
  {
    username: 'Jack' ,
    thoughtText: "I'm hungry.",
    userId: 4,
    reactions: [
      {
        reactionBody: "Me too!",
        username: "John",
      },
      {
        reactionBody: "Me three!",
        username: "Jane",
      },
    ]
  },
  {
    username: 'Jill' ,
    thoughtText: "I'm sleepy.",
    userId: 5,
    reactions: [
      {
        reactionBody: "Take a nap!",
        username: "John",
      },
    ]
  },
  {
    username: 'Jenny' ,
    thoughtText: "I'm bored.",
    userId: 6,
    reactions: [
      {
        reactionBody: "Go for a walk!",
        username: "John",
      },
    ]
  },
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
