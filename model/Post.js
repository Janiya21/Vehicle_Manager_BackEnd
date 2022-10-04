const mongoose = require("mongoose");

const Post = new mongoose.Schema({
    userID: {
        type:String,
        required:true,
    },
    date: {
        type:String,
        required:true,
    },
    time: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, {timestamps:true})

module.exports = mongoose.model("post",Post);