import * as React from 'react';
import pagesData from "../../pages.json";
import { ServicesPage } from '../../components/ServicesPage/servicesPage';
import { Button, ThemeProvider } from '@mui/material';
import { theme } from '../../theme/theme';
import { ServicesButton } from '../../components/Buttons/servicesButton';

const service = pagesData.services

const Domestic = () => {

    return (
        <div>
            <ThemeProvider theme={theme}>
            <ServicesPage heading={service.domestic.header} content={service.domestic.content}>
            <ServicesButton />
            </ServicesPage>
            </ThemeProvider>
        </div>
    );
};
export default Domestic;