const { gql } = require('@apollo/client');

export const ADD_USER = gql`
  mutation createUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      username
      email
      token
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        email
        username
        token
    }
  }
`;

export const ADD_TRIPS = gql`
mutation Mutation($username: String!, $destination: String!) {
  addTrip(username: $username, destination: $destination) {
    destination
  }
}
`;