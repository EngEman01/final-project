const express = require('express');
const router = express.Router();
const Tree = require('../models/trees.js'); // Ensure this path is correct

// Get all trees
router.get('/getTrees', async (req, res) => {
    try {
        const trees = await Tree.find(); // Fetch all tree documents
        console.log('Fetched trees:', trees);
        res.status(200).json(trees); // Send the trees as a JSON response
    } catch (error) {
        console.error('Error fetching trees:', error);
        res.status(500).json({ message: 'Internal server error' }); // Handle errors
    }
});

//get tree by id
router.get('/getTrees/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const tree = await Tree.findById(id);

        if (!tree) {
            return res.status(404).json({ message: 'Tree not found' });
        }

        res.json(tree);
    } catch (error) {
        console.error('Error fetching tree:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// add tree

//edit tree

//delete tree

//search

//filter


module.exports = router;