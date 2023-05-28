const mongoose = require('mongoose');

const imageSchema = mongoose.Schema({
  nom_image: {type: String},
});

module.exports = mongoose.model('Image', imageSchema);