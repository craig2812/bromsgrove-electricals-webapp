import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {NavBar} from '../src/components/NavBar/navbar';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <NavBar/>
    <App />
  </React.StrictMode>
);