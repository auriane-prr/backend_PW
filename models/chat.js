const mongoose = require('mongoose');

const chatSchema = mongoose.Schema({
  id_chat: { type: Number, required: true },
  texte: { type: String, required: true },
  //num_user: { type: mongoose.Schema.ObjectId, ref: './user',required: true },
 // num_event: { type: mongoose.Schema.ObjectId, ref: './event',required: true } 
});

module.exports = mongoose.model('Chat', chatSchema);