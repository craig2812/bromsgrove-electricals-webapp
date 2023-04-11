import * as React from 'react';
import './services.css';
import Charging from './charging'
import Commercial from './commerical';
import Domestic from './domestic';
import Testing from './testing';
import pageData from "../../pages.json";
import { ServicesPage } from '../../components/ServicesPage/servicesPage';


const Services = () => {
    return (
        <div>
            <ServicesPage heading={pageData.services.services.header} content={pageData.services.services.content}>
            <Charging />
            <Commercial />
            <Domestic />
            <Testing />
            </ServicesPage>
        </div>
    );
};

export default Services;