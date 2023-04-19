import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {NavBar} from '../src/components/NavBar/navbar';
import Footer from './components/Footer/footer';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <NavBar/>
    <App />
    <Footer/>
  </React.StrictMode>
);