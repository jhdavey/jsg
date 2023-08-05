import React, { useState } from 'react';
import dubai from '../assets/dubai.jpeg';
import bali from '../assets/bali.webp';
import london from '../assets/london.jpeg';
import rome from '../assets/rome.jpeg';
import paris from '../assets/paris.jpeg';
import cancun from '../assets/cancun.jpeg';



function TopDestinations() {

    // const handleSave = (e) => {
    //     e.preventDefault();
    //     console.log(e.target.value);
    // }

    return (
        
        <div style={{margin:"30px 5px"}}>
            <h1 style={{ justifyContent: "center" }}>Top Destinations of 2023</h1>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(370px, 1fr))", gap: "1rem", marginTop: "25px" }}>

                <div className="grid-item image-container">
                    <img className="hoverable-image" style={{ maxWidth: "100%", borderRadius: "10px"}} src={dubai} />
                    <h3 className="image-title"><a style={{ textDecoration: "none", color: "white" }} href="#">Dubai</a></h3>
                </div>

                <div className="grid-item image-container">
                    <img className="hoverable-image" style={{ maxWidth: "100%", borderRadius: "10px" }} src={bali} />
                    <h3 className="image-title"><a style={{ textDecoration: "none", color: "white" }} href="#">Bali</a></h3>
                </div>

                <div className="grid-item image-container">
                    <img className="hoverable-image" style={{ maxWidth: "100%", borderRadius: "10px" }} src={london} />
                    <h3 className="image-title"><a style={{ textDecoration: "none", color: "white" }} href="#">London</a></h3>
                </div>

                <div className="grid-item image-container">
                    <img className="hoverable-image" style={{ maxWidth: "100%", borderRadius: "10px" }} src={rome} />
                    <h3 className="image-title"><a style={{ textDecoration: "none", color: "white" }} href="#">Rome</a></h3>
                </div>

                <div className="grid-item image-container">
                    <img className="hoverable-image" style={{ maxWidth: "100%", borderRadius: "10px",  }} src={paris} />
                    <h3 className="image-title"><a style={{ textDecoration: "none", color: "white" }} href="#">Paris</a></h3>
                </div>
                <div className="grid-item image-container">
                    <img className="hoverable-image" style={{ maxWidth: "100%", borderRadius: "10px",  }} src={cancun} />
                    <h3 className="image-title"><a style={{ textDecoration: "none", color: "white" }} href="#">Cancun</a></h3>
                </div>
            </div>
        </div>

    )
}

export default TopDestinations;