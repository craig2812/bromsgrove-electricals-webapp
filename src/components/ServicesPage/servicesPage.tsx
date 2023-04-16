import { Button } from '@mui/material';
import React from 'react'
import '../../pages/Services/services.css';
import { ThemeProvider } from '@mui/material/styles';
import {theme} from '../../theme/theme'
import { deepOrange } from '@mui/material/colors';

const backdropTheme = theme.palette.backdrop

interface ServicesProps {
    content: string;
    heading: string;
    children?: React.ReactNode;
  }
  
  export const ServicesPage: React.FunctionComponent<ServicesProps> = ({
    content,
    heading, children  }) => {
    return (
      <ThemeProvider theme={theme}>
      <div className='services-container' style={{textAlign: "center", backgroundColor: backdropTheme.main, color: backdropTheme.contrastText, borderColor: backdropTheme.dark}}>
        <h1>{heading}</h1>
        <p>{content}</p>
{children}
      </div>
      </ThemeProvider>
    );
  };