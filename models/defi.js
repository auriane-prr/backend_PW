const mongoose = require('mongoose');

const defiSchema = mongoose.Schema({
  nom_defi: { type: String, required: true },
  date_deb: { type: Date, required: true },
  date_fin: { type: Date, required: true },
  description: { type: String, required: true },
  point: { type: Number, required: true },
  //num_user: { type: mongoose.Schema.ObjectId, ref: './user',required: true },
});

module.exports = mongoose.model('Defi', defiSchema);