const mongoose = require('mongoose');
// Making a Schema for User
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: [true, "User must have a name"],
        trim: true,
    },
    email: {
        type: String,
        unique: true,
        required: [true, "User must have an email"],
        trim: true,
    },
    phoneNumber: {
        type: Number,
        unique: true,
        required: [true, "User must have a phone Number"],
    },
    upiId: {
        type: String,
        trim: true,
        unique: true,
        required: [true, "User must have a Upi Id"],
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
});
const User = mongoose.model("user", userSchema);
module.exports = User;