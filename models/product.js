// backend/models/product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: String,
  vendor: String,
  price: Number,
  created_at: Date,
});

module.exports = mongoose.model('Product', productSchema);
