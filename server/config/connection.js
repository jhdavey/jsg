const mongoose = require('mongoose');
const LOCALHOST = "mongodb://127.0.0.1:27017/jsg";

mongoose.connect(process.env.MONGODB_URI || LOCALHOST, {useNewUrlParser: true})
    .then(() => {
        console.log('MongoDB Connected!');
    });

module.exports = mongoose.connection;

//another push