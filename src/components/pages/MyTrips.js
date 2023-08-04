import React, { useState } from "react";
import { useQuery, gql, useMutation } from "@apollo/client";

// got rid of hotel, flight, and destination. adding Name
const GET_MY_TRIPS = gql`
  query GetMyTrips {
    myTrips {
      _id
      name
    }
  }
`;

// GraphQL mutation to add a new trip
const ADD_TRIP = gql`
  mutation AddTrip($destination: String!) {
    addTrip(destination: $destination) {
      _id
      destination
    }
  }
`;

const MyTrips = () => {
  // useQuery hook to fetch list of trips from the server
  const { loading, error, data } = useQuery(GET_MY_TRIPS);

  // State variable to manage the form input for destination
  const [destination, setDestination] = useState("");

  // useMutation hook to perform the "AddTrip" mutation
  const [addTrip] = useMutation(ADD_TRIP, {
    // Update the cache after a successful mutation to reflect the new trip
    update(cache, { data: { addTrip } }) {
      cache.modify({
        fields: {
          // Modify the "myTrips" field to include the new trip data
          myTrips(existingTrips = []) {
            const newTripRef = cache.writeFragment({
              data: addTrip,
              fragment: gql`
                fragment NewTrip on Trip {
                  _id
                  destination
                }
              `,
            });
            return [...existingTrips, newTripRef];
          },
        },
      });
    },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  // Function to handle adding a new trip
  const handleAddTrip = () => {
    if (destination) {
      // Call the addTrip mutation with the provided destination
      addTrip({ variables: { destination } });
      // Clear the form input field after adding the trip
      setDestination("");
    }
  };

  return (
    <div>
      <h2>My Trips</h2>
      {data.myTrips.length === 0 ? (
        <p>No trips added yet.</p>
      ) : (
        <ul>
          {data.myTrips.map((trip) => (
            <li key={trip._id}>
              <strong>Destination:</strong> {trip.name},{" "}
              {/* <strong>Hotel:</strong> {trip.hotel}, <strong>Flight:</strong>{" "} */}
              {/* {trip.flight} */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyTrips;
