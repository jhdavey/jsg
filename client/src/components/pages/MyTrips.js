import React from "react";
import { useQuery, gql } from "@apollo/client";

// got rid of hotel, flight, and destination. adding Name
const GET_MY_TRIPS = gql`
  query GetMyTrips {
    trips {
      _id
      destination
      savedActivities {
        _id
        activityName
      }
    }
  }
`;

export default function MyTrips () {
  const { loading, error, data } = useQuery(GET_MY_TRIPS);
  

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>My Trips</h2>
      {data.trips.length === 0 ? (
        <p>No trips added yet.</p>
      ) : (
        <ul>
          {data.trips.map((trip) => (
            <li key={trip._id}>
              <strong>Destination:</strong> {trip.destination},{" "}
              <ul>
                {trip.savedActivties.map((activity) => (
                  <li key={activity._id}>
                    <strong>Activity:</strong> {activity.activityName}
                    </li>
                ))}
              </ul>
              {/* <strong>Hotel:</strong> {trip.hotel}, <strong>Flight:</strong>{" "} */}
              {/* {trip.flight} */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
