import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import Navigation from "./Navigation";
import axios from "axios";
import snorkelImg from '../assets/snorkel.jpg';

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

    console.log(activityList);

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
        console.log(e.target.value);
    }

    return (
    <>
        {/* Bootstrap card for ChatGPT section with image background */}
        <Card className="bg-dark text-white">
        <Card.Img src={snorkelImg} alt="Go snorkeling in Cancun!" />
        <Card.ImgOverlay>
            {/* Put navbar here so image overlay remains behind body section and navbar together */}
            <Navigation />

            {/* ChatGPT Prompt Input */}
            <form className="chat-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="">Where would you like to go? </label>
                <input type="text" className="input" placeholder="Enter your destination" value={prompt} onChange={handlePrompt} />
            </div>
        </form>

        {/* ChatGPT savable list Output section */}
        <div className="output">
        <h2>{prompt ? `Top 10 activities to do in ${prompt}` : ' '}</h2>
            {
                /*  This maps each array item to a div adds
                the style declared above and return it */
                activityList.map(act => 
                    <div key={act} value={act}>
                    <button value={act} onClick={saveActivity}>
                        {act}
                    </button>
                        
                    </div>
                )
            }
        </div>
        </Card.ImgOverlay>
        </Card>
    </>
)};