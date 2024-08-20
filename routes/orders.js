const express = require('express');
const router = express.Router();

// Example route for total sales
router.get('/total-sales', (req, res) => {
    const interval = req.query.interval || '%Y-%m-%d';
    // Mock data or fetch from the database
    const salesData = {
        dates: ['2023-08-01', '2023-08-02', '2023-08-03'],
        sales: [1500, 2000, 2500],
    };
    res.json(salesData);
});

module.exports = router;
