const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
  num_user: {type: Number, required: true, unique: true},
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  pseudo: {type: String, required: true, unique: true},
  premium: {type: Boolean, required: true},
  loc: {type: String, required: true},
  nb_point: {type: Number}
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);