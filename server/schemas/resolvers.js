const { AuthenticationError } = require('apollo-server-express');
const { User, Trip, Activity } = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = {
    Query: {
        //Start User Queries
        users: async () => User.find().populate({path:'trips', populate:{path:'activities', model:'Activity'}}),
        user: async (_, { username }) => User.findOne({ username }).populate({path:'trips', populate:{path:'activities', model:'Activity'}}),        // End User Queries
        // Start Trip Queries
        trips: async (_, { username }) => { const params = username ? { username } : {};
            return Trip.find(params).populate('activities');
        },
        trip: async (_, { tripId }) => Trip.findOne({ _id: tripId }).populate('activities'),
        getTrip: async (_, { destination }) => Trip.findOne({ destination: destination }).populate('activities'),
        // End Trip Queries
    },

    Mutation: {
        // Start User Mutations
        createUser: async (_, { username, email, password }) => {
            const oldUser = await User.findOne({ email });

            if (oldUser) {
                throw new AuthenticationError('Email is already registered...');
            }

            var encryptedPassword = await bcrypt.hash(password, 10);

            const user = await User.create({
                 username: username,
                 email: email.toLowerCase(),
                 password: encryptedPassword 
                });

            const token = jwt.sign(
                { user_id: user._id, email },
                //For basics, using "UNSAFE_STRING" for JWT
                "UNSAFE_STRING",
                {
                    expiresIn: "2h"
                }
            );
            user.token = token;

            const res = await user.save();

            return {
                id: res.id,
                ...res._doc
            };
        },
        login: async (_, { email, password }) => {
        const user = await User.findOne({ email });

        if (user && (await bcrypt.compare(password, user.password))) { 

            const token = jwt.sign(
                { user_id: user._id, email },
                //For basics, using "UNSAFE_STRING" for JWT
                "UNSAFE_STRING",
                {
                    expiresIn: "2h"
                }
            );

            user.token = token;

            return {
                id: user.id,
                ...user._doc
            }

        } else {
            throw new AuthenticationError('Email or password incorrect...');
        }
        },
        // End User Mutations

        // Start Trip & Activity Mutations
        addTrip: async (_, { username, destination }) => {
        const trip = await Trip.create({ destination });
    
        await User.findOneAndUpdate(
            { username: username },
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