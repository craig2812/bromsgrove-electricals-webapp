import { Button, ThemeProvider } from '@mui/material';
import * as React from 'react';
import { ServicesButton } from '../../components/Buttons/servicesButton';
import {ServicesPage} from '../../components/ServicesPage/servicesPage';
import pagesData from "../../pages.json";
import { theme } from '../../theme/theme';


const service = pagesData.services

const Commercial = () => {

    return (
        <div>
            <ThemeProvider theme={theme}>
            <ServicesPage heading={service.commercial.header} content={service.commercial.content}>
            <ServicesButton />
            </ServicesPage>
            </ThemeProvider>
        </div>
    );
};

export default Commercial;