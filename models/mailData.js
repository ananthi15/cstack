var mongoose = require('mongoose');

var maildata = new mongoose.Schema({
  to: String,
  from: String,
  message: String,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('mailData', maildata);
