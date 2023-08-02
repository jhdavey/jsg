const { User } = require('../models');

const resolvers = {
  Query: {
    user: async () => {
      return User.find({});
    },
  },
  Mutation: {
// ADD MUTATIONS TO CREATE USERS, LOCATIONS HERE
  },
};

module.exports = resolvers;
