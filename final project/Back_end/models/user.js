const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    type: {
        type: String,
        default: 'user'
    },
    points: {
        type: Number,
        default: 0
    },
    address: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
    trees: [{
        treeId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'trees' // Reference to Tree model
        }
    }]
}, { timestamps: true, collection: 'user' }); // Specify the collection name here

const User = mongoose.model('User', userSchema); // Keep the model name capitalized for convention
module.exports = User;