import React, {useEffect, useState} from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home/home';
import AboutUs from './pages/AboutUs/about';
import Services from './pages/Services/allServices';
import Testing from './pages/Services/testing';
import Commercial from './pages/Services/commerical';
import Domestic from './pages/Services/domestic';
import Charging from './pages/Services/charging';
import Contact from "./pages/Contact/contact";
import Admin from './pages/Admin/admin';
import Garden from './pages/Services/garden';
import Water from './pages/Services/water';

function App() {

  return (
<BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/services" element={<Services/>}/>
                <Route path="/testing" element={<Testing/>}/>
                <Route path="/commercial" element={<Commercial/>}/>
                <Route path="/domestic" element={<Domestic/>}/>
                <Route path="/charging" element={<Charging/>}/>
                <Route path="/water" element={<Water/>}/>
                <Route path="/garden" element={<Garden/>}/>
                <Route path="/about" element={<AboutUs/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/admin" element={<Admin/>}/>
            </Routes>
        </BrowserRouter>
   
  );
}

export default App;
