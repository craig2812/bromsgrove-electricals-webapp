import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { NavBar } from '../src/components/NavBar/navbar';
import Footer from './components/Footer/footer';
import { Box } from '@mui/material';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Box height={'100vh'}
  sx={{
    display: 'grid',
    gap: 0,
    gridTemplateRows: '10% 80% 10%',
    gridTemplateAreas: `"header"
  "main"
  "footer"`,
  }}
>
      <Box sx={{ gridArea: 'header', bgcolor: 'primary.main' }}> <NavBar /></Box>
      <Box sx={{ gridArea: 'main', bgcolor: 'secondary.main' }}>    <App />
      </Box>
      <Box sx={{ gridArea: 'footer', bgcolor: 'warning.dark' }}>    <Footer />
      </Box>
    </Box>
  </React.StrictMode>
);