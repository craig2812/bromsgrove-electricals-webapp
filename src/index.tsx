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
    height={'100vh'}
  sx={{
    display: 'grid',
    backgroundColor: theme.palette.navBar.dark,
    gap: 0,
    gridTemplateRows: '10% 85% 5%',
    gridTemplateAreas: `"header"
  "main"
  "footer"`,
  }}
>
      <Box sx={{ gridArea: 'header', bgcolor: theme.palette.navBar.contrastText }}> <NavBar /></Box>
      <Box sx={{ gridArea: 'main', bgcolor: theme.palette.navBar.contrastText  }}>    <App />
      </Box>
      <Box sx={{ gridArea: 'footer', bgcolor: 'white' }}>    <Footer />
      </Box>
    </Box>
    </ThemeProvider>
  </React.StrictMode>
);