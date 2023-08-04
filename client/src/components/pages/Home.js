import React, { useState } from 'react';
import ChatGPT from "../ChatGPT";
import Navbar from '../NavBar';

export default function Home() {
    return (
        <div>
            <Navbar />
            <h1>Jet Set Go!</h1>
            <h1 className="text-red-500">Jet Set Go!</h1>
            <ChatGPT />
        </div>
    )
    }