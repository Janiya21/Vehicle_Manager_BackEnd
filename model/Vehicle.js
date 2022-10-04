const mongoose = require("mongoose");

const vehicle = new mongoose.Schema({
    reg_No: {
        type:String,
        required:true,
    },
    type: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    date: {
        type:String,
        required:true,
    },
    time: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    seller_nic: {
        type: String,
        required: true
    },
    seller_no: {
        type: String,
        required: true
    }

}, {timestamps:true})

module.exports = mongoose.model("vehicle",vehicle);