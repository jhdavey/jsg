const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    trips: [Trip]!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Trip {
    _id: ID!
    username: String!
    email: String!
    savedLocation: [Location]
  }
  
  type Location {
    locationId: ID!
    name: String!
    description: String!
    country: String!
    image: String
    link: String
    destination: String
    activities: [Activity]!
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
  }

  type Mutation {
    
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addTrip(userId: ID!, destination: String!): Trip
    addActivity(tripId: ID!, activityName: String!): Activity
  }
`;

module.exports = typeDefs;

//// createUser(username: String!, email: String!, password: String!): User