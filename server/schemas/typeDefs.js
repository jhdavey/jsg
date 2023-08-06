const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    savedLocation: [Location]
  }
  
  type Location {
    locationId: ID!
    name: String!
    description: String!
    country: String!
    image: String
    link: String
  }

  type Auth {
    token: ID!
    user: User
  }

  input LocationInput {
    locationId: ID!
    name: String!
    description: String!
    country: String!
    image: String
    link: String
  }

  type Query {
    user: [User]
    myTrips: [Location]

  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveLocation(locationData: LocationInput!): User
    removeLocation(locationId: ID!): User
  }
`;

module.exports = typeDefs;
