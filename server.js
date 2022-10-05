const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use(express.json());
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

dotenv.config({path:'config.env'})
const PORT = process.env.PORT || 8080;

mongoose.connect(
    process.env.DB_CONNECTION_STRING,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    () => {
        console.log("mongodb is connected");
    }
);

app.use('/api', require('./routes/auth'));
app.use('/api', require('./routes/VehicleRouter'));
app.use('/api', require('./routes/Uploader'));

app.listen(PORT, ()=>{
    console.log(`Server is Running on http://localhost:${PORT}`);
})

