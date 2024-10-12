const express = require('express');
const router = express.Router();
const User = require('../models/user.js') // Ensure this path is correct
const multer = require('multer')
const Cart = require('../models/cart.js')
const Donation = require('../models/donation.js')
const Message = require('../models/message.js')
const Order = require('../models/order.js')
const Tree = require('../models/trees.js')

const storageUser = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../finalProject/public/users-images/'); // Directory for tree photos
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
const uploadUser = multer({ storage: storageUser })


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
router.post('/register', uploadUser.single('photo'), async (req, res) => {
    const { name, email, password, phone, address } = req.body;
    const photo = req.file.originalname;

    try {
        const user = new User({
            name,
            email,
            password,
            phone,
            address,
            photo
        });
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        console.error('Error registering user:', error);

    }
});
//login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if(!user){
            return res.status(404).json({message: 'Make sure you have an account'})
        }
        if ( user.password !== password) {
            return res.status(401).json({ message: 'Wrong Password try again' });
        }

        res.json({ user });
    } catch (error) {
        console.error('Login error:', error);

    }
});
// Show user profile
router.get('/profile/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        console.error('Error fetching user profile:', error);

    }
});

// Donate
router.post('/donate', async (req, res) => {
    const { tree, amount, userId } = req.body;

    const donation = new Donation({
        tree,
        amount,
        userId
    });
    try {
        const user = await User.findById(userId)
        if (user) {
            user.points += amount * 0.05;
            console.log(user.points)
        }
        await user.save();
        await donation.save();
        res.status(201).json(donation);
    } catch (error) {
        console.error('Error making donation:', error);
        res.status(500).json({ message: 'Internal server error' });
    }

});

// Add to cart
router.post('/add-to-cart', async (req, res) => {
    const { userId, treeId, quantity = 1 } = req.body;

    try {
        let cart = await Cart.findOne({ userId });

        if (!cart) {
            cart = new Cart({ userId, trees: [] });
        }

        const existingTree = cart.trees.find(tree => tree.treeId.toString() === treeId);

        if (existingTree) {
            existingTree.quantity += quantity;
        } else {
            cart.trees.push({ treeId, quantity });
        }
        await cart.save();

        res.status(200).json(cart);
    } catch (error) {
        console.error('Error adding to cart:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Get cart by user ID
router.get('/getCart/:userId', async (req, res) => {
    const { userId } = req.params;

    try {
        const cart = await Cart.findOne({ userId });
        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }
        res.json(cart);
    } catch (error) {
        console.error('Error fetching cart:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Increment product quantity in cart
router.put('/incProductCart/:cartId/:treeId', async (req, res) => {
    const { cartId, treeId } = req.params;

    try {
        const cart = await Cart.findById(cartId);
        const treeItem = cart.trees.find(item => item.treeId == treeId);
        if (treeItem) {
            treeItem.quantity += 1;
            await cart.save();
            res.json(cart);
        } else {
            res.status(404).json({ message: 'Tree not found in cart' });
        }
    } catch (error) {
        console.error('Error incrementing product in cart:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Decrement product quantity in cart
router.put('/decProductCart/:cartId/:treeId', async (req, res) => {
    const { cartId, treeId } = req.params;

    try {
        const cart = await Cart.findById(cartId);
        const treeItem = cart.trees.find(item => item.treeId == treeId);
        if (treeItem) {
            if (treeItem.quantity > 1) {
                treeItem.quantity -= 1;
                await cart.save();
                res.json(cart);
            } else {
                res.status(400).json({ message: 'Quantity cannot be less than 1' });
            }
        } else {
            res.status(404).json({ message: 'Tree not found in cart' });
        }
    } catch (error) {
        console.error('Error decrementing product in cart:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Calculate total price of the cart
router.get('/totalPrice/:cartId', async (req, res) => {
    const { cartId } = req.params;

    try {
        const cart = await Cart.findById(cartId).populate('trees.treeId');
        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }

        const totalPrice = cart.trees.reduce((total, item) => {
            return total + (item.quantity * item.treeId.price);
        }, 0);

        res.json({ totalPrice });
    } catch (error) {
        console.error('Error calculating total price:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Place an order
router.post('/order', async (req, res) => {
    var { userId, trees, total_price, checkPoint } = req.body;
    try {
        const user = await User.findById(userId)
        const points = parseInt(user.points)
        if (checkPoint) {
            total_price -= points
            user.points = 0
            await user.save()
        }

        for ({ treeId, quantity } of trees) {
            const tree = await Tree.findById(treeId)
            if (tree.inventory > quantity) {
                tree.inventory -= quantity
                tree.save()
            } else {
                res.send(`The avalible quantity is ${tree.inventory}`)
            }

        }


        const order = new Order({
            userId,
            trees,
            total_price
        });
        await order.save();
        user.points += total_price * 0.05;
        await user.save()
        res.status(201).json(order);


    } catch (error) {
        console.error('Error placing order:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Send a message
router.post('/sendMessage', async (req, res) => {
    const { userId, message } = req.body;

    const newMessage = new Message({
        userId,
        message
    });

    try {
        await newMessage.save();
        res.status(201).json(newMessage);
    } catch (error) {
        console.error('Error sending message:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
module.exports = router;