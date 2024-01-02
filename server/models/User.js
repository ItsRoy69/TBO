const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  sex: String,
  age: Number,
  placesVisited: [String],
  college: String,
});

module.exports = mongoose.model('User', userSchema);
