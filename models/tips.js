const mongoose = require('mongoose');

const tipsSchema = mongoose.Schema({
  nom_tips: { type: String, required: true },
  description: { type: String, required: true },
  image: {type: String, required: true},
});

module.exports = mongoose.model('Tips', tipsSchema);