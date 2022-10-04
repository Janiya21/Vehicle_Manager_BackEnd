const express = require('express');
const route =express.Router();
const app = express();
const Post = require("../model/Post");
const dotenv = require('dotenv');

dotenv.config({path:'config.env'});

app.use(express.json());

const getAllPosts = (req, res) => {
    Post.find()
        .then(data => res.json(data))
        .catch(error => res.json(error))
}

const createPost = async (req, res) => {
    try {
        const myUser = new Post(req.body);
        await myUser.save();
        res.send(myUser);
    } catch (error) {
        res.status(500).json(error);
    }
}

const updatePost = async (req, res) => {
    try {
        const myPost = new Post(req.body);
        const id = req.body._id;
        console.log(id,myPost.title,myPost.body)
        const updateRow = {_id: id};
        let newValues = { $set: {title: myPost.title, body: myPost.body}}
        await myPost.updateOne(updateRow,newValues,function(err, res) {
            if (err) throw err;
            console.log("1 document updated");
        });
        res.send(myPost);
    } catch (error) {
        res.status(500).json(error);
    }
}

const getPostByID = (req, res) => {
    const id = req.body._id;

    Post.findOne({$or: [{_id: id}]})
        .then(data => res.json(data))
        .catch(error => res.json(error))
}

const getRevPosts = (req, res) => {
    const id = req.body.userID;

    Post.find({$or: [{userID: id}]})
        .then(data => res.json(data))
        .catch(error => res.json(error))
}

const deletePost = (req, res) => {
    const id = req.body._id;
    const deleteRow = {$or: [{_id: id}]};
    Post.deleteOne(deleteRow)
        .then(data => res.json(data))
        .catch(error => res.json(error))
}

module.exports = {getAllPosts,createPost,deletePost,updatePost,getRevPosts,getPostByID};