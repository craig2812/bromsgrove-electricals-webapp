import * as React from 'react';
import {NavBar} from '../../components/NavBar/navbar';
import { ServicesPage } from '../../components/ServicesPage/servicesPage';
import pagesData from "../../pages.json";


const service = pagesData.services

const Charging = () => {

    return (
        <div>
            <ServicesPage heading={service.charging.header} content={service.charging.content}/>
        </div>
    );
};

export default Charging;