const mongoose = require('mongoose');
// Making a Schema for Seller
const sellerSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: [true, "Seller must have a name"],
        trim: true,
    },
    email: {
        type: String,
        unique: true,
        required: [true, "Seller must have an email"],
        trim: true,
    },
    phoneNumber: {
        type: Number,
        unique: true,
        required: [true, "Seller must have a phone Number"],
    },
    upiId: {
        // select: false,
        type: String,
        trim: true,
        unique: true,
        required: [true, "Seller must have a Upi Id"],
    },
    balance: {
        type: Number,
        default: 0
    },
    transactionDetails: {
        type: [{
            UpiTransactionId: Number,
            to: String,
            from: String,
        }]
    },
    inventory: {
        type: [{
            name: {
                type: String,
                required: [true, "An item must have a name"],
                unique: true,
            },
            price: {
                type: Number,
                required: [true, "An item must have a price"],
            },
            images: {
                type: [String],
            },
            content: {
                type: String,
            }
        }]
    },
    address: {
        type: String,
        required: [true, "Seller must have an address"],
    },
    location: {
        type: [Number],
    }
});
const Seller = mongoose.model("Seller", sellerSchema);
// Exporting the Seller Schema
module.exports = Seller;