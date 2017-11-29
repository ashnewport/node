// starting MongoDB
// database path already set via https://community.c9.io/t/setting-up-mongodb/1717
// in /udemy/node run ./mongod
// if things are busted the run ./mongod --repair
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
  
  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result)=> {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
    
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });
  
  // db.collection('Users').insertOne({
  //   name: 'Mike',
  //   age: 28,
  //   location: 'Australia'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert user', err);
  //   }
    
  //   console.log(result.ops[0]._id.getTimestamp());
  // });
  
  db.close();
});