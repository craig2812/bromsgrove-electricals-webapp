import * as React from 'react';

import pagesData from "../../pages.json";
import { ServicesPage } from '../../components/ServicesPage/servicesPage';
import { Button } from '@mui/material';

const service = pagesData.services

const Testing = () => {

    return (
        <div>
            <ServicesPage heading={service.testing.header} content={service.testing.content}>
            <Button href="/services" color="primary">All Services</Button>
            </ServicesPage>
        </div>
    );
};

export default Testing;