import React from 'react';
import logo from './logo.svg';
import './App.css';
import {NavBar} from "../src/components/NavBar/navbar"
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home/home';
import AboutUs from './pages/AboutUs/about';
import Services from './pages/Services/services';
import ContactForm from './pages/ContactForm/contactForm';

function App() {
  return (
<BrowserRouter>
            
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/services" element={<Services/>}/>
                <Route path="/about" element={<AboutUs/>}/>
                <Route path="/contact" element={<ContactForm/>}/>
            </Routes>
        </BrowserRouter>
   
  );
}

export default App;
