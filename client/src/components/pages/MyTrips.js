import React from "react";
import { useQuery, gql } from "@apollo/client";

// GET SINGLE USER'S TRIPS
const MY_TRIPS = gql`
query Query($username: String!) {
  user(username: $username) {
    trips {
      destination
      activities {
        activityName
      }
    }
  }
}
`;

export default function MyTrips () {

  const currentUser = localStorage.username;

  const { loading, error, data } = useQuery(MY_TRIPS, {
    variables: { username: currentUser },
  });

  if (loading) return "Loading...";

  if (error) return `Error! ${error.message}`;
  
  const trips = data.user.trips;
  console.log(trips);
  console.log(trips.activities);

  return (
    <div>
    <h1>My Trips</h1>
    {trips?.length === 0 ? (
      <p>No trips added yet.</p>
      ) : (
        <ul>
        {trips?.map(trips =>
        <div key={trips}>
            <li>{trips.destination}</li>
            <div key={trips.destination}>
              <ul>
              {trips?.activities?.length ? (
                trips.activities.map(activity =>
                  <li key={activity.activityName}>{activity.activityName}</li>
                )
              ) : (
                <p>No activities added yet.</p>
              )}
              </ul>
            </div>
        </div>
          )}
        </ul>
      )}
  </div>
)
};