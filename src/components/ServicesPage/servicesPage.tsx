import React from 'react';
import Navbar from "../NavBar/navbar";

export function ServicesPage({heading = 'test Heading', content = 'test Content', buttonText = 'Go Back Home'}) {

    return (
        <>
            <Navbar/>
            <div>
                <svg></svg>
                <h1>{heading}</h1>
                <p>{content}</p>
                <a href="/"><button>{buttonText}</button></a>
            </div>
        </>
    );
}