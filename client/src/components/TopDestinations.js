import React, { useState } from 'react';
import dubai from '../assets/dubai.jpeg';
import bali from '../assets/bali.webp';
import london from '../assets/london.jpeg';
import rome from '../assets/rome.jpeg';
import paris from '../assets/paris.jpeg';
import cancun from '../assets/cancun.jpeg';

function TopDestinations() {
    
    const [autoPrompt, setAutoPrompt] = useState('');

    // Get city when clicked and set autoPrompt variable
    const handleClick = event => {
        setAutoPrompt(event.target.getAttribute('city'));
        console.log(autoPrompt);
      };

    return (
        
        <div style={{margin:"30px 5px"}}>
            <h1 style={{ textAlign: "center" }}>Top Destinations of 2023</h1>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(370px, 1fr))", gap: "1rem", marginTop: "25px" }}>

                <div className="grid-item image-container">
                    <img className="hoverable-image" style={{ maxWidth: "100%", borderRadius: "10px"}} src={dubai} city="Dubai" onClick={handleClick} />
                    <h3 className="image-title"><a style={{ textDecoration: "none", color: "white" }} href="dubai">Dubai</a></h3>
                </div>

                <div className="grid-item image-container">
                    <img className="hoverable-image" style={{ maxWidth: "100%", borderRadius: "10px" }} src={bali} city="Bali" onClick={handleClick} />
                    <h3 className="image-title"><a style={{ textDecoration: "none", color: "white" }} href="#" >Bali</a></h3>
                </div>

                <div className="grid-item image-container">
                    <img className="hoverable-image" style={{ maxWidth: "100%", borderRadius: "10px" }} src={london} city="London" onClick={handleClick} />
                    <h3 className="image-title"><a style={{ textDecoration: "none", color: "white" }} href="#">London</a></h3>
                </div>

                <div className="grid-item image-container">
                    <img className="hoverable-image" style={{ maxWidth: "100%", borderRadius: "10px" }} src={rome} city="Rome" onClick={handleClick} />
                    <h3 className="image-title"><a style={{ textDecoration: "none", color: "white" }} href="#">Rome</a></h3>
                </div>

                <div className="grid-item image-container">
                    <img className="hoverable-image" style={{ maxWidth: "100%", borderRadius: "10px",  }} src={paris} city="Paris" onClick={handleClick} />
                    <h3 className="image-title"><a style={{ textDecoration: "none", color: "white" }} href="#">Paris</a></h3>
                </div>
                <div className="grid-item image-container">
                    <img className="hoverable-image" style={{ maxWidth: "100%", borderRadius: "10px",  }} src={cancun} city="Cancun" onClick={handleClick} />
                    <h3 className="image-title"><a style={{ textDecoration: "none", color: "white" }} href="#">Cancun</a></h3>
                </div>
            </div>
        </div>

    )
}

export default TopDestinations;