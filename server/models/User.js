const { Schema, model } = require('mongoose');
const { Trip } = require('../models/Trip');

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
  token: {
    type: String,
  },
  trips: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Trip',
    },
  ],
},
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const User = model('User', userSchema);

module.exports = User;
