import { Button } from '@mui/material';
import React from 'react'
import '../../pages/Services/services.css';
import { ThemeProvider } from '@mui/material/styles';
import {theme} from '../../theme/theme'
import { deepOrange } from '@mui/material/colors';

const buttonTheme = theme.palette.primary

interface ServicesButtonProps {
    page?: string;
    children?: React.ReactNode;
  }
  
  export const ServicesButton: React.FunctionComponent<ServicesButtonProps> = ({
    page = 'services', children  }) => {
    return (
        <ThemeProvider theme={theme}>
        <div>
        <Button href={`/${page}`} color="primary" sx={{ color: 'inherit', ":hover": {
                        bgcolor: theme.palette.primary.darker,
                        color: theme.palette.primary.main
                      }}}>All Services</Button>
                      </div>
        </ThemeProvider>
    );
  };