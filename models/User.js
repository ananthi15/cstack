var mongoose = require('mongoose');

var user = new mongoose.Schema({
  uname: String,
  password: String,
  email: String,
  telphone: Number,
});

module.exports = mongoose.model('User', user);
