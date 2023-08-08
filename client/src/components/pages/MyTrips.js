import React from "react";
import { useQuery, gql } from "@apollo/client";

const TRIPS = gql`
query Query {
  trips {
    destination
    activities {
      activityName
    }
  }
}
`;

export default function MyTrips () {

  const { loading, error, data } = useQuery(TRIPS);

  if (loading) return "Loading...";

  if (error) return `Error! ${error.message}`;

  const destinations = data.trips;
  console.log(destinations);

  return (
    <div>
      <h1>My Trips</h1>
      {destinations.length === 0 ? (
        <p>No trips added yet.</p>
        ) : (
          <ul>
          {destinations.map(destinations => 
          <div key={destinations}>
              <li>{destinations.destination}</li>
              <div key={destinations.destination}>
                <ul>
                  <li>{destinations.destination.activities}</li>
                </ul>
              </div>
          </div>
            )}
          </ul>
        )}
    </div>

    
  )
};