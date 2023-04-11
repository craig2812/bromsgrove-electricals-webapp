import * as React from 'react';

import pagesData from "../../pages.json";
import { ServicesPage } from '../../components/ServicesPage/servicesPage';

const service = pagesData.services

const Testing = () => {

    return (
        <div>
            <ServicesPage heading={service.testing.header} content={service.testing.content}/>
        </div>
    );
};

export default Testing;