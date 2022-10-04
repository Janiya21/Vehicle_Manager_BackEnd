const express = require('express');
const route =express.Router();
const app = express();
const Vehicle = require("../model/Vehicle");
const dotenv = require('dotenv');

dotenv.config({path:'config.env'});

app.use(express.json());

const getAllVehicles = (req, res) => {
    Vehicle.find()
        .then(data => res.json(data))
        .catch(error => res.json(error))
}

const regVehicle = async (req, res) => {
    try {
        const myUser = new Vehicle(req.body);
        await myUser.save();
        res.send(myUser);
    } catch (error) {
        res.status(500).json(error);
    }
}

const updateVehicle = async (req, res) => {
    try {
        const myPost = new Vehicle(req.body);
        const id = req.body._id;
        console.log(id,myPost.type,myPost.location);
        /*const updateRow = {_id: id};
        let newValues = { $set: {title: myPost.title, body: myPost.body}}
        await myPost.updateOne(updateRow,newValues,function(err, res) {
            if (err) throw err;
            console.log("1 document updated");
        });
        res.send(myPost);*/
    } catch (error) {
        res.status(500).json(error);
    }
}

const getVehicleById = (req, res) => {
    const id = req.body._id;

    Vehicle.findOne({$or: [{_id: id}]})
        .then(data => res.json(data))
        .catch(error => res.json(error))
}

const getRevVehicle = (req, res) => {
    const id = req.body.userID;

    Vehicle.find({$or: [{userID: id}]})
        .then(data => res.json(data))
        .catch(error => res.json(error))
}

const deleteVehicle = (req, res) => {
    const id = req.body._id;
    const deleteRow = {$or: [{_id: id}]};
    Vehicle.deleteOne(deleteRow)
        .then(data => res.json(data))
        .catch(error => res.json(error))
}

module.exports = {getAllVehicles,regVehicle,updateVehicle,getVehicleById,getRevVehicle,deleteVehicle};