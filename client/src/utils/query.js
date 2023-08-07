
// NEED TO QUERY TRIPS AND ACTIVITIES 
export const QUERY_USER = gql`
  {
    user {
      _id
      name
      email
      saveLocation {
        locationId
        name
        description
        image
        link
      }
    }
  }
`;
