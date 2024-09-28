const cartSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user', // Reference to User model
        required: true
    },
    trees: [{
        treeId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'trees' // Reference to Tree model
        },
        quantity: {
            type: Number,
            required: true
        }
    }]
}, { timestamps: true });

const Cart = mongoose.model('cart', cartSchema);
module.exports = Cart;