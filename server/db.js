const mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://admin:1234@cluster0.ma5z4.mongodb.net/food-order?retryWrites=true&w=majority'
);

var db = mongoose.connection;

db.on('connected', () => {
  console.log('Mongo DB Connection Successfull');
});

db.on('error', () => {
  console.log('Mongo DB Connection Failed');
});

module.exports = mongoose;
