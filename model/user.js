const mongoose = require("mongoose");

const User = new mongoose.Schema({
    Name: {
        type:String,
        required:true,
    },
    nicNo: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    }
}, {timestamps:true})

module.exports = mongoose.model("user",User);