import React, { useState } from "react";
import axios from "axios";


export default function ChatGPT() {
    const [prompt, setPrompt] = useState("");
    const [response, setResponse] = useState("");
    const [activityList, setActivityList] = useState([]);
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
        //TODO - Need to update this to save to trip instead of just console logging
        console.log(e.target.value);
    }

    return (
    <>
        {/* ChatGPT Prompt Input */}
        <div className="chat-container">
            <form className="chat-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="" className="chat-label" style={{ fontStyle: "italic" }}>Where would you like to go? </label>
                    <input type="text" className="chat-input" placeholder="Enter your destination" value={prompt} onChange={handlePrompt} />
                </div>
            </form>

            {/* ChatGPT savable list Output section */}
            <div className="output">
                <h3>{activityList < 10 ? '' : `Top 10 activities to do in ${prompt}`}</h3>
                    {/*  This maps each array item to a div adds the style declared above and return it */
                        activityList.map(act => 
                            <div key={act} value={act}>
                            <button value={act} onClick={saveActivity} className="savable-buttons">
                                {act}
                            </button>
                            </div>
                        )
                    }
            </div>
        </div>
    </>
)};