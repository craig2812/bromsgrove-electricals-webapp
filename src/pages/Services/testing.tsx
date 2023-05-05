import * as React from 'react';

import pagesData from "../../pages.json";
import { ServicesPage } from '../../components/ServicesPage/servicesPage';
import { Button, ThemeProvider } from '@mui/material';
import { theme } from '../../theme/theme';
import { ServicesButton } from '../../components/Buttons/servicesButton';

const service = pagesData.services

const Testing = () => {

    return (
        <div>
            <ThemeProvider theme={theme}>
            <ServicesPage heading={service.testing.header} content={service.testing.content}>
            <ServicesButton />
            </ServicesPage>
            </ThemeProvider>
        </div>
    );
};

export default Testing;