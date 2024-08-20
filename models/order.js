// backend/models/order.js
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  created_at: Date,
  total_price_set: {
    shop_money: {
      amount: Number,
    },
  },
  customer: {
    email: String,
    first_name: String,
    last_name: String,
  },
});

module.exports = mongoose.model('Order', orderSchema);
