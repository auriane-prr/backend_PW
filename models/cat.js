const mongoose = require('mongoose');

const catSchema = mongoose.Schema({
  num_cat: { type: Number, required: true },
  libelle: { type: String, required: true }
});

module.exports = mongoose.model('Cat', catSchema);