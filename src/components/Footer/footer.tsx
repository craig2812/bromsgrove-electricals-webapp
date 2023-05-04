import { ThemeProvider } from '@emotion/react';
import { BottomNavigation, BottomNavigationAction, Card, Paper, Typography } from '@mui/material';
import { theme } from '../../theme/theme';
import React from 'react';
import { Padding } from '@mui/icons-material';


const Footer = () => {
  return (
    <ThemeProvider theme={theme}>
<Paper 
sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, backgroundColor:theme.palette.navBar.contrastText, display:'flex',
    alignContent: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection:'row',
    minHeight: '20px',
    maxHeight:'40px',
    paddingInline: '20px'

}} 
elevation={3}>
        <p>You can contact us on 0121 12121212</p><p> or <a href = "mailto: bromsgroveElectricals@gmail.com">bromsgroveElectricals@gmail.com</a></p>
      </Paper>
      </ThemeProvider>
    )
};

export default Footer;