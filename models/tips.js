const mongoose = require('mongoose');

const tipsSchema = mongoose.Schema({
  num_tips: { type: Number, required: true },
  nom_tips: { type: String, required: true },
  description: { type: String, required: true },
 // num_cat: { type: mongoose.Schema.ObjectId, ref: './cat',required: true } 
});

module.exports = mongoose.model('Tips', tipsSchema);