const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
  nom_event: { type: String, required: true, unique: true },
  adresse: { type: String, required: true},
  date: { type: Date, required: true },
  description: { type: String, required: true },
  point: { type: Number, required: true },
});

module.exports = mongoose.model('Event', eventSchema);