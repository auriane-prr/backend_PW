const mongoose = require('mongoose');

const participeSchema = mongoose.Schema({
  email_u: { type: String, required: true},
  event: { type: String},
  defi: {type: String},
});

module.exports = mongoose.model('Participe', participeSchema);