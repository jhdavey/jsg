import React, { useState } from 'react';
import ChatGPT from "../ChatGPT";
import Navbar from '../NavBar';

export default function Home() {
    return (
        <div>
            <Navbar />
            <ChatGPT />
        </div>
    )
    }