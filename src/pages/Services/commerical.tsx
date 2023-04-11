import * as React from 'react';
import {NavBar} from '../../components/NavBar/navbar';
import {ServicesPage} from '../../components/ServicesPage/servicesPage';
import pagesData from "../../pages.json";


const service = pagesData.services

const Commercial = () => {

    return (
        <div>
            <ServicesPage heading={service.commercial.header} content={service.commercial.content}/>
        </div>
    );
};

export default Commercial;