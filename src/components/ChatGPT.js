import React, { useState } from "react";
import axios from "axios";

export default function ChatGPT() {
    const [prompt, setPrompt] = useState("");
    const [response, setResponse] = useState("");
    const HTTP = "http://localhost:8020/chat";

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${HTTP}`, {prompt})
            .then(res => setResponse(res.data))
            .catch(error => {
                console.log(error);
            })
    }

    const handlePrompt = (e) => setPrompt(e.target.value);

    return <div className="container">
    <h1>ChatGPT</h1>
    <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor="">Where would you like to go?</label>
            <input type="text" className="input" placeholder="Enter your destination" value={prompt} onChange={handlePrompt} />
        </div>
    </form>

    <div className="output">
        <p>
            {response ? response : "I can provide recommendations for activities in your destination!"}
        </p>
    </div>
    
    </div>
};