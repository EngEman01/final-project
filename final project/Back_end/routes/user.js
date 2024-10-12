const express = require('express');
const router = express.Router();
const User = require('../models/user.js') // Ensure this path is correct

// Get all users
router.get('/getUsers', async (req, res) => {
    try {
        const users = await User.find(); // Fetch all tree documents
        console.log('Fetched users:', users);
        res.status(200).json(users); // Send the users as a JSON response
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ message: 'Internal server error' }); // Handle errors
    }
});

//get user by id
router.get('/getUsers/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({ message: 'user not found' });
        }

        res.json(user);
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;

//login
//register
//show profile
//order
//donate
//cart
//buy
