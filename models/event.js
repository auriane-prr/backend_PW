const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
  num_event: { type: Number, required: true },
  nom_event: { type: String, required: true },
  adresse: { type: String, required: true},
  place: {type: String, required: true },
  date_deb: { type: Date, required: true },
  date_fin: { type: Date, required: true },
  description: { type: String, required: true },
  point: { type: Number, required: true },
  link: {type: String, required: true},
  //num_user: { type: mongoose.Schema.ObjectId, ref: './user',required: true },
 // num_cat: { type: mongoose.Schema.ObjectId, ref: './cat',required: true } 
});

module.exports = mongoose.model('Event', eventSchema);