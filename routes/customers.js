const express = require('express');
const router = express.Router();

// Example route for new customers
router.get('/new', (req, res) => {
    const interval = req.query.interval || '%Y-%m-%d';
    // Mock data or fetch from the database
    const newCustomersData = {
        dates: ['2023-08-01', '2023-08-02', '2023-08-03'],
        newCustomers: [5, 10, 15],
    };
    res.json(newCustomersData);
});

// Example route for repeat customers
router.get('/repeat', (req, res) => {
    // Mock data or fetch from the database
    const repeatCustomersData = {
        dates: ['2023-08-01', '2023-08-02', '2023-08-03'],
        repeatCustomers: [2, 4, 6],
    };
    res.json(repeatCustomersData);
});

module.exports = router;

