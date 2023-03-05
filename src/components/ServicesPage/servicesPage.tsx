import React from 'react';
import Navbar from "../NavBar/navbar";

export function ServicesPage({heading = 'test Heading', content = 'test Content', buttonText = 'Go Back Home'}) {
//thinking this can be used to render a services page on a tabbed page in Servicces component
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