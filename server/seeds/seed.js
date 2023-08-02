const db = require('../config/connection');
const { User, Location } = require('../models');

const userData = require('./userData.json');
const locationData = require('./locationData.json');


db.once('open', async () => {
  await User.deleteMany({});
  await Location.deleteMany({});

  const user = await User.insertMany(userData);
  const locations = await Location.insertMany(locationData);

  console.log('Users seeded!');
  process.exit(0);
});
