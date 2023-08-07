import { gql } from '@apollo/client';
//named this create_user to avoid conflict, and keep both sign in mutations
export const CREATE_USER = gql`
  mutation createUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      _id
      username
      email
      password
      trips {
        _id
        destination
        activities {
          _id
          activityName
        }
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    token
    user {
      _id
      username
    }
  }
}
`;

export const SAVE_LOCATION = gql`
  mutation saveLocation($locationData: LocationInput!) {
    saveLocation(locationData: $locationData) {
      _id
      username
      email
      saveLocation {
        locationId
        username
        description
        image
        link
      }
    }
  }
`;

export const REMOVE_LOCATION = gql`
  mutation removeLocation($locationId: ID!) {
    removeLocation(locationId: $locationId) {
      _id
      username
      email
      saveLocation {
        locationId
        username
        description
        image
        link
      }
    }
  }
`;
