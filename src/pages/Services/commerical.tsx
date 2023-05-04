import { Button, ThemeProvider } from '@mui/material';
import * as React from 'react';
import {ServicesPage} from '../../components/ServicesPage/servicesPage';
import pagesData from "../../pages.json";
import { theme } from '../../theme/theme';


const service = pagesData.services

const Commercial = () => {

    return (
        <div>
            <ThemeProvider theme={theme}>
            <ServicesPage heading={service.commercial.header} content={service.commercial.content}>
            <Button href="/services" color="primary" sx={{ color: "white", ":hover": {
      bgcolor: theme.palette.navBar.light,
      color: theme.palette.navBar.contrastText
    }}} >All Services</Button>
            </ServicesPage>
            </ThemeProvider>
        </div>
    );
};

export default Commercial;