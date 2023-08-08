import React, { useState } from "react";
import axios from "axios";
import { useMutation, gql } from "@apollo/client";

// SAVE USER'S TRIP
const ADD_TRIP = gql`
mutation addTrip($username: String!) {
    addTrip(username: $username, destination: $destination) {
        _id
        destination
      }
    }
`;




export default function ChatGPT() {
    const [prompt, setPrompt] = useState("");
    const [response, setResponse] = useState("");
    const [activityList, setActivityList] = useState([]);
    const [MyTrips, setMyTrips] = useState([]);
    const HTTP = "http://localhost:3001/chat"; 

    //Once response is set from Chatbot, pull out numbered list, create an array, then map over array to create a list of activites
    const createList = () => {
        let regex = /(\d+\.\d*)\s?(.*?)(?=\d+\.|$)/gs;
        let list = response.match(regex);
        if (list) {setActivityList(list) }
    }    

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${HTTP}`, {prompt})
            .then(res => setResponse(res.data))
            .then(response => createList(response))
            .catch(error => {
                console.log(error);
            })
    }

    const handlePrompt = (e) => setPrompt(e.target.value);

    function saveActivity(e) {
        const activity = e.target.value;
        setMyTrips((prevTrips) => [...prevTrips, activity])
    }

    const currentUser = localStorage.username;

    // const [ addTrip, { loading }] = useMutation(ADD_TRIP, {
    //     variables: { 
    //         username: currentUser,
    //         destination: prompt,
    //     }
    // })

    function saveTrip() {
    const trip = { 
        destination: prompt,
        activities: MyTrips,
    };
    console.log(prompt);
    console.log(trip);
    // addTrip();
    
};

    return (
    <>
        {/* ChatGPT Prompt Input */}
        <div className="chat-container">
            <form className="chat-form" onSubmit={handleSubmit}>
                <div className="form-group" style={{ display: "flex" }}>
                <div>
                <label htmlFor="" className="chat-label">Where would you like to go?</label><br />
                <label htmlFor="" className="chat-label" style={{ fontStyle: "italic", fontSize: "small" }}>Must enter a city, state, or country.</label>
                </div>
                    <input type="text" className="chat-input" placeholder="Enter your destination" value={prompt} onChange={handlePrompt} />
                </div>
            </form>

            {/* ChatGPT savable list Output section */}
            <div className="output">
                <h4>{activityList < 10 ? '' : `Top 10 activities to do in ${prompt}:`}</h4>
                    {/*  This maps each array item to a div adds the style declared above and return it */
                        activityList.map(act => 
                            <div key={act} value={act}>
                            <button value={act} onClick={saveActivity} className="savable-buttons">
                                {act}
                            </button>
                            </div>
                        )}
            </div>
            {/* Show myTrips */}
                <div className="my-trips">
                {!prompt ? '' :
                    <h4>My Trip: {prompt}</h4>
                }
                    {prompt.length > 3 ? 'Loading awesome activities for your trip...' : ''}
                        <ul> 
                            {MyTrips.map((activity, index) => (
                                <li key={index}>{activity}</li>
                            ))}
                        </ul>
                    
                    {activityList < 10 ? '' : 
                        <button value={MyTrips} onClick={saveTrip} className="savable-buttons">
                            Save My Trip
                        </button>
                        }
                </div>
        </div>
    </>
)};