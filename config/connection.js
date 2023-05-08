const { connect, connection } = require('mongoose');

const connectionString =
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/social-network-DB';

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

console.log('Connected to MongoDB database');

module.exports = connection;
