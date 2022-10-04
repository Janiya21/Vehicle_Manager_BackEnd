const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

/*const customMiddleware = (req,res,next) => {
    console.log("Welcome to the middleware");
    next();
};

app.use(customMiddleware);*/

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

app.use('/api', require('./routes/UserRouter'));
app.use('/api', require('./routes/auth'));
app.use('/api', require('./routes/PostRouter'));

app.listen(PORT, ()=>{
    console.log(`Server is Running on http://localhost:${PORT}`);
})