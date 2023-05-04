import * as React from 'react';
import pagesData from "../../pages.json";
import { ServicesPage } from '../../components/ServicesPage/servicesPage';
import { Button, ThemeProvider } from '@mui/material';
import { theme } from '../../theme/theme';

const service = pagesData.services

const Domestic = () => {

    return (
        <div>
            <ThemeProvider theme={theme}>
            <ServicesPage heading={service.domestic.header} content={service.domestic.content}>
            <Button href="/services" color="primary" sx={{ color: "white", ":hover": {
      bgcolor: theme.palette.navBar.light,
      color: theme.palette.navBar.contrastText
    }}} >All Services</Button>
            </ServicesPage>
            </ThemeProvider>
        </div>
    );
};
export default Domestic;