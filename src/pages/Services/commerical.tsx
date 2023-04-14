import { Button } from '@mui/material';
import * as React from 'react';
import {ServicesPage} from '../../components/ServicesPage/servicesPage';
import pagesData from "../../pages.json";


const service = pagesData.services

const Commercial = () => {

    return (
        <div>
            <ServicesPage heading={service.commercial.header} content={service.commercial.content}>
            </ServicesPage>
        </div>
    );
};

export default Commercial;