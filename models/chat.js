const mongoose = require('mongoose');

const chatSchema = mongoose.Schema({
  participants: {type: Array, required: true },
  texte: { type: String, required: true },
  eventcorr: { type: String, required : true},
  //num_user: { type: mongoose.Schema.ObjectId, ref: './user',required: true },
 // num_event: { type: mongoose.Schema.ObjectId, ref: './event',required: true } 
});

module.exports = mongoose.model('Chat', chatSchema);