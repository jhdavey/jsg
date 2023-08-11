const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    token: String
    trips: [Trip]!
  }

  type Trip {
    _id: ID!
    destination: String
    activities: [Activity]
  }

  type Activity {
    _id: ID!
    activityName: String
  }

  type Query {
    users: [User]
    user(username: String!): User
    trips: [Trip]
    trip(tripId: ID!): Trip
    getTrip(destination: String!): Trip
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): User
    login(email: String!, password: String!): User
    addTrip(username: String!, destination: String!, activities: String!): Trip
    addActivity(tripId: ID!, activityName: String!): Activity
  }
`

module.exports = typeDefs;
