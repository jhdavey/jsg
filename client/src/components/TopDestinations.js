import React from 'react';



function TopDestinations() {

    return (
        
        <div style={{margin:"30px 5px"}}>
            <h1 style={{ justifyContent: "center" }}>Top Destinations of 2023</h1>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(370px, 1fr))", gap: "1rem", marginTop: "25px" }}>

                <div className="grid-item image-container">
                    <img className="hoverable-image" style={{ maxWidth: "100%", borderRadius: "10px"}} src="../assets/dubai.jpeg" />
                    <h3 className="image-title"><a style={{ textDecoration: "none", color: "white" }} href="#">Dubai</a></h3>
                </div>

                <div className="grid-item image-container">
                    <img className="hoverable-image" style={{ maxWidth: "100%", borderRadius: "10px" }} src="../assets/bali.webp" />
                    <h3 className="image-title"><a style={{ textDecoration: "none", color: "white" }} href="#">Bali</a></h3>
                </div>

                <div className="grid-item image-container">
                    <img className="hoverable-image" style={{ maxWidth: "100%", borderRadius: "10px" }} src="../assets/london.jpeg" />
                    <h3 className="image-title"><a style={{ textDecoration: "none", color: "white" }} href="#">London</a></h3>
                </div>

                <div className="grid-item image-container">
                    <img className="hoverable-image" style={{ maxWidth: "100%", borderRadius: "10px" }} src="../assets/rome.jpeg" />
                    <h3 className="image-title"><a style={{ textDecoration: "none", color: "white" }} href="#">Rome</a></h3>
                </div>

                <div className="grid-item image-container">
                    <img className="hoverable-image" style={{ maxWidth: "100%", borderRadius: "10px",  }} src="../assets/paris.jpeg" />
                    <h3 className="image-title"><a style={{ textDecoration: "none", color: "white" }} href="#">Paris</a></h3>
                </div>
                <div className="grid-item image-container">
                    <img className="hoverable-image" style={{ maxWidth: "100%", borderRadius: "10px",  }} src="../assets/cancun.jpeg" />
                    <h3 className="image-title"><a style={{ textDecoration: "none", color: "white" }} href="#">Cancun</a></h3>
                </div>
            </div>
        </div>

    )
}

export default TopDestinations;