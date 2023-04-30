import * as React from 'react';
import pagesData from "../../pages.json";
import { ServicesPage } from '../../components/ServicesPage/servicesPage';
import { Button } from '@mui/material';

const service = pagesData.services

const Domestic = () => {

    return (
        <div>
            <ServicesPage heading={service.domestic.header} content={service.domestic.content}>
            <Button href="/services" color="primary">All Services</Button>

            </ServicesPage>
        </div>
    );
};
export default Domestic;