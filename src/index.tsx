import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { NavBar } from '../src/components/NavBar/navbar';
import Footer from './components/Footer/footer';
import { Box } from '@mui/material';
import { Button, createTheme, ThemeProvider } from '@mui/material';
import { theme } from '../src/theme/theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Box
        maxHeight={'100vh'}
        sx={{
          display: 'grid',
          gap: 0,
          gridTemplateRows: '1fr 17fr 1fr',
          gridTemplateAreas: `"header"
  "main"
  "footer"`,
        }}
      >
        <Box sx={{ gridArea: 'header', bgcolor: theme.palette.primary.contrastText }}> <NavBar /></Box>
        <Box sx={{ gridArea: 'main', bgcolor: theme.palette.primary.contrastText }} >    <App />
        </Box>
        <Box sx={{ gridArea: 'footer', bgcolor: 'white' }}>    <Footer />
        </Box>
      </Box>
    </ThemeProvider>
  </React.StrictMode>
);