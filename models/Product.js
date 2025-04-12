const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  desc: { type: String, default: '' },
  price: { type: Number, required: true }
});

module.exports = mongoose.model('Product', productSchema);