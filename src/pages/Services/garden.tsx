import * as React from 'react';
import { Button, createTheme, ThemeProvider } from '@mui/material';
import { theme } from '../../theme/theme';

import { ServicesPage } from '../../components/ServicesPage/servicesPage';
import pagesData from "../../pages.json";
import { ServicesButton } from '../../components/Buttons/servicesButton';

const service = pagesData.services


const Garden = () => {

    return (
        <div>
            <ThemeProvider theme={theme}>
            <ServicesPage heading={"Garden"} content={service.charging.content}>
            <ServicesButton />
            </ServicesPage>
            </ThemeProvider>
        </div>
    );
};

export default Garden;