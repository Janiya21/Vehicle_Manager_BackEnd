const mongoose = require('mongoose');
const dotenv = require('dotenv');

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