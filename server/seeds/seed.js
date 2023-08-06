const db = require('../config/connection');
const { User, Trip } = require('../models');

const userData = require('./userData.json');
const tripData = require('./tripData.json');


db.once('open', async () => {



    await User.deleteMany({});
    await Trip.deleteMany({});

    const users = await User.insertMany(userData);
    const trips = await Trip.insertMany(tripData);

 

    console.log('Users and Trips seeded!');
    process.exit(0);
  });
  
  

