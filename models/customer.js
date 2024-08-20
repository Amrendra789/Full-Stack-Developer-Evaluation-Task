// backend/models/customer.js
const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  email: String,
  created_at: Date,
  last_order_id: Number,
  last_order_name: String,
  orders_count: Number,
  total_spent: Number,
  default_address: {
    city: String,
    country: String,
  },
});

module.exports = mongoose.model('Customer', customerSchema);
