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

// ADD TRIPS AND ACTIVITIES

export const ADD_TRIPS = gql`
  mutation addTrips($destination: String!, $savedActivities: [Schema]) {
    addTrips(destination: $destination, savedActivities: $savedActivities) {
      user {
        _id
        trips {
          _id
          destination
          savedActivities
        }
      }
    }
  }
`;

export const ACTIVITIES = gql`
  mutation addActivities($activityName: String!) {
  addActivity (activityname:$activityName) {
    user {
        _id
        trips {
          _id
          destination
          savedActivities{
            _id
            activityName
          }
        }
      }
    }
  }
`;