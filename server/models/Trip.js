
const { Schema, model } = require('mongoose');
const { Activity } = require('../models/Activity');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedTrips` array in User.js
const tripSchema = new Schema({
  destination: {
      type: String,
    },
    savedActivities: [
      {
      type: Schema.Types.ObjectId,
      ref: 'Activity',
      }
    ]
},
  {
    toJSON: {
      virtuals: true,
    },
  }
  );

const Trip = model('Trip', tripSchema)

module.exports = Trip;


