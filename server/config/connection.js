const mongoose = require('mongoose');
const LOCALHOST = "mongodb+srv://harley:Baileyfisker!1@cluster0.bse1up2.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(process.env.MONGODB_URI || LOCALHOST, {useNewUrlParser: true})
    .then(() => {
        console.log('MongoDB Connected!');
    });

module.exports = mongoose.connection;
