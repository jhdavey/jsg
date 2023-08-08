const mongoose = require('mongoose');
const MONGODB_URI = "mongodb+srv://jhdavey5182:<password>@cluster0.ewhd2ki.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(MONGODB_URI, {useNewUrlParser: true})
    .then(() => {
        console.log('MongoDB Connected!');
    });

module.exports = mongoose.connection;
