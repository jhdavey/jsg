const { User, Location } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    user: async () => {
      return User.find({});
    },
    myTrips: async () => {
      return Location.find({});
    },
  },
  Mutation: {
// ADD MUTATIONS TO CREATE USERS, LOCATIONS HERE
    addUser: async (parent, { username, email, password }) => {
    try {
      const existingUser = await User.findOne({email});
      if (existingUser) {
        throw new Error('User already exists with this email.');
      }

      const newUser = await User.create({ username, email, password });
      const token = signToken(newUser);

      return { token, user: newUser };
    } catch (err) {
      throw new Error('Error creating user.');
    }
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    },
    saveLocation: async (parent, { locationData }, context) => {
      if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { savedLocation: locationData } },
          { new: true }
        );

        return updatedUser;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
    removeLocation: async (parent, { locationId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedLocation: { locationId } } },
          { new: true }
        );

        return updatedUser;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;
