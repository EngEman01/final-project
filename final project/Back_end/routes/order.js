const express = require('express');
const router = express.Router();
const Order = require('../models/order.js');  
const multer = require('multer');
const path = require('path');

// Get all orders
router.get('/getOrders', async (req, res) => {
    try {
        const order = await Order.find(); // Fetch all tree documents
        console.log('Fetched trees:', order);
        res.status(200).json(order); // Send the trees as a JSON response
    } catch (error) {
        console.error('Error fetching trees:', error);
        res.status(500).json({ message: 'Internal server error' }); // Handle errors
    }
});

// get the count of orders
router.get('/count', async (req, res) => {
    try {
      const orderCount = await Order.countDocuments(); // Count the number of documents in the 'trees' collection
      res.json({ count: orderCount });
    } catch (error) {
      res.status(500).json({ error: 'Error fetching tree count' });
    }
  });



module.exports = router;