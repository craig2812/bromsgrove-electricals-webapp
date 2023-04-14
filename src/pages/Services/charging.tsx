import * as React from 'react';
import { Button, createTheme, ThemeProvider } from '@mui/material';
import { ServicesPage } from '../../components/ServicesPage/servicesPage';
import pagesData from "../../pages.json";
import { theme } from '../../theme/theme';

const service = pagesData.services


const Charging = () => {

    return (
        <div>
            <ThemeProvider theme={theme}>
            <ServicesPage heading={service.charging.header} content={service.charging.content}>
            <Button href="/services" color="primary">All Services</Button>
            </ServicesPage>
            </ThemeProvider>
        </div>
    );
};

export default Charging;