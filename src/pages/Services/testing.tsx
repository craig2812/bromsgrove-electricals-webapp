import * as React from 'react';

import pagesData from "../../pages.json";
import { ServicesPage } from '../../components/ServicesPage/servicesPage';
import { Button, ThemeProvider } from '@mui/material';
import { theme } from '../../theme/theme';

const service = pagesData.services

const Testing = () => {

    return (
        <div>
            <ThemeProvider theme={theme}>
            <ServicesPage heading={service.testing.header} content={service.testing.content}>
            <Button href="/services" color="primary" sx={{ color: "white", ":hover": {
      bgcolor: theme.palette.navBar.light,
      color: theme.palette.navBar.contrastText
    }}} >All Services</Button>
            </ServicesPage>
            </ThemeProvider>
        </div>
    );
};

export default Testing;