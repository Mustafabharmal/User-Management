const { MongoClient } = require('mongodb');

const connectionString = "your key here";
const client = new MongoClient(connectionString, { 
  // useNewUrlParser: true, useUnifiedTopology: true 
});

module.exports = client;
