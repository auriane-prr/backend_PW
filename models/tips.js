const mongoose = require('mongoose');

const tipsSchema = mongoose.Schema({
  nom_tips: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  image: {type: String},
});

module.exports = mongoose.model('Tips', tipsSchema);