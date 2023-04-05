const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  numuser: {type: Number, required: true, unique: true},
  pseudo: {type: String, required: true, unique: true},
  premium: {type: Boolean, required: true},
  loc: {type: String, required: true},
  nbpoint: {type: Number}
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);