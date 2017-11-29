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
  
  db.collection('Todos').find({
    // _id: new ObjectID('5a12b65e4eea2c0bc27707db')
  }).toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch todos', err)
  });
  
  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch todos', err)
  // });
  
  // db.collection('Users').find({
  //   _id: new ObjectID('598974fddfed1013ae5e3080')
  // }).toArray().then((users) => {
  //   console.log(`Users (${users.length})`);
  //   console.log(JSON.stringify(users, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to get users', err);
  // });
  
  // db.collection('Todos').insertOne({
  //   text: 'Walk the cat',
  //   completed: true
  // }, (err, result)=> {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
    
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });
  
  // db.collection('Users').insertOne({
  //   name: 'Ash',
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