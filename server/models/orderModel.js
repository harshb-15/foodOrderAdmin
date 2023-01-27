const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
    sellerId: {
        type: String,
        required: [true, "Order must have a Seller Id"]
    },
    userId: {
        type: String,
        required: [true, "Order must have a User Id"],
    },
    amount: {
        type: Number,
        required: [true, "Order must have an Amount"],
    },
    status: {
        type: Number,
        default: -1,
        // -1 : Order Places
        //  0 : Order Cancelled
        //  1 : Order Completed
        // required: [true, "Order must have a status"]
    },
    orderDetails: {
        type: [{
            itemId: String,
            quantity: Number,
        }]
    },
    userToken: {
        type: Number,
    }
})