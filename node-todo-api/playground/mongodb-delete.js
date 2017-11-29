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
  
  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Something to do'}).then((result) => {
  //   console.log(result);
  // });
  
  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Something to do'}).then((result) => {
  //   console.log(result);
  // });
  
  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });
  
  // delete all users with name of Andrew
  db.collection('Users').deleteMany({name: 'Andrew'}).then((result) => {
    console.log(result);
  });
  
  // delete user with specific id
  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('598978404371a314157aba1d')
  }).then((results) => {
    console.log(JSON.stringify(results, undefined, 2));
  })
  
  // db.close();
});