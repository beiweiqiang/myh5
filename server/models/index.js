const mongoose = require('mongoose');

module.exports.connect = (uri) => {
  mongoose.connect(uri);

  mongoose.Promise = global.Promise;


  // mongodb connection and auto reconnect =============================
  const db = mongoose.connection;

  db.on('connecting', () => {
    console.log('connecting to MongoDB...');
  });

  db.on('error', (error) => {
    console.error(`Error in MongoDb connection: ${error}`);
    mongoose.disconnect();
  });
  db.on('connected', () => {
    console.log('MongoDB connected!');
  });
  db.once('open', () => {
    console.log('MongoDB connection opened!');
  });
  db.on('reconnected', () => {
    console.log('MongoDB reconnected!');
  });
  db.on('disconnected', () => {
    console.log('MongoDB disconnected!');
    mongoose.connect(uri, {
      server: { auto_reconnect: true },
    });
  });
  mongoose.connect(uri, {
    server: { auto_reconnect: true },
  });

  // 加载 models
  require('./user');
};
