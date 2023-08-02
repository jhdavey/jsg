import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_MY_TRIPS = gql`
  query GetMyTrips {
    myTrips {
      _id
      destination
      hotel
      flight
    }
  }
`;

const MyTrips = () => {
  const { loading, error, data } = useQuery(GET_MY_TRIPS);
  

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>My Trips</h2>
      {data.myTrips.length === 0 ? (
        <p>No trips added yet.</p>
      ) : (
        <ul>
          {data.myTrips.map((trip) => (
            <li key={trip._id}>
              <strong>Destination:</strong> {trip.destination},{" "}
              <strong>Hotel:</strong> {trip.hotel}, <strong>Flight:</strong>{" "}
              {trip.flight}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyTrips;
