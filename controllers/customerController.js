// backend/controllers/customerController.js
const Customer = require('../models/customer');

exports.getNewCustomers = async (req, res) => {
  try {
    const interval = req.params.interval;

    const newCustomers = await Customer.aggregate([
      {
        $group: {
          _id: {
            $dateToString: { format: interval, date: "$created_at" },
          },
          newCustomers: { $sum: 1 },
        },
      },
    ]);

    res.json(newCustomers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getRepeatCustomers = async (req, res) => {
  try {
    const repeatCustomers = await Customer.find({ orders_count: { $gt: 1 } });
    res.json(repeatCustomers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
