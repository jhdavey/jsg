const mongoose = require('mongoose');
const MONGODB_URI = "mongodb://127.0.0.1:27017/jsg";

mongoose.connect(MONGODB_URI, {useNewUrlParser: true})
    .then(() => {
        console.log('MongoDB Connected!');
    });

module.exports = mongoose.connection;
