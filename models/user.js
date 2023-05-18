// const mongoose = require('mongoose');
// const uniqueValidator = require('mongoose-unique-validator');

// const userSchema = mongoose.Schema({
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   pseudo: { type: String, required: true },
//   loc: { type: String, required: true },
// });

// userSchema.plugin(uniqueValidator);

// module.exports = mongoose.model('User', userSchema);

// CHATGPT

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  pseudo: { type: String, required: true },
  localisation: { type: String, required: true },
});

module.exports = mongoose.model('User', userSchema);