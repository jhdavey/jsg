const { AuthenticationError } = require('apollo-server-express');
const { User, Trip, Activity } = require('../models');

module.exports = {
    Query: {
        //Start User Queries
        users: async () => User.find().populate('trips'),
        user: async (_, { username }) => User.findOne({ username }).populate('trips'),
        // End User Queries

        // Start Trip Queries
        trips: async (_, { username }) => {
            const params = username ? { username } : {};
            return Trip.find(params);
        },
        trip: async (_, { tripId }) => Trip.findOne({ _id: tripId })
        // End Trip Queries
    },

    Mutation: {
        // Start User Mutations
        createUser: async (_, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            return { user };
        },
        login: async (_, { email, password }) => {
        const user = await User.findOne({ email });
    
        if (!user) {
            throw new AuthenticationError('No user found with this email address');
        }
    
        const correctPw = await user.isCorrectPassword(password);
    
        if (!correctPw) {
            throw new AuthenticationError('Incorrect credentials');
        }
    
        return { user };
        },
        // End User Mutations

        // Start Trip & Activity Mutations
        addTrip: async (_, { userId, destination }) => {
        const trip = await Trip.create({ destination });
    
        await User.findOneAndUpdate(
            { _id: userId },
            { $addToSet: { trips: trip } },
            { new: true }
        );
    
        return trip;
        },
        addActivity: async (_, { tripId, activityName }) => {
            const activity = await Activity.create({ activityName });
        
            await Trip.findOneAndUpdate(
                { _id: tripId },
                { $addToSet: { activities: activity } },
                { new: true }
            );
        
            return activity;
            },
        // End Trip & Activity Mutations
    },
};