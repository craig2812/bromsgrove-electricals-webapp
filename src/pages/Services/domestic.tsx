import * as React from 'react';
import pagesData from "../../pages.json";
import { ServicesPage } from '../../components/ServicesPage/servicesPage';

const service = pagesData.services

const Domestic = () => {

    return (
        <div>
            <ServicesPage heading={service.domestic.header} content={service.domestic.content}/>
        </div>
    );
};
export default Domestic;