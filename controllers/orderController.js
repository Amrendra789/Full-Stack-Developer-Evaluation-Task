// backend/controllers/orderController.js
const Order = require('../models/order');

exports.getTotalSales = async (req, res) => {
  try {
    const interval = req.params.interval;
    
    const salesData = await Order.aggregate([
      {
        $group: {
          _id: {
            $dateToString: { format: interval, date: "$created_at" },
          },
          totalSales: { $sum: "$total_price_set.shop_money.amount" },
        },
      },
    ]);

    res.json(salesData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
