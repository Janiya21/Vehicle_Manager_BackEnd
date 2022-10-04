const express = require('express'); 
const route =express.Router();
const app = express();
const User = require("../model/user");
const dotenv = require('dotenv');

dotenv.config({path:'config.env'});

app.use(express.json());

const mainPage = (req, res) => {
    res.send('Crud Application')
}

const getAll = (req, res) => {
    User.find()
    .then(data => res.json(data))
    .catch(error => res.json(error))
}

const regUser = async (req, res) => {
    try {
        const myUser = new User(req.body);
        await myUser.save();
        res.send(myUser);
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = {mainPage,getAll,regUser};