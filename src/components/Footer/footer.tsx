import { ThemeProvider } from '@emotion/react';
import { BottomNavigation, BottomNavigationAction, Card, Paper, Typography } from '@mui/material';
import { theme } from '../../theme/theme';
import React from 'react';


const Footer = () => {
  return (
    <ThemeProvider theme={theme}>
<Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, backgroundColor:theme.palette.navBar.contrastText, display:'flex',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'column'
}} elevation={3}>
        <h1>Bromsgrove Electricals</h1>
        <p>You can contact us on 0121 12121212</p>
      </Paper>
      </ThemeProvider>
    )
};

export default Footer;