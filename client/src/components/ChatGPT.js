import React, { useState } from "react";
import axios from "axios";

export default function ChatGPT() {
    const [prompt, setPrompt] = useState("");
    const [response, setResponse] = useState("");
    const [activityList, setActivityList] = useState([]);
    const HTTP = "http://localhost:3001/chat";

    //Once response is set from Chatbot, pull out numbered list, create an array, then map over array to create savable activities
    const createList = () => {
        let regex = /(\d+\.\d*)\s?(.*?)(?=\d+\.|$)/gs;
        let list = response.match(regex);
        if (list) {setActivityList(list)}
        console.log(activityList);
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

    return <div className="container">
    <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor="">Where would you like to go?</label>
            <input type="text" className="input" placeholder="Enter your destination" value={prompt} onChange={handlePrompt} />
        </div>
    </form>

    <div className="output">
        {
            /*  This maps each array item to a div adds
            the style declared above and return it */
            activityList.map(act => 
                <div key={act}>
                    {act}
                </div>
            )
        }
    </div>
    
    </div>
};