const User = require('../model/user');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const register = (req, res, next) => {
    bcrypt.hash(req.body.password, 10, function(err, hashedPass){
        if(err){
            res.json({
                error:err
            })
        }
        let user = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        })

        user.save()
            .then(user =>{
                res.json({
                    message:'User Added Successful'
                })
            }).catch(error => {
            res.json({
                message:'An error Occurred'
            })
        })
    })
}

const deleteUser = (req, res) => {
    const id = req.body._id;
    const deleteRow = {$or: [{_id: id}]};
    User.deleteOne(deleteRow)
        .then(data => res.json(data))
        .catch(error => res.json(error))
}

const getAllUsers = (req, res) => {
    User.find()
        .then(data => res.json(data))
        .catch(error => res.json(error));
}

const getUserByID = (req, res) => {
    const id = req.body._id;
    const mail = req.body.email;

    User.findOne({$or: [{_id: id},{email: mail}]})
        .then(data => res.json(data))
        .catch(error => res.json(error))
}

const login = (req,res,next) => {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    User.findOne({$or: [{email:email}, {name:name}]})
        .then(user => {
            if(user){
                bcrypt.compare(password, user.password, function(err,result){
                    if(password===user.password){
                        let token = jwt.sign({name : user.email}, 'verySecretValue', {expiresIn: '1h'})
                        res.json({
                            valid:'OK',
                            message: 'Login Successful',
                            token
                        })
                    }else{
                        res.json({
                            valid:'NO',
                            message: 'Password does not match '
                        })
                    }
                })
            }else{
                res.json({
                    valid:'NO',
                    message:'No user Found'
                })
            }
        })
}

module.exports = { register, login,deleteUser, getAllUsers, getUserByID }