const orderSchema = new mongoose.Schema({
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
    }],
    status: {
        type: String,
        enum: ['pending', 'shipping', 'delivered'],
        default: 'pending'
    },
    total_amount: {
        type: Number,
        required: true
    },
    total_price: {
        type: Number,
        required: true
    }
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;