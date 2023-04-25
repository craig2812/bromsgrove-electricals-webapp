import * as React from 'react';
import { Button, createTheme, ThemeProvider } from '@mui/material';
import { theme } from '../../theme/theme';

import { ServicesPage } from '../../components/ServicesPage/servicesPage';
import pagesData from "../../pages.json";

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