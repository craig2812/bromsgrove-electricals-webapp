import { ThemeProvider } from '@emotion/react';
import { BottomNavigation, BottomNavigationAction, Button, Card, Link, Paper, Typography, useMediaQuery } from '@mui/material';
import { theme } from '../../theme/theme';
import React from 'react';

const Footer = () => {
  const isMobileMatch = useMediaQuery("(max-width:600px)"); // <-- set breakpoint

  return (
    <ThemeProvider theme={theme}>

      <Paper
        sx={{
          position: 'fixed', bottom: 0, left: 0, right: 0,
          color: theme.palette.primary.contrastText, backgroundColor: theme.palette.primary.dark, display: 'flex',
          justifyContent: isMobileMatch ? 'center' : 'space-between'
        }}
        elevation={3}>
        {isMobileMatch ?
          <Button component={Link} href="/contact" sx={{fontWeight: '900!important', color: theme.palette.primary.contrastText, backgroundColor:theme.palette.primary.dark, ":hover": {
            bgcolor: theme.palette.navBar.darker,
            color: theme.palette.navBar.main
          }}}>Contact Us</Button> :
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            width: '100%',
            paddingInline: '20px'
          }}>
            <p>0121 12121212 </p>
            <a href="mailto: bromsgroveElectricals@gmail.com">bromsgroveElectricals@gmail.com</a>
          </div>
        }

      </Paper>
    </ThemeProvider>
  )
};

export default Footer;