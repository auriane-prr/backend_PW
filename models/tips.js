const mongoose = require('mongoose');

const tipsSchema = mongoose.Schema({
  num_tips: { type: Number, required: true },
  nom_tips: { type: String, required: true },
  description: { type: String, required: true },
});

module.exports = mongoose.model('Tips', tipsSchema);