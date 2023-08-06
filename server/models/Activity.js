
const { Schema, model } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the Trip's `savedActivities` array in Trip.js
const activitySchema = new Schema({
  activityName: {
      type: String,
    },
},
  {
    toJSON: {
      virtuals: true,
    },
  }
  );

const Activity = model('Activity', activitySchema)

module.exports = Activity;


