// starting MongoDB
// database path already set via https://community.c9.io/t/setting-up-mongodb/1717
// in /udemy/node run ./mongodb
// if things are busted the run ./mongodb --repair
// run this script to see connection success

// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect(`mongodb://${process.env.IP}:27017/TodoApp`, (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5a12bdd1e964e80cfbc86332')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });
  
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5989782910816714088e4da8')
  }, {
    $set: {
      name: 'Not Ash'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result)
  });
  
  // db.close();
});