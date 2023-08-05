import React from 'react';
import Card from 'react-bootstrap/Card';
import ChatGPT from "../ChatGPT";
import Navigation from '../Navigation';
import TopDestinations from '../TopDestinations';
import snorkelImg from '../../assets/snorkel.jpg';

export default function Home() {
    return (
        <>

        {/* Bootstrap card for ChatGPT section with image background */}
        <Card className="bg-dark text-white">
            <Card.Img className="card-image" src={snorkelImg} alt="Go snorkeling in Cancun!" />
                <Card.ImgOverlay className='img-overlay'>
                    <Navigation />
                    <ChatGPT />
                </Card.ImgOverlay>
        </Card>

        <TopDestinations />

        </>
    )
    }