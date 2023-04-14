import * as React from 'react';
import './services.css';
import Charging from './charging'
import Commercial from './commerical';
import Domestic from './domestic';
import Testing from './testing';
import pageData from "../../pages.json";
import { ServicesPage } from '../../components/ServicesPage/servicesPage';
import {backdropItem} from '../../components/Backdrop/backdrop'

const Services = () => {

    return (
        <div>

            <ServicesPage heading={pageData.services.services.header} content={pageData.services.services.content}>
                {backdropItem(<ServicesPage heading={pageData.services.charging.header} content={pageData.services.charging.content}/>, "Charging")}
                {backdropItem(<Domestic />, "Domestic")}
                {backdropItem(<Testing />, "Testing")}
                {backdropItem(<Commercial/>, "Commercial")}
            </ServicesPage>

        </div>
    );
};

export default Services;