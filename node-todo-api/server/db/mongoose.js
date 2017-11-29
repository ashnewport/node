var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${process.env.IP}:27017/TodoApp`);

module.exports = { mongoose };