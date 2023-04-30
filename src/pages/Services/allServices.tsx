import * as React from 'react';
import './services.css';
import pageData from "../../pages.json";
import { ServicesPage } from '../../components/ServicesPage/servicesPage';
import {backdropItem} from '../../components/Backdrop/backdrop'

const Services = () => {

    return (
        <div>

            <ServicesPage heading={pageData.services.services.header} content={pageData.services.services.content}>
                {backdropItem(<ServicesPage heading={pageData.services.charging.header} content={pageData.services.charging.content}/>, "Charging")}
                {backdropItem(<ServicesPage heading={pageData.services.domestic.header} content={pageData.services.domestic.content} />, "Domestic")}
                {backdropItem(<ServicesPage heading={pageData.services.testing.header} content={pageData.services.testing.content}/>, "Testing")}
                {backdropItem(<ServicesPage heading={pageData.services.commercial.header} content={pageData.services.commercial.content}/>, "Commercial")}
            </ServicesPage>

        </div>
    );
};

export default Services;